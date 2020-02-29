# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.5'

gem 'bootsnap', '>= 1.4.2', require: false
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.12'
gem 'rails', '~> 6.0.0'
gem 'webpacker', '~> 4.0'

gem 'graphiql-rails'
gem 'graphql', '~> 1.9'
gem 'graphql-batch'
gem 'haml-rails', '~> 2.0'
gem 'haml_lint', require: false
gem 'image_processing'
gem 'react-rails'
gem 'rubocop'
gem 'rubocop-rails'
gem 'rubocop-rspec'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'ffaker'
  gem 'rspec-graphql_matchers'
  gem 'rspec-rails'
end

group :test do
  gem 'factory_bot_rails'
  gem 'rspec_junit_formatter'
  gem 'shoulda-matchers'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
