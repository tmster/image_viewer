import React from 'react';
import { useParams } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PictureDetails from './PictureDetails';

const PicturesQuery = gql`
  query picture($id: Int!) {
    picture(id: $id) {
      id
      title
      description
      imageUrl
    }
  }
`;

const PictureDetailsQuery = () => {
  const { imageId } = useParams();

  return (
    <Query query={PicturesQuery} variables={{ id: parseInt(imageId, 10) }}>
      {({ data }) => {
        return (
          <div key={0}>
            {data ? (
              <PictureDetails
                id={data.picture.id}
                title={data.picture.title}
                description={data.picture.description}
                imageUrl={data.picture.imageUrl}
              />
            ) : (
              'Initializing...'
            )}
          </div>
        );
      }}
    </Query>
  );
};

export default PictureDetailsQuery;
