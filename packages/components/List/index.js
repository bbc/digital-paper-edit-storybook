import React, { useState } from 'react';
import SimpleCard from '../SimpleCard';
import SearchBar from '../SearchBar';

const List = ({ projectItems, handleSearch, handleEdit, handleDelete }) => {

    const [items, setItems] = useState(projectItems);

    const includesText = (text, subsetText) => {
        return text.toLowerCase().includes(subsetText.toLowerCase().trim());
    };

    const handleDeleteItem = async (itemId) => {
        const updatedList = items.filter((item) => {
            return item.id !== itemId;
        });
        setItems(updatedList);

        // This is the original handleDelete, which took place at the page level: 
        // https://github.com/bbc/digital-paper-edit-client/blob/ba1924e89592fc8cd75fcb1e450ea15bc2599d95/src/Components/Projects/index.js
        //
        // const result = await ApiWrapper.deleteProject(itemId);
        // if (result.ok) {
        //     const newItemsList = this.state.items.filter((p) => {
        //         return p.id !== itemId;
        //     });
        //     this.setState({ items: newItemsList });
        // } else {
        //     // TODO: some error handling, error message saying something went wrong
        // }
    }
    
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
          handleDelete={ handleDeleteItem }
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