import React from 'react';
import PropTypes from 'prop-types';
import SimpleCard from '../SimpleCard';
import TranscriptCard from '../TranscriptCard';
import cuid from 'cuid';
import ProjectRow from '../ProjectRow';
import TranscriptRow from '../TranscriptRow';

import { getISOTime } from '../utils';
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

      else if (type === 'row') {
        const created = getISOTime(item.created.seconds);
        const updated = getISOTime(item.updated.seconds);

        return (
          <>
            <ProjectRow
              { ...item }
              created={ created }
              updated={ updated }
              key={ key }
              handleDuplicateItem={ props.handleDuplicateItem }
              handleEditItem={ props.handleEditItem }
              handleDeleteItem={ props.handleDeleteItem }
            />
            <hr style={ { color: 'grey' } } />
          </>
        );
      }

      else if (type === 'trow') {
        const created = getISOTime(item.created.seconds);
        const updated = getISOTime(item.updated.seconds);

        return (
          <>
            <TranscriptRow
              { ...item }
              created={ created }
              updated={ updated }
              key={ key }
              handleEditItem={ props.handleEditItem }
              handleDeleteItem={ props.handleDeleteItem }
            />
            <hr style={ { color: 'grey' } } />
          </>
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
  handleDeleteItem: PropTypes.func.isRequired,
  handleDuplicateItem: PropTypes.any,
  handleEditItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  type: PropTypes.string
};

List.defaultProps = {
  type: ''
};

export default React.memo(List);
