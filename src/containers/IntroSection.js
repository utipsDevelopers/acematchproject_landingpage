import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const IntroSection = () => (
  <SectionMargin>
    <Grid bsClass="container">
      <Row>
        <Col lg={6} mdPush={3}>
          <Paragraph>
            AceMatch es lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate 
          </Paragraph>
        </Col>
      </Row>
    </Grid>
  </SectionMargin>
);

export default IntroSection;

const SectionMargin = styled.section`
  position: relative;
  padding: 150px 0;
  background-color: #fff;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 30px;
  font-family: 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 300;
  color: #bfbfbf;
  margin-bottom: 40px;
`;
