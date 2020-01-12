import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';

function Row(props) {
  return (
    <div className="row image-grid__row">
      {props.group.map(({ id, imageUrl, title }) => (
        <Column key={id} id={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  );
}

Row.propTypes = {
  group: PropTypes.array.isRequired,
};

export default Row;
