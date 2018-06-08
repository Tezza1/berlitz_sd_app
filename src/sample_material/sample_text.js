import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in the app
/* IMPORT IMAGES */
import front_cover from './text_images/business_frontiers/front-cover.jpeg';
import front_insert from './text_images/business_frontiers/front-insert.jpeg';
import index from './text_images/business_frontiers/index.jpeg';
import index2 from './text_images/business_frontiers/index2.jpeg';
import unit6_p1 from './text_images/business_frontiers/unit6-p1.jpeg';
import unit6_p2 from './text_images/business_frontiers/unit6-p2.jpeg';
import review1_p1 from './text_images/business_frontiers/review1-p1.jpeg';
import review1_p2 from './text_images/business_frontiers/review1-p2.jpeg';
import review1_p3 from './text_images/business_frontiers/review1-p3.jpeg';
import unit13_p1 from './text_images/business_frontiers/unit13-p1.jpeg';
import unit13_p2 from './text_images/business_frontiers/unit13-p2.jpeg';
import unit35_p1 from './text_images/business_frontiers/unit35-p1.jpeg';
import unit35_p2 from './text_images/business_frontiers/unit35-p2.jpeg';
import unit36_p1 from './text_images/business_frontiers/unit36-p1.jpeg';
import unit36_p2 from './text_images/business_frontiers/unit36-p2.jpeg';
import review2_p1 from './text_images/business_frontiers/review2-p1.jpeg';
import review2_p2 from './text_images/business_frontiers/review2-p2.jpeg';
import review2_p3 from './text_images/business_frontiers/review2-p3.jpeg';
import review2_p4 from './text_images/business_frontiers/review2-p4.jpeg';
import back_cover from './text_images/business_frontiers/back-cover.jpeg';
 
const images = [
  front_cover, front_insert, index, index2, unit6_p1, unit6_p2, review1_p1, review1_p2, review1_p3, unit13_p1, unit13_p2, unit35_p1, unit35_p2,
  unit36_p1, unit36_p2, review2_p1, review2_p2, review2_p3, review2_p4, back_cover
];
 
export default class TextLightbox extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}