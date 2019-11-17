import React, { Component } from 'react'

import { Form,Button, FormGroup, Col, FormControl, ControlLabel, Checkbox} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class UserRegisterForm extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const formTitleStyle = {
            fontSize: `20px`,
            color: `#777`,
            textAlign: `center`,
            paddingBottom: `10px`,
            fontFamily: `Arial,helvetica neue,Helvetica,sans-serif`
        }
        const facebookLoginRuleStyle = {
            color: `#999`,
            fontFamily: `Arial,helvetica neue,Helvetica,sans-serif`,
            margin: `5px 0 20px 0`
        }
        const facebookLoginRule = `Khi bạn đăng nhập bằng facebook, mặc định bạn đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của Chúng tôi`
        return (
            <div style={{background: '#fff', paddingTop: `10px`, padding: `15px 0 15px 0`, marginBottom: `25px`}}>
            <Col smOffset={1} sm={10}>
                <div style={formTitleStyle}>
                    Sign up an Account
                </div>
            </Col>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col smOffset={1} sm={10}>
                    <Button style={{background: `#3b5998`, border: `none`, color: `#fff`, height: `45px`}} block>Login with Facebook</Button>
                    <div style={facebookLoginRuleStyle}>
                        {facebookLoginRule}
                    </div>
                    <hr/>
                    <div style={{color: `#444`, textAlign: `center`, marginBottom: `8px`}}>Or use your email</div>
                    <FormControl type="name" placeholder="Full name" /><br/>
                    <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={1}>
                    </Col>
                    <Col sm={10}>
                    <FormControl type="password" placeholder="Password" /><br/>
                    <FormControl type="rePassword" placeholder="Re-enter Password" />
                    </Col>
                    <Col sm={1}></Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={1} sm={10}>
                    <Checkbox>
                        I agree with WG's Terms of Service and Privacy Policy</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={1} sm={10}>
                    <Button style={{background: `#1a8a58`, color: `#fff`, border: `none`}} type="submit" block>Sign up</Button>
                    <hr/>
                    <div>Bạn đã có tài khoản? <Link to='#'>Đăng Nhập</Link></div>
                    </Col>
                </FormGroup>
            </Form>
            </div>
        )
    }
}

export default UserRegisterForm