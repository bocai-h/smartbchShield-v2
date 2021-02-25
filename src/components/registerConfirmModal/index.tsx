import React from 'react';
import { Modal } from 'antd';
import './index.less';

class RegisterConfirmModal extends React.Component {
  render() {
    const { intl, handleOk, handleCancel } = this.props;
    return (
      <>
        <Modal
          title={'Warning'}
          visible={true}
          onOk={handleOk}
          centered
          onCancel={handleCancel}
          okText={intl.get('ConfirmRegister')}
          cancelText={intl.get('Cancel')}
          maskClosable={false}
          width={346}
          wrapClassName="registerConfirmModal"
        >
          <div></div>
        </Modal>
      </>
    );
  }
}
export default RegisterConfirmModal;
