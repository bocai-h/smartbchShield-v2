import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
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

class Portal extends Component {
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

  langChangeTo = (lang: string) => {
    localStorage.setItem('lang', lang);
    this.loadLocales(lang);
  };

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

  lightFooterLogo = (ctype: string) => {
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

  footerLogo = (ctype: string) => {
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

  componentDidMount() {
    this.loadLocales();
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
      mediumLogo,
    } = this.state;

    let lang = intl.options.currentLocale;

    const menu1 = (
      <Menu>
        <Menu.Item key={`q&a`}>
          <a target="_blank" rel="noopener noreferrer" href="/qa">
            {intl.get('Q&A')}
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
              {intl.get('CheckTutorial')}
            </a>
          </Menu.Item>
          <Menu.Item key="q&a">
            <a target="_blank" rel="noopener noreferrer" href="/qa">
              {intl.get('Q&A')}
            </a>
          </Menu.Item>
          <Menu.Item key="privacyTips">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/suterusu/privacy-tips-for-suterusu-shield-user-96496bb81447"
            >
              {intl.get('PrivacyTips')}
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
      <Layout className="suterProtocol portal">
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
              </ul>
            </div>
          </div>
          {
            <div className="header-btn">
              <Button className="connectWalletBtn" shape="round">
                {`Launch App`}
              </Button>
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
          }
        </Header>
        <Content>
          <div className="portal-body">
            <div className="portal-section">
              <div className="flex-item">
                <div className="slogan">
                  Anonymous PayPal for Cryptocurrency
                </div>
                <div className="description">
                  Suter Shield allows the users to enjoy the amazing private
                  payment functionality provided by the Suterusu protocol. The
                  Suterusu protocol is built upon our original ZK-ConSNARK
                  technology, which strikes a perfect balance between
                  performance and security.
                </div>
                <Button className="connectWalletBtn" shape="round" size="large">
                  Transfer Anonymous
                </Button>
              </div>
              <div className="flex-item">
                <img src={require('../static/slogan.svg')} alt="slogan" />
              </div>
            </div>
            <div className="portal-section">
              <div className="section-title">How Suter Shield works</div>
              <div className="flex-item-wrapper">
                <div className="flex-item">
                  <div className="image-wrapper">
                    <div className="text">Register</div>
                    <img
                      src={require('../static/section-register.svg')}
                      alt="Register"
                    />
                  </div>
                  <div className="description">
                    The user can register a new Suter account by input a random
                    private key. The system will generate a public key from this
                    private key, which will used to identify the newly created
                    Suter account.
                  </div>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <div className="text">Fund</div>
                    <img
                      src={require('../static/section-fund.svg')}
                      alt="Register"
                    />
                  </div>
                  <div className="description">
                    The user invokes the fund module and converts ETH or ERC-20
                    to Suter-ETH or Suter-ERC-20 token. The converted token will
                    be added to the new account using homomorphic public-key
                    encryption. The native token will be sent to the fund
                    contract, which would be like a stream of water entering an
                    ocean.
                  </div>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <div className="text">Transfer</div>
                    <img
                      src={require('../static/section-transfer.svg')}
                      alt="Register"
                    />
                  </div>
                  <div className="description">
                    The user can then select a receiver Suter account to send
                    the converted token. This receiver Suter account can be
                    either generated by himself or sent from the others. The
                    transfer of the converted token will be anonymous and
                    confidential since we will invoke the ZK-ConSNARK technique
                    to guarantee the Suter account anonymity and the
                    confidentiality of the transferred amount.
                  </div>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <div className="text">Burn</div>
                    <img
                      src={require('../static/section-burn.svg')}
                      alt="Register"
                    />
                  </div>
                  <div className="description">
                    The user can then invoke the burn module and convert the
                    Suter-token back to its original form. As long as the user
                    uses a different Ethereum account to invoke this module from
                    the fund module, the connection between the funded token and
                    the burned token is severed.{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className="portal-section">
              <div className="flex-item">
                <img src={require('../static/slogan1.svg')} alt="slogan" />
              </div>
              <div className="flex-item">
                <div className="slogan">
                  Why Suter Shield has better Privacy Protection
                </div>
                <div className="description">
                  The connection between Suter account and Ethereum address is
                  severed due to the existence of the fund contract. When the
                  attacker traces the payment records of Ethereum , it would be
                  like tracing the direction of a small stream of water, you
                  cannot predict where the stream goes when it reaches the
                  ocean.
                  <div className="cutline"></div>
                  The miners might still be able to observe the payment records
                  between different Suter accounts when they verify the
                  transactions. Homomorphic public key encryption is adopted to
                  ensure the transferred amount confidentiality. We apply
                  zero-knowledge proof to guarantee the anonymities of the Suter
                  accounts.
                </div>
              </div>
            </div>
            <div className="portal-section">
              <div className="flex-item">
                <div className="card-item">
                  <div className="amount">$12312.12</div>
                  <div className="title">Total Fund</div>
                  <div className="subtitle">subtite here</div>
                </div>
              </div>
              <div className="flex-item">
                <div className="card-item">
                  <div className="amount">$12312.12</div>
                  <div className="title">Total Count</div>
                  <div className="subtitle">subtite here</div>
                </div>
              </div>
              <div className="flex-item">
                <div className="card-item">
                  <div className="amount">$12312.12</div>
                  <div className="title">Fee Pool</div>
                  <div className="subtitle">subtite here</div>
                </div>
              </div>
              <div className="flex-item">
                <div className="card-item">
                  <div className="amount">$12312.12</div>
                  <div className="title">Total Fund</div>
                  <div className="subtitle">subtite here</div>
                </div>
              </div>
            </div>
          </div>
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
    );
  }
}

export default Portal;
