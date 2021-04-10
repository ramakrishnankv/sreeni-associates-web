import React from 'react';

import { ContentBox } from '../../components/ContentBox';
import { Form } from '../../components/formElements/Form';
import { Button } from '../../components/formElements/Button';
import { TextField } from '../../components/formElements/TextField';

const Admin = () => {
  const onSubmit = (formValues) => {
    console.log('on submit called.....', formValues);
  };

  return (
    <div className="adminPage">
      <ContentBox title="Login">
        <Form name="login" onSubmit={onSubmit}>
          <TextField type="text" name="user" placeholder="User Name" />
          <TextField type="password" name="password" placeholder="Password" />
          <Button type="submit">
            Some
          </Button>
        </Form>
      </ContentBox>
    </div>
  )
};

export default Admin;