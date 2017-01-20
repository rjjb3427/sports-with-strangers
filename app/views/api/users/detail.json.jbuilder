json.extract! @user, :email, :name, :location, :image, :city, :blurb, :id
json.set! :attending, @user.attending do |event|
  json.title event.title
  json.time event.time
  json.address event.address
  json.capacity event.capacity
  json.sport event.sport
  json.city_id event.city_id
  json.id event.id
end

json.set! :hosting, @user.events do |event|
  json.title event.title
  json.time event.time
  json.address event.address
  json.capacity event.capacity
  json.sport event.sport
  json.city_id event.city_id
  json.attending event.attendees.length 
  json.id event.id
end
