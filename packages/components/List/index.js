import React from 'react';
import SimpleCard from '../SimpleCard';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
} from '@fortawesome/free-solid-svg-icons';

const includesText = (textOne, textTwo) => {
    console.log('includes text', textOne, textTwo);
    return textOne.toLowerCase().trim().includes(textTwo.toLowerCase().trim());
};

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchInput: true
        };
    }

    handleSearch = searchText => {
        console.log('search text', searchText);
        console.log('logging items', this.props.items);
        const results = this.props.items.filter(project => {
            console.log('project', project);
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
        this.props.handleUpdateList(results);
    };

    handleShowSearchBar = () => {
        this.setState(state => {
            return { showSearchInput: !state.showSearchInput };
        });
    }


  render() {

    const listItems = this.props.items.map((item) => {
      if (item.display) {
        return ( 
        <SimpleCard
          key={ item.id }
          id={ item.id }
          title={ item.title }
          description={ item.description }
          handleEdit={ this.props.handleEdit }
          handleDelete={ this.props.handleDelete }
          showLink={ this.props.showLink }
        />
        )} else {
        return null;
      }
    }).filter(item => {
      return item !== null;
    });

    return (<>
      <section style={ { height: '75vh', overflow: 'scroll' } }>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend
                        onClick={this.handleShowSearchBar}
                    >
                        <InputGroup.Text id="basic-addon2">
                            <FontAwesomeIcon icon={faSearch} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        style={{ display: this.state.showSearchInput ? '' : 'none' }}
                        onChange={this.handleSearch}
                        placeholder="Search"
                        aria-label="search"
                        aria-describedby="search"
                    />
                </InputGroup>
        {listItems}
      </section>
    </>
    );
  }
}

export default List;