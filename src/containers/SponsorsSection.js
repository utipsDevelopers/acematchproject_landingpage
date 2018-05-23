import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import Cachantun from '../img/cachantunLogo.png';
import Gatorade from '../img/gatoradeLogo.png';
import Head from '../img/headLogo.png';

const SponsorsSection = () => (
  <SuperContainer>
    <Grid bsClass="container">
      <Row>
        <Col lg={4}>
          <img src={Cachantun} className="logo" alt="" width="160px" height="160px"/>
        </Col>
        <Col lg={4}>
          <img src={Gatorade} className="logo" alt="" width="150px" height="150px"/>
        </Col>
        <Col lg={4}>
          <img src={Head} className="logo" alt="" width="140px" height="140px"/>
        </Col>
      </Row>
    </Grid>
  </SuperContainer> 
);

export default SponsorsSection;

const SuperContainer = styled.header`
  position: relative;
  width: 100%;
  background: hsl(0, 0%, 98%);
  padding-top: 40px;
  padding-bottom: 40px;
`;
