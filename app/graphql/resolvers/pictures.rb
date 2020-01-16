# frozen_string_literal: true

module Resolvers
  class Pictures < GraphQL::Schema::Resolver
    description 'List of all the Pictures'

    argument :limit, type: Int, required: false
    argument :offset, type: Int, required: false
    type [Types::PictureType], null: false

    def resolve(limit: 20, offset: nil)
      Picture.order(created_at: :desc).offset(offset).limit(limit)
    end
  end
end
