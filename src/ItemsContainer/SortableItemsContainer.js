import React, { useState, useEffect, useReducer } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import { anyInText } from '../utils';
import SearchBar from '../SearchBar';
import FormModal from '../FormModal';
import Table from 'react-bootstrap/Table';
import BootstrapTable from 'react-bootstrap-table-next';
import CardDottedMenu from '../CardDottedMenu';
import Badge from 'react-bootstrap/Badge';

const initialFormState = {
  title: '',
  description: '',
  id: null
};

const formReducer = (state = initialFormState, { type, payload }) => {
  switch (type) {
  case 'update':
    return { ...state, ...payload };
  case 'reset': {
    return { initialFormState };
  }
  default:
    return state;
  }
};

const SortableItemsContainer = props => {
  const type = props.type;
  const [ showingItems, setShowingItems ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);
  const [ formData, dispatchForm ] = useReducer(formReducer, initialFormState);

  console.log(type);
  // modal

  const handleSaveForm = item => {
    props.handleSave(item);
    setShowModal(false);
    dispatchForm({ type: 'reset' });
  };

  const handleEditItem = id => {
    const item = props.items.find(i => i.id === id);
    dispatchForm({
      type: 'update',
      payload: item
    });
    setShowModal(true);
  };

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleOnHide = () => {
    setShowModal(false);
  };

  // search

  const handleFilterDisplay = (item, text) => {
    if (anyInText([ item.title, item.description ], text)) {
      item.display = true;
    } else {
      item.display = false;
    }

    return item;
  };

  const handleSearch = text => {
    const results = props.items.map(item => handleFilterDisplay(item, text));
    setShowingItems(results.filter(item => item.display));
  };

  // generic

  const handleDeleteItem = id => {
    props.handleDelete(id);
  };

  useEffect(() => {
    setShowingItems(props.items);

    return () => {
      setShowingItems([]);
    };
  }, [ props.items ]);

  const DoneBadge = () => <Badge variant={ 'success' }>Done</Badge>;
  const InProgressBadge = () => <Badge variant={ 'info' }>In progress</Badge>;
  const ErrorBadge = () => <Badge variant={ 'danger' }>Error</Badge>;

  const tablerows = (items) => {

    return items.map(item => {
      let badge;
      if (item.status === 'done') {
        badge = DoneBadge();
      } else if (item.status === 'in-progress') {
        badge = InProgressBadge();
      } else {
        badge = ErrorBadge();
      }

      return (
        <tr key={ item.key }>
          <td>{item.title}<br></br>{item.description}</td>
          <td>{badge}</td>
          <td>{item.created}</td>
          <td>{item.updated}</td>
          <td>
            <CardDottedMenu
              handleEdit={ handleEditItem }
              handleDelete={ handleDeleteItem }>
            </CardDottedMenu></td>
        </tr>);
    });
  };

  // It's a data format example.
  const statusFormatter = (status, row) => {
    let badge;
    if (status === 'done') {
      badge = DoneBadge();
    } else if (status === 'in-progress') {
      badge = InProgressBadge();
    } else {
      badge = ErrorBadge();
    }

    return <>{badge}</>;
  };

  const columns = [ {
    dataField: 'key',
    text: 'Key',
    hidden: true
  }, {
    dataField: 'title',
    text: 'Title',
    sort: true,
  }, {
    dataField: 'description',
    text: 'Description'
  }, {
    dataField: 'status',
    text: 'Status',
    formatter: statusFormatter
  }, {
    dataField: 'created',
    text: 'Created',
    sort: true
  }, {
    dataField: 'updated',
    text: 'Updated',
    sort: true
  } ];

  return (
    <>

      <Row>
        <Col sm={ 9 }>
          <SearchBar handleSearch={ handleSearch } />
        </Col>

        <Col xs={ 12 } sm={ 3 }>
          <Button
            onClick={ toggleShowModal }
            variant="outline-secondary"
            size="sm"
            block
          >
            New {type}
          </Button>
        </Col>
      </Row>

      {showingItems.length > 0 ? (
        <BootstrapTable keyField='id' data={ showingItems } columns={ columns } hover={ true }>
          {/* <TableHeaderColumn dataField='key' dataAlign="center" isKey={ true }>Key</TableHeaderColumn>
          <TableHeaderColumn dataField='title' dataSort={ true }>Title</TableHeaderColumn>
          <TableHeaderColumn dataField='status' dataFormat={ statusFormatter }>Status</TableHeaderColumn>
          <TableHeaderColumn dataField='created' dataSort={ true }>Created</TableHeaderColumn>
          <TableHeaderColumn dataField='updated' dataSort={ true }>Updated</TableHeaderColumn>
          <CardDottedMenu
            handleEdit={ handleEditItem }
            handleDelete={ handleDeleteItem }>
          </CardDottedMenu> */}
          {/* <TableHeaderColumn>Status</TableHeaderColumn>
          <TableHeaderColumn>Created</TableHeaderColumn>
          <TableHeaderColumn>Updated</TableHeaderColumn>
          <TableHeaderColumn>Action</TableHeaderColumn> */}
          {/* <tbody> */}
          {/* {tablerows(showingItems)} */}
          {/* </tbody> */}
        </BootstrapTable>
      ) : (
        <i>There are no {type}s, create a new one to get started.</i>
      )}

      <FormModal
        { ...formData }
        modalTitle={ formData.id ? `Edit ${ type }` : `New ${ type }` }
        showModal={ showModal }
        handleOnHide={ handleOnHide }
        handleSaveForm={ handleSaveForm }
        type={ type }
      />
    </>
  );
};

SortableItemsContainer.propTypes = {
  handleSave: PropTypes.any,
  handleDelete: PropTypes.any,
  items: PropTypes.array.isRequired,
  type: PropTypes.string
};

SortableItemsContainer.defaultProps = {
  type: 'Project'
};

export default SortableItemsContainer;
