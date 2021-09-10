import React from 'react';
import { Modal } from 'antd';

import ethN from '../../static/eth-n.svg';
import ethY from '../../static/eth-y.svg';
import bscN from '../../static/bsc-n.svg';
import bscY from '../../static/bsc-y.svg';
import polyN from '../../static/poly-n.svg';
import polyY from '../../static/poly-y.svg';
import fanN from '../../static/fan-n.svg';
import fanY from '../../static/fan-y.svg';

import metamaskN from '../../static/metamask-n.png';
import metamaskY from '../../static/metamask-y.png';

import './index.less';

class ConnectModal extends React.Component {
  state = {
    walletList: [
      {
        logoN: metamaskN,
        logoY: metamaskY,
        isInstall: window?.ethereum?.isMetaMask,
      },
    ],
    networkList: [
      {
        logoN: ethN,
        logoY: ethY,
        name: 'Ethereum',
        id: ETH_CHAIN_ID,
      },
      {
        logoN: bscN,
        logoY: bscY,
        name: 'BSC',
        id: BSC_CHAIN_ID,
      },
      {
        logoN: polyN,
        logoY: polyY,
        name: 'Polygon',
        id: POLY_CHAIN_ID,
      },
      {
        logoN: fanN,
        logoY: fanY,
        name: 'Fantom',
        id: FAN_CHAIN_ID,
      },
    ],
  };

  constructor(props: any) {
    super(props);

    this.omit = this.omit.bind(this);
    this.openScan = this.openScan.bind(this);
    this.cutNetwork = this.cutNetwork.bind(this);
    this.connectCancel = this.connectCancel.bind(this);
  }

  omit(account: any) {
    // 省略显示
    if (!!account)
      return String(
        `${account.slice(2, 6)}...${account.slice(-4)}`,
      ).toUpperCase();

    // null
    return account;
  }

  openScan() {
    let { account }: any = this.props;

    if (!account) {
      return;
    }

    window.open(
      `${(window as any).blockchain.scan_url}/address/${account}`,
      '_blank',
    );
  }

  cutNetwork(id: any) {
    if (id == (window as any)?.blockchain?.chain_id) {
      return;
    }

    switch (id) {
      case ETH_CHAIN_ID:
        window.open(ETH_WEB, '_self');
        break;

      case BSC_CHAIN_ID:
        window.open(BSC_WEB, '_self');
        break;

      case POLY_CHAIN_ID:
        window.open(POLY_WEB, '_self');
        break;

      case FAN_CHAIN_ID:
        window.open(FAN_WEB, '_self');
        break;
    }
  }

  connectCancel() {
    let { closeConnectWallet }: any = this.props;

    closeConnectWallet();
  }

  render() {
    let { walletList, networkList } = this.state;

    let { intl, account, connectWallet, connectMetaMask }: any = this.props;

    return (
      <Modal
        centered
        width={360}
        footer={null}
        closable={false}
        visible={connectWallet}
        wrapClassName="connectModal"
        onCancel={this.connectCancel}
      >
        <div className="connect">
          <div className="title" onClick={this.openScan}>
            {account ? this.omit(account) : intl.get('connect.title')}
          </div>

          <div className="wallet">
            <span className="wallet-name">
              {intl.get('connect.wallet.name')}
            </span>

            <div className="wallet-list">
              {walletList.map(it => {
                return (
                  <img
                    onClick={connectMetaMask}
                    src={!!it.isInstall && !!account ? it.logoY : it.logoN}
                  />
                );
              })}
            </div>
          </div>

          <div className="network">
            <span className="network-name">
              {intl.get('connect.network.name')}
            </span>

            <div className="network-list">
              {networkList.map(it => {
                return (
                  <div
                    className="network-list-item"
                    onClick={() => this.cutNetwork(it.id)}
                  >
                    <span
                      className={
                        it.id == (window as any)?.blockchain?.chain_id
                          ? 'dot-y'
                          : 'dot-n'
                      }
                    />

                    <img
                      src={
                        it.id == (window as any)?.blockchain?.chain_id
                          ? it.logoY
                          : it.logoN
                      }
                    />

                    <span
                      className={
                        it.id == (window as any)?.blockchain?.chain_id
                          ? 'network-list-item-name-y'
                          : 'network-list-item-name-n'
                      }
                    >
                      {it.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ConnectModal;
