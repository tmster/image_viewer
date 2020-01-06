# frozen_string_literal: true

class Picture < ApplicationRecord
  has_one_attached :image
  validates :description, presence: true
  validates :title, presence: true
end
