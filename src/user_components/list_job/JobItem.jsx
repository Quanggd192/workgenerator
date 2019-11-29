import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const JobContainer = styled.div`
    width: 100%;
    padding: 15px 0 10px 0;
    height: 110px;
    display: flex;
    color: #555;
    background: #fff;
    border-bottom: 1px solid #dfdfdf;
    `
const LeftCol = styled.div`
    width: 15%;
    padding-left: 15px;
    text-align: center;
`    
const MidCol = styled.div`
    width: 62%;
    padding: 0 0 0 0;
`
const JobTitle = styled.div`
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 500;
`
const DetailBtn = styled.span`
    cursor: pointer;
`
const RightCol = styled.div`
    width: 23%;
    text-align: right;
    padding: 15px 30px 0 0;
    ${DetailBtn}:hover &{
        color: #0ba25e;
    }
`
export default class JobItem extends Component {
    render() {
        return (
            <JobContainer>
                <LeftCol>
                    <img alt="" style={{width: 80, height: 80}} src="https://img.icons8.com/bubbles/2x/google-logo.png"/>
                </LeftCol>
                <MidCol>
                    <JobTitle>
                        {/* {this.props.jobTitle} */}
                        Chủ tịch giả vờ và cái kết
                    </JobTitle>
                    <div>Google International group</div>
                    <div style={{display: "flex"}}>
                        <div style={{width: "33%", color: "#888"}}>Salary: <span style={{color: "#0ba25e"}}>0$</span></div>
                        <div style={{width: "33%", color: "#888", textAlign: "center"}}>Place: Silicon valley</div>
                        <div style={{width: "33%", color: "#888", textAlign: "right"}}>Last update: 3 days</div>
                    </div>
                </MidCol>
                <RightCol>
                    <Link to="jobs/#">Details</Link>
                </RightCol>
            </JobContainer>
        )
    }
}
