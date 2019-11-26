import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from 'components/Card/Card';
import { freelancerPropsArr } from 'variables/Variables';

export default class Freelancers extends Component {
  render() {
    const columns = ['ID', 'Name', 'E-mail', 'Prefered Skills', 'Country', 'Open'];
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Job Seekers Table"
                category="You can find all our talents here"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {columns.map((item, key) => {
                          return <th key={key}>{item}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {freelancerPropsArr.map((prop, key) => {
                        return (
                          <tr
                            key={prop.id}
                            data-toggle="collapse"
                            data-target={`#row-${key}-detail`}
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            <td>{prop.id}</td>
                            <td>{prop.name}</td>
                            <td>{prop.email}</td>
                            <td>{prop.skills}</td>
                            <td>{prop.country}</td>
                            <td>
                              {prop.status ? (
                                <h4 className="m-0">
                                  <i className="pe-7s-check text-success" />
                                </h4>
                              ) : (
                                <h4 className="m-0">
                                  <i className="pe-7s-close text-danger" />
                                </h4>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
