import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
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
import Dashboard from '@/components/dashboard';

const locales = {
  'en-US': require('../locales/en_US'),
  'zh-CN': require('../locales/zh_CN'),
};

class SuterProtocol extends React.Component {
  state = {
    twitterLogo: twitter,
    telegramLogo: telegram,
    mediumLogo: medium,
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
    const { twitterLogo, telegramLogo, mediumLogo } = this.state;
    let lang = intl.options.currentLocale;
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
          <Dashboard intl={intl} />
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

export default SuterProtocol;
