import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SortableHandle from './SortableHandle';
import { SortableElement } from 'react-sortable-hoc';
import ExpandableMenu from '../ExpandableMenu';

const OptimoStyleItem = SortableElement((props) => {
  const el = (
    <Row>
      <Col xs={ 1 }>
      </Col>

      <Col xs={ 7 }>
        {props.value}
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

export default OptimoStyleItem;