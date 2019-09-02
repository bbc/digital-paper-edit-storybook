import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ItemForm = ({ modalActions, modalItem }) => {

  console.log(modalActions);
  const [ description, setDescription ] = useState(modalItem.description);

  const [ isValidated, setFormValidation ] = useState(false);

  const [ title, setTitle ] = useState(modalItem.title);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setFormValidation(true);
    } else if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      setFormValidation(true);
      const editedProject = {
        title: title,
        description: description,
        id: modalItem.id
      };

      modalActions.handleSaveForm(editedProject);
    }
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
            Chose a title
        </Form.Text>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            Please chose a title
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Description </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a project description"
          value={ description }
          name="description"
          onChange={ (e) => setDescription(e.target.value) }
        />
        <Form.Text className="text-muted">
            Chose an optional description
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
  modalActions: PropTypes.object.isRequired,
  modalItem: PropTypes.object.isRequired
};

ItemForm.defaultProps = {
  modalActions: {
    handleSaveForm: () => {
      console.log('Handling a project save');
    },
  },
  modalItem: {
    id: '1',
    title: 'Default Title String',
    description: 'This is a default description string',
    isNewItemModalShow: false,
    modalTitle: 'New Project',
  }
};

export default ItemForm;