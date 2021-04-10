import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  className,
  disabled,
  elementRef,
  name,
  onClick,
  type,
  ...props
}) => {
  let ref = useRef();
  if (elementRef) ref = elementRef;

  const onClickHandler = (event) => {
    onClick();
  }
  return (
    <button name={name}
      className={className}
      disabled={disabled}
      ref={ref}
      onClick={onClickHandler}
      type={type}
      {...props} >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  elementRef: PropTypes.shape(),
  name: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  elementRef: null,
  name: 'appButton',
  onClick: () => { },
  type: 'button',
}

export { Button };