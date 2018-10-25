import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';
import DropDowns from './DropDowns';
// import './Nav.css';

const headerArr = ["Buy", "Rent", "Sell", "Mortgages", "Agent finder", "More"];

export class Navi extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleOpen() {
    this.setState({
      isOpen: true
    })
  }

  handleClose() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <Navbar className="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            {/* <img style={{width: 100, height: 100}} src="https://avatars3.githubusercontent.com/u/476233?s=200&v=4" href="#home"/> */}
          </Navbar.Brand>
        </Navbar.Header>

      <Nav>
        <NavDropdown 
          onMouseEnter = { this.handleOpen.bind(this) }
          onMouseLeave = { this.handleClose.bind(this) }
          open={ this.state.isOpen}
          id="nav-dropdown" 
          title="Buy"
        > 
            <MenuItem ><b>Zipcode Home For Sale</b></MenuItem>
            <MenuItem divider />
            <MenuItem>Homes for sale</MenuItem>
            <MenuItem>Foreclosures</MenuItem>
            <MenuItem>For sale by owner</MenuItem>
            <MenuItem>Open houses</MenuItem>        
        </NavDropdown>

        {headerArr.map(header => {
          <DropDowns/>
        })}
        <NavDropdown title="Rent">
            <MenuItem ><b>Zipcode Home For Rent</b></MenuItem>
            <MenuItem divider />
            <MenuItem>Rental Buildings</MenuItem>
            <MenuItem>Apartments for rent</MenuItem>
            <MenuItem>Houses for rent</MenuItem>
            <MenuItem>All Rental Listings</MenuItem>
            <MenuItem>All Rental Buildings</MenuItem>
        </NavDropdown>

        <NavDropdown title="Sell">
            <MenuItem ><b>Zipcode Home For Rent</b></MenuItem>
            <MenuItem divider />
            <MenuItem>Rental Buildings</MenuItem>
            <MenuItem>Apartments for rent</MenuItem>
            <MenuItem>Houses for rent</MenuItem>
            <MenuItem>All Rental Listings</MenuItem>
            <MenuItem>All Rental Buildings</MenuItem>
        </NavDropdown>

        <NavDropdown title="Mortgages">
            <MenuItem ><b>Zipcode Home For Rent</b></MenuItem>
            <MenuItem divider />
            <MenuItem>Rental Buildings</MenuItem>
            <MenuItem>Apartments for rent</MenuItem>
            <MenuItem>Houses for rent</MenuItem>
            <MenuItem>All Rental Listings</MenuItem>
            <MenuItem>All Rental Buildings</MenuItem>
        </NavDropdown>

        <NavDropdown title="Agent finder">
            <MenuItem ><b>Zipcode Home For Rent</b></MenuItem>
            <MenuItem divider />
            <MenuItem>Rental Buildings</MenuItem>
            <MenuItem>Apartments for rent</MenuItem>
            <MenuItem>Houses for rent</MenuItem>
            <MenuItem>All Rental Listings</MenuItem>
            <MenuItem>All Rental Buildings</MenuItem>
        </NavDropdown>

        <NavDropdown title="More">
            <MenuItem ><b>Zipcode Home For Rent</b></MenuItem>
            <MenuItem divider />
            <MenuItem>Rental Buildings</MenuItem>
            <MenuItem>Apartments for rent</MenuItem>
            <MenuItem>Houses for rent</MenuItem>
            <MenuItem>All Rental Listings</MenuItem>
            <MenuItem>All Rental Buildings</MenuItem>
        </NavDropdown>
      </Nav>

      
      </Navbar>
    )
  }
  
  
}

export default Navi;