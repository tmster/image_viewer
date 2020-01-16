# frozen_string_literal: true

# rubocop:disable RSpec/DescribeClass
RSpec.describe 'GraphQL Picture query', graphql: true do
  subject(:result) do
    execute_query(
      query,
      variables: variables
    )
  end

  let(:query) do
    <<~QUERY
      query picture($id: Int!) {
          picture(id: $id) {
            id
          }
      }
    QUERY
  end

  let!(:picture) { create :picture }
  let(:variables) { { id: picture.id } }

  # FIXME: Transactions doesnt work to clean after specs
  after do
    picture.destroy
  end

  describe 'find picture' do
    it 'returns proper picture' do
      expect(result['data']['picture']).to eq(
        'id' => picture.id.to_s
      )
    end
  end
end
# rubocop:enable RSpec/DescribeClass
