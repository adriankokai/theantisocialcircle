import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import jay from '../../images/jay.jpg';
import dono from '../../images/dono.jpeg';
import gotti from '../../images/gotti.jpeg'; 

export class HomeGallery extends Component {
  CompanyDescription() {
    return(
      <div style={containerStyles} >
        <img src={jay} style={imageStyles} />
        <p style={imageTextStyles} className="white-text" >
          <h3>Company Description </h3>
          <p>Lorem ipsum dolor sit amet, </p>
          <p>consectetur adipiscing elit, sed do eiusmod tempor </p>
          <p>incididunt ut labore et dolore magna aliqua. Ut </p>
          <p>enim ad minim veniam, quis nostrud exercitation </p>
          <p>ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </p>
      </div>
    )
  }

  render() {
      return (
          <div className="black">
            <ImageGallery 
              items={this.images} 
              showThumbnails={false}
              showPlayButton={false}
              autoPlay={1}
            />
          </div>
      )
  }

  images = [
    {
        original: jay,
        thumbnail: jay,
        
        renderItem: this.CompanyDescription
      },
      {
        original: dono,
        thumbnail: dono,
      },
      {
        original: gotti,
        thumbnail: gotti,
      },
]

}

const imageStyles = {
  width: '100%',
  maxHeight: '100vh',
  objectFit: 'cover'
}

const containerStyles = {
  position: 'relative',
  textAlign: 'center',
  color: 'white'
}

const imageTextStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

export default HomeGallery
