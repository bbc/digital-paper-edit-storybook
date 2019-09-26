import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import { includesText } from '../../utils';
import List from '../List';

const PageView = (props) => {
  const [ items, setItems ] = useState();
  console.log('page', items);

  useEffect(() => {
    if (!items) {
      setItems(props.items);
      console.log('effect', items);
    }

    return () => {

    };
  }, [ items, props.items ]);

  const handleSearch = searchText => {
    const results = items.filter(project => {
      if (
        includesText(project.title, searchText) ||
        includesText(project.description, searchText)
      ) {
        project.display = true;

        return project;
      } else {
        project.display = false;

        return project;
      }
    });
    props.handleUpdateList(results);
  };

  let searchEl;
  let showItems;

  if (items && items.length !== 0) {

    showItems = (
      <List
        items={ items }
        handleEdit={ () => props.handleEdit }
        handleDelete={ () => props.handleDelete }
        handleSearch={ handleSearch }
      />
    );
  } else {
    showItems = (<i>There are no {props.model}s, create a new one to get started.</i>);
  }

  return (
    <>
      <Row>
        <Col sm={ 9 } >
          {searchEl}
        </Col>

        <Col xs={ 12 } sm={ 3 } >
          <Button onClick={ props.handleShowModal }
            variant="outline-secondary"
            size="sm" block>
                New {props.model}
          </Button>
        </Col>
      </Row>
      {showItems}
    </>
  );
};

PageView.propTypes = {
  handleDelete: PropTypes.any,
  handleEdit: PropTypes.any,
  handleShowModal: PropTypes.any,
  handleUpdateList: PropTypes.any,
  items: PropTypes.any,
  model: PropTypes.any,
};

export default PageView;
