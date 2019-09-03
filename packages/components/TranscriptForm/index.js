import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import ApiWrapper from '../../Helpers/DemoAPIWrapper/index.js';
// import CustomAlert from './CustomAlert/index.js';
// import './index.module.css';
// import whichJsEnv from '../../Util/which-js-env';

const TranscriptForm = ({ ...props }) => {

  const [ title, setTitle ] = useState(props.title);
  const [ description, setDescription ] = useState(props.description);
  const [ isValidated, setValidationStatus ] = useState(false);
  const [ shouldRedirect, toggleRedirectStatus ] = useState(false);
  var [ formData, setFormData ] = useState({});
  const [ notification, setNotification ] = useState(null);
  const [ isUploading, setIsUploadingStatus ] = useState(false);
  const [ uploadCompleted, setIsUploadComplete ] = useState(false);

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  //   const updateFormData = (file) => {
  //     setFormData(
  //       formData = file,
  //       formData.type = file.type
  //     );

  //     if (file.path) {
  //       setFormData(formData.path = file.path);
  //     }
  //   };

  const handleFileUpload = e => {
    const files = Array.from(e.target.files);
    const file = files[0];
    console.log(file.name);
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

  const sendRequest = () => {
    setIsUploadingStatus(true);

    const tmpObj = {
      ...formData,
      title: title,
      description: description
    };

    setFormData(tmpObj);

    return props.handleSaveForm(formData);
  };

  // const electronData = {};
  // if (whichJsEnv() === 'electron') {
  // // if client run inside of electron
  // // is easier to pass another object with title, description
  // // as well as the additional path to the file
  // // rather then parsing a formData object in node etc..
  //   electronData = {
  //     title: formData.title,
  //     description: formData.description,
  //     path: formData.path
  //   };
  // }
  //     try {
  //       ApiWrapper.createTranscript(props.projectId, formData, data)
  //         .then(response => {
  //           console.log('ApiWrapper.createTranscript-response ', response);
  //           setIsUploadingStatus(false);
  //           setIsUploadComplete(true);

  //           props.handleSaveForm(response.transcript);

  //           this.setState({
  //             uploading: false,
  //             uploadCompleted: true,
  //             redirect: true,
  //             newTranscriptId: response.transcriptId
  //           });
  //           props.handleSaveForm(response.transcript);

  //         }).catch(() => {
  //           const alert = <CustomAlert
  //             dismissable={ true }
  //             variant={ 'danger' }
  //             heading={ 'Error could not contact the server' }
  //             message={ <p>There was an error trying to create this transcript on the server</p> }
  //           />;

  //           setNotification(alert);
  //           setIsUploadingStatus(false);
  //           toggleRedirectStatus(false);
  //         });

  //     } catch (e) {
  //       console.error('error submitting:::', e);
  //     }
  //   };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    return (!form.checkValidity()) ? setValidationStatus(true) : sendRequest();
  };

  return (
    <>
      {notification}

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
    </>
  );
};

export default TranscriptForm;