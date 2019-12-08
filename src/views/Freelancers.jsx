import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from 'components/Card/Card';
import CustomPagination from 'components/CustomPagination';

export default class Freelancers extends Component {
  constructor() {
    super();

    this.state = {
      columns: ['ID', 'Name', 'E-mail', 'Prefered Skills', 'Country', 'Open'],
      data: [
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
      ],
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
        <td>{item.skills}</td>
        <td>{item.country}</td>
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
          <td colSpan={6}>
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
    const { columns, data } = this.state;

    const rows = [];
    data.forEach(s => rows.push(this.renderRow(s)));

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col sm={12}>
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
