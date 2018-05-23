import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Video from '../components/Video';

const VideoSection = () => (
  <SectionMargin>
    <Grid bsClass="container">
      <Row>
        <Col lg={6} lgPush={6}>
          <Row>
            <Title>Cómo</Title> 
          </Row>
          <Row>
            <SubTitle>funciona la </SubTitle>
            <BoldTitle> app?</BoldTitle>
          </Row>
        </Col>
        <Col lg={6} lgPull={6}>
            <Video />
        </Col>
      </Row>
    </Grid>
  </SectionMargin>
);

export default VideoSection;

const SectionMargin = styled.section`
  position: relative;
  padding: 150px 0;
  background: hsl(0, 0%, 98%);
  text-align: right;
  @media screen and (max-width: 850px) {
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 150px;
  text-align: right;
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
`;
const SubTitle = styled.span`
  font-size: 30px;
  text-align: right;
  color: #808080;
`;
