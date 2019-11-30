import React, { Component } from 'react'
import { FormGroup, FormControl, Button } from 'react-bootstrap' 
import styled from "styled-components"

import JobItem from "../../user_components/list_job/JobItem"
import SlideBar from "../../user_components/common/SlideBar"

const Container = styled.div`
    width: 80%;
    margin: auto;
`
const Header = styled.div`
    height: 50px;
    line-height: 50px;
    margin: 15px 0 20px 0;
    padding: 0 20px 0 20px;
    background: #fff;
    border-radius: 2px;
    display: flex;
`
const JobsContainer = styled.div`
    background: #fff;
    border: solid 1px #e3e3e3;
    min-height: 100px;
`
export default class ListJob extends Component {
    render() {
        return (
            <Container>
                <SlideBar/>
                <Header>
                    <div style={{ fontSize: 18, fontWeight: 500, width: "70%"}}>
                        <FormGroup controlId="formInlineName" style={{width: 300, marginTop: 5, display: "flex"}}>
                            <FormControl style={{width: 230}} type="text" value="aa" name="search_key" />
                            &nbsp;
                        <Button style={{height: 40}}>Search</Button>
                        </FormGroup>
                    </div>
                    <div style={{ width: "30%", textAlign: "right", marginRight: "20px"}}>
                        3 jobs match
                    </div>
                </Header>
                <JobsContainer>
                    <JobItem/>
                    <JobItem/>
                </JobsContainer>
            </Container>
        )
    }
}
