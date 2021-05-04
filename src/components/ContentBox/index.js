import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import './ContentBox.css';

const ContentBox = ({
  anchor,
  children,
  className,
  content,
  expand,
  margin,
  padding,
  round,
  shadow,
  title,
  titleRule,
}) => {
  const shadowClass = shadow ? 'shadow' : '';
  const marginClass = margin ? 'margin' : '';
  const paddingClass = padding ? 'padding' : '';

  return (
    <div className={`contentBox ${marginClass} ${paddingClass} ${shadowClass} round${round} ${className} expand${expand}`} id={anchor}>
      { title && (<h3 className={`title ${titleRule ? 'rule' : '' }`}>{title}</h3>)}
      { content && (<div className="content">{ReactHtmlParser(content)}</div>)}
      { children}
    </div>
  )
};

ContentBox.prototypes = {
  anchor: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  content: PropTypes.string,
  expand: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  margin: PropTypes.bool,
  padding: PropTypes.bool,
  round: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  shadow: PropTypes.bool,
  title: PropTypes.string,
  titleRule: PropTypes.bool,
}

ContentBox.defaultProps = {
  anchor: '',
  children: null,
  className: '',
  content: '',
  margin: true,
  padding: true,
  round: '',
  shadow: true,
  title: '',
  titleRule: true,
}

export { ContentBox };
