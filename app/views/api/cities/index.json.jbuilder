json.array! @cities do |city|
  json.extract! city, :name, :tagline, :image
end 
