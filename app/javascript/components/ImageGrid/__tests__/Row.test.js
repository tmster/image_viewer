import React from 'react';
import { shallow } from 'enzyme';

import Row from '../Row';

const group = [
  { id: '1', imageUrl: 'http://localhost/1', title: 'Awesome' },
  { id: '2', imageUrl: 'http://localhost/2', title: 'Poor' },
];

it('renders all props', () => {
  const node = shallow(<Row group={group} />);
  expect(node).toMatchSnapshot();
});
