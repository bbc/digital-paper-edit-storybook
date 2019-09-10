import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SimpleCard from '../SimpleCard';
import SearchBar from './SearchBar';
import TranscriptCard from '../TranscriptCard';

const List = (props) => {

  const [ items, setItems ] = useState(props.items);

  const includesText = (text, subsetText) => {
    return text.toLowerCase().includes(subsetText.toLowerCase().trim());
  };

  const handleDeleteItem = (itemId) => {
    const updatedList = items.filter((item) => {
      return item.id !== itemId;
    });
    props.handleDelete(itemId);
    setItems(updatedList);
  };

  const handleDisplay = (item, searchText) => {
    if (
      includesText(item.title, searchText) ||
            includesText(item.description, searchText)
    ) {
      item.display = true;
    } else {
      item.display = false;
    }

    return item;
  };

  const handleSearchItem = searchText => {
    const results = items.filter(item => handleDisplay(item, searchText));
    setItems(results);
  };

  const listItems = items.map((item) => {
    if (item.display && item.status) {
      return (
        <TranscriptCard
          { ...item }
          handleEdit={ props.handleEdit(item.id) }
          handleDelete={ handleDeleteItem }
        />
      );
    }
    else if (item.display) {
      return (
        <SimpleCard
          { ...item }
          handleEdit={ props.handleEdit(item.id) }
          handleDelete={ handleDeleteItem }
        />
      );}

    return null;
  }).filter(item => {
    return item !== null;
  });

  return (
    <section style={ { height: '75vh', overflow: 'scroll' } }>
      {items !== null && items.length !== 0 ? <SearchBar handleSearch={ handleSearchItem }/> : null}
      {listItems}
    </section>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

List.defaultProps = {
  items: [
    {
      id: '1234',
      key: 'abc123',
      title: 'Sample Simple Card Title One',
      description: 'This is a sample card description. This is fun!',
      display: true,
      url: '/projects/1/transcripts/5678'
    }
  ],
  handleEdit: () => {
    console.log('Edit button clicked');
  },
  handleDelete: () => {
    console.log('Delete button clicked');
  },
};

export default List;
