import React from 'react';
import Navi from '../src/components/Nav/Nav.js'
import SubNav from '../src/components/Nav/SubNav.js'
import Gallery from '../src/components/Gallery/Gallery'
export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
         
        <Navi/>
        <SubNav/>
        <Gallery/>
        Nav Bar<br/>
        image container<br/>
        display images by categories<br/>
        scrollbar<br/>
  
      </div>
    )
  };
}

