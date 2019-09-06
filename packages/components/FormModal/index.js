import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ItemForm from './ItemForm/index.js';

const ItemFormModal = (props) => {

  const [ showModal, setShowModal ] = useState(props.showModal);

  return (
    <Modal show={ showModal } onHide={ () => toggleShowModal(!showModal) }>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ItemForm
          { ...props }
        />
      </Modal.Body>
    </Modal>
  );
};

ItemFormModal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  isNewItemModalShow: PropTypes.bool.isRequired,
  modalTitle: PropTypes.string.isRequired,
  handleSaveForm: PropTypes.func.isRequired,
};

ItemFormModal.defaultProps = {
  handleSaveForm: () => {
    console.log('Handling a project save');
  },
  id: 1,
  isNewItemModalShow: false,
  modalTitle: 'New Project',
};

export default ItemFormModal;
