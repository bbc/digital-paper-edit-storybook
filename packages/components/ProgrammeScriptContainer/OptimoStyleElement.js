import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SortableHandle from './ProgrammeElements/SortableHandle';
import { SortableElement } from 'react-sortable-hoc';
import ExpandableMenu from './ExpandableMenu';

const OptimoStyleElement = SortableElement((props) => {

  console.log(props.item);
  const el = (
    <Row>
      <Col xs={ 1 }>
      </Col>

      <Col xs={ 7 }>
        {props.item.text}
      </Col>

      <Col>
        <SortableHandle/>
      </Col>

    </Row>
  );

  return (
    <Container>
      {el}
      <ExpandableMenu />
    </Container>
  );
});

export default OptimoStyleElement;