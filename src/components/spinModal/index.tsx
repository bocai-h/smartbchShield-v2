import React from 'react';
import { Modal, Spin } from 'antd';
import './index.less';

class SpinModal extends React.Component {
  render() {
    let {intl} = this.props
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
            <h1 style={{"marginBottom": 0}}>{intl.get("processing")}</h1>
            <h1>{intl.get("yourRequest")}</h1>
            <p>{intl.get("spinTips")}</p>
            <Spin size="large" />
          </div>
        </Modal>
      </>
    );
  }
}
export default SpinModal;
