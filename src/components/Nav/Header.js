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
      <header className="Main-Nav-Header">
        <nav>
          <a class="Main-Nav-Header-logo" href="/home">
            
          </a>
        </nav>
      </header>
    )
  }  
}

export default NavHeader;