import React, { useRef, RefObject } from 'react';
import { Form } from 'react-bootstrap';

const MyForm: React.FC = () => {
  const myInputRef = useRef<HTMLInputElement>(null);
  return (
    <Form validated>
      <Form.Group>
        <Form.Text>MyInput</Form.Text>
        <Form.Control 
          required
          ref={myInputRef as RefObject<any>}
          minLength={5}
          type="text"
        />
      </Form.Group>
    </Form>
  );
};

export default MyForm;