import React from 'react';
import Navi from '../src/components/Nav/Nav.js'
import Toolbar from '../src/components/Nav/SubNav.js'
import Gallery from '../src/components/Gallery/Gallery'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton, Image } from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="main-wrapper">
        <div className="navbar-header">
          </div>
          <Navbar className="navbar">
        <Navbar.Header>
          <Navbar.Brand>    
              <Image id="brand" src="https://avatars3.githubusercontent.com/u/476233?s=200&v=4" href="#home" />      
          </Navbar.Brand>
        </Navbar.Header>
        <Navi id="nav-top-header" /> 

        </Navbar>
            {/* <img class="logo" src={"https://avatars3.githubusercontent.com/u/476233?s=200&v=4"}/>    */}
            <Toolbar />  
            <Gallery/>
          </div>
    )
  };
};

//pageYOffset