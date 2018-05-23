import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import AvailableInAppStore from '../img/availableInAppStore.png';
import AvailableInGooglePlay from '../img/availableInGooglePlay.png';

const Footer = () => (
  <FooterStyle>
    <AvailableImgsContainer>
      <Row>
        <Col lg={12}>
          <img src={AvailableInAppStore} className="logo" alt="" width="155px" height="60px"/>
          <img src={AvailableInGooglePlay} className="logo" alt="" width="190px" height="60px"/>
        </Col>
      </Row>
    </AvailableImgsContainer>
    <FooterItems1>© 2018 AceMatch. Todos los derechos reservados.</FooterItems1>
    <FooterItems2>Powered by Utips & Orionsoft</FooterItems2>
  </FooterStyle>
);

export default Footer;

const FooterStyle = styled.div`
  position:relative;
  bottom:0;
  width: 100%;
`;

const AvailableImgsContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 80px;
`;

const FooterItems1 = styled.li`
  display: flex;
  justify-content: center;
  color: #595959;
  font-family: 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 100;
  font-size: 15px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const FooterItems2 = styled.li`
  display: flex;
  justify-content: center;
  color: #595959;
  font-family: 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 100;
  font-size: 15px;
  margin-bottom: 40px;
`;
