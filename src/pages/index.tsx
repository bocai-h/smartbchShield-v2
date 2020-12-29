import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import { Button, Menu, Dropdown } from 'antd';
const { SubMenu } = Menu;
import { openNotificationWithIcon, ethChainNameMap } from '../components/tools';
import 'antd/dist/antd.css';
import Logo from '../static/suterShield.svg';
import mLogo from '../static/logo.svg';
import twitter from '../static/twitter.svg';
import telegram from '../static/telegram.svg';
import medium from '../static/medium.svg';
import Home from '../components/home';
import Form from '../components/form';
import ConnectModal from '../components/connectModal';

class SuterProtocol extends React.Component {
  state = {
    metamaskInstalled: false,
    account: '',
    connectWalletTxt: 'Connect Wallet',
    web3Browser: false,
    ethNetwork: '',
    showConnectModal: false,
    coinType: '',
    QA: false,
    qa_type: 'qa',
    QA_help: {
      title: 'Tutorial',
      active: {
        index: 0,
        target: {
          active: true,
          t: '1.Register Suter account with your Ethereum account private key',
          o: [
            {
              t: 'a.Select the asset you want to have privacy protection',
              img: require('../static/help01.png'),
            },
            {
              t: 'b.Click "Connect" to connect to your Metamask wallet',
            },
            {
              t:
                'c.Click "Register" and enter your Ethereum private key. In theory, any string of numbers and letters can be used to generate your Suter account, even a simple password such as "123456", but this is extremely insecure, please do not do this. For the safety of your Suter account, please use your Ethereum account private key and keep it properly',
              img: require('../static/help02.png'),
            },
          ],
        },
      },
      list: [
        {
          active: true,
          t: '1.Stake your digital assets to the Suter Shield smart contract and get the private version of corresponding assets',
          o: [
            {
              t: 'a.Select the asset you want to have privacy protection',
              img: require('../static/help01.png'),
            },
            {
              t: 'b.Enter the number of digital assets you want to stake (the unit of measurement is Unit, the Unit ratio of each digital asset is different, please refer to Suter Shield Q&A: Why Suter Shield’s digital assets should set Unit as the unit of measurement)',
            },
            {
              t:
                'c.Enter your Suter account private key to stake',
              img: require('../static/help02.png'),
            },
            {
              t:
                'd.After the above steps are completed, your Suter account will display the increased corresponding privacy protection assets, and the original assets of your Ethereum account will decrease.',
              img: require('../static/help02.png'),
            },
          ],
        },
        {
          active: false,
          t: '2.Stake your digital assets to the Suter Shield smart contract and get the private version of corresponding assets',
          o: [
            {
              t: 'a.Select the asset you want to have privacy protection',
            },
            {
              t:
                'b.Enter the number of digital assets you want to stake (the unit of measurement is Unit, the Unit ratio of each digital asset is different, please refer to Suter Shield Q&A: Why Suter Shield’s digital assets should set Unit as the unit of measurement)',
            },
            {
              t: 'c.Enter your Suter account private key to stake',
            },
            {
              t:
                'd.After the above steps are completed, your Suter account will display the increased corresponding privacy protection assets, and the original assets of your Ethereum account will decrease.',
              img: require('../static/help03.png'),
            },
          ],
        },
        {
          active: false,
          t: '3.Transfer your privacy protection digital assets',
          o: [
            {
              t: 'a.Select the asset you want to have privacy protection',
            },
            {
              t: 'b.Register or log in to your Suter account',
            },
            {
              t: 'c.Enter the quantity and Suter account public key address to transfer',
              img: require('../static/help04.png'),
            },
          ],
        },
        {
          active: false,
          t: '4.Retrieve (Burn) your digital assets',
          o: [
            {
              t: 'a.Connect your Metamask wallet',
            },
            {
              t: 'b.Select the asset you want to have privacy protection',
            },
            {
              t: 'c.Register or log in to your Suter account ',
            },
            {
              t:
                'd.Enter the number of digital assets you want to retrieve. The unit of measurement is also Unit. The digital assets protected by Suter Shield are usually distinguished by putting an “s” in front of ordinary digital assets. For example, ETH will be sETH in Suter network, and USDT will be sUSDT, Suter will be sSUTER',
            },
            {
              t: 'e.Your corresponding digital assets will be returned to your Ethereum account',
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
          t: '7.How other projects can',
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
  }

  componentDidMount() {
    this.checkMetaMaskStatus();
  }

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
  closeConnectModal(){
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
      openNotificationWithIcon('MetaMask is not installed!', message, 'warning');
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
    const { QA_qa, QA_help } = this.state;
    let type = qa_type === 'qa' ? QA_qa : QA_help;
    type.active.index = index;
    type.active.target = it;
    type.list.forEach(it => {
      it.active = false;
    });
    type.list[index].active = true;
    this.setState({ type });
  };

  render() {
    const {
      connectWalletTxt,
      account,
      metamaskInstalled,
      ethNetwork,
      showConnectModal,
      coinType,
      QA,
      QA_qa,
      QA_help,
      qa_type,
    } = this.state;
    let info = qa_type === 'qa' ? QA_qa : QA_help;
    const canConnectWallet =
      account === '' && metamaskInstalled && ethNetwork == ETH_CHAIN_ID;
    const scanLink = `${ETHERSCAN}/address/${account}`;
    const menu = (
      <Menu mode="horizontal">
        <Menu.Item key="dashboard">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            Dashboard
          </a>
        </Menu.Item>
        <Menu.Item key="compliance">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            Compliance
          </a>
        </Menu.Item>
        <Menu.Item>
        <SubMenu key="SubMenu" title="Resources">
          <Menu.Item key="tutorial">Tutorial</Menu.Item>
          <Menu.Item key="q&a">Q&A</Menu.Item>
          <Menu.Item key="privacyTips">Privacy Tips</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
        </SubMenu>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout className="suterProtocol">
        <Header>
          <div className="head-top">
            <div className="left">
              <a href="/">
                <img src={Logo} className="logo pc" />
                <img src={mLogo} className="logo mobbile" />
              </a>
              <ul className="item-ul">
                <li onClick={() => this.toggleQA('qa')}>Q&A</li>
                <li>Dashboard</li>
                <li>Compliance</li>
                <li>Resources</li>
              </ul>
              {/* <div className="menuContainer">{menu}</div> */}
            </div>
          </div>
          <div>
            {account === '' ? (
              <Button
                className="connectWalletBtn"
                shape="round"
                onClick={this.showConnectModal}
                disabled={!canConnectWallet}
              >
                {connectWalletTxt}
              </Button>
            ) : (
              <a href={scanLink} target="_blank">
                <Button className="connectWalletBtn" shape="round">
                  <div className="successDot"></div>
                  {connectWalletTxt}
                </Button>
              </a>
            )}
            <Button className="langBtn pc-English" shape="round">
              English
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
            </Dropdown>
          </div>
        </Header>
        <Content>
          {showConnectModal ? (
            <ConnectModal connectMetaMask={this.connectMetaMask} closeConnectModal={this.closeConnectModal}/>
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
            />
          ) : (
            <Form account={account} coinType={coinType} cancelSelectCoin={this.cancelSelectCoin}/>
          )}
        </Content>
        <Footer>
          <a href="https://twitter.com/suterusu_io" target="_blank" rel="noreferrer">
            <img src={twitter} alt="" />
          </a>
          <a href="https://t.me/suterusu_en" target="_blank" rel="noreferrer">
            <img src={telegram} alt="" />
          </a>
          <a href="https://suterusu.medium.com/" target="_blank" rel="noreferrer">
            <img src={medium} alt="" />
          </a>
        </Footer>
      </Layout>
    );
  }
}

export default SuterProtocol;
