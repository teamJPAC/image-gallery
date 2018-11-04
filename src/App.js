import React from 'react';
import TopNav from '../src/components/Nav/TopNav.js';
import NavToolbar from './components/Nav/NavToolbar.js';
import Gallery from '../src/components/Gallery/Gallery.js';
import PropertyInfo from '../src/components/Nav/PropertyInfo.js';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton, Image } from 'react-bootstrap';
import ImageGallery from '../src/components/Gallery/ImageGallery.js';
import axios from 'axios';
// import { debounce } from 'underscore';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      propInfo: [],
      showLogo: true,
      height: false,
      slider:'nav-toolbar-list'
    }
    this.updateWindowHeight = this.updateWindowHeight.bind(this);
  }

  componentDidMount() {
    let imageId = Number(window.location.pathname.replace(/\//, ''));
    imageId = imageId % 100;
    if (imageId >= 0 && imageId <= 100) {
      axios.get(`/homes/${imageId}`).then(result => {
          console.log('result is ', result);
          this.setState({
            propInfo: result.data
          })
          console.log('this.state.propInfo[0] is ', this.state.propInfo[0].imageUrl)
        })
    }
    this.updateWindowHeight();
  }

  updateWindowHeight() {
    window.onscroll = () => {
      if (window.scrollY >= 50) {
        this.setState({
          height: true,
          slider: 'nav-toolbar-list-Slide-left'
        })
      } else if (window.scrollY > 0 || window.scrollY < 50) {
       this.setState({
         height: false,
         slider: 'nav-toolbar-list-Slide-right'
       })
      }
    }
  }

  render(){
    const {height, slider,propInfo} = this.state
    if (propInfo.length) {
      return (
        <div className="main-wrapper">
          <Navbar className="navbar">
            <Navbar.Header>
              <Navbar.Brand> 
                <a href="/">
                  <Image id="brand" src="https://avatars3.githubusercontent.com/u/476233?s=200&v=4" />
                </a> 
              </Navbar.Brand>
            </Navbar.Header>
            <TopNav /> 
          </Navbar>
          <NavToolbar height={height} slider={slider} />
          <PropertyInfo />  
          <Gallery img={this.state.propInfo[0].imageUrl}/> 
        </div>
      )
    } else {
      return (
        <div id="loading-page">Loading...</div>
      )
    }
    
  };
};

// //pageYOffset

//  // <div id="property-info-navbar">
//         //   Public View
//         // </div> 

// import React from 'react';
// import ImageGallery from '../src/components/Gallery/ImageGallery.js';
// export default class App extends React.Component {
//   render() {
//     return (
//       <ImageGallery/>
//     )
//   }
// }
//{window.scrollY >= 75 ? "noBrand" : "brand"}

//position: fixed
// Yposition : 50 