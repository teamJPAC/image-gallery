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
           <Navi/> 
      
        <Toolbar/>
    
           <Gallery/>
        
         

        Nav Bar<br/>
        image container<br/>
        display images by categories<br/>
        scrollbar<br/>
  
      </div>
    )
  };
}

