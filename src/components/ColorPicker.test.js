import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('Color Picker Component', () => {
  it('renders the color', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
