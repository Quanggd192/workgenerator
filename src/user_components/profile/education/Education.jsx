import React, { Component } from 'react'

import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 20px 10px 20px 10px;
    background: #fff;
    border-radius: 5px;
    border: solid 1px #e3e3e3;
`
const Item = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`
const Header = styled.div`
    font-size: 20px;
    font-weight: lighter;
`
const Avatar = styled.div`
    width: 17%;
    text-align: center;
`
const Content = styled.div`
    width: 83%;
`
const HalfBlock = styled.div`
    width: 50%;
`
const Position = styled.div`
    color: #888;
`
const Period = styled.div`
    color: #888;
`
const Description = styled.div`
    padding: "0 25px 0 0";
`
export default class Education extends Component {
    render() {
        const data = [
            {}
        ]
        let item = <Item>
        <Avatar>
            <img style={{width: 70, height: 70}} alt="" src="data:image/png;base64,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"/>
        </Avatar>
        <Content>
            <HalfBlock>
                <Header>Google</Header>
                <Position>Chủ tịch thử lòng và cái kết</Position>
                <Period>6/2018 - 2019</Period>
            </HalfBlock>
            <HalfBlock style={{textAlign: "right"}}>
                
            </HalfBlock>
            <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Description>
                <hr/>

            </Content>
        </Item>
        const listItems = [
            item, item, item
        ]
        return (
            <Container>
                <Header style={{padding: "0 0 20px 15px"}}>Experience</Header>
                {listItems}
            </Container>
        )
    }
}
