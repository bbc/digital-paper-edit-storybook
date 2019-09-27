import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ItemForm from '../ItemForm/index.js';
import TranscriptForm from '../TranscriptForm/index.js';

const ItemFormModal = (props) => {

  const [ showModal, toggleShowModal ] = useState(props.showModal);
  const type = props.type.toLowerCase();

  const form = (type === 'transcript') ? <TranscriptForm { ...props }/> : <ItemForm { ...props }/>;

  return (
    <Modal show={ showModal } onHide={ () => toggleShowModal(!showModal) }>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {form}
      </Modal.Body>
    </Modal>
  );
};

ItemFormModal.propTypes = {
  description: PropTypes.string,
  handleSaveForm: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  showModal: PropTypes.bool,
  modalTitle: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  type: PropTypes.any
};

ItemFormModal.defaultProps = {
  id: 1,
  showModal: false,
  modalTitle: 'New Project',
  type: 'Project'
};

export default ItemFormModal;
