import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
// import { history } from 'umi';
import { Button, Menu, Dropdown } from 'antd';
import intl from 'react-intl-universal';
import { openNotificationWithIcon, ethChainNameMap } from '../components/tools';
import 'antd/dist/antd.css';
import Logo from '../static/suterShield.svg';
import mLogo from '../static/logo.svg';
import twitter from '../static/twitter.svg';
import telegram from '../static/telegram.svg';
import medium from '../static/medium.svg';
import twitterLight from '../static/twitter_light.svg';
import telegramLight from '../static/telegram_light.svg';
import mediumLight from '../static/medium_light.svg';
import { MenuOutlined } from '@ant-design/icons';

import Home from '../components/home';
import Form from '../components/form';
import ConnectModal from '../components/connectModal';

const locales = {
  'en-US': require('../locales/en_US'),
  'zh-CN': require('../locales/zh_CN'),
};

class SuterProtocol extends React.Component {
  state = {
    metamaskInstalled: false,
    account: '',
    connectWalletTxt: 'ConnectWallet',
    web3Browser: false,
    ethNetwork: '',
    showConnectModal: false,
    coinType: '',
    initDone: false,
    twitterLogo: twitter,
    telegramLogo: telegram,
    mediumLogo: medium,
  };

  constructor(props) {
    super(props);
    this.checkMetaMaskStatus = this.checkMetaMaskStatus.bind(this);
    this.setCurrentAccount = this.setCurrentAccount.bind(this);
    this.connectMetaMask = this.connectMetaMask.bind(this);
    this.checkEthNetworkType = this.checkEthNetworkType.bind(this);
    this.showConnectModal = this.showConnectModal.bind(this);
    this.selectCoin = this.selectCoin.bind(this);
    this.closeConnectModal = this.closeConnectModal.bind(this);
    this.cancelSelectCoin = this.cancelSelectCoin.bind(this);
    this.lightFooterLogo = this.lightFooterLogo.bind(this);
    this.footerLogo = this.footerLogo.bind(this);
  }

  componentDidMount() {
    setTimeout(this.checkMetaMaskStatus, 1000);
    this.loadLocales();
  }

  loadLocales = (lang = 'en-US') => {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    var userLang = navigator.language || navigator.userLanguage; 
    if(userLang) {
      if(userLang === "zh") {
        lang = "zh-CN";
      }
    }
    let cacheLang = localStorage.getItem('lang');
    if(cacheLang) {
      lang = cacheLang;
    }
    intl
      .init({
        currentLocale: lang, // TODO: determine locale here
        locales,
      })
      .then(() => {
        console.log(this);
        // After loading CLDR locale data, start to render
        this.setState({ initDone: true });
      });
  };

  setCurrentAccount = (account: string) => {
    const connectWalletTxt = account.slice(0, 7) + '...' + account.slice(-5);
    this.setState({
      account: account,
      connectWalletTxt: connectWalletTxt,
    });
  };

  async connectMetaMask() {
    // Will trigger accountsChanged event when refresh page
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    this.setState({ showConnectModal: false });
    this.setCurrentAccount(accounts[0]);
  }

  showConnectModal() {
    this.setState({ showConnectModal: true });
  }
  closeConnectModal() {
    this.setState({ showConnectModal: false });
  }

