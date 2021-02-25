import React from 'react';
import { Modal } from 'antd';
import './index.less';

class ConfirmModal extends React.Component {
  render() {
    const {
      title,
      content,
      visible,
      handleOk,
      handleCancel,
      okText,
      cancelText,
    } = this.props;
    return (
      <>
        <Modal
          title={title}
          visible={visible}
          onOk={handleOk}
          centered
          onCancel={handleCancel}
          okText={okText}
          cancelText={cancelText}
          maskClosable={false}
        >
          <p>{content}</p>
        </Modal>
      </>
    );
  }
}
export default ConfirmModal;
