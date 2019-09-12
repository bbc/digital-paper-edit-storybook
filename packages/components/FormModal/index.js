import React, { useState } from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ItemForm from '../ItemForm/index.js';
import TranscriptForm from '../TranscriptForm/index.js';

const ItemFormModal = (props) => {

  const [ showModal, toggleShowModal ] = useState(props.showModal);

  const form = (props.type === 'transcript') ? <TranscriptForm { ...props }/> : <ItemForm { ...props }/>;

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
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  showModal: PropTypes.bool.isRequired,
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
