import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from 'components/Card/Card';
import CustomPagination from 'components/CustomPagination';

export default class Freelancers extends Component {
  render() {
    const columns = ['ID', 'Name', 'E-mail', 'Prefered Skills', 'Country', 'Open'];

    const freelancerPropsArr = [
      {
        id: 1,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        skills: 'Writing',
        country: 'Niger',
        status: false,
      },
      {
        id: 2,
        name: 'Minerva Hooper',
        email: 'MinervaHooper@abc.def',
        skills: 'Android',
        country: 'Curaçao',
        status: false,
      },
      {
        id: 3,
        name: 'Sage Rodriguez',
        email: 'SageRodriguez@abc.def',
        skills: 'iOS',
        country: 'Netherlands',
        status: true,
      },
      {
        id: 4,
        name: 'Philip Chaney',
        email: 'PhilipChaney@abc.def',
        skills: 'Web',
        country: 'South Korea',
        status: false,
      },
      {
        id: 5,
        name: 'Doris Greene',
        email: 'DorisGreene@abc.def',
        skills: 'Desktop',
        country: 'Malawi',
        status: false,
      },
      {
        id: 6,
        name: 'Mason Porter',
        email: 'MasonPorter@abc.def',
        skills: 'Business Analysis',
        country: 'Chile',
        status: true,
      },
    ];

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
                legend={<CustomPagination limit={10} itemsCount={270} offset={3} />}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
