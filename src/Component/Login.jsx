import React, { useState } from 'react';
import axios from "axios"
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import './register.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



export default function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let payload = {
            email: email,
            password: password
        }
        axios
            .post("https://reqres.in/api/login", payload)
            .then(res => {
                if (res.data.token) {
                    window.localStorage.setItem("token", res.data.token)
                    alert("login successful")
                    history.push('/Dashboard')
                }
                else {
                    alert("Invalid Credentials pls try Again !!!")
                }
            })
    }

    return (
        <>
            <div style={{ backgroundColor: "#EDF2F8", }}>
                <div style={{ marginLeft: "500px", marginTop: "150px" }}>
                    <h1>SignIn</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" name="email" onChange={handleEmailChange} />
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
                                name="password"
                                onChange={handlePasswordChange}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a className="login-form-forgot" href="gggg">
                                Forgot password
                    </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleSubmit}>
                                SignIn
                </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}