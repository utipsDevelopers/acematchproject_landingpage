import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../img/logo.png'

const Header = () => (
    <SuperNavBar collapseOnSelect fixedTop>
    <Navbar.Header>
        <Navbar.Brand>
            <Logo src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Inicio
            </NavItem>
            <NavDropdown eventKey={3} title="Aces" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}><TitleNavDropdown> AceNutrition </TitleNavDropdown></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2}><TitleNavDropdown> AcePsychology </TitleNavDropdown></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}><TitleNavDropdown> AceKinesiology </TitleNavDropdown></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}><TitleNavDropdown> AceCommerce </TitleNavDropdown></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}><TitleNavDropdown> AceCoach </TitleNavDropdown></MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#">
              Contacto
            </NavItem>
            <NavItem eventKey={2} href="#">
              Registro
            </NavItem>
        </Nav>
    </Navbar.Collapse>
    </SuperNavBar>
);

export default Header;

const SuperNavBar = styled(Navbar)`
    border-color: rgba(34, 34, 34, 0.05);
    background-color: white;
    font-family: 'Helvetica', 'Arial', 'sans-serif';
    font-weight: 100;
    letter-spacing: 2px;
    font-size: 12px;
    text-transform: uppercase;
`;
const Logo = styled.img`
    height: 22px; 
    width: 137px; 
    max-width: 100%; 
    max-height: 100%;
`;
const TitleNavDropdown = styled.p`
  font-family: 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 100;
  letter-spacing: 2px;
  font-size: 12px;
  text-transform: capitalize;
`;
