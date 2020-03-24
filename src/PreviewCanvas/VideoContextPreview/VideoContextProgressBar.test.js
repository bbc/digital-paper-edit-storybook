import React from 'react';
import VideoContextProgressBar from './VideoContextProgressBar';

describe('VideoContextProgressBar', () => {
  const mockVideoContext = {};

  it('should render', () => {
    const component = (<VideoContextProgressBar videoContext={ mockVideoContext } />);
    expect(component).toMatchSnapshot();
  });
});
