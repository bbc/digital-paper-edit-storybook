import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { LinkContainer } from 'react-router-bootstrap';

const CustomBreadcrumb = (props) => {

  const breadcrumbs = props.items.map((item) => {
    if (item.link) {
      return (
        <LinkContainer key={ item.name } to={ item.link }>
          <Breadcrumb.Item>{item.name}</Breadcrumb.Item>
        </LinkContainer>
      );
    } else {
      return (
        <Breadcrumb.Item key={ item.name } active>
          {item.name}
        </Breadcrumb.Item>
      );
    }
  });

  return (
    <div>
      <Breadcrumb>
        {breadcrumbs}
      </Breadcrumb>
    </div>
  );
};

CustomBreadcrumb.propTypes = {
  items: PropTypes.array,
};

CustomBreadcrumb.defaultProps = {
  items: [ {
    name: 'Projects',
    link: '/projects',
  }, {
    name: 'Sample Project Name'
  } ] };

export default CustomBreadcrumb;
