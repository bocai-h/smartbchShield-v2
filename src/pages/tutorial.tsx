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
          t: '1.Register a Suter account or Login to your Suter account',
          o: [
            {
              t: 'a.Click "CONNECT WALLE" to connect to your Metamask wallet',
            },
            {
              t: 'b.Select the token you wish to transfer privately via Suter network.',
              img: require('../static/help01.jpg'),
            },
            {
              t:
                'c.Click “Register or Login“ and enter your private key. Please make sure your private key is sufficiently random. We will require your private key to be at least 16 characters long and contain at least one uppercase letter, one lowercase letter and one number. In theory, any string of numbers and letters can be used to generate your Suter account, even a simple password such as "123456", but this is extremely insecure, please do not do this. For the safety of your Suter account, please keep your private key in a safe place.',
              img: require('../static/help02.jpg'),
            },
          ],
        },
      },
      list: [
        {
          active: true,
          t: '1.Register a Suter account or Login to your Suter account',
          o: [
            {
              t: 'a.Select the token you wish to transfer privately via Suter network.',
              img: require('../static/help01.jpg'),
            },
            {
              t: 'b.Click "Connect" to connect to your Metamask wallet',
            },
            {
              t:
                'c.Click “Register or Login“ and enter your Ethereum private key. In theory, any string of numbers and letters can be used to generate your Suter account, even a simple password such as "123456", but this is extremely insecure, please do not do this. For the safety of your Suter account, please use your Ethereum account private key and keep it in a safe place.',
              img: require('../static/help02.jpg'),
            },
          ],
        },
        {
          active: false,
          t:
            '2.Stake your token to the Suter Shield smart contract and get an anonymized version of your token',
          o: [
            {
              t: 'a. Select the token you wish to transfer privately.',
            },
            {
              t:
                'b. Enter the amount of tokens you want to stake (the unit of measurement is Unit, the unit ratio for each token is different, please refer to Suter Shield Q&A: Why Suter Shield’s tokens use Unit as the unit of measurement).',
            },
            {
              t: 'c. Enter your Suter account private key to stake.',
            },
            {
              t:
                'd. After the above steps are completed, your Suter account will display the updated Suter token amount in units, and the native token amount in your Ethereum account will decrease correspondingly. The Suter token, which is the anonymized version of the native token are usually presented as “s”+the name of the native token. For example, ETH will be sETH in Suter network, and USDT will be sUSDT, Suter will be sSUTER.',
              img: require('../static/help03.jpg'),
            },
          ],
        },
        {
          active: false,
          t: '3.Transfer your Suter token.',
          o: [
            {
              t: 'a. Select the token you wish to transfer privately.',
            },
            {
              t: 'b. Login to your Suter account.',
            },
            {
              t:
                'c. Enter the amount of Suter token and the receiver Suter account public key to transfer.',
              img: require('../static/help04.jpg'),
            },
          ],
        },
        {
          active: false,
          t: '4.Withdrawal (Burn) your Suter token',
          o: [
            {
              t: 'a. Connect your Metamask wallet',
            },
            {
              t: 'b. Select the token you wish to transfer privately.',
            },
            {
              t: 'c. Login to your Suter account.',
            },
            {
              t:
                'd. Enter the amount of Suter token in units you wish to withdrawal.',
            },
            {
              t:
                'e. The amount of Suter token in your Suter account will be reduced by the entered amount, and the same amount of token minus fee will be returned to your Ethereum account.                ',
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
          t: '1.注册一个Suter账号或者登入您的账号',
          o: [
            {
              t: 'a.点击”连接钱包“来导入您的Metamask钱包。',
            },
            {
              t: 'b.选择您希望通过suter网络来隐私转账的代币。',
              img: require('../static/help01.jpg'),
            },
            {
              t:
                'c.单击“注册或登录”，输入您的私钥。请务必保证您的私钥足够随机，我们会要求您的私钥长度至少为16个字符，且至少包含一个大写字母，一个小写字母和一个数字。从理论上讲，任何数字和字母字符串都可以用于生成您的Suter帐户，甚至可以使用非常简单的密码（例如“ 123456”）来生成您的Suter帐户，但这是绝对不安全，请不要这样做。 为了确保您的Suter账户的安全，请将您的私钥保存在安全的地方。',
              img: require('../static/help02.jpg'),
            },
          ],
        },
      },
      list: [
        {
          active: true,
          t: '1.注册一个Suter账号或者登入您的账号',
          o: [
            {
              t: 'a.点击链接来导入您的Metamask钱包。',
            },
            {
              t: 'b.选择您希望通过suter网络来隐私转账的代币。',
              img: require('../static/help01.jpg'),
            },
            
            {
              t:
                'c.单击“注册或登录”，输入您的私钥。请务必保证您的私钥足够随机，我们会要求您的私钥长度至少为16个字符，且至少包含一个大写字母，一个小写字母和一个数字。从理论上讲，任何数字和字母字符串都可以用于生成您的Suter帐户，甚至可以使用非常简单的密码（例如“ 123456”）来生成您的Suter帐户，但这是绝对不安全，请不要这样做。 为了确保您的Suter账户的安全，请将您的私钥保存在安全的地方。',
              img: require('../static/help02.jpg'),
            },
          ],
        },
        {
          active: true,
          t: '2.将您的代币存入Suter Shield智能合约，并获得相应代币的匿名版本',
          o: [
            {
              t: 'a. 选择您需要隐私转账的代币。',
              img: require('../static/help01.jpg'),
            },
            {
              t:
                'b. 输入您要存入的代币数量（度量单位为Unit，每个代币的单位汇率不同，请参阅Suter Shield问答：为什么Suter Shield的代币使用Unit作为度量单位）',
            },
            {
              t: 'c. 输入您的Suter帐户私钥。'
            },
            {
              t:
                'd. 完成上述步骤后，您的Suter帐户将显示更新后的Suter令牌数量（单位是Units），而以太坊帐户中的代币数量将相应减少。 Suter代币是原始代币的匿名版本，通常显示为“ s” +原始代币的名称。 例如，在Suter网络中，ETH将显示为sETH，USDT将显示为sUSDT，Suter将显示为sSUTER。',
              img: require('../static/help03.jpg'),
            },
          ],
        },
        {
          active: false,
          t: '3.转账您的Suter代币',
          o: [
            {
              t: 'a. 选择您需要隐私转账的代币。',
            },
            {
              t: 'b. 登录您的Suter帐户。',
            },
            {
              t: 'c. 输入Suter代币数量和接收方Suter帐户公钥进行转账。',
              img: require('../static/help03.jpg'),
            },
          ],
        },
        {
          active: false,
          t: '4.取出您的Suter代币',
          o: [
            {
              t:'a.连接您的Metamask钱包。',
            },
            {
              t:'b. 选择您需要隐私转账的代币。',
            },
            {
              t:'c. 登录到您的Suter帐户。',
            },
            {
              t:'d. 输入您要提取的Suter代币数量。',
            },
            {
              t:'e.您的Suter账户中的Suter代币数量将相应减少，并且相同数量的代币减去费用将会被退回到您的以太坊账户中。',
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
