# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Resolvers::Pictures do
  subject { described_class }

  it { is_expected.to accept_argument(:limit).of_type('Int') }
  it { is_expected.to accept_argument(:offset).of_type('Int') }
end
