import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import ClubPalestino from '../img/club1.png'; 
import ClubSirio from '../img/club2.png'; 

const VenuesSection = () => (
  <SectionMargin>
    <Grid bsClass="container">
      <Row>
        <Col lg={6}>
          <Row>
            <Title>Clubes </Title> 
          </Row>
          <Row>
            <SubTitle>donde puedes </SubTitle>
            <BoldTitle> jugar!</BoldTitle>
          </Row>
        </Col>
        <Col lg={6}>
          <Row>
            <Col lg={6}>
              <img src={ClubPalestino} className="logo" alt="Club Palestino AceMatch" width="250px" height="250px"/>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              </Paragraph>
            </Col>
            <Col lg={6}>
              <img src={ClubSirio} className="logo" alt="Club Sirio AceMatch" width="250px" height="250px"/>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              </Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </SectionMargin>
);

export default VenuesSection;

const SectionMargin = styled.section`
  position: relative;
  padding: 150px 0;
  text-align: left;
  background-color: #262626;
  @media screen and (max-width: 850px) {
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 150px;
  text-align: left;
  color: #fff;
  margin-top:auto;
  margin-bottom:auto;
  @media screen and (max-width: 850px) {
    text-align: center;
    font-size: 100px;
  }
  @media screen and (max-width: 800px) {
    text-align: center;
    font-size: 70px;
  }
`;
const BoldTitle = styled.span`
  font-size: 50px;
  font-weight: bold;
  text-align: right;
  color: #808080;
  margin-bottom: 40px;
`;
const SubTitle = styled.span`
  font-size: 30px;
  text-align: right;
  color: #808080;
`;
const Paragraph = styled.p`
  text-align: center;
  color: hsl(0, 0%, 40%);
`;
