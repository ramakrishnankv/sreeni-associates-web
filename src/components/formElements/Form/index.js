import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';

const Form = ({
  autoComplete,
  children,
  className,
  formNoValidate,
  elementRef,
  name,
  onSubmit,
  ...props
}) => {
  let ref = useRef();
  if (elementRef) ref = elementRef;

  const getFormValues = (form) => {
    const vals = {};
    [...form.elements].map((elm) => {
      const { name, value } = elm;
      if(name) vals[name] = value;
    });
    console.log(vals)
    return vals;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let formVals;
    let form;
    if (ref.current && ref.current.elements) {
      form = ref.current;
      formVals = getFormValues(form)
    }
    onSubmit(formVals);
    form.reset();
  }
  return (
    <form name={name} autoComplete={autoComplete}
      className={className}
      formNoValidate={formNoValidate}
      ref={ref}
      onSubmit={onSubmitHandler}
      {...props} >
      {children &&
        (
        children.map((element, i) => <Fragment key={`${element.name}-elem-${i}`}>{element}</Fragment>)
        )
      }
    </form>
  )
}

Form.propTypes = {
  autoComplete: PropTypes.oneOf(['off', 'on']),
  children: PropTypes.any,
  className: PropTypes.string,
  formNoValidate: PropTypes.bool,
  elementRef: PropTypes.node,
  name: PropTypes.string,
  onSubmit: PropTypes.func,
}

Form.defaultProps = {
  autoComplete: 'off',
  children: null,
  className: '',
  formNoValidate: true,
  elementRef: null,
  name: 'appForm',
  onSubmit: () => { },
}

export { Form };