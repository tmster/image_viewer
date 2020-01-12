import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PicturesList from './PicturesList';

const PictureQuery = gql`
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
    <Query query={PictureQuery}>
      {({ data, fetchMore }) => {
        return (
          <div key={0}>
            {data ? (
              <PicturesList
                pictures={data.pictures || []}
                hasMorePictures={true}
                onLoadMore={() =>
                  fetchMore({
                    variables: {
                      offset: data.pictures.length,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      return {
                        ...prev,
                        pictures: [
                          ...prev.pictures,
                          ...fetchMoreResult.pictures,
                        ],
                      };
                    },
                  })
                }
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

export default PicturesListQuery;
