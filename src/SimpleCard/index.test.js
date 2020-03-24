import React from 'react';
import { render, waitForElement, getByText, cleanup, wait } from '@testing-library/react';
import SimpleCard from './index.js';
import renderWithRouter from '../../setupTests';
afterEach(cleanup);
describe('Simple Card', () => {

  const props = {
    id: '1',
    url: 'test.com',
    handleEditItem: () => {},
    handleDeleteItem: () => {}
  };
  const { asFragment, container, getByText } = renderWithRouter(<SimpleCard { ...props } />);

  it('match snapshot', () => {
    // expect(getByText('col-sm-10 col-8')).toHaveTextContent('text.com');
  });

});
