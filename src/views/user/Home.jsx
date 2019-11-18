import React, { Component } from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import SlideBar from 'user_components/common/SlideBar'
import SpotlightJobs from 'user_components/home/SpotlightJobs'

class HomePage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const containerStyle = {
            minHeight: `500px`,
            background: `#fff`,
            paddingTop: `80px`
        }
        return(
            <Grid style={containerStyle}>
                <Row>
                    <Col md={12}>
                        <SlideBar/>
                    </Col>
                </Row>
                <br/><br/>
                <SpotlightJobs/>
            </Grid>
        )
    }
}

export default HomePage