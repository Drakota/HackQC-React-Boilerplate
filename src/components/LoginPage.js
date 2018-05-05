import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;
var hide = null;

class LoginPage extends Component {

    componentWillReceiveProps(nextProps) {        
        if(nextProps.loginFailed) {
            message.error('Email/Password Combinaison Invalid');
            nextProps.clearError();
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.loginUser(values.email, values.password);
          }
        });
    }

    render() { 
        const { getFieldDecorator } = this.props.form;
        return ( 
            <div className={"login-wrapper"}>
                <video id="background-video" className={"login-video"} loop autoPlay>
                    <source src="/Riverside.mp4" type="video/mp4" />
                    <source src="/Riverside.ogv" type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                <div className={"login-filter"}/>
                <Card className={"login-card"}>
                    eGOlogie
                    <hr/>
                    <br/>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
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
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button loading={this.props.loginPending} type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

const WrappedLoginPage = Form.create()(LoginPage);
export default WrappedLoginPage;