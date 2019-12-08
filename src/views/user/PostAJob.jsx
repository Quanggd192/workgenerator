import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  Button,
  Grid,
  Row,
  Col,
  HelpBlock,
  ControlLabel,
  InputGroup,
} from 'react-bootstrap';

export default class PostAJob extends Component {
  render() {
    return (
      <Grid className="bg-white rounded my-5">
        <form>
          <Row className="py-4">
            <Col sm={12}>
              <FormGroup>
                <ControlLabel>Name of your job</ControlLabel>
                <FormControl type="text" />
                <HelpBlock>Hinting</HelpBlock>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Category</ControlLabel>
                <FormControl componentClass="select">
                  <option value="select">Data Science</option>
                  <option value="other">UI/UX Design</option>
                  <option value="other">Refurbish a software</option>
                </FormControl>
                <HelpBlock>Hinting</HelpBlock>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Describe the work to be done</ControlLabel>
                <FormControl componentClass="textarea" />
                <HelpBlock>Hinting</HelpBlock>
              </FormGroup>

              <Row className="py-4">
                <Col sm={6}>
                  <FormGroup>
                    <ControlLabel>Project role you are looking for</ControlLabel>
                    <FormControl type="text" />
                    <HelpBlock>Hinting</HelpBlock>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <ControlLabel>Salary</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl type="number" />
                    </InputGroup>
                    <HelpBlock>Hinting</HelpBlock>
                  </FormGroup>
                </Col>
              </Row>

              <Row className="py-4">
                <Col sm={6}>
                  <FormGroup>
                    <ControlLabel>Experience requires</ControlLabel>
                    <FormControl componentClass="select">
                      <option value="select">Intermediate</option>
                      <option value="other">Proficient</option>
                      <option value="other">Novice</option>
                    </FormControl>
                    <HelpBlock>Hinting</HelpBlock>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <ControlLabel>Skills you need</ControlLabel>
                    <FormControl componentClass="select" multiple>
                      <option value="select">Web Development</option>
                      <option value="other">Writing</option>
                      <option value="other">Reading</option>
                    </FormControl>
                    <HelpBlock>Hinting</HelpBlock>
                  </FormGroup>
                </Col>
              </Row>
            </Col>

            <Col sm={12} className="text-right">
              <Button bsStyle="danger" className="btn-fill">
                Submit
              </Button>
            </Col>
          </Row>
        </form>
      </Grid>
    );
  }
}
