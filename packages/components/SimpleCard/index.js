import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPen
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-css-only/css/bootstrap.css';

class SimpleCard extends Component {
    handleDelete = () => {
      const confirmDeleteText = "Click OK if you wish to delete or cancel if you don't";
      const cancelDeleteText = 'All is good, it was not deleted';
      const confirmationPrompt = confirm(confirmDeleteText);

      if (confirmationPrompt) {
        this.props.handleDelete ? this.props.handleDelete(this.props.id) : alert(cancelDeleteText);
      }
    };

    handleEdit = () => {
      this.props.handleEdit(this.props.id);
    }

    render() {

      return (
        <Card style={ { width: '100%', marginBottom: '1em' } }>
          <Card.Body>
            <Row>
              <LinkContainer to={ `${ this.props.url }` } style={ { cursor: 'pointer' } }>
                <Col xs={ 8 } sm={ 10 }>
                  <Card.Title>
                    {this.props.title}
                  </Card.Title>
                </Col>
              </LinkContainer>
              <Col xs={ 2 } sm={ 1 }>
                <Card.Link>
                  <Button
                    onClick={ this.handleEdit }
                    variant="outline-secondary"
                    size="sm"
                    aria-label="Edit button"
                  >
                    <FontAwesomeIcon icon={ faPen } />
                  </Button>
                </Card.Link>
              </Col>
              <Col xs={ 2 } sm={ 1 }>
                <Card.Link>
                  <Button
                    onClick={ this.handleDelete }
                    variant="outline-secondary"
                    size="sm"
                    aria-label="Delete button"
                  >
                    <FontAwesomeIcon icon={ faTrash } />
                  </Button>
                </Card.Link>
              </Col>
            </Row>
            <Row>
              <Col xs={ 10 } sm={ 11 }>
                <Card.Subtitle className="mb-2 text-muted">
                  {this.props.description}
                </Card.Subtitle>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      );
    }
};

SimpleCard.propTypes = {
  key: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  showLinkPath: PropTypes.func
};

SimpleCard.defaultProps = {
  key: 'key_1234',
  id: '1234',
  title: 'Default Title String',
  description: 'This is a default description string',
  handleEdit: () => {
    console.log('Edit button clicked');
  },
  handleDelete: () => {
    console.log('Delete button clicked');
  },
};

export default SimpleCard;
