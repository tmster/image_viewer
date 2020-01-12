import React from 'react';
import './ImageGrid.scss';
import Provider from '../Provider';
import PicturesListQuery from './PicturesListQuery';

function ImageGrid() {
  return (
    <div className="container image-grid">
      <Provider>
        <PicturesListQuery />
      </Provider>
    </div>
  );
}

export default ImageGrid;
