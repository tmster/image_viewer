import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function Row(props) {
  return (
    <div className="row image-grid__row">
      {props.group.map(({ id, imageUrl, title }) => (
        <Card key={id} id={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  );
}

Row.propTypes = {
  group: PropTypes.array.isRequired,
};

export default Row;
