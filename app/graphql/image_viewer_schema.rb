# frozen_string_literal: true

class ImageViewerSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
  use GraphQL::Batch
end
