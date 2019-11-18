import React, { Component } from "react";

import {Grid, Row, Col} from 'react-bootstrap'

import UserLoginForm from '../../user_components/login_and_register/UserLoginForm'
import Guide from '../../user_components/login_and_register/Guide'

class UserLoginView extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div style={{background: `#F0F0F0`}}>
                <Grid>
                    <Row>
                        <Col md={4}>
                            <UserLoginForm/>
                        </Col>
                        <Col md={8}>
                            <Guide/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default UserLoginView