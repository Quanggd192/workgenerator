import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from 'components/Card/Card';
import CustomPagination from 'components/CustomPagination';

export default class Employers extends Component {
  constructor() {
    super();

    this.state = {
      meta: {
        title: 'Employers Table',
        subtitle: 'You can find all our employers here',
      },
      data: [
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
      ],
      columns: ['ID', 'Name', 'E-mail', 'Open Jobs', 'Country', 'Money Paid', 'Open'],
      expandedRowIndexes: [],
    };
  }

  expandRow(rowIndex) {
    const { expandedRowIndexes } = this.state;
    const newExpandedRowIndexes = expandedRowIndexes.includes(rowIndex)
      ? expandedRowIndexes.filter(s => s !== rowIndex)
      : expandedRowIndexes.concat(rowIndex);

    this.setState({ expandedRowIndexes: newExpandedRowIndexes });
  }

  renderRow(item) {
    const { expandedRowIndexes } = this.state;
    const itemExpandableRow = [
      <tr key={item.id} onClick={() => this.expandRow(item.id)} style={{ cursor: 'pointer' }}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.openJobs}</td>
        <td>{item.country}</td>
        <td>{item.paidAmount}</td>
        <td>
          {item.status ? (
            <h4 className="m-0">
              <i className="pe-7s-check text-success" />
            </h4>
          ) : (
            <h4 className="m-0">
              <i className="pe-7s-close text-danger" />
            </h4>
          )}
        </td>
      </tr>,
    ];

    if (expandedRowIndexes.includes(item.id)) {
      itemExpandableRow.push(
        <tr key={`row-expanded-${item.id}`}>
          <td colSpan={7}>
            <Row>
              <Col sm={4}>
                <span>Description of it</span> <br />
                <small className="text-muted">Some other detail</small>
              </Col>
              <Col sm={4}>
                <span>Description of it</span> <br />
                <small className="text-muted">Some other detail</small>
              </Col>
              <Col sm={4}>
                <span>Description of it</span> <br />
                <small className="text-muted">Some other detail</small>
              </Col>
            </Row>
          </td>
        </tr>
      );
    }

    return itemExpandableRow;
  }

  render() {
    const { meta, data, columns } = this.state;
    const rows = [];
    data.forEach(s => rows.push(this.renderRow(s)));

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col sm={12}>
              <Card
                title={meta.title}
                category={meta.subtitle}
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
                    <tbody>{rows}</tbody>
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
