import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import JobItem from 'user_components/list_job/JobItem';
import SlideBar from 'user_components/common/SlideBar';

const Container = styled.div`
  width: 80%;
  margin: auto;
`;
const Header = styled.div`
  height: 50px;
  line-height: 50px;
  margin: 15px 0 20px 0;
  padding: 0 20px 0 20px;
  background: #fff;
  border-radius: 2px;
  display: flex;
`;
const JobsContainer = styled.div`
  background: #fff;
  border: solid 1px #e3e3e3;
  min-height: 100px;
`;
export default class ListJob extends Component {
  render() {
    return (
      <Container>
        <SlideBar />

        <Grid fluid className="bg-white my-5">
          <Row className="py-4">
            <Col sm={8}>
              <div className="d-flex justify-content-start">
                <FormControl style={{ width: 230 }} type="text" value="aa" name="search_key" />

                <Button className="ml-2">Search</Button>
              </div>
            </Col>
            <Col sm={4}>
              <div className="d-flex justify-content-end">
                <Button bsStyle="success" className="btn-fill">
                  Post a job
                </Button>
              </div>
            </Col>
            <Col sm={12} className="mt-5">
              <p>3 job(s) found</p>
              <JobsContainer>
                <JobItem />
                <JobItem />
              </JobsContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}
