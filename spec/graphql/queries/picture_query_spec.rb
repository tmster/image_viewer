# frozen_string_literal: true

# rubocop:disable RSpec/DescribeClass
RSpec.describe 'GraphQL Pictures query', graphql: true do
  subject(:result) do
    execute_query(
      query,
      variables: variables
    )
  end

  let(:query) do
    <<~QUERY
      query pictures {
          pictures {
            id
          }
      }
    QUERY
  end

  let!(:first_picture) { create :picture }
  let!(:second_picture) { create :picture }
  let(:variables) { {} }

  # FIXME: Transactions doesnt work to clean after specs
  after do
    first_picture.destroy
    second_picture.destroy
  end

  describe 'standard query' do
    it 'returns proper pictures' do
      expect(result['data']['pictures']).to eq(
        [
          { 'id' => first_picture.id.to_s },
          { 'id' => second_picture.id.to_s }
        ]
      )
    end
  end

  describe 'imageUrl field' do
    let(:query) do
      <<~QUERY
        query pictures {
            pictures {
              imageUrl
            }
        }
      QUERY
    end

    let(:first_picture) { create :picture, :with_image }

    it 'returns proper pictures' do
      expect(result['data']['pictures']).to match(
        [
          { 'imageUrl' => /test-image.jpg/ },
          { 'imageUrl' => nil }
        ]
      )
    end
  end
end
# rubocop:enable RSpec/DescribeClass
