import React from 'react';
import PropTypes from 'prop-types';
import SimpleCard from '../SimpleCard';
import TranscriptCard from '../TranscriptCard';
import cuid from 'cuid';

const List = props => {
  const items = props.items;
  const type = props.type.toLowerCase();

  const listItems = items.map(item => {
    const key = 'card-' + cuid();

    if (item.display) {
      if (type === 'transcript') {
        return (
          <TranscriptCard
            { ...item }
            key={ key }
            handleEditItem={ props.handleEditItem }
            handleDeleteItem={ props.handleDeleteItem }
          />
        );
      }

      return (
        <SimpleCard
          { ...item }
          key={ key }
          handleEditItem={ props.handleEditItem }
          handleDeleteItem={ props.handleDeleteItem }
        />
      );
    }

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
  type: PropTypes.string
};

List.defaultProps = {
  type: ''
};

export default React.memo(List);
