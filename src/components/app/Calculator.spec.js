import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from './calculator/Display';
import Keypad from './calculator/Keypad';

describe('Calculaor', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display Component', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Display displayValue={wrapper.instance().state.displayValue} />,
        <Keypad
          numbers={wrapper.instance().state.numbers}
          operators={wrapper.instance().state.operators}
        />,
      ])
    ).toEqual(true);
  });
});
