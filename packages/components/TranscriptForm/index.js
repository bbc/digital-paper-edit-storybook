import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TranscriptForm = ({ ...props }) => {

  const [ title, setTitle ] = useState(props.title);
  const [ description, setDescription ] = useState(props.description);
  const [ isValidated, setValidationStatus ] = useState(false);
  const [ formData, setFormData ] = useState({});

  const handleFileUpload = e => {
    const file = e.target.files[0];

    if (!title) {
      setTitle(file.name);
    }

    const fileObj = {
      title: title,
      description: description,
      file: file,
      type: file.type
    };

    setFormData(fileObj);
  };

  const sendRequest = () => {
    const tmpObj = {
      ...formData,
      title: title,
      description: description
    };

    setFormData(tmpObj);

    props.handleSaveForm(tmpObj);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidationStatus(true);

    if (form.checkValidity()) {
      sendRequest();
    }
  };

  return (<>
    <Form
      noValidate
      validated={ isValidated }
      onSubmit={ e => handleSubmit(e) }
    >
      <Form.Group controlId="formTranscriptTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter a transcript title"
          value={ title }
          onChange={ e => setTitle(e.target.value) }
        />
        <Form.Text className="text-muted">
            Choose a title for your Transcript
        </Form.Text>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            Please choose a title for your transcript
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formTranscriptDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a Transcript description"
          value={ description }
          onChange={ e => setDescription(e.target.value) }
        />
        <Form.Text className="text-muted">
                Choose an optional description for your Transcript
        </Form.Text>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            Please choose a description for your transcript
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formTranscriptMediaFile">
        <Form.Control
          required
          type="file"
          label="Upload"
          accept="audio/*,video/*"
          onChange={ e => handleFileUpload(e) }
        />
        <Form.Text className="text-muted">
            Select an audio or video file to upload
        </Form.Text>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            Please choose a audio or video file to upload
        </Form.Control.Feedback>
      </Form.Group>
      <Modal.Footer>
        <Button variant="primary" type="submit">
            Save
        </Button>
      </Modal.Footer>
    </Form>
  </>
  );
};

TranscriptForm.propTypes = {
  id: PropTypes.number.isRequired,
  projectId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleSaveForm: PropTypes.func.isRequired,
};

TranscriptForm.defaultProps = {
  id: 456,
  projectId: 123,
  title: 'Sample Transcript Title',
  description: 'Sample Transcript Description',
  handleSaveForm: () => {
    console.log('Form saved');
  },
};

export default TranscriptForm;
