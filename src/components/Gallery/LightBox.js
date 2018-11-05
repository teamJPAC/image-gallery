import React from 'react';
import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// const images = [
//         {id: 1, url: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg" },
//         {id: 2, url: "https://s3.amazonaws.com/uifaces/faces/twitter/danvernon/128.jpg" },
//         {id: 3, url: "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg" },
//         {id: 4, url: "https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg" },
//         {id: 5, url: "https://s3.amazonaws.com/uifaces/faces/twitter/osmanince/128.jpg" },
//         {id: 6, url: "https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg" },
//         {id: 1, url: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg" },
//         {id: 4, url: "https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg" },
//         {id: 3, url: "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg" },
// ];

const images = [
  "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg",
  "https://s3.amazonaws.com/uifaces/faces/twitter/danvernon/128.jpg",
	"https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg",
	"https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg",
	"https://s3.amazonaws.com/uifaces/faces/twitter/osmanince/128.jpg",
	"https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg",
	"https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg",
	"https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg",
	"https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg",
];

export default class LightBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			photoIndex: 0,
			isOpen: false,
		};
	}

	render() {
		const { photoIndex, isOpen } = this.state;
		const nextIndex = (photoIndex + 1) % images.length;
		const prevIndex = (photoIndex + images.length - 1) % images.length;

		return (
			<div>
			  <button type="button" onClick={() => this.setState({ isOpen: true })}>
			    Open Lightbox
			  </button>

			  {isOpen && (
			  	<Lightbox
			  	  mainSrc={images[photoIndex]}
			  	  nextSrc={images[nextIndex]}
			  	  prevSrc={images[prevIndex]}
			  	  onCloseRequest={() => this.setState({ isOpen: false })}
			  	  onMovePrevRequest={() => 
			  	  	this.setState({ 
			  	  		photoIndex: prevIndex,
			  	    })
			  	  }
			  	  onMovePrevRequest={() => 
			  	  	this.setState({
			  	  	  photoIndex: nextIndex,
			  	    })
			  	  }
			  	/>
			  )}
			</div>
		)
	}
}