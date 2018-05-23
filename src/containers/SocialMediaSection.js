import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const SocialMediaSection = () => (
  <SuperContainer>
    <Grid bsClass="container">
      <Row>
        <Title>Síguenos para mantenerte informado!</Title>
      </Row>
      <Row>
        <Col lg={2} mdPush={4}>
          <SuperItem name="instagram" size="5x"/>
        </Col>
        <Col lg={2} mdPush={4}>
          <SuperItem name="facebook-square" size="5x"/>
        </Col>
      </Row>
    </Grid>
  </SuperContainer> 
);

export default SocialMediaSection;

const SuperContainer = styled.header`
  position: relative;
  width: 100%;
  background: hsl(0, 0%, 98%);
  padding-bottom: 150px;
`;
const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 80px;
`;
const SuperItem = styled(FontAwesome)`
  display: block;
  background: -webkit-linear-gradient(to left, #7b4397, #dc2430);
  background: linear-gradient(to left, #7b4397, #dc2430);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
