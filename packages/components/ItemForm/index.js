import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ItemForm = ({ modalActions, modalItem }) => {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: this.props.title,
//       description: this.props.description,
//       validated: false,
//       id: this.props.id
//     };
//   }

  const [ description, setDescription ] = useState(modalItem.description);

  const [ isValidated, setFormValidation ] = useState(false);

  const [ title, setTitle ] = useState(modalItem.title);

  const validateField = (name, value) => {
    switch (name) {
    case 'title':
      if (value != null) {
        setTitle(value);
        setFormValidation(true);
      } else {
        setFormValidation(false);
      }
      break;
    case 'description':
      setDescription(value);
      setFormValidation(true);
      break;
    }
  };

  //   handleSubmit(event) {
  //     const form = event.currentTarget;
  //     if (!form.checkValidity()) {
  //       event.preventDefault();
  //       event.stopPropagation();
  //       this.setState({ validated: true });
  //     }

  //     if (form.checkValidity()) {
  //       event.preventDefault();
  //       event.stopPropagation();
  //       const tmpItem = {
  //         title: this.state.title,
  //         description: this.state.description,
  //         id: this.state.id
  //       };
  //       this.props.handleSaveForm(tmpItem);
  //     }

  //     //this.setState({ redirect: true, newProjectId: response.projectId });
  //   }

  return (

    <Form
      onSubmit={ e => this.handleSubmit(e) }
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          type="text"
          name="title"
          placeholder="Enter a project title"
          value={ title }
          onChange={ (e) => validateField(e.target.name, e.target.value) }
        />
        <Form.Text className="text-muted">
            Chose a title
        </Form.Text>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
                        Please chose a title
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Description </Form.Label>
        <Form.Control
          // required
          // as="textarea" rows="3"
          type="text"
          placeholder="Enter a project description"
          value={ description }
          name="description"
          onChange={ (e) => validateField(e.target.name, e.target.value) }
        />
        <Form.Text className="text-muted">
            Chose an optional description
        </Form.Text>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
                        Please chose a description
        </Form.Control.Feedback>
      </Form.Group>
      <Modal.Footer>
        <Button variant="primary" type="submit">
                        Save
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default ItemForm;