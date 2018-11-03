import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../App.js';

describe('App', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('it should exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should contain the necessary components', () => {
    expect(wrapper.find('TopNav').length).toBe(1);
    expect(wrapper.find('NavToolbar').length).toBe(1);
    expect(wrapper.find('Gallery').length).toBe(1);
  })

  
});