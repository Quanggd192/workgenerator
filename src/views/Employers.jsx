import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from 'components/Card/Card';
import CustomPagination from 'components/CustomPagination';

export default class Employers extends Component {
  constructor() {
    super();

    this.state = {
      table: {
        title: 'Employers Table',
        subtitle: 'You can find all our employers here',
      },
    };
  }

  render() {
    const { table } = this.state;

    const columns = ['ID', 'Name', 'E-mail', 'Open Jobs', 'Country', 'Money Paid', 'Open'];

    const freelancerPropsArr = [
      {
        id: 1,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
        status: false,
      },
      {
        id: 2,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
        status: false,
      },
      {
        id: 3,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
        status: true,
      },
      {
        id: 4,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
        status: true,
      },
      {
        id: 5,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
        status: false,
      },
      {
        id: 6,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
        status: true,
      },
      {
        id: 7,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
        status: false,
      },
    ];

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={table.title}
                category={table.subtitle}
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
                            <td>{prop.openJobs}</td>
                            <td>{prop.country}</td>
                            <td>{prop.paidAmount}</td>
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
