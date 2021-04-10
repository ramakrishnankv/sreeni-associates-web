import React from 'react';

import { ContentBox } from '../../components/ContentBox';
import contents from '../../content';

const Error = () => (
  <div className="errorPage">
    <ContentBox anchor='error' title={contents['error'].title} content={contents['error'].content}/>
  </div>
);

export default Error;