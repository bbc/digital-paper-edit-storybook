import React, { useState } from 'react';
import SimpleCard from '../SimpleCard';
import SearchBar from '../SearchBar';

class List extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showSearchInput: true
    //     };
    // }
    // // const [showSearchInput, toggleShowSearch] = useState(true)

    // handleSearch = searchText => {
    //     console.log('search text', searchText);
    //     console.log('logging items', this.props.items);
    //     const results = this.props.items.filter(project => {
    //         console.log('project', project);
    //         if (
    //             includesText(project.title, searchText) ||
    //             includesText(project.description, searchText)
    //         ) {
    //             project.display = true;

    //             return project;
    //         } else {
    //             project.display = false;

    //             return project;
    //         }
    //     });
    //     this.props.handleUpdateList(results);
    // };

    // handleShowSearchBar = () => {
    //     this.setState(state => {
    //         return { showSearchInput: !state.showSearchInput };
    //     });
    // }


  render() {

    //   let searchEl;
    //   if (this.props.items !== null && this.props.items.length !== 0) {
    //       searchEl = (<SearchBar
    //           handleSearch={this.handleSearch}
    //       />);
    //   }


    const listItems = this.props.items.map((item) => {
      if (item.display) {
        return ( 
        <SimpleCard
          key={ item.id }
          id={ item.id }
          title={ item.title }
          description={ item.description }
          url={ item.url }
          handleEdit={ this.props.handleEdit }
          handleDelete={ this.props.handleDelete }
        />
        )} return null;
    }).filter(item => {
      return item !== null;
    });

    return (<>
      <section style={ { height: '75vh', overflow: 'scroll' } }>
        {listItems}
      </section>
    </>
    );
  }
}

export default List;



// constructor(props) {
//     super(props);
//     this.state = {
//         showSearchInput: false
//     };
// }

// handleSearch = searchText => {
//     const results = this.props.items.filter(project => {
//         if (
//             includesText(project.title, searchText) ||
//             includesText(project.description, searchText)
//         ) {
//             project.display = true;

//             return project;
//         } else {
//             project.display = false;

//             return project;
//         }
//     });
//     this.props.handleUpdateList(results);
// };

// handleShowSearchBar = () => {
//     this.setState(state => {
//         return { showSearchInput: !state.showSearchInput };
//     });
// }

// render() {

//     let searchEl;
//     if (this.props.items !== null && this.props.items.length !== 0) {
//         searchEl = (<SearchBar
//             handleSearch={this.handleSearch}
//         />);
//     }

//     return (<>

//         <Row>
//             <Col sm={9} md={9} ld={9} xl={9}>
//                 {searchEl}
//             </Col>

//             <Col xs={12} sm={3} md={3} ld={3} xl={3}>
//                 <Button onClick={this.props.handleShowCreateNewItemForm} variant="outline-secondary" size="sm" block>
//                     New {this.props.model}
//                 </Button>
//             </Col>
//         </Row>

//         {(this.props.items && this.props.items.length === 0) ? <i>There are no {this.props.model}, create a new one to get started</i> : null}

//         {this.props.items ?
//             <List
//                 items={this.props.items}
//                 handleEdit={this.props.handleEdit}
//                 handleDelete={this.props.handleDelete}
//                 showLinkPath={this.props.showLinkPath}
//             /> : null}

//     </>);
// }
// }

// export default Page;