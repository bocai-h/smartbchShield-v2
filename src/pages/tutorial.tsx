import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import { Dropdown } from 'antd';
import intl from 'react-intl-universal';
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

class SuterProtocol extends React.Component {
  state = {
    twitterLogo: twitter,
    telegramLogo: telegram,
    mediumLogo: medium,
    QA_help: {
      title: 'Suter Shield Tutorial',
      active: {
        index: 0,
        target: {
          active: true,
          t: '1.Register Suter account with your Ethereum account private key',
          o: [
            {
              t: 'a. Select the asset you want to have privacy protection',
              img: require('../static/help01.png'),
            },
            {
              t: 'b. Click "Connect" to connect to your Metamask wallet',
            },
            {
              t:
                'c. Click "Register" and enter your Ethereum private key. In theory, any string of numbers and letters can be used to generate your Suter account, even a simple password such as "123456", but this is extremely insecure, please do not do this. For the safety of your Suter account, please use your Ethereum account private key and keep it properly',
              img: require('../static/help02.png'),
            },
          ],
        },
      },
      list: [
        {
          active: true,
          t: '1.Register Suter account with your Ethereum account private key',
          o: [
            {
              t: 'a. Select the asset you want to have privacy protection',
              img: require('../static/help01.png'),
            },
            {
              t: 'b. Click "Connect" to connect to your Metamask wallet',
            },
            {
              t:
                'c. Click "Register" and enter your Ethereum private key. In theory, any string of numbers and letters can be used to generate your Suter account, even a simple password such as "123456", but this is extremely insecure, please do not do this. For the safety of your Suter account, please use your Ethereum account private key and keep it properly',
              img: require('../static/help02.png'),
            },
          ],
        },
        {
          active: false,
          t:
            '2.Stake your digital assets to the Suter Shield smart contract and get the private version of corresponding assets',
          o: [
            {
              t: 'a. Select the asset you want to have privacy protection',
            },
            {
              t:
                'b. Enter the number of digital assets you want to stake (the unit of measurement is Unit, the Unit ratio of each digital asset is different, please refer to Suter Shield Q&A: Why Suter Shield’s digital assets should set Unit as the unit of measurement)',
            },
            {
              t: 'c. Enter your Suter account private key to stake',
            },
            {
              t:
                'd. After the above steps are completed, your Suter account will display the increased corresponding privacy protection assets, and the original assets of your Ethereum account will decrease.',
              img: require('../static/help03.png'),
            },
          ],
        },
        {
          active: false,
          t: '3.Transfer your privacy protection digital assets',
          o: [
            {
              t: 'a. Select the asset you want to have privacy protection',
            },
            {
              t: 'b. Register or log in to your Suter account',
            },
            {
              t:
                'c. Enter the quantity and Suter account public key address to transfer',
              img: require('../static/help04.png'),
            },
          ],
        },
        {
          active: false,
          t: '4.Retrieve (Burn) your digital assets',
          o: [
            {
              t: 'a. Connect your Metamask wallet',
            },
            {
              t: 'b. Select the asset you want to have privacy protection',
            },
            {
              t: 'c. Register or log in to your Suter account',
            },
            {
              t:
                'd. Enter the number of digital assets you want to retrieve. The unit of measurement is also Unit. The digital assets protected by Suter Shield are usually distinguished by putting an “s” in front of ordinary digital assets. For example, ETH will be sETH in Suter network, and USDT will be sUSDT, Suter will be sSUTER',
            },
            {
              t:
                'e. Your corresponding digital assets will be returned to your Ethereum account',
            },
          ],
        },
      ],
    },
    QA_help_CN: {
      title: '使⽤教程',
      active: {
        index: 0,
        target: {
          active: true,
          t: '1.用您的以太坊账号私钥来注册suter账号',
          o: [
            {
              t: 'a.选择您想要进行隐私保护的资产',
              img: require('../static/help01.png'),
            },
            {
              t: 'b.点击"Connect"连接到您的Metamask钱包',
            },
            {
              t:
                'c.点击"Register"然后输入您的以太坊私钥.理论上讲任何字符串数字和字母组成的字符串都可以生成您的Suter账号，甚至是"12345"这种简单密码，但是这是不安全的，请不要这样操作，为了您的Suter账号安全，请使用您的以太坊账号私钥，并妥善保管。',
              img: require('../static/help02.png'),
            },
          ],
        },
      },
      list: [
        {
          active: true,
          t: '1.用您的以太坊账号私钥来注册suter账号',
          o: [
            {
              t: 'a.选择您想要进行隐私保护的资产',
              img: require('../static/help01.png'),
            },
            {
              t: 'b.点击"Connect"连接到您的Metamask钱包',
            },
            {
              t:
                'c.点击"Register"然后输入您的以太坊私钥.理论上讲任何字符串数字和字母组成的字符串都可以生成你的Suter账号，甚至是"12345"这种简单密码，但是这是不安全的，请不要这样操作，为了您的Suter账号安全，请使用您的以太坊账号私钥，并妥善保管。',
              img: require('../static/help02.png'),
            },
          ],
        },
        {
          active: true,
          t: '2.抵押您的数字资产到Suter Shield智能合约并得到隐私版本的对应资产',
          o: [
            {
              t: 'a.选择您想要进行隐私保护的资产',
              img: require('../static/help01.png'),
            },
            {
              t:
                'b.输入您想要只要的数字资产数量(单位是Unit,每种数字资产的Unit比例并不一样，原因请查看Suter ShieldQ&A: 为什么Suter Shield的数字资产要设置Unit作为单位)',
            },
            {
              t: 'c.输入您的Suter账号私钥进行抵押操作',
              img: require('../static/help02.png'),
            },
            {
              t:
                'd.操作完毕后，您的Suter账号会显示对应增加的隐私保护资产，你的以太坊账号的相应资产会减少。',
              img: require('../static/help02.png'),
            },
          ],
        },
        {
          active: false,
          t: '3.对您的隐私保护数字资产进行转账',
          o: [
            {
              t: 'a.选择您想要进行隐私保护的资产',
            },
            {
              t: 'b.注册或者登陆你的Suter账号',
            },
            {
              t: 'c.输入数量以及Suter账号公钥地址，进行转账',
              img: require('../static/help03.png'),
            },
          ],
        },
        {
          active: false,
          t: '4.取回您的数字资产',
          o: [
            {
              t: 'a.连接您的Metamask钱包',
            },
            {
              t: 'b.选择您想要进行隐私保护的资产',
            },
            {
              t: 'c.注册或登录您的Suter账号 ',
            },
            {
              t:
                'd.输入您想要取回的数字资产的数量，单位同样是Unit，Suter Shield隐私保护的数字资产通常是普通数字资产前面加上一个s作为区别，比如ETH在Suter网络中会是sETH，USDT会是sUSDT, suter会是sSUTER',
            },
            {
              t: 'e.您的对应的数字资产会回到您的以太坊账号中',
            },
          ],
        },
      ],
    }
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
  handleInfo = (it, index) => {
    const { QA_help, QA_help_CN } = this.state;
    let type = intl.options.currentLocale === 'zh-CN'? QA_help_CN: QA_help
    type.active.index = index;
    type.active.target = it;
    type.list.forEach(it => {
      it.active = false;
    });
    type.list[index].active = true;
    this.setState({ type });
  };
  langChangeTo = (lang) => {
    localStorage.setItem('lang', lang);
    this.loadLocales(lang)
  }
  render() {
    const {
      twitterLogo,
      telegramLogo,
      mediumLogo,
      QA_help_CN,
      QA_help
    } = this.state;
    let lang = intl.options.currentLocale;

    let info = lang === 'zh-CN' ? QA_help_CN: QA_help
  
    return (
        <Layout className="suterProtocol">
          <Header>
            <div className="head-top">
              <div className="left">
                <a href="/">
                  <img src={Logo} className="logo pc" />
                  <img src={mLogo} className="logo mobbile" />
                </a>
              </div>
            </div>
            <div className="header-btn">
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
            </div>
          </Header>
          <Content>
            <div className="QA">
              <div className="left">
                <h2>{info.title}</h2>
                <ul>
                  {info.list.map((it, index) => {
                    return (
                      <li
                        onClick={() => this.handleInfo(it, index)}
                        className={it.active ? 'active' : ''}
                        key={index}
                      >
                        {it.t}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="right">
                <h3>{info.active.target.t}</h3>
                <i></i>
                <ul>
                  {info.active.target.o.map((it, index) => {
                    return (
                      <li key={index}>
                        {typeof it === 'object' ? it.t : it}
                        {it.img && <img src={it.img} alt="" />}
                      </li>
                    );
                  })}
                </ul>
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
      )
  }
}

export default SuterProtocol;
