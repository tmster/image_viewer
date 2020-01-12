import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './ImageGrid.scss';
import Provider from '../Provider';
import PicturesListQuery from './PicturesListQuery';
import PictureDetailsQuery from './PictureDetailsQuery';

function ImageGrid() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route path="/image/:imageId">
            <PictureDetailsQuery />
          </Route>
          <Route path="/">
            <PicturesListQuery />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default ImageGrid;
