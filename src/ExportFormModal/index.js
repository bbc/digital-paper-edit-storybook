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
        <Modal.Title>Export {props.type}</Modal.Title>
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
  exportPath: PropTypes.string,
  items: PropTypes.array,
  showModal: PropTypes.bool,
  type: PropTypes.string.isRequired
};

ExportFormModal.defaultProps = {
  showModal: false,
};

export default ExportFormModal;
