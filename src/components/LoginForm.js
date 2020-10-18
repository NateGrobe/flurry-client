import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const LoginForm = (props) => {
  return (
    <Container
      style={{
        width: '40%',
        marginRight: 'auto',
        marginTop: '5rem',
        backgroundColor: '#04c2e0',
        padding: '2rem',
        borderRadius: '10px'
      }}
    >
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type='username' placeholder='Username' />
          <br/>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
          <Button type='submit'>Submit</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default connect(
)(LoginForm);
