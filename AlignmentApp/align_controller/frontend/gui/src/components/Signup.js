import React from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import  { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
const Signup = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.onAuth(
        values.username,
        values.email, 
        values.password,
        values.confirm);
    props.history.push('/Search');
  };

 

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
        <Form.Item
        name="username"
        label="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input type='username' placeholder='username'/>
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input type='email' placeholder='email'/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
    
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        Or <a href="/login/">Login</a>
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
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);