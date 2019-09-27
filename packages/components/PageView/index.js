import React, { useState, useEffect, useReducer } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import { anyInText } from '../../utils';
import List from '../List';
import Breadcrumb from '../Breadcrumb';
import SearchBar from '../SearchBar';
import FormModal from '../FormModal';

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

const PageView = (props) => {
  const [ items, setItems ] = useState();
  const [ showModal, setShowModal ] = useState(false);
  const [ formData, dispatchForm ] = useReducer(formReducer, initialFormState);

  const Api = props.Api;

  console.log('page', items);

  // The form works both for new/create and edit/update
  const handleSaveItem = async (item) => {
    if (!item.id) {

      const response = await Api.createProject(item);

      if (response.status === 'ok') {
        // Server returns project with UID generated server side
        // need to add display true attribute for search to the new project
        const newProject = response.project;
        newProject.display = true;

        setShowModal(false);
        dispatchForm({ type: 'reset' });
      }
    }
    else {
      const response = await Api.updateProject(item.id, item);
      if (response.status === 'ok') {
        const project = response.project;
        // need to add display true attribute for search to the new project
        project.display = true;
        // // Server returns project with UID generated server side
        const index = items.findIndex(element => element.id === project.id);

        const projects = items;
        projects[index] = project;
        setItems(projects);
        setShowModal(false);
        dispatchForm({ type: 'reset' });
      }
    }
  };

  const findItemById = (list, id) => {
    const result = list.filter((p) => {
      return p.id === id;
    });

    return result[0];
  };

  const handleEditItem = (id) => {
    const item = findItemById(items, id);
    dispatchForm({
      type: 'update',
      payload: item
    });
    setShowModal(true);
  };

  const handleDeleteItem = async (id) => {
    const result = await Api.deleteProject(id);
    if (result.ok) {
      const newItemsList = items.filter((p) => {
        return p.id !== id;
      });
      setItems(newItemsList);
    } else {
      // TODO: some error handling, error message saying something went wrong
    }
  };

  const handleDisplay = (item, text) => {
    if (anyInText([ item.title, item.description ], text)) {
      item.display = true;
    } else {
      item.display = false;
    }

    return item;
  };

  const handleSearch = text => {
    const results = items.filter(item => handleDisplay(item, text));
    setItems(results);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (!items) {
      setItems(props.items);
      console.log('effect', items);
    }

    return () => {

    };
  }, [ props.items ]);

  let searchEl;
  let showItems;

  const breadcrumbItems = [
    {
      name: `${ props.model }s`,
      link: `/${ props.model }s`
    }
  ];

  if (items && items.length !== 0) {
    searchEl = <SearchBar handleSearch={ handleSearch } />;

    showItems = (
      <List
        items={ items }
        handleEditItem={ () => handleEditItem }
        handleDeleteItem={ () => handleDeleteItem }
      />
    );

  } else {
    showItems = (<i>There are no {props.model}s, create a new one to get started.</i>);
  }

  if (props.model === 'Project') {

  } else if (props.model === 'Transcript') {

  }

  return (
    <>
      <Row>
        <Col sm={ 12 }>
          <Breadcrumb items={ breadcrumbItems }/>
        </Col>
        <Col sm={ 9 } >
          {searchEl}
        </Col>
        <Col xs={ 12 } sm={ 3 } >
          <Button onClick={ handleShowModal }
            variant="outline-secondary"
            size="sm" block>
                New {props.model}
          </Button>
        </Col>
      </Row>
      {showItems}
      <FormModal
        { ...formData }
        modalTitle={ formData.id ? 'Edit Project' : 'New Project' }
        showModal={ showModal }
        handleSaveForm={ handleSaveItem }
        type={ props.model }
      />
    </>
  );
};

PageView.propTypes = {
  items: PropTypes.any,
  model: PropTypes.any,
  Api: PropTypes.object
};

export default PageView;
