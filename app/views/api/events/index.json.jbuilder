json.array! @events do |event|
  json.extract! event, :title, :host, :time, :address, :capacity, :sport
end
