import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
// import ItemForm from '../ItemForm';

const ItemFormModal = ({ modalActions, modalItem }) => {

  console.log(modalItem);
  const [ showModal, toggleShowModal ] = useState(modalItem.isNewItemModalShow);

  return (
    <Modal show={ showModal } onHide={ () => toggleShowModal(!showModal) }>
      <Modal.Header closeButton>
        <Modal.Title>{modalItem.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This is a test modal body</p>
      </Modal.Body>
    </Modal>
  );
};

export default ItemFormModal;