import React from 'react';
import { Modal } from 'antd';

class ConfirmModal extends React.Component {
  render() {
    const { title, content, visible, handleOk, handleCancel } = this.props;
    return (
      <>
        <Modal
          title={title}
          visible={visible}
          onOk={handleOk}
          centered
          onCancel={handleCancel}
        >
          <p>{content}</p>
        </Modal>
      </>
    );
  }
}
export default ConfirmModal;
