import React, { Component } from 'react'

import { Grid, Row, Col } from 'react-bootstrap'
import { FaDollarSign } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'

import cssClasses from 'main.module.css'

class JobItem extends Component {
    render(){
        // Css
        const containerStyle = {
            background: '#fff',
            padding: '5px',
            borderRadius: '2px',
            margin: '5px 0',
            border: '1px solid hsla(0,0%,93%,.8)',
            height: 90,
            width: `100%`,
            display: `flex`
        }
        const avatarStyle = {
            width: `20%`
        }
        const jobInfoBoxStyle = {
            padding: `5px 0 0 15px`
        }
        const jobTitleStyle = {
            fontWeight: `bold`,
            color: `#333`,
            lineHeight: 1.5
        }
        const companyNameStyle = {
            color: `#888`,
            lineHeight: 1.8
        }
        const iconStyle = {
            fontSize: 12,
            fontWeight: `light`,
            color: `#0ba25e`,
            display: `flex`,
            padding: `3px 5px 0 0`
        }
        const salaryRangeStyle = {
            display: `flex`,
            fontSize: 12,
            color: `#444`,
            width: `20%`,
            overflow: `hidden`,
            textOverflowX: `ellipsis`
        }
        return(
            <div style={containerStyle}>
                <img alt="a" style={avatarStyle} src='https://img2.thuthuatphanmem.vn/uploads/2018/12/14/icon-facebook-buon-dep_110448435.jpg'/>
                <div style={jobInfoBoxStyle}>
                    <div style={jobTitleStyle}>
                        Skin care Doctor
                    </div>
                    <div style={companyNameStyle}>
                        National Skin Hospital
                    </div>
                    <Grid style={{padding: `0 0 0 0`}}>
                    <Row>
                        <Col style={{display: `flex`,lineHeight: 1.6}} sm={6}>
                            <div style={iconStyle}>
                                <FaDollarSign/>
                            </div>
                            <div style={salaryRangeStyle}>
                                10 - 20 triệu
                            </div>
                        
                            <div style={iconStyle}>
                                <GiPositionMarker/>
                            </div>
                            <div style={salaryRangeStyle} className={cssClasses.overFlowEllipsis}>
                                Hà Nội, Việt nam ksjfjaisfjisjfijsif
                            </div>
                        </Col>
                    </Row>
                </Grid>
                </div>
            </div>
        )
    }
}

export default JobItem