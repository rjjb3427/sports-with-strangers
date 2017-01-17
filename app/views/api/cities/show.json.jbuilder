json.extract! @city, :name, :image, :tagline, :id
json.set! :events, @city.events do |event|
  json.title event.title
  json.time event.time
  json.address event.address
  json.capacity event.capacity
  json.sport event.sport
  json.city_id event.city_id
  json.id event.id
  json.host do
    json.extract! event.host, :email, :name, :location, :image, :blurb
  end
end
