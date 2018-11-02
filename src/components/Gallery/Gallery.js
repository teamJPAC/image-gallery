import React from 'react';
// import './Gallery.css';
import { Carousel } from 'react-bootstrap';
// import LightBox from './LightBox.js';
import Lightbox from 'react-image-lightbox';

// const faker = require('faker');

// const imageStorage = () => {
//   let arr = [];
//   for (let i = 0; i < 25; i++) {
//     arr.push({url: faker.image.avatar()})
//   }
//   return arr;
// }

// const images = imageStorage();
const images = [
        {id: 1, url: "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/1.jpg" },
        {id: 1, url: "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/2.jpg" },
        {id: 2, url: "https://s3.amazonaws.com/uifaces/faces/twitter/danvernon/128.jpg" },
        {id: 3, url: "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg" },
        {id: 4, url: "https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg" },
        {id: 5, url: "https://s3.amazonaws.com/uifaces/faces/twitter/osmanince/128.jpg" },
        {id: 6, url: "https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg" },
        {id: 1, url: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg" },
        {id: 4, url: "https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg" },
        {id: 3, url: "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg" },
      ]

// const imagesObj = {
//   url: Array.from( { length: 25 }, () =>  faker.image.avatar() )
// };

// const imagesArr = imagesObj.url;
// console.log('images is ', images.url[0])

// const seed = Array.from({ length: 100 }, () => {
//   return {
//     imageUrl: Array.from({ length: 20 }, () => { faker.image.city() }),
//     address: faker.address.streetAddress(),
//     zipcode: faker.address.zipCode(),
//     city: faker.address.city(),
//     State: faker.address.state(),
//   }
// })
/*
max 25 images, image[0] = profile, 
firstslide has profile, 5 images per row , 2 rows
2ndslide has 14 iamges, 7 images per row, 2 rows, first and last two images is the same as prev slide and next slide, respectively
3rd, same as above

*/

export default class Gallery extends React.Component {
  constructor() {
    super()
    this.state = {
      initial: true,
      current: '',
      isOpen: false,
      final: false,
      index: 0,
      direction: null,
      profile: images[0].url,
      imagesFirstSlideTRow: images.slice(1,7),
      imagesFirstSlideBRow: images.slice(7,15),
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
    const { isOpen, current, index, direction, imagesFirstSlideTRow, imagesFirstSlideBRow, imagesSecondSlide, imagesThirdSlide } = this.state;
    return (
      <Carousel 
        interval={null} 
        indicators={false} 
        activeIndex={index}
        prevIcon={index === 0 ? false : console.log('trolled')}
        nextIcon={index === 2 ? false : console.log('trolled')}
        direction={direction}
        onSelect={this.handleClick.bind(this)}
      >

        <Carousel.Item>
          <table>
          <tbody>
            <tr>
              <td>
                <img className="home-profile-image" alt="house" 
                  src={this.state.profile}
                  onClick={e => this.handleClickImage(e, this.state.profile)}/>
                  {isOpen && 
                  <Lightbox mainSrc={current} 
                            onCloseRequest={() => this.setState({ isOpen: false })}
                  />}
              </td>

              <tr>
                {
                  imagesFirstSlideTRow.map(image => (
                    <td>
                      <img className="gallery-images" style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                    </td>
                  ))
                }
              </tr>

              <tr>
                {
                  imagesFirstSlideBRow.map(image => (
                    <td>
                      <img style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                    </td>
                  ))
                }
              </tr>
              
              <tr>
                {
                  imagesFirstSlideTRow.map(image => (
                    <td>
                      <img className="gallery-images" style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                    </td>
                  ))
                }
              </tr>

              <tr>
                {
                  imagesFirstSlideBRow.map(image => (
                    <td>
                      <img style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                    </td>
                  ))
                }
              </tr>

              <tr>
                {
                  imagesFirstSlideTRow.map(image => (
                    <td>
                      <img className="gallery-images" style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                    </td>
                  ))
                }
              </tr>

              <tr>
                {
                  imagesFirstSlideBRow.map(image => (
                    <td>
                      <img style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                    </td>
                  ))
                }
              </tr>

              <tr>
                {
                  imagesFirstSlideTRow.map(image => (
                    <td>
                      <img className="gallery-images" style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                    </td>
                  ))
                }
              </tr>

              <tr>
                {
                  imagesFirstSlideBRow.map(image => (
                    <td>
                      <img style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                    </td>
                  ))
                }
              </tr>

              <tr>
                {
                  imagesFirstSlideTRow.map(image => (
                    <td>
                      <img className="gallery-images" style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                    </td>
                  ))
                }
              </tr>

              <tr>
                {
                  imagesFirstSlideBRow.map(image => (
                    <td>
                      <img style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                    </td>
                  ))
                }
              </tr>
            </tr>
          </tbody>
          </table>
        </Carousel.Item>
        
        <Carousel.Item>
          <table>
          <tbody>
            <tr>
              {
                imagesSecondSlide.map(image => (
                  <td>
                    <img style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                  </td>
                ))
              }
            </tr>
          </tbody>
          </table>
          <table>
          <tbody>
            <tr>
              {
                imagesSecondSlide.map(image => (
                  <td>
                    <img style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                  </td>
                ))
              }
            </tr>
          </tbody>
          </table>    
        </Carousel.Item>

        <Carousel.Item>
          <table>
          <tbody>
            <tr>
              {
                imagesSecondSlide.map(image => (
                  <td>
                    <img style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                  </td>
                ))
              }
            </tr>
          </tbody>
          </table>
          <table>
          <tbody>
            <tr>
              {
                imagesThirdSlide.map(image => (
                  <td>
                    <img style ={{'padding':'1px'}} width={300} height={250} alt="house" src={image.url}/>
                  </td>
                ))
              }
            </tr>
          </tbody>
          </table>             
        </Carousel.Item>
        
      </Carousel>
    )
  }
};

// images: [
//         {id: 1, url: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg" },
//         {id: 2, url: "https://s3.amazonaws.com/uifaces/faces/twitter/danvernon/128.jpg" },
//         {id: 3, url: "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg" },
//         {id: 4, url: "https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg" },
//         {id: 5, url: "https://s3.amazonaws.com/uifaces/faces/twitter/osmanince/128.jpg" },
//         {id: 6, url: "https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg" },
//         {id: 1, url: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg" },
//         {id: 4, url: "https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg" },
//         {id: 3, url: "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg" },
//       ]