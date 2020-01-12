# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :pictures,
          resolver: Resolvers::Pictures,
          null: false,
          description: 'Returns a list of pictures in the library'

    field :picture, PictureType, null: true do
      argument :id, Int, required: true
    end
    def picture(id:)
      Picture.find(id)
    end
  end
end
