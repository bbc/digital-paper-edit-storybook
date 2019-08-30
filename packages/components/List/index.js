import React, { useState } from 'react';
import SimpleCard from '../SimpleCard';
import SearchBar from '../SearchBar';

const List = ({ projectItems, handleSearch, handleEdit, handleDelete }) => {

    const includesText = (text, subsetText) => {
        return text.toLowerCase().includes(subsetText.toLowerCase().trim());
    };

    const [items, setItems] = useState(projectItems);
    
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

    handleSearch = searchText => {
        const results = items.filter(item => handleDisplay(item, searchText));
        setItems(results);
    };

    const listItems = items.map((item) => {
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
        {items !== null && items.length !== 0 ? <SearchBar handleSearch={handleSearch}/> : null}
        {listItems}
      </section>
    </>
    );
  }

export default List;