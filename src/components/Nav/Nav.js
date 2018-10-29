import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';
import DropDowns from './DropDowns';
// import './Nav.css';

const headerArr = ["Buy", "Rent", "Sell", "Mortgages", "Agent finder", "More"];
const dropDownOptions = {
  'Buy': headerArr,
  'Rent': headerArr,
  'Sell': headerArr,
  'Mortgages': headerArr,
  'Agent finder': headerArr,
  'More': headerArr,
};

export class Navi extends React.Component {
  render() {
    return (
      <Navbar className="navbar" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
           
              {/* <img style={{width: 100, height: 100}} src="https://avatars3.githubusercontent.com/u/476233?s=200&v=4" href="#home"/> */}
              {/* <span style={{"textAlign": "center"}}>Zill-Woah!</span> */}
         
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          {headerArr.map(header => <DropDowns header={header}/>)}
          <Nav id="nav-top-main-right">
            <NavItem id="Nav-top-right1" href="#">List your rental</NavItem>
            <NavItem id="Nav-top-right2" href="#">Advertise</NavItem>
            <NavItem id="Nav-top-right3" href="#">Sign in</NavItem>
            <NavItem id="Nav-top-right3" href="#">Join</NavItem>
          </Nav>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }  
}

export default Navi;