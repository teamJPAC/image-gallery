import React from 'react';
import TopNav from '../src/components/Nav/TopNav.js';
import SubNav from '../src/components/Nav/SubNav.js';
import Gallery from '../src/components/Gallery/Gallery.js';
import PropertyInfo from '../src/components/Nav/PropertyInfo.js';
import LightBox from '../src/components/Gallery/LightBox.js';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton, Image } from 'react-bootstrap';
import ImageGallery from '../src/components/Gallery/ImageGallery.js';
import axios from 'axios';
import { debounce } from 'underscore';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      images: [],
      showLogo: true,
      height: false,
      slider:'nav-toolbar-list'

    }
    // this.handleScroll = this.handleScroll.bind(this);
    this.updateWindowHeight = this.updateWindowHeight.bind(this);
  }

  componentDidMount() {
    let imageId = Number(window.location.pathname.replace(/\//, ''));
    if (imageId >= 0 && imageId <= 100) {
      axios.get(`/homes/${imageId}`, result => {
        console.log('result is ', result);
        this.setState({
          images: result
        })
      })
    } else {
      axios.get('/', result => {
        this.setState({
          images: result
        })
      })
    }
    // window.addEventListener('scroll', window.onscroll = () => {console.log(window.scrollY)}
    // );
    console.log('this.state.images is ', this.state.images)
    // window.onscroll = () => {
    //  if (window.scrollY >= 50) {
    //    this.setState({
    //      height: true,
    //      slider: 'nav-toolbar-list-Slide-left'
    //    })
    //    console.log("ANIMATION START")   
    //  } else if (window.scrollY > 0 || window.scrollY < 50) {
    //   this.setState({
    //     height: false,
    //     slider: 'nav-toolbar-list-Slide-right'
    //   })
    //  }
    // }
    this.updateWindowHeight()
  }

  updateWindowHeight() {
    window.onscroll = () => {
      if (window.scrollY >= 50) {
        this.setState({
          height: true,
          slider: 'nav-toolbar-list-Slide-left'
        })
        console.log("ANIMATION START")   
      } else if (window.scrollY > 0 || window.scrollY < 50) {
       this.setState({
         height: false,
         slider: 'nav-toolbar-list-Slide-right'
       })
      }
     }
  }


  render(){
    const {height, slider} = this.state

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

        <TopNav /> 

        </Navbar>
        <SubNav height={height} slider={slider} />
        <PropertyInfo />
     
        <Gallery/>
        
      </div>
    )
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