# frozen_string_literal: true

FactoryBot.define do
  factory :picture do
    title { 'John' }
    description { 'Doe' }
    trait :with_image do
      image { fixture_file_upload(Rails.root.join('spec', 'support', 'assets', 'test-image.jpg'), 'image/jpg') }
    end
  end
end
