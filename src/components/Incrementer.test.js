import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './Incrementer';

describe('Incrementer Component', () => {
  it('renders the', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });
});
