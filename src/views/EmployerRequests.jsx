import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import Card from 'components/Card/Card';
import CustomPagination from 'components/CustomPagination';
import CustomButton from 'components/CustomButton/CustomButton';

export default class EmployerRequests extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Employer Requests',
      subtitle: "Here you can approve or decline employer's applications",
    };
  }

  render() {
    const { title, subtitle } = this.state;

    const data = [
      {
        username: 'username here',
        email: 'abc@mail.cad',
        phoneNumber: '12312579128',
        companyAddress: '393 Some Road',
      },
      {
        username: 'username here',
        email: 'abc@mail.cad',
        phoneNumber: '12312579128',
        companyAddress: '393 Some Road',
      },
      {
        username: 'username here',
        email: 'abc@mail.cad',
        phoneNumber: '12312579128',
        companyAddress: '393 Some Road',
      },
      {
        username: 'username here',
        email: 'abc@mail.cad',
        phoneNumber: '12312579128',
        companyAddress: '393 Some Road',
      },
      {
        username: 'username here',
        email: 'abc@mail.cad',
        phoneNumber: '12312579128',
        companyAddress: '393 Some Road',
      },
      {
        username: 'username here',
        email: 'abc@mail.cad',
        phoneNumber: '12312579128',
        companyAddress: '393 Some Road',
      },
    ];
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={title}
                category={subtitle}
                content={
                  <Grid fluid>
                    {data.map((item, index) => {
                      return (
                        <div>
                          <Row key={index}>
                            <Col sm={2}>
                              <Image src="https://via.placeholder.com/150C/" rounded responsive />
                            </Col>
                            <Col sm={6}>
                              <h5 className="my-1">{item.email}</h5>
                              <div>{item.companyAddress}</div>
                              <small>{item.phoneNumber}</small>
                            </Col>
                            <Col sm={4} className="text-right">
                              <CustomButton bsStyle="primary" bsSize="sm" className="mr-2">
                                <i className="pe-7s-check" /> Accept
                              </CustomButton>
                              <CustomButton bsSize="sm">
                                <i className="pe-7s-close" />
                                Ignore
                              </CustomButton>
                            </Col>
                          </Row>
                          <hr />
                        </div>
                      );
                    })}
                  </Grid>
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
