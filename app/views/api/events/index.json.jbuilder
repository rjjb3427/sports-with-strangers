json.array! @events do |event|
  json.title event.title
  json.time event.time.to_s
  json.address event.address
  json.capacity event.capacity
  json.sport event.sport
  json.city_id event.city_id
  json.id = event.id
  json.host do
    json.extract! event.host, :email, :name, :location, :image, :city, :blurb, :id
  end
end
