import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Collapse from 'react-bootstrap/Collapse';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote, faHeading, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const ExpandableMenu = () => {
  const [ open, setOpen ] = useState(false);
  const [ formOpen, setFormOpen ] = useState(false);
  const [ editType, setEditType ] = useState('');

  const toggleForm = (type) => {
    setOpen(!open);
    setEditType(type);
    setFormOpen(true);
  };

  const HeadingButton = () => {
    return (
      <Button
        onClick={ () => toggleForm('heading') }
        aria-controls="textInput"
        aria-expanded={ formOpen }
        variant="light">
        <FontAwesomeIcon icon={ faHeading } />
      </Button>
    );
  };

  const LinkButton = () => {
    return (
      <Button onClick={ () => toggleForm('link') }
        aria-controls="textInput"
        aria-expanded={ formOpen }
        variant="light">
        <FontAwesomeIcon icon={ faQuoteLeft } />
      </Button>
    );
  };

  const NotesButton = () => {
    return (
      <Button
        onClick={ () => toggleForm('notes') }
        aria-controls="textInput"
        aria-expanded={ formOpen }
        variant="light">
        <FontAwesomeIcon icon={ faStickyNote } />
      </Button>
    );
  };

  const CollapsibleForm = () => {
    let form;
    let icon;

    if (editType === 'heading') {
      icon = faHeading;
      form = <Form.Control id="textInput" size="lg" type="text" placeholder="Heading" />;
    } else if (editType === 'link') {
      icon = faQuoteLeft;
      form = <Form.Control id="textInput" type="text" placeholder="Link" />;
    } else {
      icon = faStickyNote;
      form = <Form.Control id="textInput" type="text" as="textarea" rows="3" placeholder="Notes" />;
    }

    return (
      <Collapse in={ formOpen }>
        <Form.Group as={ Row } controlId="formPlaintextEmail">
          <Form.Label column xs="1">
            <FontAwesomeIcon icon={ icon } />
          </Form.Label>
          <Col>
            {form}
          </Col>
        </Form.Group>
      </Collapse>
    );
  };

  return (
    <Row>
      <Col xs={ 1 }>
        <Button
          variant="light"
          onClick={ () => setOpen(!open) }
          aria-controls="menu"
          aria-expanded={ open }
        >
          +
        </Button>

      </Col>
      <Col>
        <hr width="100%" style={ { border: '2px dashed #C0C0C0' } } color="#FFFFFF" size="6" />
        <Collapse in={ open }>
          <div id="menu">
            <ButtonGroup aria-label="Add elements">
              <HeadingButton />
              <LinkButton />
              <NotesButton/>
            </ButtonGroup>
          </div>
        </Collapse>
        <CollapsibleForm></CollapsibleForm>
      </Col>

    </Row>
  );
};

export default ExpandableMenu;