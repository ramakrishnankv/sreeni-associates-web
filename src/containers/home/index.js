import React from 'react';

import { ContentBox } from '../../components/ContentBox';
import KeyPractices from '../../components/KeyPractices';
import contents from '../../content';

import './Home.css';

const Home = () => (
  <div className="homePage">
    <ContentBox expand="lg" shadow={false} anchor='aboutUs' className='aboutUs' title={contents['aboutUs'].title} content={contents['aboutUs'].content} />
    <ContentBox anchor="team" title={contents['team'].title} content={contents['team'].content} />
    <ContentBox expand="lg" anchor="keyPractices" className='keyPractices' title={contents['keyPractices'].title}>
      <KeyPractices />
    </ContentBox>
    <div className="row split-8-4">
      <ContentBox round="xl" anchor="contactUs" title={contents['contactUs'].title} content={contents['contactUs'].content} />
      <ContentBox round="xl" anchor="keyLinks" className='keyLinks' title={contents['keyLinks'].title} content={contents['keyLinks'].content}>
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
    </div>
    {/* <ContentBox anchor="location" title={contents['location'].title} content={contents['location'].content} /> */}
  </div>
);

export default Home;