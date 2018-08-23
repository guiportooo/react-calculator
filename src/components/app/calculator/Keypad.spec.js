import React from 'react';
import { shallow } from 'enzyme';
import Keypad from './Keypad';

describe('Keypad', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Keypad numbers={[]} operators={[]} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render 3 <div />'s", () => {
    expect(wrapper.find('div').length).toEqual(3);
  });

  it('renders the values of numbers', () => {
    wrapper.setProps({ numbers: ['0', '1', '2'] });
    expect(wrapper.find('.numbers-container').text()).toEqual('012');
  });

  it('renders the values of operators', () => {
    wrapper.setProps({ operators: ['+', '-', '*', '/'] });
    expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
  });
});
