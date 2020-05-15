import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ExportForm from './ExportForm';

const ExportFormModal = props => {
  const [ showModal, setShowModal ] = useState();

  useLayoutEffect(() => {
    setShowModal(props.showModal);

    return () => {};
  }, [ props.showModal ]);

  return (
    <Modal show={ showModal } onHide={ props.handleOnHide }>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ExportForm { ...props } />
      </Modal.Body>
    </Modal>
  );
};

ExportFormModal.propTypes = {
  handleOnHide: PropTypes.func.isRequired,
  handleSaveForm: PropTypes.func.isRequired,
  id: PropTypes.string,
  modalTitle: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  showModal: PropTypes.bool,
};

ExportFormModal.defaultProps = {
  showModal: false,
};

export default ExportFormModal;
