/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { Card } from 'components/Card/Card';
import { FormInputs } from 'components/FormInputs/FormInputs';
import { UserCard } from 'components/UserCard/UserCard';
import Button from 'components/CustomButton/CustomButton';

import avatar from 'assets/img/faces/face-3.jpg';

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={['col-md-12']}
                      properties={[
                        {
                          label: 'Username / E-mail',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'nhactung',
                          defaultValue: 'nhactung',
                          disabled: true,
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={['col-md-6', 'col-md-6']}
                      properties={[
                        {
                          label: 'First name',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'First name',
                          defaultValue: 'Tung',
                        },
                        {
                          label: 'Last name',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Last name',
                          defaultValue: 'Nhac',
                        },
                      ]}
                    />

                    <Button bsStyle="info" pullRight fill>
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Mike Andrew"
                userName="michael24"
                description={
                  <form className="my-4">
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="New Password" />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="button"
                        className="btn btn-sm btn-danger btn-fill pull-right"
                        value="Change Password"
                      />
                    </div>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
