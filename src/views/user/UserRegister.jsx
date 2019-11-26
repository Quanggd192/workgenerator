import React, { Component } from "react";

import {Grid, Row, Col} from 'react-bootstrap'

import UserRegisterForm from '../../user_components/login_and_register/UserRegisterForm'
import Guide from '../../user_components/login_and_register/Guide'

class UserRegisterView extends Component {

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
                            <UserRegisterForm/>
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

export default UserRegisterView