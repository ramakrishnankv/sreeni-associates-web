import React from 'react';

import { ContentBox } from '../../components/ContentBox';
import contents from '../../content';

import './Home.css';

const Home = () => (
  <div className="homePage">
    <ContentBox anchor='aboutUs' className='aboutUs' title={contents['aboutUs'].title} content={contents['aboutUs'].content}/>
    <ContentBox anchor="keyPractices" title={contents['keyPractices'].title} content={contents['keyPractices'].content} />
    <ContentBox anchor="team" title={contents['team'].title} content={contents['team'].content}/>
    <ContentBox anchor="location" title={contents['location'].title} content={contents['location'].content} />
    <ContentBox anchor="contactUs" title={contents['contactUs'].title} content={contents['contactUs'].content}/>
  </div>
);

export default Home;