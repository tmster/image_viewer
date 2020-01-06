# frozen_string_literal: true

require 'net/http'
require 'json'
require 'ffaker'

def fetch(url, limit = 10)
  # You should choose better exception.
  raise ArgumentError, 'HTTP redirect too deep' if limit.zero?

  uri = URI.parse(url)
  req = Net::HTTP::Get.new(uri)
  response = Net::HTTP.start(uri.host, uri.port, use_ssl: true) { |http| http.request(req) }
  case response
  when Net::HTTPSuccess     then response
  when Net::HTTPRedirection then fetch(response['location'], limit - 1)
  else
    response.error!
  end
end

response = fetch('https://picsum.photos/v2/list?page=1&limit=100')
data = JSON.parse(response.body)

data.each do |row|
  puts "Downloading: #{row['download_url']}"
  image_contents = fetch(row['download_url'])
  picture = Picture.new(title: FFaker::Book.title,
                        description: FFaker::Book.description)
  io = StringIO.new(image_contents.body)

  picture.image.attach(io: io, filename: "temp.#{row['id']}.jpg", content_type: image_contents.content_type)

  picture.save!
end
