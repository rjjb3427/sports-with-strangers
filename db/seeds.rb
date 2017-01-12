# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

City.create([{ name: 'Seattle', image: 'seattle.jpg', tagline: 'The Rain City'},
  { name: 'SF Bay Area', image: 'sfbay.jpg', tagline: 'City by the Bay'},
  {name: 'New York', image: 'newyork.jpg', tagline: 'New York tagline'},
  {name: 'Boston', image: 'boston.jpg', tagline: 'Boston tagline'}])
