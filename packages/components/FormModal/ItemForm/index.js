import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ItemForm = (props) => {

  const [ description, setDescription ] = useState(props.description);

  const [ isValidated, setIsValidated ] = useState(false);

  const [ title, setTitle ] = useState(props.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isValidated) {
      const editedProject = {
        title: title,
        description: description,
        id: props.id
      };

      props.handleSaveForm(editedProject);
    } else if (!isValidated) {
      setIsValidated(true);
    };
  };

  return (

    <Form noValidate validated={ isValidated }
      onSubmit={ handleSubmit }
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          type="text"
          name="title"
          placeholder="Enter a project title"
          value={ title }
          onChange={ (e) => setTitle(e.target.value) }
        />
        <Form.Text className="text-muted">
            Choose a title
        </Form.Text>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            Please choose a title
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a project description"
          value={ description }
          name="description"
          onChange={ (e) => setDescription(e.target.value) }
        />
        <Form.Text className="text-muted">
            Choose an optional description
        </Form.Text>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Modal.Footer>
        <Button variant="primary" type="submit">
            Save
        </Button>
      </Modal.Footer>
    </Form>
  );
};

ItemForm.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  showModal: PropTypes.bool.isRequired,
  modalTitle: PropTypes.string.isRequired,
  handleSaveForm: PropTypes.func.isRequired,
};

ItemForm.defaultProps = {
  handleSaveForm: () => {
    console.log('Handling a project save');
  },
  id: 1,
  isNewItemModalShow: false,
  modalTitle: 'New Project',
};

export default ItemForm;
