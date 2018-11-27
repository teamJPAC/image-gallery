import React from 'react';
import NavToolbar from './components/Nav/NavToolbar.js';
import Gallery from '../src/components/Gallery/Gallery.js';
import PropertyInfo from '../src/components/Nav/PropertyInfo.js';
import Logo from '../src/components/Nav/Logo.js'
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      propInfo: [],
      height: false,
      slider:'nav-toolbar-list'
    }
    this.updateWindowHeight = this.updateWindowHeight.bind(this);
    this.getNextListing = this.getNextListing.bind(this);
    // this.sendPost = this.sendPost.bind(this);
    // this.sendPatch = this.sendPatch.bind(this);
    // this.sendDelete = this.sendDelete.bind(this);
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT WAS CALLED')
    let imageId = undefined;
    if (window.location.pathname === '/') {
      imageId = Math.floor(Math.random() * (10000000 - 1)) + 1;
    } else {
      imageId = Number(window.location.pathname.replace(/\//, ''))
    }
    //imageId = imageId % 100;
    if (imageId >= 0 && imageId <= 10000000) {
      axios.get(`/homes/${imageId}`)
      .then(result => {
        this.setState({
          propInfo: [ result.data.rows[0] ]
        })
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

  getNextListing() {
    let imageId = Math.floor(Math.random() * (10000000 - 1)) + 1;
    axios.get(`/homes/${imageId}`)
      .then(result => {
        this.setState( (state, props) => ({
          propInfo: [ result.data.rows[0] ]
        }))
      })
    this.updateWindowHeight();
  }

  // sendPost() {
  //   let imageId = Number(window.location.pathname.replace(/\//, ''));
  //   imageId = imageId % 100;
  //   if (imageId >= 0 && imageId <= 100) {
  //   axios.post(`/homes/${imageId}`, {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   })
  //   .then(result => console.log('Post result-->', result.data))
  //   .catch(err => console.log(err))
  //   }
  // }

  // sendPatch() {
  //   let imageId = Number(window.location.pathname.replace(/\//, ''));
  //   imageId = imageId % 100;
  //   if (imageId >= 0 && imageId <= 100) {
  //   axios.patch(`/homes/${imageId}`, {
  //     firstName: 'Barney',
  //     lastName: 'Rubble'
  //   })
  //   .then(result => console.log('Patch result-->', result.data))
  //   .catch(err => console.log(err))
  //   }
  // }

  // sendDelete() {
  //   let imageId = Number(window.location.pathname.replace(/\//, ''));
  //   imageId = imageId % 100;
  //   if (imageId >= 0 && imageId <= 100) {
  //   axios.delete(`/homes/${imageId}`, {
  //     information: 'to be deleted'
  //   })
  //   .then(result => console.log('Delete result-->', result.data))
  //   .catch(err => console.log(err))
  //   }
  // }

  render(){
    //const {height, slider, propInfo} = this.state
    if (this.state.propInfo.length) {
      console.log('i am about to render the App because the propInfo.length > 0')
      return (
        <div className="main-wrapper">
          <Logo />
          <NavToolbar height={this.state.height} slider={this.state.slider}
          getNextListing={this.getNextListing}/>
          <PropertyInfo info={this.state.propInfo[0]} />
          <Gallery img={this.state.propInfo[0].image_url}/>
        </div>
      )
    } else {
      console.log('I am about to render NOT LOADING...')
      return (
        <div id="loading-page">NOT Loading...</div>
      )
    }
  };
};

