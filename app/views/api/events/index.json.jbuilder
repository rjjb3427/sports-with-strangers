json.array! @events do |event|
  json.title event.title
  json.time event.time
  json.address event.address
  json.capacity event.capacity
  json.sport event.sport
  json.city_id event.city_id
  json.host do
    json.extract! event.host, :first_name, :last_name, :location, :image, :city, :blurb
  end
end
