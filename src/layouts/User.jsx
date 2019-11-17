import React, { Component } from "react";

import routes from "routes.js"

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import UserNavbar from 'user_components/common/UserNavbar'
import Footer from 'user_components/common/Footer'
import UserLoginView from 'views/user/UserLogin'
import UserRegisterView from 'views/user/UserRegister'

class UserLayout extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }
    getRoutes = routes => {
        return routes.map((prop, key) => {
          if (prop.layout === "") {
              console.log('match')
            return (
              <Route
                path={prop.layout + prop.path}
                render={props => (
                  <prop.component
                    {...props}
                    handleClick={this.handleNotificationClick}
                  />
                )}
                key={key}
              />
            );
          } else {
            return null;
          }
        });
      };
    render(){
        console.log(this.getRoutes(routes))
        return (
            <div style={{background: `#F0F0F0`}}>
                <UserNavbar/>
                <BrowserRouter>
                    <Switch>
                        {this.getRoutes(routes)}
                    </Switch>       
                </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}

export default UserLayout