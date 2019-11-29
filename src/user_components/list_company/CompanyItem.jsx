import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const JobContainer = styled.div`
    width: 100%;
    padding: 15px 0 10px 0;
    min-height: 130px;
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
const Descripton = styled.div`
    max-height: 130px;
    word-break: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export default class CompanyItem extends Component {
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
                    <Descripton style={{}}>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </Descripton>
                </MidCol>
                <RightCol>
                    <Link to="/companies/#">Details</Link>
                </RightCol>
            </JobContainer>
        )
    }
}
