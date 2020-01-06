# frozen_string_literal: true

module Types
  class PictureType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: true
    field :image_url, String, null: true

    def image_url
      AssociationLoader.for(
        object.class,
        image_attachment: :blob
      ).load(object).then do |image|
        next if image.nil?

        Rails.application.routes.url_helpers.rails_blob_url(image)
      end
    end
  end
end
