import React from 'react';
import { Modal, Button } from 'antd';
import metaMask from '../../static/metamask.svg';
import './index.less';

class ConnectModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          className="connectWallet"
          closable={false}
          visible={true}
          footer={null}
          width={300}
          centered
        >
          <div>
            <div className="title">
              <h1>Connect Wallet</h1>
            </div>
            <div className="tip">Please connect to your metamask wallet</div>
            <div className="metaMaskContainer">
              <img src={metaMask} />
            </div>
            <div className="connectBtnContainer">
              <Button
                className="connectWalletBtn"
                shape="round"
                onClick={this.props.connectMetaMask}
              >
                Connect to wallet
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}
export default ConnectModal;
