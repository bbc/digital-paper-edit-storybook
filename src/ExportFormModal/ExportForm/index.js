import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ExportForm = (props) => {

  const [ fileName, setFileName ] = useState('');
  const [ folderPath, setFolderPath ] = useState('');
  const [ isValidated, setIsValidated ] = useState(false);

  useEffect (() => {
    setFileName(props.fileName);
    setFolderPath(props.folderPath);

    return () => {
    };
  }, [ props.fileName, props.folderPath ]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    const formIsValid = form.checkValidity();
    setIsValidated(true);

    if (formIsValid) {
      const validatedForm = {
        fileName: fileName,
        id: props.id
      };

      props.handleSaveForm(validatedForm);
    }
  };

  return (

    <Form noValidate
      validated={ isValidated }
      onSubmit={ handleSubmit }
    >
      <Form.Group controlId="formFileName">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          type="text"
          name="fileName"
          placeholder="Enter export name"
          value={ fileName }
          onChange={ (e) => setFileName(e.target.value) }
        />
        <Form.Text className="text-muted">
          Enter export file name
        </Form.Text>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please enter export file name
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formFolderPath">
        <Form.Label>Folder Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a folder location where your Audio or Video is located"
          value={ folderPath }
          name="folderPath"
          onChange={ (e) => setFolderPath(e.target.value) }
        />
        <Form.Text className="text-muted">
          Please enter a folder location where your Audio or Video file is located
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

ExportForm.propTypes = {
  id: PropTypes.string,
  fileName: PropTypes.string,
  folderPath: PropTypes.string,
  showModal: PropTypes.bool,
  modalTitle: PropTypes.string,
  handleSaveForm: PropTypes.func.isRequired,
};

ExportForm.defaultProps = {
  showModal: false,
};

export default ExportForm;
