import React from 'react';
import Navi from '../src/components/Nav/Nav.js'
import Toolbar from '../src/components/Nav/SubNav.js'
import Gallery from '../src/components/Gallery/Gallery'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="main-wrapper">
        <div className="navbar-header">
        </div>    
          <Navi id="nav-top-header" /> 
          <Toolbar />  
          <Gallery/>
        </div>
    )
  };
};

