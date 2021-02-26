import React from 'react';
import { Layout, Tooltip } from 'antd';
const { Header, Footer, Content } = Layout;
// import { history } from 'umi';
import { Button, Menu, Dropdown } from 'antd';
import intl from 'react-intl-universal';
import { openNotificationWithIcon, ethChainNameMap } from '../components/tools';
import detectEthereumProvider from '@metamask/detect-provider';
import 'antd/dist/antd.css';
import { Nav, DropMenu } from '../components/nav';
import MobileNav from '../components/mobileNav';
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
    this.handleAccountChanged = this.handleAccountChanged.bind(this);
  }

  componentDidMount() {
    setTimeout(this.checkMetaMaskStatus, 1000);
    this.loadLocales();
  }

  loadLocales = (lang = 'en-US') => {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang) {
      if (userLang === 'zh') {
        lang = 'zh-CN';
      }
    }
    let cacheLang = localStorage.getItem('lang');
    if (cacheLang) {
      lang = cacheLang;
    }
    intl
      .init({
        currentLocale: lang, // TODO: determine locale here
        locales,
      })
      .then(() => {
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
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    this.setState({ showConnectModal: false });
    this.setCurrentAccount(accounts[0]);
  }

  showConnectModal() {
    this.setState({ showConnectModal: true });
  }

  closeConnectModal() {
    this.setState({ showConnectModal: false });
  }

  async checkMetaMaskStatus() {
    const provider = await detectEthereumProvider();
    if (provider === window.ethereum) {
      console.log('MetaMask is installed!');
      this.setState({ metamaskInstalled: true });
      this.checkEthNetworkType();
      this.ethChainChanged();
      this.accountChanged();
    } else {
      const message = intl.get('NeedMetaMaskTips');
      openNotificationWithIcon(
        intl.get('MetaMaskIsNotInstalled'),
        message,
        'warning',
      );
    }
  }

  ethChainChanged() {
    window.ethereum.on('chainChanged', chainId => {
      openNotificationWithIcon(
        intl.get('ETHNetworkChanged'),
        intl.get('PageWillRefresh'),
        'warning',
        4.5,
      );
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

  handleAccountChanged(accounts) {
    let { account } = this.state;
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      // console.log('Please connect to MetaMask.');
      openNotificationWithIcon(
        intl.get('MetamaskAccountChanged'),
        intl.get('PleaseConnectToMetaMask'),
        'warning',
        4.5,
      );
      window.location.reload();
    } else if (accounts[0] !== account) {
      this.setCurrentAccount(accounts[0]);
    }
  }

  accountChanged() {
    // window.ethereum.on('accountsChanged', accounts => {
    //   this.handleAccountChanged(accounts);
    // });
    window.ethereum.on('accountsChanged', function(accounts) {
      openNotificationWithIcon(
        intl.get('MetamaskAccountChanged'),
        intl.get('PageWillRefresh'),
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
        intl.get('ETHNetworkError'),
        `${intl.get('PleaseChangeMetamaskTo')} ${
          ethChainNameMap[ETH_CHAIN_ID]
        } ${intl.get('Network')}`,
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

  langChangeTo = lang => {
    localStorage.setItem('lang', lang);
    this.loadLocales(lang);
  };

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
      mediumLogo,
    } = this.state;

    let lang = intl.options.currentLocale;

    const canConnectWallet =
      account === '' && metamaskInstalled && ethNetwork == ETH_CHAIN_ID;
    const scanLink = `${ETHERSCAN}/address/${account}`;
    return (
      this.state.initDone && (
        <Layout className="suterProtocol">
          <Header>
            <div className="head-top">
              <Nav intl={intl} indexURL="/app" currentNav="/" />
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
              <div className="mobileNavContainer">
                <MobileNav intl={intl} currentNav="/" />
              </div>
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
            {account === '' || coinType === '' ? (
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
