import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PictureDetails(props) {
  const { imageUrl, title, description, id } = props;
  return (
    <div className="row image-grid__overlay">
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 image-grid__image-overlay">
        <img
          className="img-fluid image-grid__image"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 image-grid__details">
        <h2>#{id}</h2>
        <h5>{title}</h5>
        <p>{description}</p>
        <Link to="/" className="image-grid__close" />
      </div>
    </div>
  );
}

PictureDetails.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PictureDetails;
