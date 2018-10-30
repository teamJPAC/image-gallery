import React from 'react';
import Navi from '../src/components/Nav/Nav.js';
import SubNav from '../src/components/Nav/SubNav.js';
import Gallery from '../src/components/Gallery/Gallery.js';
import PropertyInfo from '../src/components/Nav/PropertyInfo.js';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton, Image } from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      images: []
    }
  }

  // componentDidMount() {
  //   $.get('/', result => {
  //     this.setState({
  //       images: result
  //     })
  //   })
  // }

  render(){
    return (
      <div className="main-wrapper">
        <div className="navbar-header"></div>

      <Navbar className="navbar">
        <Navbar.Header>
          <Navbar.Brand>    
            <a href="#">
              <Image id="brand" src="https://avatars3.githubusercontent.com/u/476233?s=200&v=4" />
            </a> 
          </Navbar.Brand>
        </Navbar.Header>

        <Navi id="nav-top-header" /> 

        </Navbar>
        <SubNav />
        <PropertyInfo />
        <Gallery/>
      </div>
    )
  };
};

//pageYOffset

 // <div id="property-info-navbar">
        //   Public View
        // </div> 