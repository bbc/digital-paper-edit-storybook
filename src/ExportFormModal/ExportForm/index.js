import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

const ExportForm = (props) => {
  const [ exportPath, setExportPath ] = useState('');
  const [ isValidated, setIsValidated ] = useState(false);
  const [ isWindows, setIsWindows ] = useState(props.isWindows);

  const WINDOWS_PLACEHOLDER = 'D:\\Example\\Path';
  const WINDOWS_PATH_JOIN = '\\';
  const UNIX_PLACEHOLDER = '/Example/Path';
  const UNIX_PATH_JOIN = '/';
  const [ placeholder, setPlaceholder ] = useState(WINDOWS_PLACEHOLDER);
  const [ pathJoin, setPathJoin ] = useState(WINDOWS_PATH_JOIN);

  useEffect(() => {
    setExportPath(props.exportPath);

    return () => {};
  }, [ props.exportPath ]);

  useEffect(() => {
    if (isWindows) {
      setPlaceholder(WINDOWS_PLACEHOLDER);
      setPathJoin(WINDOWS_PATH_JOIN);
    } else {
      setPlaceholder(UNIX_PLACEHOLDER);
      setPathJoin(UNIX_PATH_JOIN);
    }

    return () => {};
  }, [ isWindows ]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    const formIsValid = form.checkValidity();
    setIsValidated(true);

    if (formIsValid) {
      const validatedForm = {
        exportPath: exportPath,
      };

      props.handleSaveForm(validatedForm);
    }
  };

  const FilesList = (
    <ul>
      {props.items.map((item) => <li key={ `${ item }` }>{exportPath}{pathJoin}{item}</li>)}
    </ul>
  );

  return (
    <>
      <BootstrapSwitchButton
        checked={ isWindows }
        onlabel='Windows'
        onstyle='success'
        offlabel='Mac/Linux'
        offstyle='info'
        style='w-100'
        onChange={ setIsWindows }
      />
      <Form noValidate validated={ isValidated } onSubmit={ handleSubmit }>
        <Form.Group controlId="formFileName">
          <Form.Label>Project Folder Directory</Form.Label>

          <Form.Control
            required
            type="text"
            name="fileName"
            placeholder={ placeholder }
            value={ exportPath }
            onChange={ (e) => setExportPath(e.target.value) }
          />
          <Form.Text className="text-muted">
            The folder path of the video and audio for the project.
          </Form.Text>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a valid file path.
          </Form.Control.Feedback>
        </Form.Group>
        {props.items.length > 0 ?
          <>
            The { props.type } will have the following content paths:
            { FilesList }
          </> : null}

        <Modal.Footer>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

ExportForm.propTypes = {
  exportPath: PropTypes.any,
  handleSaveForm: PropTypes.func,
  items: PropTypes.array,
  showModal: PropTypes.bool,
  type: PropTypes.any,
  isWindows: PropTypes.bool
};

ExportForm.defaultProps = {
  showModal: false,
  isWindows: true
};

export default ExportForm;
