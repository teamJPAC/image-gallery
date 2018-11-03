import React from 'react';
// import './Gallery.css';
import { Carousel } from 'react-bootstrap';
// import LightBox from './LightBox.js';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


// const faker = require('faker');

const imageStorage = () => {
  let arr = [];
  for (let i = 0; i < 25; i++) {
    arr.push({url: faker.image.avatar()})
  }
  return arr;
}

// const images = imageStorage();
const images = [
        {id: 1, url: "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/1.jpg" },
        {id: 2, url: "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/2.jpg" },
        {id: 3, url: "https://photos.zillowstatic.com/p_c/IS2bx3mzfwnrpz0000000000.jpg" },
        {id: 4, url: "https://photos.zillowstatic.com/p_c/ISu4vr3tbofupz0000000000.jpg" },
        {id: 5, url: "https://photos.zillowstatic.com/p_c/ISyrbr9guj92v11000000000.jpg" },
        {id: 6, url: "https://photos.zillowstatic.com/p_c/ISi79reamgkga21000000000.jpg" },
        {id: 7, url: "https://photos.zillowstatic.com/p_c/ISqx6x0z7aw9811000000000.jpg" },
        {id: 8, url: "https://photos.zillowstatic.com/p_c/ISyrbr9guj92v11000000000.jpg" },
        {id: 9, url: "https://photos.zillowstatic.com/p_c/ISqdb3xgqosda21000000000.jpg" },
        {id: 10, url: "https://photos.zillowstatic.com/p_c/IS6yd3smyrhzu11000000000.jpg" },
        {id: 11, url: "https://photos.zillowstatic.com/p_c/ISif7393m3t7v11000000000.jpg" },
        {id: 12, url: "https://photos.zillowstatic.com/p_c/ISi3ir1qmb2bqz0000000000.jpg" },
        {id: 13, url: "https://photos.zillowstatic.com/p_c/ISu4vr3tbofupz0000000000.jpg" },
        {id: 14, url: "https://photos.zillowstatic.com/p_c/ISyrbr9guj92v11000000000.jpg" },
        {id: 15, url: "https://photos.zillowstatic.com/p_c/ISi79reamgkga21000000000.jpg" },
        {id: 16, url: "https://photos.zillowstatic.com/p_c/ISqx6x0z7aw9811000000000.jpg" },
        {id: 17, url: "https://photos.zillowstatic.com/p_c/ISyrbr9guj92v11000000000.jpg" },
        {id: 18, url: "https://photos.zillowstatic.com/p_c/ISqdb3xgqosda21000000000.jpg" },
        {id: 19, url: "https://photos.zillowstatic.com/p_c/IS6yd3smyrhzu11000000000.jpg" },
        {id: 20, url: "https://photos.zillowstatic.com/p_c/ISif7393m3t7v11000000000.jpg" },
        {id: 19, url: "https://photos.zillowstatic.com/p_c/IS6yd3smyrhzu11000000000.jpg" },
        {id: 20, url: "https://photos.zillowstatic.com/p_c/ISif7393m3t7v11000000000.jpg" },

      ]

/*
max 25 images, image[0] = profile, 
firstslide has profile, 5 images per row , 2 rows
2ndslide has 14 iamges, 7 images per row, 2 rows, first and last two images is the same as prev slide and next slide, respectively
3rd, same as above
*/

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    console.log('Gallery props.img is ', props.img);
    this.state = {
      current: '',
      isOpen: false,
      index: 0,
      direction: null,
      profile: images[0].url,
      imagesFirstSlideTRow: images.slice(1,7),
      imagesFirstSlideBRow: props.img,
      imagesSecondSlide: images.slice(10, 20),
      imagesThirdSlide: images.slice(20)
    }
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
    const { isOpen, current, index, direction, imagesSecondSlide, imagesThirdSlide, profile } = this.state;
    console.log(images[(index + images.length +1) % images.length].url)

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
                    <Lightbox mainSrc={images[index].url} 
                              nextSrc={images[(index + images.length + 1 ) % images.length].url}
                              prevSrc={images[(index + images.length - 1) % images.length].url}
                              onMovePrevRequest={() => 
                                this.setState({
                                  index: (index + images.length - 1) % images.length
                                })}
                              onMoveNextRequest={() => 
                                this.setState({
                                  index: (index + images.length + 1) % images.length
                                })}
                              onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                  }
            </div>
            <div className="img-side-pictures-container">
              {
                images.slice(1, 11).map((image, i) => (
                  <div className="home-children-pictures" key={i}>
                    <img className="gallery-images" alt="house" src={image.url} />
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
                images.slice(9, 21).map((image, i) => (
                  <div className="home-children-pictures" key={i}>
                    <img className="gallery-images" alt="house" src={image.url}/>
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
