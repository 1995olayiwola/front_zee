import React from 'react';
import { Form } from 'react-bootstrap';

const Textarea = (props) => {
  return (
    <Form.Group controlId={props.name}>
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        as="textarea"
        rows="3"
        name={props.name}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </Form.Group>
  );
};

export default Textarea;
