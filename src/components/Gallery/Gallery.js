import React from 'react';
// import './Gallery.css';
import { Carousel } from 'react-bootstrap';
// import LightBox from './LightBox.js';
import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

/*
max 25 images, image[0] = profile, 
firstslide has profile, 5 images per row , 2 rows
2ndslide has 14 iamges, 7 images per row, 2 rows, first and last two images is the same as prev slide and next slide, respectively
3rd, same as above
*/

const captions = [
  'New Construction: $3,328,000 (4 beds, 4 baths, 4,142 sqft)'
]
export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: '',
      isOpen: false,
      index: 0,
      direction: null,
      profile: null || props.img[0],
      images: null || props.img.slice(0, 25),
    }
    console.log('Gallery props is ', props);
    console.log('Gallery-images is ', this.state.images)
  };

  handleClick(selectedIndex, e) {
    console.log(`selected=${selectedIndex} direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  handleClickImage(e, img) {
    e && e.preventDefault();
    this.setState({
      isOpen: true,
      current: img
    })
  }

  render() {
    const { isOpen, current, index, direction, images, imagesThirdSlide, profile } = this.state;
    console.log('images is ', images.slice(1, 11))

    return (
      <Carousel 
        interval={null} 
        indicators={false} 
        activeIndex={index}
        prevIcon={index === 0 ? false : console.log('trolled')}
        nextIcon={index === 1 ? false : console.log('trolled')}
        direction={direction}
        onSelect={this.handleClick.bind(this)}
      >
        <Carousel.Item>
          <div className="img-container">
            <div className="main-profile">
                <img className="home-profile-image" alt="house" 
                  src={profile}
                  onClick={e => this.handleClickImage(e, profile)}/>
                  {
                    isOpen && 
                    <Lightbox mainSrc={images[index]} 
                              mainSrcThumbnail={images[index]}
                              nextSrc={images[(index + images.length + 1 ) % images.length]}
                              prevSrc={images[(index + images.length - 1) % images.length]}
                              onMovePrevRequest={() => 
                                this.setState({
                                  index: (index + images.length - 1) % images.length
                                })}
                              onMoveNextRequest={() => 
                                this.setState({
                                  index: (index + images.length + 1) % images.length
                                })}
                              onCloseRequest={() => this.setState({ isOpen: false })}
                              imageTitle={`${index + 1} of ${images.length}`}
                              imageCaption={captions[0]}
                    />
                  }
            </div>
            <div className="img-side-pictures-container">
              { 
                images.slice(1, 11).map((image, i) => (
                  <div className="home-children-pictures" key={i}>
                    <img className="gallery-images" alt="house" src={image} />
                  </div>
                ))
              }
            </div>                      
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-container">
            <div className="img-side-pictures-container">
              { 
                images.slice(9, 24).map((image, i) => (
                  <div className="home-children-pictures" key={i}>
                    <img className="gallery-images" alt="house" src={image}/>
                  </div>
                )) 
              }
            </div>                      
          </div>
        </Carousel.Item> 
      </Carousel>
    )
  }
};
