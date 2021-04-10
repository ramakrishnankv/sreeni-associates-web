import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import './ContentCreator.css';

const ContentCreator = ({
  content,
}) => {
  return (
    <div className="contentCreator">
      { ReactHtmlParser(content) }
    </div>
  )
};

ContentCreator.prototypes = {
  content: PropTypes.string,
}

ContentCreator.defaultProps = {
  content: '',
}

export { ContentCreator };