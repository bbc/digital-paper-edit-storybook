import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ItemForm from './ItemForm';

const ItemFormModal = props => {
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
        <ItemForm { ...props } />
      </Modal.Body>
    </Modal>
  );
};

ItemFormModal.propTypes = {
  handleOnHide: PropTypes.func.isRequired,
  handleSaveForm: PropTypes.func.isRequired,
  id: PropTypes.string,
  modalTitle: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  showModal: PropTypes.bool,
};

ItemFormModal.defaultProps = {
  showModal: false,
};

export default ItemFormModal;