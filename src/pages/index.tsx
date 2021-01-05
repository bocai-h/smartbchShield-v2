import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import { Button, Menu, Dropdown } from 'antd';
import intl from 'react-intl-universal';
const { SubMenu } = Menu;
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
    QA: false,
    qa_type: 'qa',
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
    },
    QA_qa: {
      title: 'Q&A',
      active: {
        index: 0,
        target: {
          active: true,
          t: '1. What is Suter Shield?',
          o: [
            'Suter Shield allows the users to invoke the Suterusu Protocol via the Metamask wallet, and then run the private payment module provided by the Suterusu protocol. Suter Shield provides the users with an interface to interact with the Suter protocol constructed on our original zero- knowledge proof technology. In addition, it also provides a fundamental technical architecture for the privacy-preserving DeFi ecosystem.',
          ],
        },
      },
      list: [
        {
          active: true,
          t: '1. What is Suter Shield?',
          o: [
            'Suter Shield allows the users to invoke the Suterusu Protocol via the Metamask wallet, and then run the private payment module provided by the Suterusu protocol. Suter Shield provides the users with an interface to interact with the Suter protocol constructed on our original zero- knowledge proof technology. In addition, it also provides a fundamental technical architecture for the privacy-preserving DeFi ecosystem.',
          ],
        },
        {
          active: false,
          t:
            '2. Why does Suter Shield have Unit? Why does the Unit of every token vary? How do you choose the Unit?',
          o: [
            "The reason why we have Unit is due to the way the underlying algorithm works. There is an upper limit on the number of integers that the algorithm can handle. This leads to an upper limit on the number of tokens that can be processed in the system, and since the total amounts of different tokens are different, there must be a respective minimum amount of tokens to ensure it's compatible with the underlying algorithm. Since each unit of different token has different dollar value, we will focus on the minimum acceptable transaction amount when choosing the corresponding token unit.",
          ],
        },
        {
          active: false,
          t: "3.What is Suter Shield's economic model?",
          o: [
            'Suter Shield initially decided to charge an additional 20% handling fee of the current Ethereum network cost in the Transfer function. According to the current gas fee (62gwei), the handling fee charged by Suter Shield in the Transfer is approximately US$0.97. And Suter Shield will also charge a fixed fee of 0.03 ETH when the user Burn their privacy crypto assets, which is about $15. All these handling fees will enter the Suter Shield dividend pool and will be distributed to all Suterusu Validator nodes in proportion.',
          ],
        },
        {
          active: false,
          t: "4. What's the core technology of Suter Shield?",
          o: [
            'The core technology of Suter Shield is our original zero-knowledge proof scheme, which does not require a trusted setup, and has an almost constant proof size, and both the proof generation and verification time has one order of magnitude improvement compared with the similar schemes.',
          ],
        },
        {
          active: false,
          t: '5.Is there any competitor for Suter Shield in the market?',
          o: [
            "We have not yet been able to find a competitor that nearly matches Suter Shield's functionality and has a close performance. The only product that is functionally close to Suter Shield is Tornado.cash, but they only support the anonymous deposit and withdrawal of ETH for a single user, and cannot guarantee the balance confidentiality of deposit and withdrawal. Moreover, their zero-knowledge proof scheme requires trusted setup, which is potentially a huge security loophole. In contrast, Suter supports the anonymous and confidential transactions of any ERC-20 token including ETH between any two parties, who are not required to share any secret information beforehand, and our zero-knowledge proof does not require the trusted setup, and hence can guarantee the unprecedented level of security and transparency. Our technical modules are extremely modular and can easily support various privacy-preserving DeFi functionalities. For a more detailed comparison, please refer to this medium article: https://medium.com/suterusu/w hy-suterusus-privacy-preserving-defi-solution-based-on-zk-consnark-is-superior-to-the- existing-dbc0af45bb0c.",
          ],
        },
        {
          active: false,
          t: '6.How does Suter Shield relate to Suterusu Protocol?',
          o: [
            'As mentioned in the above, Suter Shield is the user interface of Suter protocol, and it is also the underlying technical foundation of SuterVM, which will provide various privacy-preserving DeFi products. It plays a quite central role in the development of Suter project.',
          ],
        },
        {
          active: false,
          t:
            '7.How other projects can cooperate with Suter Shield and Suterusu Protocol?',
          o: [
            'As the privacy infrastructure in the DeFi protocol, Suterusu Protocol can cooperate with various EVM-Compatible public chains and DeFi protocols, such as CEX, DEX, Loan, Derivative, Insurance, etc. For detailed cooperation information, please see the following article: https://medium.com/suterusu/how-to-build-privacy-preserving-defi-based-on-suterusu-protocol-ebbd6b d140fe',
          ],
        },
        {
          active: false,
          t: '8.Can Suter Shield get any of my private information?',
          o: [
            "The answer is NO. All the users' private information is stored on the client side.",
          ],
        },
        {
          active: false,
          t:
            '9.Can community developers also develop new privacy applications or privacy DeFi applications based on Suterusu Protocol',
          o: [
            "Yes, the Suterusu Foundation encourages the development community to develop various DeFi privacy applications based on the Suter protocol, such as the privacy version of Curve or Privacy Dex, to maximize the positioning of Suterusu Protocol's DeFi privacy infrastructure.",
          ],
        },
        {
          active: false,
          t: '10.Do you collect user information?',
          o: ['Never'],
        },
        {
          active: false,
          t: '11.Is the code open source?',
          o: ['https://github.com/suterusu-team/suterusu-protocol'],
        },
      ],
    },
    QA_qa_CN: {
      title: '常见问题解答',
      active: {
        index: 0,
        target: {
          active: true,
          t: '1.什么是Suter Shield？',
          o: [
            'Suter Shield允许用户通Metamask钱包接入Suterusu Protocol，进而调用Suterusu Protocol提供的隐私支付功能。Suter Shield为用户提供了一个和基于我们原创的零知识证明技术的Suter protocol交互的接口，并为构建隐私保护的DeFi生态系统提供了基础技术架构。',
          ],
        },
      },
      list: [
        {
          active: true,
          t: '1.什么是Suter Shield？',
          o: [
            'Suter Shield允许用户通Metamask钱包接入Suterusu Protocol，进而调用Suterusu Protocol提供的隐私支付功能。Suter Shield为用户提供了一个和基于我们原创的零知识证明技术的Suter protocol交互的接口，并为构建隐私保护的DeFi生态系统提供了基础技术架构。',
          ],
        },
        {
          active: false,
          t:
            '2.为什么在Suter Shield中要设置Unit？为什么每种资产的Unit都可能不一样？是根据什么设置的？',
          o: [
            `这是由底层的算法决定的，算法的数字型本身能处理的整数是有个上限的，这就导致系统中最终能处理的代币数量是有个上限的，而不同ERC-20代币总量是不一样的，因此必须相应有个代币最小单位才能保证算法与之兼容。由于每个单位的不同代币对应美元金额不同，因此我们设置相应单位代币数值将会重点考虑用户可以接受的最小交易金额。`,
          ],
        },
        {
          active: false,
          t: '3.Suter Shield的经济模型是什么？我如何能从中获益？',
          o: [
            `Suter Shield初步决定在转账(Transfer)功能中收取当前以太坊网络成本的额外20%手续费，根据当前的gas fee(62gwei)那么Suter Shield在转账中收取的手续费大概是0.97美金。并且Suter Shield会在用户取回(Burn)资产时收取0.03个ETH的固定手续费，大概为15美金。所有的这些手续费将进入Suter Shield手续费分红池，按比例分给所有的Suterusu验证节点。`,
          ],
        },
        {
          active: false,
          t: '4.Suter Shield的核心技术是什么？',
          o: [
            'Suter Shield的核心技术是我们原创的无需可信初始化的零知识证明技术。该技术具有接近常数级别的证明大小，且证明生成和验证时间和同类产品相比有10倍左右的提高。',
          ],
        },
        {
          active: false,
          t: '5.Suter Shield目前市场上有哪些竞争对手？',
          o: [
            `我们尚未能找到和Suter Shield功能匹配且效率接近的竞争对手，功能上唯一接近Suter Shield的产品是Tornado.cash，但他们支持的单个用户的ETH的匿名存取，存取的金额无法保密。而且他们的零知识证明方案需要可信初始化，这个在安全性上大打折扣。相对而言，Suter支持任意两方之间的包括ETH在内的ERC-20 token的匿名保密交易，且两方无需提前分享任何秘密信息，而且如上面提到的我们的零知识证明无需可信初始化，因此安全性和透明性上已经登峰造极了。我们的功能极为模块化，还可以轻松支持各种隐私保护DeFi功能。更为细节的比较可以参考这篇medium文章：https://medium.com/suterusu/why-suterusus-privacy-preserving-defi-solution-based-on-zk-consnark-is-superior-to-the-existing-dbc0af45bb0c`,
          ],
        },
        {
          active: false,
          t: '6.Suter Shield 和 Suterusu Protocol是什么关系？',
          o: [
            `上面说过了Suter Shield是Suterusu protocol和用户交互的一个界面，同时他也是SuterVM中提供的各种隐私保护DeFi产品的一个底层技术架构，所以在Suter项目的技术周期中他起着承上启下中流砥柱的作用。`,
          ],
        },
        {
          active: false,
          t: '7.其他项目如何和Suter Shield以及Suterusu Protocol合作？',
          o: [
            `Suterusu Protocol作为DeFi协议中的隐私基础设施，可以和各类EVM-Compatible的公链以及DeFi协议进行合作，比如CEX, DEX, Loan, Derivative, Insurance等, 细节合作信息可以看以下文章：https://medium.com/suterusu/how-to-build-privacy-preserving-defi-based-on-suterusu-protocol-ebbd6bd140fe`,
          ],
        },
        {
          active: false,
          t: '8.Suter Shield有办法被破解从而了解到我的隐私信息吗？',
          o: ['没有办法，所有和用户相关的隐私信息都保留在用户客户端。'],
        },
        {
          active: false,
          t:
            '9.社区开发者是否可以也基于Suterusu Protocol 再开发新的隐私应用或者隐私DeFi应用？',
          o: [
            `可以，Suterusu基金会鼓励开发社区开发各种基于Suter协议的DeFi隐私应用，例如隐私版本的Curve或者隐私Dex，把Suterusu Protocol的DeFi隐私基础设施的定位发挥到极致。`,
          ],
        },
        {
          active: false,
          t: '10.你们收集用户的信息吗？',
          o: ['从不'],
        },
        {
          active: false,
          t: '11.代码是否已经开源？',
          o: ['https://github.com/suterusu-team/suterusu-protocol'],
        },
      ],
    },
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
      // this.accountChanged();
    } else {
      const message =
        'Suterusu Protocol must work with MetaMask, please install MetaMask';
      openNotificationWithIcon(
        'MetaMask is not installed!',
        message,
        'warning',
      );
    }
  }

  ethChainChanged() {
    window.ethereum.on('chainChanged', chainId => {
      openNotificationWithIcon(
        'ETH Chain changed',
        'Page will refresh after 2 seconds',
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
        'ETH account changed',
        'Page will refresh after 2 seconds',
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
        'ETH network error!',
        `Please change metamask to ${ethChainNameMap[ETH_CHAIN_ID]} network`,
        'warning',
        4.5,
      );
    } else {
      // this.connectMetaMask();
    }
  }

  selectCoin(coinType) {
    this.setState({ coinType: coinType });
  }
  cancelSelectCoin() {
    this.setState({ coinType: '' });
  }

  toggleQA = qa_type => {
    this.setState({ QA: true, qa_type: qa_type });
  };

  handleInfo = (qa_type, it, index) => {
    const { QA_qa, QA_help, QA_qa_CN, QA_help_CN } = this.state;
    let type =
      qa_type === 'qa'
        ? intl.options.currentLocale === 'zh-CN'
          ? QA_qa_CN
          : QA_qa
        : intl.options.currentLocale === 'zh-CN'
        ? QA_help_CN
        : QA_help;
    type.active.index = index;
    type.active.target = it;
    type.list.forEach(it => {
      it.active = false;
    });
    type.list[index].active = true;
    this.setState({ type });
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
      QA,
      QA_qa,
      QA_qa_CN,
      QA_help_CN,
      QA_help,
      qa_type,
    } = this.state;
    let lang = intl.options.currentLocale;

    let info =
      qa_type === 'qa'
        ? lang === 'zh-CN'
          ? QA_qa_CN
          : QA_qa
        : lang === 'zh-CN'
        ? QA_help_CN
        : QA_help;
    const canConnectWallet =
      account === '' && metamaskInstalled && ethNetwork == ETH_CHAIN_ID;
    const scanLink = `${ETHERSCAN}/address/${account}`;
    const menu = (
      <Menu>
        <Menu.Item key="dashboard">
          <a target="_blank" rel="noopener noreferrer" href="#">
            {intl.get('CheckTutorial')}
          </a>
        </Menu.Item>
        <Menu.Item key="q&a">
          <a target="_blank" rel="noopener noreferrer" href="#">
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
          <a onClick={() => this.toggleQA('qa')}>
            { intl.get("Q&A") }
          </a>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <a target="_blank" rel="noopener noreferrer" href="#">
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
          <Menu.Item key="setting:3">
            <a onClick={() => this.toggleQA('help')}>
              { intl.get("CheckTutorial") }
            </a>
          </Menu.Item>
          <Menu.Item key="setting:4">
            <a target="_blank" rel="noopener noreferrer" href="#">
              {intl.get('Q&A')}
            </a>
          </Menu.Item>
          <Menu.Item key="setting:5">
            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/suterusu/privacy-tips-for-suterusu-shield-user-96496bb81447">
              { intl.get("PrivacyTips") }
            </a>
          </Menu.Item>
          <Menu.Item key="setting:6">
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
                  <li onClick={() => this.toggleQA('qa')}>
                    {intl.get('Q&A')}{' '}
                  </li>
                  <li>{intl.get('Dashboard')}</li>
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
                  onClick={() => this.loadLocales('en-US')}
                  className={`${lang === 'en-US' ? 'active' : ''}`}
                >
                  EN
                </i>
                <i
                  className={`${lang === 'zh-CN' ? 'active' : ''}`}
                  onClick={() => this.loadLocales('zh-CN')}
                >
                  中
                </i>
              </div>

              <Dropdown overlay={menu1} className="mobbile-MenuOutlined">
                <span onClick={e => e.preventDefault()}>
                  <MenuOutlined className="MenuOutlined" />
                </span>
              </Dropdown>
              {/* <Button
                className="langBtn pc-English"
                onClick={() =>
                  this.loadLocales(`${lang === 'zh-CN' ? 'en-US' : 'zh-CN'}`)
                }
                shape="round"
              >
                {lang === 'zh-CN' ? '中文' : 'English'}
              </Button>

              <Dropdown className="mobble-English" overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={e => e.preventDefault()}
                >
                  <Button className="langBtn" shape="round">
                    English
                  </Button>
                </a>
              </Dropdown> */}
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
            {QA ? (
              <div className="QA">
                <div className="left">
                  <h2>{info.title}</h2>
                  <ul>
                    {info.list.map((it, index) => {
                      return (
                        <li
                          onClick={() => this.handleInfo(qa_type, it, index)}
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
            ) : account === '' || coinType === '' ? (
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
