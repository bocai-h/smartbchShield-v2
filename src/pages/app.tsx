import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import { Button } from 'antd';
import intl from 'react-intl-universal';
import { openNotificationWithIcon, ethChainNameMap } from '../components/tools';
import detectEthereumProvider from '@metamask/detect-provider';
import { Nav } from '../components/nav';
import MobileNav from '../components/mobileNav';
import 'antd/dist/antd.css';
import twitter from '../static/twitter.svg';
import telegram from '../static/telegram.svg';
import medium from '../static/medium.svg';
import twitterLight from '../static/twitter_light.svg';
import telegramLight from '../static/telegram_light.svg';
import mediumLight from '../static/medium_light.svg';
import Home from '../components/home';
import Form from '../components/form';
import ConnectModal from '../components/connectModal';

import { Sentry } from 'umi';

import axios from 'axios';

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
    this.loadLocales = this.loadLocales.bind(this);
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

    this.requestBlockChain = this.requestBlockChain.bind(this);
    this.requestSuterInfo = this.requestSuterInfo.bind(this);
  }

  async componentDidMount() {
    await this.requestBlockChain();
    await this.requestSuterInfo();

    await this.loadLocales();

    await this.checkMetaMaskStatus();
  }

  loadLocales = async (lang = 'en-US') => {
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

  async requestBlockChain() {
    try {
      let response = await axios.get(
        `/${ShieldApi}/public_api/suter_shield_blockchain.json?blockchain_type=${CHAIN_NAME}`,
      );

      if (response.status == 200) {
        (window as any)['blockchain'] = response.data.blockchain;
      } else {
        openNotificationWithIcon(
          'suter_shield_blockchain Api Error',
          'Fetch suter_shield_blockchain error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      openNotificationWithIcon(
        'Network Error',
        'Fetch suter_shield_blockchain error',
        'warning',
        4.5,
      );
      Sentry.captureException(error);
    }
  }

  async requestSuterInfo() {
    try {
      let response = await axios.get(
        `/${ShieldApi}/public_api/suter_info.json?blockchain_type=${CHAIN_NAME}`,
      );
      if (response.status == 200) {
        (window as any)['suterInfo'] = response.data;
      } else {
        openNotificationWithIcon(
          'suterInfo Api Error',
          'Fetch suterInfo error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      openNotificationWithIcon(
        'Network Error',
        'Fetch suterInfo error',
        'warning',
        4.5,
      );
      Sentry.captureException(error);
    }
  }

  setCurrentAccount = (account: string) => {
    const connectWalletTxt = account.slice(0, 7) + '...' + account.slice(-5);

    this.setState({
      account,
      connectWalletTxt,
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

  // 添加FTM
  async addFTM() {
    // FTM链添加信息
    const params = [
      {
        nativeCurrency: {
          name: 'FTM',
          symbol: 'FTM',
          decimals: 18,
        },
        chainName: 'Fantom Chain',
        rpcUrls: [window.blockchain.jrpc],
        chainId: window.blockchain.chain_id,
        blockExplorerUrls: [window.blockchain.scan_url],
      },
    ];

    try {
      // 请求添加并选择
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params,
      });
    } catch (err) {
      openNotificationWithIcon(
        intl.get('NetworkError'),
        `${intl.get('PleaseChangeMetamaskTo')} ${
          ethChainNameMap[window.blockchain.chain_id]
        } ${intl.get('Network')}`,
        'warning',
        4.5,
      );
      Sentry.captureException(err);
    }
  }

  handleAccountChanged(accounts) {
    let { account } = this.state;
    if (accounts.length === 0) {
      openNotificationWithIcon(
        intl.get('MetamaskAccountChanged'),
        intl.get('PleaseConnectToMetaMask'),
        'warning',
        4.5,
      );

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else if (accounts[0] !== account) {
      this.setCurrentAccount(accounts[0]);
    }
  }

  accountChanged() {
    window.ethereum.on('accountsChanged', accounts => {
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
    if (
      window.ethereum &&
      window.ethereum.chainId != window.blockchain.chain_id
    ) {
      this.addFTM();
      openNotificationWithIcon(
        intl.get('ETHNetworkError'),
        `${intl.get('PleaseChangeMetamaskTo')} ${
          ethChainNameMap[window.blockchain.chain_id]
        } ${intl.get('Network')}`,
        'warning',
        4.5,
      );
    } else {
      this.connectMetaMask();
    }
  }

  selectCoin(coinType) {
    this.setState({ coinType });
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

      initDone,
    } = this.state;

    let lang = intl.options.currentLocale;

    return (
      initDone && (
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
                  disabled={
                    !(
                      account === '' &&
                      metamaskInstalled &&
                      ethNetwork == window.blockchain.chain_id
                    )
                  }
                >
                  {intl.get(connectWalletTxt)}
                </Button>
              ) : (
                <a
                  href={`${window.blockchain.scan_url}/address/${account}`}
                  target="_blank"
                >
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
