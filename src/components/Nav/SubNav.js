import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';
// import './Nav.css';

const SubNav = ({height, slider}) => {
    console.log('height is ', height)
    console.log('slider is', slider)
    return (
      <Navbar id="nav-toolbar" fixedTop={height}>
      <Nav id={slider}>  
        <NavItem id={height ? 'navItem-contact-highlight': 'navItem-contact'}>CONTACT AGENT</NavItem> 
        <NavItem><i className="far fa-heart"></i>SAVE</NavItem> 
        <NavItem><i className="fas fa-envelope-square"></i>SHARE</NavItem>
        <NavDropdown title="MORE" id="SubNav-dropdowns">
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

//      <Navbar id="nav-toolbar" fixedTop={className >= 150? true : false}>
//       <Nav id="nav-toolbar-list">  
// import React from 'react';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';
// // import './Nav.css';

// const SubNav = ({height, slider}) => {
//     console.log('height is ', height)
//     console.log('slider is', slider)
//     return (
//       <Navbar id="nav-toolbar" fixedTop={height}>
//       <Nav id={slider}>  
//         <NavItem id={stickybar}><b>CONTACT AGENT</b></NavItem> 
//         <NavItem><b>SAVE</b></NavItem> 
//         <NavItem><b>SHARE</b></NavItem>
//         <NavDropdown style={{fontWeight: 'bold'}} title="MORE" id="SubNav-dropdowns">
//             {/* {headerArr.map(header => <MenuItem>{header}</MenuItem>)} */}
//             <MenuItem >Print</MenuItem> 
//             <MenuItem >Get New Listings In Email</MenuItem>
//             <MenuItem divider />
//             <MenuItem>Edit listing, photo, and price</MenuItem>
//             <MenuItem>Claim this listing</MenuItem>
//             <MenuItem>Report problem with listing</MenuItem> 
//         </NavDropdown>
//       </Nav>    
//       </Navbar>
//     )

// }

// export default SubNav;