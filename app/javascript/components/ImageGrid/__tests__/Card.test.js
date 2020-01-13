import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';

import Card from '../Card';

it('renders all props', () => {
  const node = shallow(
    <Card id="0" title="Test" imageUrl="http://localhost" />
  );
  expect(node).toMatchSnapshot();
});

it('includes link to Mission scene', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Card id="123" />
    </MemoryRouter>
  );
  expect(wrapper.find(Link).props().to).toBe('/image/123');
});