  checkMetaMaskStatus() {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      this.setState({ metamaskInstalled: true });
      this.checkEthNetworkType();
      this.ethChainChanged();
      this.accountChanged();
    } else {
      const message =
        intl.get("NeedMetaMaskTips");
      openNotificationWithIcon(
        intl.get("MetaMaskIsNotInstalled"),
        message,
        'warning',
      );
    }
  }

  ethChainChanged() {
    window.ethereum.on('chainChanged', chainId => {
      openNotificationWithIcon(
        intl.get("ETHNetworkChanged"),
        intl.get("PageWillRefresh"),
        'warning',
        4.5,
      );
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

  accountChanged() {
    window.ethereum.on('accountsChanged', function(accounts) {
      openNotificationWithIcon(
        intl.get("MetamaskAccountChanged"),
        intl.get("PageWillRefresh"),
        'warning',
        4.5,
      );
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

  checkEthNetworkType() {
    this.setState({ ethNetwork: window.ethereum.chainId });
    if (window.ethereum && window.ethereum.chainId != ETH_CHAIN_ID) {
      openNotificationWithIcon(
        intl.get("ETHNetworkError"),
        `${intl.get("PleaseChangeMetamaskTo")} ${ethChainNameMap[ETH_CHAIN_ID]} ${intl.get("Network")}`,
        'warning',
        4.5,
      );
    } else {
      this.connectMetaMask();
    }
  }

  selectCoin(coinType) {
    this.setState({ coinType: coinType });
  }
  cancelSelectCoin() {
    this.setState({ coinType: '' });
  }

  lightFooterLogo = ctype => {
    if (ctype === 'twitter') {
      this.setState({ twitterLogo: twitterLight });
    }
    if (ctype === 'telegram') {
      this.setState({ telegramLogo: telegramLight });
    }
    if (ctype === 'medium') {
      this.setState({ mediumLogo: mediumLight });
    }
  };

  footerLogo = ctype => {
    if (ctype === 'twitter') {
      this.setState({ twitterLogo: twitter });
    }
    if (ctype === 'telegram') {
      this.setState({ telegramLogo: telegram });
    }
    if (ctype === 'medium') {
      this.setState({ mediumLogo: medium });
    }
  };
  langChangeTo = (lang) => {
    this.loadLocales(lang)
    localStorage.setItem('lang', lang);
  }
  render() {
    const {
      connectWalletTxt,
      account,
      metamaskInstalled,
      ethNetwork,
      showConnectModal,
      coinType,
      twitterLogo,
      telegramLogo,
      mediumLogo
    } = this.state;
    let lang = intl.options.currentLocale;

    const canConnectWallet =
      account === '' && metamaskInstalled && ethNetwork == ETH_CHAIN_ID;
    const scanLink = `${ETHERSCAN}/address/${account}`;
    const menu = (
      <Menu>
        <Menu.Item key="tutorial">
          <a target="_blank" rel="noopener noreferrer" href="/tutorial">
            {intl.get('CheckTutorial')}
          </a>
        </Menu.Item>
        <Menu.Item key="q&a">
          <a target="_blank" rel="noopener noreferrer" href="/qa">
            {intl.get('Q&A')}
          </a>
        </Menu.Item>
        <Menu.Item key="privacyTips">
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/suterusu/privacy-tips-for-suterusu-shield-user-96496bb81447">
          { intl.get("PrivacyTips") }
          </a>
        </Menu.Item>
        <Menu.Item key="about">
          <a target="_blank" rel="noopener noreferrer" href="#">
            {intl.get('About')}
          </a>
        </Menu.Item>
      </Menu>
    );
    const menu1 = (
      <Menu>
        <Menu.Item key="q&a">
          <a target="_blank" rel="noopener noreferrer" href="/qa">
            { intl.get("Q&A") }
          </a>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <a target="_blank" rel="noopener noreferrer" href="/dashboard">
            {intl.get('Dashboard')}
          </a>
        </Menu.Item>
        <Menu.Item key="compliance">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/suterusu/regulation-compliance-of-suterusu-625abc752eb9"
          >
            {intl.get('Compliance')}
          </a>
        </Menu.Item>
        <Menu.ItemGroup title={intl.get('Resources')}>
          <Menu.Item key="tutotial">
            <a target="_blank" rel="noopener noreferrer" href="/tutotial">
              { intl.get("CheckTutorial") }
            </a>
          </Menu.Item>
          <Menu.Item key="q&a">
            <a target="_blank" rel="noopener noreferrer" href="/qa">
              {intl.get('Q&A')}
            </a>
          </Menu.Item>
          <Menu.Item key="privacyTips">
            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/suterusu/privacy-tips-for-suterusu-shield-user-96496bb81447">
              { intl.get("PrivacyTips") }
            </a>
          </Menu.Item>
          <Menu.Item key="about">
            <a target="_blank" rel="noopener noreferrer" href="#">
              {intl.get('About')}
            </a>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    );
    return (
      this.state.initDone && (
        <Layout className="suterProtocol">
          <Header>
            <div className="head-top">
              <div className="left">
                <a href="/">
                  <img src={Logo} className="logo pc" />
                  <img src={mLogo} className="logo mobbile" />
                </a>
                <ul className="item-ul">
                  <li>
                    <a href="/qa" target="_blank">
                      {intl.get('Q&A')}
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="/dashboard">
                      {intl.get('Dashboard')}
                     </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/suterusu/regulation-compliance-of-suterusu-625abc752eb9"
                    >
                      {intl.get('Compliance')}
                    </a>
                  </li>
                  <li>
                    <Dropdown
                      overlay={menu}
                      arrow
                      placement="bottomCenter"
                      // trigger={['click']}
                      onClick={e => e.preventDefault()}
                    >
                      <a className="a">{intl.get('Resources')}</a>
                    </Dropdown>
                  </li>
                </ul>
                {/* <div className="menuContainer">{menu}</div> */}
              </div>
            </div>
            <div className="header-btn">
              {account === '' ? (
                <Button
                  className="connectWalletBtn"
                  shape="round"
                  onClick={this.showConnectModal}
                  disabled={!canConnectWallet}
                >
                  {intl.get(connectWalletTxt)}
                </Button>
              ) : (
                <a href={scanLink} target="_blank">
                  <Button className="connectWalletBtn" shape="round">
                    <div className="successDot"></div>
                    {connectWalletTxt}
                  </Button>
                </a>
              )}
              <div className="top-btn">
                <i
                  onClick={() => this.langChangeTo('en-US')}
                  className={`${lang === 'en-US' ? 'active' : ''}`}
                >
                  EN
                </i>
                <i
                  className={`${lang === 'zh-CN' ? 'active' : ''}`}
                  onClick={() => this.langChangeTo('zh-CN')}
                >
                  中
                </i>
              </div>

              <Dropdown overlay={menu1} className="mobbile-MenuOutlined">
                <span onClick={e => e.preventDefault()}>
                  <MenuOutlined className="MenuOutlined" />
                </span>
              </Dropdown>
            </div>
          </Header>
          <Content>
            {showConnectModal ? (
              <ConnectModal
                connectMetaMask={this.connectMetaMask}
                closeConnectModal={this.closeConnectModal}
                intl={intl}
              />
            ) : (
              ''
            )}
            { (account === '' || coinType === '') ? (
              <Home
                account={account}
                selectCoin={this.selectCoin}
                checkQA={this.toggleQA}
                intl={intl}
              />
            ) : (
              <Form
                account={account}
                coinType={coinType}
                cancelSelectCoin={this.cancelSelectCoin}
                intl={intl}
              />
            )}
          </Content>
          <Footer>
            <a
              href="https://twitter.com/suterusu_io"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={twitterLogo}
                alt=""
                onMouseOver={() => this.lightFooterLogo('twitter')}
                onMouseOut={() => this.footerLogo('twitter')}
              />
            </a>
            <a href="https://t.me/suterusu_en" target="_blank" rel="noreferrer">
              <img
                src={telegramLogo}
                alt=""
                onMouseOver={() => this.lightFooterLogo('telegram')}
                onMouseOut={() => this.footerLogo('telegram')}
              />
            </a>
            <a
              href="https://suterusu.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mediumLogo}
                alt=""
                onMouseOver={() => this.lightFooterLogo('medium')}
                onMouseOut={() => this.footerLogo('medium')}
              />
            </a>
          </Footer>
        </Layout>
      )
    );
  }
}

export default SuterProtocol;
