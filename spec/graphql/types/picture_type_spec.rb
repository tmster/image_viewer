# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Types::PictureType do
  subject { described_class }

  it { is_expected.to have_field(:id).of_type('ID!') }
  it { is_expected.to have_field(:title).of_type('String!') }
  it { is_expected.to have_field(:description).of_type('String') }

  describe 'image_url' do
    subject { described_class.fields['imageUrl'] }

    it { is_expected.to accept_argument(:variant).of_type('ImageVariantEnum') }
    it { is_expected.to be_of_type('String') }
  end
end
