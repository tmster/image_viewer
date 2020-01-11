# frozen_string_literal: true

module Types
  class PictureType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: true
    field :image_url, String, null: true do
      argument :variant, ImageVariantEnum, required: false
    end

    def image_url(variant: nil)
      AssociationLoader.for(
        object.class,
        image_attachment: :blob
      ).load(object).then do |image|
        next if image.nil?

        image = image.variant(variant) if variant
        Rails.application.routes.url_helpers.url_for(image)
      end
    end
  end
end
