import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ItemForm from './ItemForm/index.js';

const ItemFormModal = ({ modalActions, modalItem }) => {

  const [ showModal, toggleShowModal ] = useState(modalItem.isNewItemModalShow);

  return (
    <Modal show={ showModal } onHide={ () => toggleShowModal(!showModal) }>
      <Modal.Header closeButton>
        <Modal.Title>{modalItem.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ItemForm
          modalActions={ modalActions }
          modalItem={ modalItem }
        />
      </Modal.Body>
    </Modal>
  );
};

ItemFormModal.propTypes = {
  modalActions: PropTypes.object.isRequired,
  modalItem: PropTypes.object.isRequired
};

ItemFormModal.defaultProps = {
  modalActions: {
    handleSaveForm: () => {
      console.log('Handling a project save');
    },
  },
  modalItem: {
    id: '1',
    title: 'Default Title String',
    description: 'This is a default description string',
    isNewItemModalShow: false,
    modalTitle: 'New Project',
  }
};

export default ItemFormModal;