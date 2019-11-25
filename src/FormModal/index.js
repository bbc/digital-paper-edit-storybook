import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ItemForm from '../ItemForm/index.js';
import TranscriptForm from '../TranscriptForm/index.js';

const FormModal = (props) => {

  const [ showModal, setShowModal ] = useState();
  const type = props.type.toLowerCase();
  const form = (type === 'transcript') ?
    <TranscriptForm { ...props }/> :
    <ItemForm { ...props }/>;

  useLayoutEffect(() => {
    setShowModal(props.showModal);

    return () => {

    };
  }, [ props.showModal ]);

  return (
    <Modal show={ showModal } onHide={ props.handleOnHide }>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {form}
      </Modal.Body>
    </Modal>
  );
};

FormModal.propTypes = {
  handleOnHide: PropTypes.func.isRequired,
  handleSaveForm: PropTypes.func.isRequired,
  id: PropTypes.string,
  modalTitle: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  showModal: PropTypes.bool,
  type: PropTypes.string
};

FormModal.defaultProps = {
  showModal: false,
  type: 'Project'
};

export default FormModal;
