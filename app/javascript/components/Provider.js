import React from 'react';
import { ApolloProvider } from 'react-apollo';
import PropTypes from 'prop-types';
import { createCache, createClient } from '../utils/apollo';

const Provider = ({ children }) => (
  <ApolloProvider client={createClient(createCache())}>
    {children}
  </ApolloProvider>
);

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Provider;
