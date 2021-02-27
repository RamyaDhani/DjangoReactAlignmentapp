import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import  { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

const Login = (props) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.onAuth(values.username, values.password);
    props.history.push('/Search');
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
        Or <a href="/signup/">register now!</a>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = state =>{
    return {
      loading: state.loading,
      error: state.error
    }
  }

const mapDispatchToProps = dispatch =>{
    return{
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);