import React from 'react';
import { Form } from 'react-bootstrap';

const Select = (props) => {
  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        as="select"
        name={props.name}
        onChange={props.handleChange}
        size={props.size}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
  );
};

export default Select;
