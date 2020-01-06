# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Picture, type: :model do
  describe 'validations' do
    subject { build(:picture) }

    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:description) }
  end

  describe 'attachment' do
    subject { build(:picture, :with_image) }

    let(:picture) { subject }

    it 'creates the picture' do
      expect { picture.save }.to change(described_class, :count).by(1)
      expect(picture.image).to be_attached
      expect(picture.title).to eq 'John'
    end
  end
end
