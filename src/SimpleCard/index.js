import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LinkContainer } from 'react-router-bootstrap';
import CardDottedMenu from '../CardDottedMenu';
import 'bootstrap-css-only/css/bootstrap.css';

const SimpleCard = props => {
  const handleDelete = () => {
    const message = 'Do you want to delete your item?';
    const confirmDelete = window.confirm(message);
    if (confirmDelete) {
      props.handleDeleteItem(props.id);
    }
  };

  const handleEdit = () => {
    props.handleEditItem(props.id);
  };

  return (
    <Card
      style={ { width: '100%', marginBottom: '1em' } }
    >
      <Card.Body>
        <Row>
          <LinkContainer to={ props.url } style={ { cursor: 'pointer' } }>
            <Col xs={ 10 }>
              <Card.Title style={ { color: '#007bff' } }>{props.title}</Card.Title>
            </Col>
          </LinkContainer>

          <Col xs={ 1 }>
            <CardDottedMenu
              handleEdit={ handleEdit }
              handleDelete={ handleDelete }
            />
          </Col>
        </Row>
        <Row>
          <Col xs={ 10 } sm={ 11 }>
            <Card.Subtitle className="mb-2 text-muted">
              {props.description}
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

SimpleCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleEditItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  showLinkPath: PropTypes.func
};

SimpleCard.defaultProps = {
  title: '',
  description: ''
};

export default SimpleCard;
