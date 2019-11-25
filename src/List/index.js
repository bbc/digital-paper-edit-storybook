import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SimpleCard from '../SimpleCard';
import TranscriptCard from '../TranscriptCard';
import cuid from 'cuid';

const List = (props) => {

  const [ items, setItems ] = useState([]);

  useEffect(() => {
    if (items.length === 0) {
      setItems(props.items);
    }

    return () => {

    };
  }, [ props.items ]);

  const listItems = items.map((item) => {
    const key = 'card-' + cuid();
    if (item.display && item.status) {
      return (
        <TranscriptCard
          { ...item }
          key={ key }
          handleEditItem={ props.handleEditItem }
          handleDeleteItem={ props.handleDeleteItem }
        />
      );
    }
    else if (item.display) {
      return (
        <SimpleCard
          { ...item }
          key={ key }
          handleEditItem={ props.handleEditItem }
          handleDeleteItem={ props.handleDeleteItem }
        />
      );}

    return null;
  });

  return (
    <section style={ { height: '75vh', overflow: 'scroll' } }>
      {listItems}
    </section>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  handleEditItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
};

export default List;
