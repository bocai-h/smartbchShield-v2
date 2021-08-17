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
    // this.publickKey();
  }

  async publickKey() {
    let { client, publicKey } = this.props;
    let pk = await client.account.publicKeyEncoded();
    this.setState({ pk });
    publicKey(pk);
  }

  copyPk() {
    let { intl } = this.props;
    const el = this.textArea;
    el.current.select();
    document.execCommand('copy');
    openNotificationWithIcon(
      intl.get('Tips'),
      intl.get('Copied'),
      'success',
      1,
    );
    let { closeMyAddressModeal } = this.props;
    closeMyAddressModeal();
  }

  render() {
    let { visible, closeMyAddressModeal, intl } = this.props;
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
          centered
        >
          <div>
            <div className="title">
              <h1>{intl.get('YourSuterAccountAddress')}</h1>
            </div>
            <div className="tip">{intl.get('pkTips')}</div>
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
                {intl.get('Copy')}
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}
export default PublicKeyModal;
