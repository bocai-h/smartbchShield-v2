import React, { Component } from 'react';
import { Layout, Tooltip } from 'antd';
const { Header, Footer, Content } = Layout;
import { Button, Menu, Dropdown, Spin } from 'antd';
import { openNotificationWithIcon } from '../components/tools';
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
import axios from 'axios';
import Web3 from 'web3';

const Contract = require('web3-eth-contract');

const locales = {
  'en-US': require('../locales/en_US'),
  'zh-CN': require('../locales/zh_CN'),
};

class Portal extends Component {
  state = {
    twitterLogo: twitter,
    telegramLogo: telegram,
    mediumLogo: medium,
    totalFeesUSD: 0,
    totalUSDDeposited: 0,
    totalDeposits: 0,
    totalUsers: 0,
    suterPrice: 0,
    daiPrice: 0,
    ethPrice: 0,
    totalFeesUSDLoading: true,
    totalUSDDepositedLoading: true,
    totalDepositsLoading: true,
    totalUsersLoading: true,
  };

  async getETHPrice() {
    let ethPrice = 0;
    try {
      let response = await axios.get(
        'huobi_api/market/detail/merged?symbol=ethusdt',
      );
      if (response.status == 200) {
        let price = response.data.tick.bid[0];
        ethPrice = parseFloat(price);
      } else {
        openNotificationWithIcon(
          'Price Api Error',
          'Fetch ETH price error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      console.log(error);
      openNotificationWithIcon(
        'Network Error',
        'Fetch ETH price error',
        'warning',
        4.5,
      );
    }
    this.setState({ ethPrice: ethPrice });
  }

  async getDaiPrice() {
    let daiPrice = 0;
    try {
      let response = await axios.get(
        'huobi_api/market/detail/merged?symbol=daiusdt',
      );
      if (response.status == 200) {
        let price = response.data.tick.bid[0];
        daiPrice = parseFloat(price);
      } else {
        openNotificationWithIcon(
          'Price Api Error',
          'Fetch DAI price error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      console.log(error);
      openNotificationWithIcon(
        'Network Error',
        'Fetch DAI price error',
        'warning',
        4.5,
      );
    }
    this.setState({ daiPrice: daiPrice });
  }

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

  async componentDidMount() {
    this.loadLocales();
    await this.fetchSuterPrice();
    await this.getDaiPrice();
    await this.getETHPrice();

    await this.getTotalFeesUSD();
    await this.getTotalUSDDeposited();
    await this.totalDeposits();
    await this.getTotalUser();
  }

  async fetchSuterPrice() {
    let suterPrice = 0;
    try {
      let response = await axios.get(
        'kucoin_api/api/v1/market/orderbook/level1?symbol=SUTER-USDT',
      );
      if (response.status == 200) {
        let price = response.data.data.price;
        suterPrice = parseFloat(price);
      } else {
        openNotificationWithIcon(
          'Price Api Error',
          'Fetch suter price error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      console.log(error);
      openNotificationWithIcon(
        'Network Error',
        'Fetch suter price error',
        'warning',
        4.5,
      );
    }
    this.setState({ suterPrice: suterPrice });
  }

  async getETHPrice() {
    let ethPrice = 0;
    try {
      let response = await axios.get(
        'huobi_api/market/detail/merged?symbol=ethusdt',
      );
      if (response.status == 200) {
        let price = response.data.tick.bid[0];
        ethPrice = parseFloat(price);
      } else {
        openNotificationWithIcon(
          'Price Api Error',
          'Fetch ETH price error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      console.log(error);
      openNotificationWithIcon(
        'Network Error',
        'Fetch ETH price error',
        'warning',
        4.5,
      );
    }
    this.setState({ ethPrice: ethPrice });
  }

  async getDaiPrice() {
    let daiPrice = 0;
    try {
      let response = await axios.get(
        'huobi_api/market/detail/merged?symbol=daiusdt',
      );
      if (response.status == 200) {
        let price = response.data.tick.bid[0];
        daiPrice = parseFloat(price);
      } else {
        openNotificationWithIcon(
          'Price Api Error',
          'Fetch DAI price error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      console.log(error);
      openNotificationWithIcon(
        'Network Error',
        'Fetch DAI price error',
        'warning',
        4.5,
      );
    }
    this.setState({ daiPrice: daiPrice });
  }

  async getTotalUser() {
    let totalUsers = 0;
    let pools = [
      [
        CoinInfos['eth'].suterShiledContractAddress,
        CoinInfos['eth'].suterShiledContractABI,
      ],
      [
        CoinInfos['usdt'].suterShiledContractAddress,
        CoinInfos['usdt'].suterShiledContractABI,
      ],
      [
        CoinInfos['dai'].suterShiledContractAddress,
        CoinInfos['dai'].suterShiledContractABI,
      ],
      [
        CoinInfos['suter'].suterShiledContractAddress,
        CoinInfos['suter'].suterShiledContractABI,
      ],
    ];
    for (const item of pools) {
      var suterShieldContract = new Contract(item[1], item[0]);
      suterShieldContract.setProvider(
        new Web3.providers.HttpProvider(JSONRPC_URL),
      );
      let userAmount = await suterShieldContract.methods.totalUsers().call();
      totalUsers += parseInt(userAmount);
    }
    this.setState({ totalUsers: totalUsers, totalUsersLoading: false });
  }

  async totalDeposits() {
    let totalDepositCount = 0;
    let pools = [
      [
        CoinInfos['eth'].suterShiledContractAddress,
        CoinInfos['eth'].suterShiledContractABI,
      ],
      [
        CoinInfos['usdt'].suterShiledContractAddress,
        CoinInfos['usdt'].suterShiledContractABI,
      ],
      [
        CoinInfos['dai'].suterShiledContractAddress,
        CoinInfos['dai'].suterShiledContractABI,
      ],
      [
        CoinInfos['suter'].suterShiledContractAddress,
        CoinInfos['suter'].suterShiledContractABI,
      ],
    ];
    for (const item of pools) {
      var suterShieldContract = new Contract(item[1], item[0]);
      suterShieldContract.setProvider(
        new Web3.providers.HttpProvider(JSONRPC_URL),
      );
      let count = await suterShieldContract.methods.totalFundCount().call();
      totalDepositCount += parseInt(count);
    }
    this.setState({
      totalDeposits: totalDepositCount,
      totalDepositsLoading: false,
    });
  }

  async getTotalUSDDeposited() {
    let totalValue = 0;
    let pools = [
      [
        CoinInfos['eth'].suterShiledContractAddress,
        CoinInfos['eth'].suterShiledContractABI,
      ],
      [
        CoinInfos['usdt'].suterShiledContractAddress,
        CoinInfos['usdt'].suterShiledContractABI,
      ],
      [
        CoinInfos['dai'].suterShiledContractAddress,
        CoinInfos['dai'].suterShiledContractABI,
      ],
      [
        CoinInfos['suter'].suterShiledContractAddress,
        CoinInfos['suter'].suterShiledContractABI,
      ],
    ];
    for (const item of pools) {
      var suterShieldContract = new Contract(item[1], item[0]);
      suterShieldContract.setProvider(
        new Web3.providers.HttpProvider(JSONRPC_URL),
      );
      let amount = await suterShieldContract.methods.totalDeposits().call();
      if (item[0] === CoinInfos['eth'].suterShiledContractAddress) {
        let info = CoinInfos['eth'];
        totalValue +=
          ((amount * 1.0 * info.suterShieldUnit) / 10 ** info.decimal) *
          this.state.ethPrice;
      } else if (item[0] === CoinInfos['usdt'].suterShiledContractAddress) {
        let info = CoinInfos['usdt'];
        totalValue +=
          (amount * 1.0 * info.suterShieldUnit) / 10 ** info.decimal;
      } else if (item[0] === CoinInfos['dai'].suterShiledContractAddress) {
        let info = CoinInfos['dai'];
        totalValue +=
          ((amount * 1.0 * info.suterShieldUnit) / 10 ** info.decimal) *
          this.state.daiPrice;
      } else if (item[0] === CoinInfos['suter'].suterShiledContractAddress) {
        let info = CoinInfos['suter'];
        totalValue +=
          ((amount * 1.0 * info.suterShieldUnit) / 10 ** info.decimal) *
          this.state.suterPrice;
      }
    }
    this.setState({
      totalUSDDeposited: totalValue,
      totalUSDDepositedLoading: false,
    });
  }

  async getTotalFeesUSD() {
    let totalFeesValue = 0;
    let pools = [
      [
        CoinInfos['eth'].suterShiledContractAddress,
        CoinInfos['eth'].suterShiledContractABI,
      ],
      [
        CoinInfos['usdt'].suterShiledContractAddress,
        CoinInfos['usdt'].suterShiledContractABI,
      ],
      [
        CoinInfos['dai'].suterShiledContractAddress,
        CoinInfos['dai'].suterShiledContractABI,
      ],
      [
        CoinInfos['suter'].suterShiledContractAddress,
        CoinInfos['suter'].suterShiledContractABI,
      ],
    ];
    for (const item of pools) {
      var suterShieldContract = new Contract(item[1], item[0]);
      suterShieldContract.setProvider(
        new Web3.providers.HttpProvider(JSONRPC_URL),
      );
      let burnFee = await suterShieldContract.methods.totalBurnFee().call();
      let transferFee = await suterShieldContract.methods
        .totalTransferFee()
        .call();
      let ethInfo = CoinInfos['eth'];
      if (item[0] === CoinInfos['eth'].suterShiledContractAddress) {
        totalFeesValue +=
          ((burnFee * 1.0) / 10 ** ethInfo.decimal) * this.state.ethPrice;
        totalFeesValue +=
          ((transferFee * 1.0) / 10 ** ethInfo.decimal) * this.state.ethPrice;
      } else if (item[0] === CoinInfos['usdt'].suterShiledContractAddress) {
        let info = CoinInfos['usdt'];
        totalFeesValue += (burnFee * 1.0) / 10 ** info.decimal;
        totalFeesValue +=
          ((transferFee * 1.0) / 10 ** ethInfo.decimal) * this.state.ethPrice;
      } else if (item[0] === CoinInfos['dai'].suterShiledContractAddress) {
        let info = CoinInfos['dai'];
        totalFeesValue +=
          ((burnFee * 1.0) / 10 ** info.decimal) * this.state.daiPrice;
        totalFeesValue +=
          ((transferFee * 1.0) / 10 ** ethInfo.decimal) * this.state.ethPrice;
      } else if (item[0] === CoinInfos['suter'].suterShiledContractAddress) {
        let info = CoinInfos['suter'];
        totalFeesValue +=
          ((burnFee * 1.0) / 10 ** info.decimal) * this.state.suterPrice;
        totalFeesValue +=
          ((transferFee * 1.0) / 10 ** ethInfo.decimal) * this.state.ethPrice;
      }
    }
    this.setState({ totalFeesUSD: totalFeesValue, totalFeesUSDLoading: false });
  }

  render() {
    const {
      twitterLogo,
      telegramLogo,
      mediumLogo,
      totalUSDDepositedLoading,
      totalUSDDeposited,
      totalFeesUSDLoading,
      totalFeesUSD,
      totalUsersLoading,
      totalUsers,
      totalDepositsLoading,
      totalDeposits,
    } = this.state;

    let lang = intl.options.currentLocale;

    const menu = (
      <Menu>
        <Menu.Item key="compliance">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={intl.get('ComplianceUrl')}
          >
            {intl.get('Compliance')}
          </a>
        </Menu.Item>
        <Menu.Item key="privacyTips">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={intl.get('PrivacyTipsUrl')}
          >
            {intl.get('PrivacyTips')}
          </a>
        </Menu.Item>
        <Menu.Item key="about">
          <Tooltip title={intl.get('ComingSoon')}>
            <a
              rel="noopener noreferrer"
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              {intl.get('About')}
            </a>
          </Tooltip>
        </Menu.Item>
      </Menu>
    );

    const menu1 = (
      <Menu>
        <Menu.Item key="stats">
          <a target="_blank" rel="noopener noreferrer" href="/stats">
            {intl.get('Stats')}
          </a>
        </Menu.Item>
        <Menu.Item key="mining">
          <Tooltip title={intl.get('ComingSoon')}>
            <a
              rel="noopener noreferrer"
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              {intl.get('Mining')}
            </a>
          </Tooltip>
        </Menu.Item>
        <Menu.Item key="tutorial">
          <a target="_blank" rel="noopener noreferrer" href="/tutorial">
            {intl.get('Tutorial')}
          </a>
        </Menu.Item>
        <Menu.Item key="q&a">
          <a target="_blank" rel="noopener noreferrer" href="/qa">
            {intl.get('Q&A')}
          </a>
        </Menu.Item>
        <Menu.ItemGroup title={intl.get('Info')}>
          <Menu.Item key="compliance">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={intl.get('ComplianceUrl')}
            >
              {intl.get('Compliance')}
            </a>
          </Menu.Item>
          <Menu.Item key="privacyTips">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={intl.get('PrivacyTipsUrl')}
            >
              {intl.get('PrivacyTips')}
            </a>
          </Menu.Item>
          <Menu.Item key="about">
            <Tooltip title={intl.get('ComingSoon')}>
              <a
                rel="noopener noreferrer"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                {intl.get('About')}
              </a>
            </Tooltip>
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
                  <a href="/stats" target="_blank">
                    {intl.get('Stats')}
                  </a>
                </li>
                <li>
                  <Tooltip title={intl.get('ComingSoon')}>
                    <a
                      href="#"
                      target="_blank"
                      onClick={e => e.preventDefault()}
                    >
                      {intl.get('Mining')}
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <a href="/tutorial" rel="noopener noreferrer" target="_blank">
                    {intl.get('Tutorial')}
                  </a>
                </li>
                <li>
                  <a href="/qa" target="_blank">
                    {intl.get('Q&A')}
                  </a>
                </li>
                <li>
                  <Dropdown
                    overlay={menu}
                    arrow
                    placement="bottomCenter"
                    onClick={e => e.preventDefault()}
                  >
                    <a>{intl.get('Info')}</a>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
          {
            <div className="header-btn">
              <Button className="launchAppBtn" shape="round">
                <a href="/app">{intl.get('LaunchApp')}</a>
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
                  <a href="/app">{intl.get('LaunchApp')}</a>
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
                  <div className="amount">
                    {' '}
                    {totalUSDDepositedLoading ? (
                      <Spin size="large" />
                    ) : (
                      <>${totalUSDDeposited.toLocaleString()}</>
                    )}
                  </div>
                  <div className="title">{intl.get('TotalUSDDeposited')}</div>
                  {/* <div className="subtitle">subtite here</div> */}
                </div>
              </div>
              <div className="flex-item">
                <div className="card-item">
                  <div className="amount">
                    {' '}
                    {totalFeesUSDLoading ? (
                      <Spin size="large" />
                    ) : (
                      <>${totalFeesUSD.toLocaleString()}</>
                    )}
                  </div>
                  <div className="title">{intl.get('TotalFeesUSD')}</div>
                  {/* <div className="subtitle">subtite here</div> */}
                </div>
              </div>
              <div className="flex-item">
                <div className="card-item">
                  <div className="amount">
                    {totalUsersLoading ? (
                      <Spin size="large" />
                    ) : (
                      <>{totalUsers.toLocaleString()}</>
                    )}
                  </div>
                  <div className="title">{intl.get('TotalUsers')}</div>
                  {/* <div className="subtitle">subtite here</div> */}
                </div>
              </div>
              <div className="flex-item">
                <div className="card-item">
                  <div className="amount">
                    {' '}
                    {totalDepositsLoading ? (
                      <Spin size="large" />
                    ) : (
                      <>{totalDeposits.toLocaleString()}</>
                    )}
                  </div>
                  <div className="title">{intl.get('TotalDeposits')}</div>
                  {/* <div className="subtitle">subtite here</div> */}
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
