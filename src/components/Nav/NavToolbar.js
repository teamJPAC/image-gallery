import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';

const NavToolbar = ({height, slider, sendPost, sendPatch, sendDelete}) => {
  return (
    <Navbar id="nav-toolbar" fixedTop={height}>
    <Nav id={slider}>
      <NavItem id={height ? 'navItem-contact-highlight': 'navItem-contact'}
      onClick={() => sendPost()}
      >CONTACT AGENT</NavItem>
      <NavItem onClick={() => sendPatch()}><i className="far fa-heart"></i>SAVE</NavItem>
      <NavItem onClick={() => sendDelete()}><i className="fas fa-envelope-square"></i>SHARE</NavItem>
      <NavDropdown title="MORE" id="SubNav-dropdowns">
          <MenuItem >Print</MenuItem>
          <MenuItem >Get New Listings In Email</MenuItem>
          <MenuItem divider />
          <MenuItem>Edit listing, photo, and price</MenuItem>
          <MenuItem>Claim this listing</MenuItem>
          <MenuItem>Report problem with listing</MenuItem>
      </NavDropdown>
    </Nav>
    </Navbar>
  )
}

export default NavToolbar;
