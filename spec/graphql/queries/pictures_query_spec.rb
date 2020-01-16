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
          { 'id' => second_picture.id.to_s },
          { 'id' => first_picture.id.to_s }
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
          { 'imageUrl' => nil },
          { 'imageUrl' => /test-image.jpg/ }
        ]
      )
    end
  end

  describe 'pagination args' do
    let(:query) do
      <<~QUERY
        query pictures($limit: Int, $offset: Int) {
          pictures(limit: $limit, offset: $offset) {
            id
          }
        }
      QUERY
    end

    let(:variables) { { offsett: 0, limit: 2 } }

    context 'with params for first page' do
      let(:variables) { { offset: 0, limit: 1 } }

      it 'returns proper records' do
        expect(result['data']['pictures']).to eq(
          [
            { 'id' => second_picture.id.to_s }
          ]
        )
      end
    end

    context 'with params for second page' do
      let(:variables) { { offset: 1, limit: 1 } }

      it 'returns proper records' do
        expect(result['data']['pictures']).to eq(
          [
            { 'id' => first_picture.id.to_s }
          ]
        )
      end
    end

    it 'returns proper records' do
      expect(result['data']['pictures']).to eq(
        [
          { 'id' => second_picture.id.to_s },
          { 'id' => first_picture.id.to_s }
        ]
      )
    end
  end
end
# rubocop:enable RSpec/DescribeClass
