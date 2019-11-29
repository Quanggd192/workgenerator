import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'

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
    }
    render(){
      let navItems = []
        for(let i=0; i<this.state.navItems.length; i++){
          navItems.push(
          <NavItem eventKey={i+1} key={i+1} href={this.state.navItems[i].link}>
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
    <FormGroup>
        <FormControl style={{marginTop: 10}} type="text" placeholder="Search" />
      </FormGroup>{' '}
      <div style={{width: "auto", textAlign: "right"}}>
        <Button style={{marginTop: 10, border: "solid 1px"}} type="button">Search</Button>
      </div>
      <div style={{width: 150, textAlign: "right"}}>
        <Button style={{marginTop: 10, border: "solid 1px #f29393", color: "#f29393", float: "right"}} type="button">Log out</Button>
      </div>

  </Nav>
</Navbar>
        )
    }
}

export default UserNavbar