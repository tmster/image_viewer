# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :pictures,
          resolver: Resolvers::Pictures,
          null: false,
          description: 'Returns a list of pictures in the library'
  end
end
