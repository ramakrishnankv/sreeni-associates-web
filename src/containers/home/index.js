import React from 'react';

import { ContentBox } from '../../components/ContentBox';
import KeyPractices from '../../components/KeyPractices';
import contents from '../../content';

import './Home.css';

const Home = () => (
  <div className="homePage">
    <ContentBox anchor='aboutUs' className='aboutUs' title={contents['aboutUs'].title} content={contents['aboutUs'].content} />
    <ContentBox anchor="team" title={contents['team'].title} content={contents['team'].content}/>
    <ContentBox anchor="keyPractices" title={contents['keyPractices'].title}>
       <KeyPractices />
    </ContentBox>
    <ContentBox anchor="keyLinks" title={contents['keyLinks'].title} content={contents['keyLinks'].content}>
      <ol>
        {
          contents['keyLinks'].contents.map((item) =>
            <li>
              <a href={item.link} rel='noreferrer' target='_blank'>{item.content}</a>
            </li>
          )
        }
      </ol>
    </ContentBox>
    {/* <ContentBox anchor="location" title={contents['location'].title} content={contents['location'].content} /> */}
    <ContentBox anchor="contactUs" title={contents['contactUs'].title} content={contents['contactUs'].content}/>
  </div>
);

export default Home;