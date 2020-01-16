import React from 'react';
import { shallow } from 'enzyme';

import PicturesList from '../PicturesList';

const pictures = [
  { id: '1', imageUrl: 'http://localhost/1', title: 'Awesome' },
  { id: '2', imageUrl: 'http://localhost/2', title: 'Poor' },
];

const fetchMoreMock = () => {};

it('renders all props', () => {
  const node = shallow(
    <PicturesList pictures={pictures} fetchMore={fetchMoreMock} />
  );
  expect(node).toMatchSnapshot();
});

it('groups pictures', () => {
  const node = shallow(
    <PicturesList pictures={pictures} fetchMore={fetchMoreMock} />
  );

  expect(node.instance().groupedPictures(1)).toEqual([
    [pictures[0]],
    [pictures[1]],
  ]);

  expect(node).toMatchSnapshot();
});
