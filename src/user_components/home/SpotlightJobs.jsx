import React, { Component } from 'react'

import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import JobItem from 'user_components/home/JobItems'

class SpotlightJobs extends Component {

    render(){
        // fake data
        const data = [

        ]
        const bannerStyle = {
            fontSize: '17px',
            margin: 'auto',
            padding: '15px',
            borderBottom: '1px solid #eee',
            backgroundColor: '#0ba25e',
            borderRadius: '3px 3px 0 0',
            color: '#fff'

        }
        let listJobElements = []
        for(let i=0; i<18; i++){
            listJobElements.push(
                <Col style={{padding: `0 5px 0 5px`}} md={4}>
                    <JobItem/>
                </Col>
            )
        }
        return(
            <div>
                <Row>
                    <Col md={12} style={{}}>
                        <div style={bannerStyle}>
                            BEST JOBS
                        </div>
                    </Col>
                </Row>
                <Row style={{padding: `0 10px 0 10px`, marginTop: `12px`}}>
                    {listJobElements}
                </Row>
            </div>    
        )
    }
}

export default SpotlightJobs