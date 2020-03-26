import React from 'react';
import { cleanup } from '@testing-library/react';
import SimpleCard from '../src/SimpleCard';
import renderWithRouter from '../setupTests';

afterEach(cleanup);
describe('Simple Card', () => {
  const props = {
    id: '1',
    url: 'test.com',
    handleEditItem: () => {},
    handleDeleteItem: () => {}
  };
  const { history } = renderWithRouter(<SimpleCard { ...props } />);

  it('match snapshot', () => {
    // tbd
  });

});
