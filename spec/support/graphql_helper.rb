# frozen_string_literal: true

module GraphqlHelper
  def execute_query(query, variables:, context: {}, operation_name: nil)
    ImageViewerSchema.execute(
      query,
      variables: variables,
      context: context,
      operation_name: operation_name
    ).tap { |result| pp result if result['errors'] }
  end
end

RSpec.configure do |config|
  config.include GraphqlHelper, graphql: true
end
