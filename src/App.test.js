import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navigation from './components/navigation';

const setup = (propOverrides) => {
  const props = Object.assign({ path: 'build' }, propOverrides);

  const wrapper = shallow(<App {...props} />);

  return {
    props,
    wrapper,
    navigation: wrapper.find('.navigation'),
  };
};

describe('<App />', () => {
  it('renders navigation', () => {
    const { navigation } = setup();

    expect(navigation).toEqualJSX(<Navigation />);
  });
});
