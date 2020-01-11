import React from 'react';
import { shallow } from 'enzyme';

import HelloWorld from '../HelloWorld';

it('renders name', () => {
  const node = shallow(<HelloWorld greeting="example" />);
  expect(node).toMatchSnapshot();
});
