import React, { Component } from 'react';
import { Grid, Row, Col, Table, Pagination } from 'react-bootstrap';

import Card from 'components/Card/Card';

export default class Employers extends Component {
  constructor() {
    super();

    this.state = {
      table: {
        title: 'Employers Table',
        subtitle: 'You can find all our employers here',
        pagesCount: 27,
        limit: 10,
        offset: 3,
      },
    };
  }

  renderPagination() {
    const { table } = this.state;

    const items = [];
    for (let i = table.offset - 2; i < table.offset + 3; i++) {
      if (i >= 0) {
        items.push(
          <Pagination.Item key={i} active={i === table.offset}>
            {i + 1}
          </Pagination.Item>
        );
      }
    }
    if (table.offset >= 2) {
      items.unshift(<Pagination.Ellipsis></Pagination.Ellipsis>);
      items.unshift(<Pagination.Prev></Pagination.Prev>);
      items.unshift(<Pagination.First></Pagination.First>);
    }
    if (table.offset <= table.pagesCount - 3) {
      items.push(<Pagination.Ellipsis></Pagination.Ellipsis>);
      items.push(<Pagination.Next></Pagination.Next>);
      items.push(<Pagination.Last></Pagination.Last>);
    }

    return <Pagination bsSize="medium">{items}</Pagination>;
  }

  render() {
    const { table } = this.state;

    const columns = ['ID', 'Name', 'E-mail', 'Prefered Skills', 'Country', 'Open'];

    const freelancerPropsArr = [
      {
        id: 1,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
      },
      {
        id: 2,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
      },
      {
        id: 3,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
      },
      {
        id: 4,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
      },
      {
        id: 5,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
      },
      {
        id: 6,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
      },
      {
        id: 7,
        name: 'Dakota Rice',
        email: 'DakotaRice@abc.def',
        country: 'Niger',
        openJobs: 6,
        paidAmount: 3000,
      },
    ];

    const pagination = this.renderPagination();

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
                legend={pagination}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
