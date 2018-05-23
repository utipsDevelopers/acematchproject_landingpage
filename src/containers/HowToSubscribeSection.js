import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { Grid, Row, Col } from 'react-bootstrap';

const HowToSubscribeSection = () => (
  <SuperContainer>
    <Grid bsClass="container">
      <Row>
        <Col lg={12}>
          <Title>Inscríbete!</Title>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <SuperItem name="cloud-download" size="5x"/>
          <SubTitle>Descarga la app </SubTitle>
          <p class="text-muted">Descarga la app desde la App Store o Google Play</p>
        </Col>
        <Col lg={4}>
          <SuperItem name="address-card-o" size="5x"/>
          <SubTitle>Identifícate </SubTitle>
          <p class="text-muted">Cuéntanos acerca de tí y de tu desempeño deportivo </p>
        </Col>
        <Col lg={4}>
          <SuperItem name="flag" size="5x"/>
          <SubTitle>A jugar! </SubTitle>
          <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor</p>
        </Col>
      </Row>
    </Grid>
  </SuperContainer>
);

export default HowToSubscribeSection;

const SuperContainer = styled.header`
  position: relative;
  width: 100%;
  padding-bottom: 100px;
  background: #fff;
`;
const Title = styled.h1`
  font-size: 150px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 80px;
  @media screen and (max-width: 850px) {
    font-size: 100px;
  }
  @media screen and (max-width: 800px) {
    font-size: 70px;
  }
`;
const SubTitle = styled.h3`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
`;
const SuperItem = styled(FontAwesome)`
  display: block;
  background: -webkit-linear-gradient(to left, #7b4397, #dc2430);
  background: linear-gradient(to left, #7b4397, #dc2430);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
