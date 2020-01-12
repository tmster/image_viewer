import React from 'react';
import PropTypes from 'prop-types';

function Column(props) {
  const { imageUrl, title } = props;
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <div className="card image-grid__card">
        <img
          className="card-img-top img-thumbnail image-grid__img"
          src={imageUrl}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
}

Column.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Column;
