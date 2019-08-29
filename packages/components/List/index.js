import React, { useState } from 'react';
import SimpleCard from '../SimpleCard';
import SearchBar from '../SearchBar';

const List = ({ items, handleSearch, handleEdit, handleDelete }) => {

    const includesText = (textOne, textTwo) => {
        return textOne.toLowerCase().trim().includes(textTwo.toLowerCase().trim());
    };

    const [list, handleUpdateList] = useState(items);

    handleSearch = searchText => {
        const results = items.filter(item => {
            if (
                includesText(item.title, searchText) ||
                includesText(item.description, searchText)
            ) {
                item.display = true;

                return item;
            } else {
                item.display = false;

                return item;
            }
        });
        handleUpdateList(results);
    };

      let searchEl;
      if (items !== null && items.length !== 0) {
          searchEl = <SearchBar
              handleSearch={handleSearch}
          />;
      }

    const listItems = list.map((item) => {
      if (item.display) {
        return ( 
        <SimpleCard
          key={ item.id }
          id={ item.id }
          title={ item.title }
          description={ item.description }
          url={ item.url }
          handleEdit={ handleEdit }
          handleDelete={ handleDelete }
        />
        )} return null;
    }).filter(item => {
      return item !== null;
    });

    return (<>
      <section style={ { height: '75vh', overflow: 'scroll' } }>
        {searchEl}
        {listItems}
      </section>
    </>
    );
  }

export default List;