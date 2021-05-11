import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ItemForm = (props) => {
  const type = props.type.toLowerCase();
  const [ description, setDescription ] = useState('');
  const [ isValidated, setIsValidated ] = useState(false);
  const [ title, setTitle ] = useState('');

  useEffect (() => {
    setDescription(props.description);
    setTitle(props.title);

    return () => {
    };
  }, [ props.description, props.title ]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    const formIsValid = form.checkValidity();
    setIsValidated(true);

    if (formIsValid) {
      const editedProject = {
        title: title,
        description: description,
        id: props.id
      };

      props.handleSaveForm(editedProject);
    }
  };

  const formValues = {
    'project': {
      title: 'Project title',
      titlePlaceholder: 'Enter a project title',
      titleFeedback: 'Please choose a project title',
      descriptionPlaceholder: 'Enter a project description (optional)'
    },
    'programme-script': {
      title: 'Programme script title',
      titlePlaceholder: 'Enter a programme script title',
      titleFeedback: 'Please choose a programme script title',
      descriptionPlaceholder: 'Enter a programme script description (optional)'
    }
  };

  return (

    <Form noValidate
      validated={ isValidated }
      onSubmit={ handleSubmit }
    >
      <Form.Group>
        <Form.Label>{formValues[type].title}</Form.Label>
        <Form.Control
          required
          type="text"
          name="title"
          placeholder={ formValues[type].titlePlaceholder }
          value={ title }
          onChange={ (e) => setTitle(e.target.value) }
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {formValues[type].titleFeedback}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder={ formValues[type].descriptionPlaceholder }
          value={ description }
          name="description"
          onChange={ (e) => setDescription(e.target.value) }
        />
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
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  showModal: PropTypes.bool,
  modalTitle: PropTypes.string,
  handleSaveForm: PropTypes.func.isRequired,
};

ItemForm.defaultProps = {
  showModal: false,
};

export default ItemForm;
