import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const TextField = ({
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
    <label>
      <input name={name}
        className={className}
        disabled={disabled}
        ref={ref}
        onClick={onClickHandler}
        type={type}
        {...props} />
    </label>
  )
}

TextField.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  elementRef: PropTypes.shape(),
  name: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['hidden', 'number', 'password', 'tele', 'text'])
}

TextField.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  elementRef: null,
  name: 'appTextField',
  onClick: () => { },
  type: 'text',
}

export { TextField };