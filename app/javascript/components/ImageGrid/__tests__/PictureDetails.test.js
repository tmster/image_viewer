import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import PictureDetails from '../PictureDetails';

const props = {
  id: '0',
  title: 'Test',
  description: 'Very awesome description',
  imageUrl: 'http://localhost',
};

const MockLandingPage = () => <div className="landing">Landing</div>;

it('renders all props', () => {
  const node = shallow(<PictureDetails {...props} />);
  expect(node).toMatchSnapshot();
});

it('includes link to Mission scene', () => {
  const wrapper = mount(
    <MemoryRouter>
      <PictureDetails {...props} />
      <Switch>
        <Route path="/" component={MockLandingPage} />
      </Switch>
    </MemoryRouter>
  );
  wrapper.find('a').simulate('click', { button: 0 });
  expect(wrapper.find('.landing')).toHaveLength(1);
});
