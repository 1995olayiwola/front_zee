import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({
  name,
  title,
  placeholder,
  handleChange,
  type,
  size,
  readOnly,
  plaintext,
  value
}) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        size={size}
       //readOnly={readOnly}
        plaintext={plaintext}
        value={value}
      />
    </Form.Group>
  );
};

export default Input;
