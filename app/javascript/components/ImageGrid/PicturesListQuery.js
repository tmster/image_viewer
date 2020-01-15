import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PicturesList from './PicturesList';

const PicturesQuery = gql`
  query pictures($offset: Int) {
    pictures(limit: 20, offset: $offset) {
      id
      title
      imageUrl(variant: medium)
    }
  }
`;

const PicturesListQuery = () => {
  return (
    <Query query={PicturesQuery}>
      {({ data, fetchMore }) => {
        return data ? (
          <PicturesList pictures={data.pictures || []} fetchMore={fetchMore} />
        ) : (
          <div>Initializing...</div>
        );
      }}
    </Query>
  );
};

export default PicturesListQuery;
