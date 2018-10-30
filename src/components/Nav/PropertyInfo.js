import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';
// import './Nav.css';

const propInfoObj = {
	address: '8240 Se 31st St',
	city: 'Mercer Island',
	state: 'Washington',
	zipcode: '98040',
}

const PropertyInfo = () => {

    return (
      <div className="propertyInfo-main">
        <ul className="propertyInfo-bar">
          <li>
            <a className="public-View" href="#">
             Public View
            </a>
            
		        <a><span>{propInfoObj.address}</span></a>
		        <a><span>{propInfoObj.zipcode}</span></a>
		        <a><span>{propInfoObj.city}</span></a>
		        <a><span>{propInfoObj.state}</span></a>
          </li>

        </ul>

      </div>
    )

}

export default PropertyInfo;
