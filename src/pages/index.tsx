import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import { Button, Menu, Dropdown } from 'antd';
import intl from 'react-intl-universal';
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
        <Menu.Item key="transfer">
          <a target="_blank" rel="noopener noreferrer" href="/transfer">
            {intl.get('Transfer')}
          </a>
        </Menu.Item>
        <Menu.Item key="mining">
          <a target="_blank" rel="noopener noreferrer" href="/mining">
            {intl.get('Mining')}
          </a>
        </Menu.Item>
        <Menu.Item key="tutorial">
          <a target="_blank" rel="noopener noreferrer" href="/tutorial">
            {intl.get('Tutorial')}
          </a>
        </Menu.Item>
        <Menu.Item key="info">
          <a target="_blank" rel="noopener noreferrer" href="/info">
            {intl.get('Info')}
          </a>
        </Menu.Item>
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
                  <a href="/transfer" target="_blank">
                    {intl.get('Transfer')}
                  </a>
                </li>
                <li>
                  <a href="/mining" target="_blank">
                    {intl.get('Mining')}
                  </a>
                </li>
                <li>
                  <a href="/tutorial" target="_blank">
                    {intl.get('Tutorial')}
                  </a>
                </li>
                <li>
                  <a href="/info" target="_blank">
                    {intl.get('Info')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {
            <div className="header-btn">
              <Button className="connectWalletBtn" shape="round">
                <a href="/launch">{intl.get('LaunchApp')}</a>
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
                <div className="slogan">{intl.get('Slogan1')}</div>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: intl.get('SloganDescription'),
                  }}
                ></div>
                <Button className="connectWalletBtn" shape="round" size="large">
                  {intl.get('TransferAnonymous')}
                </Button>
              </div>
              <div className="flex-item">
                <img src={require('../static/slogan.svg')} alt="slogan" />
              </div>
            </div>
            <div className="portal-section">
              <div
                className="section-title"
                dangerouslySetInnerHTML={{ __html: intl.get('Slogan2') }}
              ></div>
              <div className="flex-item-wrapper">
                <div className="flex-item">
                  <div className="image-wrapper">
                    <div className="text">{intl.get('Register')}</div>
                    <img
                      src={require('../static/section-register.svg')}
                      alt="Register"
                    />
                  </div>
                  <div className="description">
                    {intl.get('RegisterDescription')}
                  </div>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <div className="text">{intl.get('Fund')}</div>
                    <img
                      src={require('../static/section-fund.svg')}
                      alt="Register"
                    />
                  </div>
                  <div className="description">
                    {intl.get('FundDescription')}
                  </div>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <div className="text">{intl.get('Transfer')}</div>
                    <img
                      src={require('../static/section-transfer.svg')}
                      alt="Register"
                    />
                  </div>
                  <div className="description">
                    {intl.get('TransferDescription')}
                  </div>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <div className="text">{intl.get('Burn')}</div>
                    <img
                      src={require('../static/section-burn.svg')}
                      alt="Register"
                    />
                  </div>
                  <div className="description">
                    {intl.get('BurnDescription')}
                  </div>
                </div>
              </div>
            </div>
            <div className="portal-section">
              <div className="flex-item">
                <img src={require('../static/slogan1.svg')} alt="slogan" />
              </div>
              <div className="flex-item">
                <div
                  className="slogan"
                  dangerouslySetInnerHTML={{ __html: intl.get('Slogan3') }}
                ></div>
                <div className="description">
                  {intl.get('Slogan3Description1')}
                  <div className="cutline"></div>
                  {intl.get('Slogan3Description2')}
                </div>
              </div>
            </div>
            <div className="portal-section">
              <div className="flex-item">
                <div className="card-item">
                  <div className="amount">$12312.12</div>
                  <div className="title">{intl.get('TotalFund')}</div>
                  <div className="subtitle">subtite here</div>
                </div>
              </div>
              <div className="flex-item">
                <div className="card-item">
                  <div className="amount">$12312.12</div>
                  <div className="title">{intl.get('UsageCount')}</div>
                  <div className="subtitle">subtite here</div>
                </div>
              </div>
              <div className="flex-item">
                <div className="card-item">
                  <div className="amount">$12312.12</div>
                  <div className="title">{intl.get('FeePool')}</div>
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
