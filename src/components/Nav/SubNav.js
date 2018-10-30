import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';
// import './Nav.css';

const SubNav = () => {

    return (
      <Navbar id="nav-toolbar">
      <Nav id="nav-toolbar-list">  
        <NavItem><b>CONTACT AGENT</b></NavItem> 
        <NavItem><b>SAVE</b></NavItem> 
        <NavItem><b>SHARE</b></NavItem>
        <NavDropdown style={{fontWeight: 'bold'}} title="MORE">
            {/* {headerArr.map(header => <MenuItem>{header}</MenuItem>)} */}
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

export default SubNav;
