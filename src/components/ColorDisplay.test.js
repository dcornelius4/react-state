import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('Color Display Component', () => {
  it('renders the display', () => {
    const wrapper = shallow(<ColorDisplay />);
    expect(wrapper).toMatchSnapshot();
  });
});
