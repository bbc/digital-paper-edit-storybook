import React from 'react';
import { shallow } from 'enzyme';
import SimpleCard from './index.js';

describe('Simple Card', () => {
  const props = {};
  const component = shallow(<SimpleCard props={ props } />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
