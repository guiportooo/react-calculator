import React from 'react';
import { shallow, mount } from 'enzyme';
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
          updateDisplay={wrapper.instance().updateDisplay}
          setOperator={wrapper.instance().setOperator}
        />,
      ])
    ).toEqual(true);
  });
});

describe('mounted Calculator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Calculator />);
  });

  it('calls updateDisplay when a number key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateDisplay');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper
      .find('.number-key')
      .first()
      .simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls setOperator when an operator key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'setOperator');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper
      .find('.operator-key')
      .first()
      .simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('updateDisplay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Calculator />);
  });

  it('updates displayValue', () => {
    wrapper.instance().updateDisplay('5');
    expect(wrapper.state('displayValue')).toEqual('5');
  });

  it('concatenates displayValue', () => {
    wrapper.instance().updateDisplay('5');
    wrapper.instance().updateDisplay('0');
    expect(wrapper.state('displayValue')).toEqual('50');
  });

  it('removes leading "0" from displayValue', () => {
    wrapper.instance().updateDisplay('0');
    expect(wrapper.state('displayValue')).toEqual('0');
    wrapper.instance().updateDisplay('5');
    expect(wrapper.state('displayValue')).toEqual('5');
  });

  it('prevents multiple leading "0"s from displayValue', () => {
    wrapper.instance().updateDisplay('0');
    wrapper.instance().updateDisplay('0');
    expect(wrapper.state('displayValue')).toEqual('0');
  });

  it('removes last char of displayValue', () => {
    wrapper.instance().updateDisplay('5');
    wrapper.instance().updateDisplay('0');
    wrapper.instance().updateDisplay('ce');
    expect(wrapper.state('displayValue')).toEqual('5');
  });

  it('prevents multiple instances of "." in displayValue', () => {
    wrapper.instance().updateDisplay('.');
    wrapper.instance().updateDisplay('.');
    expect(wrapper.state('displayValue')).toEqual('.');
  });

  it('will set displayValue to "0" if displayValue is equal to an empty string', () => {
    wrapper.instance().updateDisplay('ce');
    expect(wrapper.state('displayValue')).toEqual('0');
  });

  it('prevents more than 9 numbers in displayValue', () => {
    wrapper.instance().updateDisplay('1');
    wrapper.instance().updateDisplay('2');
    wrapper.instance().updateDisplay('3');
    wrapper.instance().updateDisplay('4');
    wrapper.instance().updateDisplay('5');
    wrapper.instance().updateDisplay('6');
    wrapper.instance().updateDisplay('7');
    wrapper.instance().updateDisplay('8');
    wrapper.instance().updateDisplay('9');
    wrapper.instance().updateDisplay('0');
    expect(wrapper.state('displayValue')).toEqual('123456789');
  });
});

describe('setOperator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Calculator />);
  });

  it('updates the value of selectedOperator', () => {
    wrapper.instance().setOperator('+');
    expect(wrapper.state('selectedOperator')).toEqual('+');
    wrapper.instance().setOperator('/');
    expect(wrapper.state('selectedOperator')).toEqual('/');
  });

  it('updates the value of storedValue to the value of displayValue', () => {
    wrapper.setState({ displayValue: '5' });
    wrapper.instance().setOperator('+');
    expect(wrapper.state('storedValue')).toEqual('5');
  });

  it('updates the value of displayValue to "0"', () => {
    wrapper.setState({ displayValue: '5' });
    wrapper.instance().setOperator('+');
    expect(wrapper.state('displayValue')).toEqual('0');
  });

  it('selectedOperator is not an empty string, does not update storedValue', () => {
    wrapper.setState({ displayValue: '5' });
    wrapper.instance().setOperator('+');
    expect(wrapper.state('storedValue')).toEqual('5');
    wrapper.instance().setOperator('-');
    expect(wrapper.state('storedValue')).toEqual('5');
  });
});
