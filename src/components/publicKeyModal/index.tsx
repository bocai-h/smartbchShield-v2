import React from 'react';
import { Modal, Button } from 'antd';
import './index.less';
import { openNotificationWithIcon } from '../tools';

class PublicKeyModal extends React.Component {
  state = {
    pk: '',
  };
  constructor(props) {
    super(props);
    this.textArea = React.createRef();
    this.publickKey = this.publickKey.bind(this);
    this.copyPk = this.copyPk.bind(this);
  }
  componentDidMount() {
    this.publickKey();
  }
  async publickKey() {
    let { client } = this.props;
    console.log('client=', client);
    let pk = await client.account.publicKeyEncoded();
    this.setState({ pk: pk });
  }
  copyPk() {
    const el = this.textArea;
    el.current.select();
    document.execCommand('copy');
    openNotificationWithIcon('Tips', 'Copied', 'success', 1);
    let { closeMyAddressModeal } = this.props;
    closeMyAddressModeal();
  }
  render() {
    let { visible, closeMyAddressModeal } = this.props;
    let { pk } = this.state;
    return (
      <>
        <Modal
          className="publicKeyContainer"
          visible={visible}
          footer={null}
          width={400}
          maskClosable={true}
          onCancel={closeMyAddressModeal}
        >
          <div>
            <div className="title">
              <h1>My Suter Shield Address</h1>
            </div>
            <div className="tip">It's a suter shield to transfer</div>
            <div className="inputContainer">
              <textarea value={pk} ref={this.textArea} readOnly />
            </div>
            <div className="copyBtnContainer">
              <Button
                className="copyBtn"
                shape="round"
                block
                onClick={this.copyPk}
              >
                Copy
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}
export default PublicKeyModal;
