import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactHtmlParser from 'react-html-parser';
import contents from '../../content';
import 'react-responsive-carousel/lib/styles/carousel.css';
import './KeyPractices.css';

const KeyPractices = () => {
  const thumbs = () => contents['keyPractices'].contents.map((item) => item.title) ;
  
  const texts = contents['keyPractices'].contents.map((item) => (
    <div>
      <h3>{ item.title }</h3>
      {ReactHtmlParser(item.content)}
    </div>
  ));

  return (
    <Carousel renderThumbs={thumbs} className="solo" >
      { texts }
    </Carousel>
  )
}

export default KeyPractices;