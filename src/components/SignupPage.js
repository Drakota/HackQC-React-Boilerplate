import React, { Fragment } from 'react';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import {Helmet} from "react-helmet";

const FormItem = Form.Item;

class SignUp extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleSubmit(values);
      }
    });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Fragment>
        <Helmet bodyAttributes={{style: 'background-color : #454f58'}}/>
        <Card className="centerElement signUpCard" title="Sign Up to eGOlogique" bordered={true}>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                {getFieldDecorator('first_name', {
                    rules: [
                        { required: true, message: 'Please input your First Name!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="First Name" type="text" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('last_name', {
                    rules: [{ required: true, message: 'Please input your Last Name!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Last Name" type="text" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your Email!' }],
                })(
                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" type="email" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('confirm_pass', {
                    rules: [{
                        required: true, message: 'Please confirm your password!',
                        }, {
                        validator: this.compareToFirstPassword,
                        }],
                    })(
                    <Input onChange={this.onConfirmChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirm Password" type="password" />
                )}
                </FormItem>
                <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button signUpButton">
                    Sign up
                </Button>
                </FormItem>
            </Form>
        </Card>
        </Fragment>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(SignUp);

export default WrappedNormalLoginForm;
