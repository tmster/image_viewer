# frozen_string_literal: true

# Active Storage patch for application wide transformations
# The main purpose of the code below is DRY.
# We don't want to repeat everywhere `User.avatar.variant(many_transformation_options)`.
# Instead of this we simply write `User.avatar.variant(:medium)`
# And if one day when we decide to change any size of variants, then we change it in one place.
#
# Waiting for https://github.com/rails/rails/pull/35290

ActiveStorage.extend(Module.new do
  def transformations
    return @transformations if defined?(@transformations)

    files = [
      Rails.root.join('config', 'transformations.yml'),
      # fallback to default config
      Pathname.new(File.join(__dir__, 'transformations.yml'))
    ]

    file = files.detect(&:exist?)

    @transformations = YAML.load_file(file).deep_symbolize_keys!

    raise ArgumentError, "Variant called :medium is missing in #{file}" unless
      @transformations.key?(:medium)

    @transformations
  end
end)

# Original source at https://github.com/rails/rails/blob/master/activestorage/lib/active_storage/transformers/transformer.rb
ActiveStorage::Transformers::Transformer.prepend(Module.new do
  def transformations
    ActiveStorage.transformations.fetch(@transformations) { super }
  end
end)

# "Fix" this change https://github.com/rails/rails/commit/6be1446fc7f4b159097533562920662b85155113
ActiveSupport.on_load(:active_storage_blob) do
  ActiveStorage::Variation.prepend(Module.new do
    def initialize(transformations)
      return @transformations = transformations if transformations.is_a?(Symbol)

      super
    end
  end)
end
