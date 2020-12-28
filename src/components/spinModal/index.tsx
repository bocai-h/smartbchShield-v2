import React from 'react';
import { Modal, Spin } from 'antd';
import './index.less';

class SpinModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          className="spinModal"
          closable={false}
          visible={true}
          footer={null}
          width={300}
          centered
        >
          <div className="spinContainer">
            <Spin />
          </div>
        </Modal>
      </>
    );
  }
}
export default SpinModal;
