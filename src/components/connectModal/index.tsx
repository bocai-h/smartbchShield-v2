import React from 'react';
import { Modal, Button } from 'antd';
import metaMask from '../../static/metamask.svg';
import './index.less';

class ConnectModal extends React.Component {
  render() {
    let { intl } = this.props;
    return (
      <>
        <Modal
          className="connectWallet"
          closable={true}
          visible={true}
          footer={null}
          width={300}
          centered
          onCancel={this.props.closeConnectModal}
        >
          <div>
            <div className="title">
              <h1>{ intl.get("ConnectWallet") }</h1>
            </div>
            <div className="tip">{intl.get("PleaseConnectToYourMetamaskWallet")}</div>
            <div className="metaMaskContainer">
              <img src={metaMask} />
            </div>
            <div className="connectBtnContainer">
              <Button
                className="connectWalletBtn"
                shape="round"
                onClick={this.props.connectMetaMask}
              >
                { intl.get("ConnectToWallet") }
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}
export default ConnectModal;
