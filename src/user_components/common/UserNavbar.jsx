import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap'

class UserNavbar extends Component {
  constructor(props){
    super(props)
    // fake data
    this.state = {
      navItems: [
        { key: "Jobs", link: "#"},
        { key: "Profile", link: "#"},
        { key: "Events", link: "#"},
        { key: "Trainning", link: "#"},
        { key: "Company", link: "#"},
      ] 
    }
  }
    componentWillMount(){
        console.log(Nav)
    }
    render(){
      let navItems = []
        for(let i=0; i<this.state.navItems.length; i++){
          navItems.push(
          <NavItem eventKey={i+1} href={this.state.navItems[i].link}>
            {this.state.navItems[i].key}
          </NavItem>)
        }


        return(
            <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Work Generator</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav style={{display: `flex`}}>
    {navItems}
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
        )
    }
}

export default UserNavbar