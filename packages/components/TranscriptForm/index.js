import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TranscriptForm = ({ ...props }) => {

  const [ title, setTitle ] = useState(props.title);
  const [ description, setDescription ] = useState(props.description);
  const [ isValidated, setValidationStatus ] = useState(false);
  var [ formData, setFormData ] = useState({});

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleFileUpload = e => {
    const files = Array.from(e.target.files);
    const file = files[0];
    const tmpObj = {
      title: title,
      description: description,
      file: file,
      type: file.type
    };
    if (file.path) {
      tmpObj.path = file.path;
    }
    setFormData(tmpObj);

    if (!title) {
      setTitle(file.name);
    }
  };

  const sendRequest = async () => {

    const tmpObj = {
      ...formData,
      title: title,
      description: description
    };

    setFormData(tmpObj);
    props.handleSaveForm(formData);
    props.handleSubmitForm(formData);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    return (!form.checkValidity()) ? setValidationStatus(true) : sendRequest();
  };

  return (
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
          onChange={ e => handleTitleChange(e) }
        />
        <Form.Text className="text-muted">
            Chose a title for your Transcript
        </Form.Text>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            Please chose a title for your transcript
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formTranscriptDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a Transcript description"
          value={ description }
          onChange={ e => handleDescriptionChange(e) }
        />
        <Form.Text className="text-muted">
                Chose an optional description for your Transcript
        </Form.Text>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            Please chose a description for your transcript
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
            Please chose a audio or video file to upload
        </Form.Control.Feedback>
      </Form.Group>
      <Modal.Footer>
        <Button variant="primary" type="submit">
            Save
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default TranscriptForm;