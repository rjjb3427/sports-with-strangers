json.extract! @city, :name, :image, :tagline, :id
json.set! :events, @city.events
