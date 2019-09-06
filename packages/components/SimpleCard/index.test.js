import React from 'react';
import { shallow } from 'enzyme';
import SimpleCard from './SimpleCard';

describe('VideoContextProgressBar', () => {
  const mockVideoContext = {};

  it('should render correctly', () => {
    const component = shallow(<SimpleCard props={ mockVideoContext } />);
    expect(component).toMatchSnapshot();
  });

  //   it('should be possible to activate button with Spacebar', () => {
  //     const component = mount(<SimpleCard props={ mockVideoContext } />);
  //     expect(component).toMatchSnapshot();

//     component.unmount();
//   });
});