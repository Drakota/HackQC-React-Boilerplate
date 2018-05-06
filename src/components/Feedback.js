import React from 'react';
import { Modal, Button, Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Feedback extends React.Component {

  render() {
    const { visible, loading } = this.props;

    return (
      <div>
        <Modal
          visible={visible}
          title="Feedback"
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
          footer={[
            <Button key="back" onClick={this.props.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.props.handleOk}>
              Submit
            </Button>,
          ]}
        >
           <div style={{ textAlign: 'center' }}>
           <h2>Your feedback is important to us.</h2>
           <p>What was the quantity of waste on the ground?</p>
                <RadioGroup value={this.props.wasteChoice} onChange={this.props.onChangeWaste} defaultValue="a">
                    <RadioButton value="Very Few">Very few</RadioButton>
                    <RadioButton value="Some">Some</RadioButton>
                    <RadioButton value="A Lot">A lot</RadioButton>
                </RadioGroup>
            </div>

            <div style={{ textAlign: 'center', marginTop: 35}}>
            <p>How satisfied were you with the furniture in this location?</p>
                <RadioGroup value={this.props.furnitureChoice} onChange={this.props.onChangeFurniture} defaultValue="a">
                    <RadioButton value="Very Satified">Very Satisfied</RadioButton>
                    <RadioButton value="Statisfied">Statisfied</RadioButton>
                    <RadioButton value="Unsatisfied">Unsatisfied</RadioButton>
                </RadioGroup>
            </div>

            <div style={{ textAlign: 'center', marginTop: 35 }}>
            <p>How satisfied were you with the maintenance of this location?</p>
                <RadioGroup value={this.props.maintenanceChoice} onChange={this.props.onChangeMaintenance} defaultValue="a">
                    <RadioButton value="Very Satified">Very Satisfied</RadioButton>
                    <RadioButton value="Statisfied">Statisfied</RadioButton>
                    <RadioButton value="Unsatisfied">Unsatisfied</RadioButton>
                </RadioGroup>
            </div>

        </Modal>
      </div>
    );
  }
}

export default Feedback;
