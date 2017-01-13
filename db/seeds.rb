# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

SAN_FRANCISCO = 'SF Bay Area'
demo_blurb = "Hi! This is a demonstration account, and is a description of who you are,
why you like to host others, and what your meet-ups are all about!"

City.create([{ name: 'Seattle', image: 'seattle.jpg', tagline: 'The Rain City'},
  { name: SAN_FRANCISCO, image: 'sfbay.jpg', tagline: 'City by the Bay'},
  {name: 'New York', image: 'newyork.jpg', tagline: 'New York tagline'},
  {name: 'Boston', image: 'boston.jpg', tagline: 'Boston tagline'}])

User.create({first_name: 'Demo', last_name: 'User',
    image: 'demo-user.jpg', location: SAN_FRANCISCO, blurb: demo_blurb, password: 'guestpassword'})
