# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :pictures,
          [Types::PictureType],
          null: false,
          description: 'Returns a list of pictures in the library'

    def pictures
      Picture.all
    end
  end
end
