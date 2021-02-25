import React from 'react';
import { Modal, Button } from 'antd';
import './index.less';
import openEye from '../../static/openEye.svg';
import closeEye from '../../static/closeEye.svg';

class RegisterConfirmModal extends React.Component {
  state = {
    toggleShowPrivateKey: false,
  };
  constructor(props) {
    super(props);
    this.toggleShowPrivateKey = this.toggleShowPrivateKey.bind(this);
  }

  toggleShowPrivateKey() {
    this.setState({ toggleShowPrivateKey: !this.state.toggleShowPrivateKey });
  }
  render() {
    const {
      intl,
      handleOk,
      handleCancel,
      generatedPrivateKey,
      copyGeneratedPrivateKey,
    } = this.props;
    let { toggleShowPrivateKey } = this.state;
    return (
      <>
        <Modal
          title={intl.get('RegisterTips')}
          visible={true}
          onOk={handleOk}
          centered
          onCancel={handleCancel}
          maskClosable={false}
          width={346}
          wrapClassName="registerConfirmModal"
          footer={[
            <Button
              key="cancel"
              shape="round"
              onClick={copyGeneratedPrivateKey}
            >
              {intl.get('CopyPrivateKey')}
            </Button>,
            <Button
              key="confirm"
              shape="round"
              className="confirm"
              onClick={handleOk}
            >
              {intl.get('ConfirmRegister')}
            </Button>,
          ]}
        >
          <div className="privateKeyGeneratorInput">
            <div className="inputContainer">
              <input
                value={generatedPrivateKey}
                readOnly
                type={toggleShowPrivateKey ? 'text' : 'password'}
              />
              <div className="inputAppend">
                <img
                  src={toggleShowPrivateKey ? closeEye : openEye}
                  onClick={this.toggleShowPrivateKey}
                />
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}
export default RegisterConfirmModal;
