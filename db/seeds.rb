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

cities = City.create([{ name: 'Seattle',
  image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/v1484426176/seattle_zowxtu.jpg',
   tagline: 'Rain City'},
  { name: SAN_FRANCISCO,
    image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/c_crop,h_1076,w_1920/v1484427978/sfbay_y2i7hh.jpg',
     tagline: 'City by the Bay'},
  {name: 'New York',
     image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/c_crop,h_1076,w_1920/v1484426171/newyork_z9hrba.jpg',
      tagline: 'City that Never Sleeps'},
  {name: 'Boston',
    image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/c_scale,h_1076,w_1920/v1484426458/boston_qdum43.jpg',
    tagline: 'Cradle of Liberty'}])

ken_blurb = "My name is Ken and I have been a sports fan all my life. My dad introduced me to the 49ers
as a kid, and ever since then I have been a huge fan. I love getting out and meeting new people, but as we
all know sometimes it can be difficult to spark conversation with strangers. I have hosted several events through
SWS, and have met some really cool people. I love the 49ers, the Giants, and the Warriors. I love to meet fellow fans
so come join me at my next meet-up!"
marvin_blurb = "If you are a fan of baseball, I want to hang out and watch the games with you. I am a huge Giants fan
and with their resurgance lately it has brought out a whole new fanbase within the city. Sometimes with my meet-ups we
will actually go to the game, and sometimes I will schedule at a venue to eat, hangout and watch the game. If you are a Giants fan,
or just a baseball fan new to the city, I encourage you to come to my next event."
cienna_blurb = "Hey! My name is Cienna and I moved to boston about 11 months ago. At first I wasn't sure how to meet people,
but I started hosting here to meet other fans of the Dodgers (I am from L.A. originally), and it was really cool to find
other fans of a team that is based across the country! I also begun to enjoy watching the Patriots even more since moving here.
I am generally laid back and easy-going, and I hope to meet more of you at my game meet-ups in the future!"
katarina_blurb = "Hello everyone, I am a newer host here but looking to find others to watch the Sox, Pats, and Bruins with me.
Most of my friends unfortunately aren't into sports all that much, so I am hoping to meet some people who have the same passion I do.
I have hosted on meet-up so far, and it was small but totally awesome! I encourage you to come along, whether you are a New England/Boston
sports fan or a fan of another team, I just want to talk about the games."
cara_blurb = "As a San Francisco Bay Area native, I have seen a lot of new people move to the city in recent years. I think that is awesome,
and I want to get to know people that grew up in other cities or countries. Sports are a great way to get to know someone, and give you something
to bond over. My dad used to take me to baseball games when I was little, and I try to go at least once a year. Still, I watch as many games as I can,
and recently I've been hosting these meet-ups to do so. It's been a lot of fun, and I would love to continue to meet other people, whether you're a native,
a 49ers fan, a Giants fan, a Warriors fan, or just kinda like some sport and are interested in meeting some new people. I host for a lot of different games,
so keep and eye out for a game you'd like to watch and come on out!"
megan_blurb = "Hey it's Megan! If you've watched any games with me you know I am a huge Giants fan. I usually host for NFL games, but I also will do
Yankee games as well. My meet-ups are usually at a bar or restaurant with 5-10 people, and let me tell you they are a lot of fun! Everyone steps a little
outside their comfort zone but by the time the game gets rolling everyone is chatting and having a good time. I've had some awesome conversations both sports
related and about totally seperate things, and have made friends that I keep in contact with. I keep my events small, and typically short, but anyone is welcome."
paul_blurb = "Mets fans! Come catch some games with me! I have hosted a bunch of groups and they have all gone really well. I like to meet at a bar, watch the game,
and hang out. We usually are a group of about 10-15, and just hang out and blow of some steam. I work in real-estate and do this during my time off because
  it is a lot of fun and I get to meet new people all the time. I typically do baseball, basketball, and football, college and pro.
  Anyone is welcome whether you are a fan of the same teams or the fan of a rival. "
robbie_blurb = "Hey, my name is Rob and I am originally from Montana. I moved here after college and love the city. I grew up watching college football in Missoula,
and have always enjoyed football, basketball, and soccer. I am not a rabid fan of any team, but I do enjoy watching the games. For me it
  is more about the experience than winning or losing. I am always available to answer questions via email, and will get back to you as soon as I can.
  I love hosting and if you are like me and just want to watch a game low-key, then you would be perfect for one of my meet-ups."
chris_blurb = "Born and raised in Seattle, it has been a tough time being a sports fan here. However in recent years we have had a sports
resurgance with the Seahawks and the Sounders, and Seattle sports fans are some of the best fans in the whole country. I love getting to meet
the fans here, and we always have a good time. I usually meet up downtown, go to one of the spots by Century Link and do a bit of tailgating. Some people
  will come to that and then the rest usually join us when we head to a restaurant. It is a really good time, both for Seahawks and Sounders games,
  and in the future I plan to do a few Mariners games as well when I have the time."
marcus_blurb = "Greetings, I'm Marcus. I went to University of Washington after being raised in Bellevue. I love UW and watching Pac-12 games. Also a
huge Seahawks and Sounders fan. I split season tickets with a friend, so sometimes for meet-ups I will get 5 people and we will split the cost for
some tickets and go the game. Other than that, I have a projector that I bring and setup in the park. It is a ton of fun, we grill and eat food while
chatting and watching the game. I am pretty into the games and like to analyze, but anyone is welcome, especially if you are new to the area. If you are
wondering about logistics or are just unsure about joining, shoot me and email."

tyler_blurb = "Hey I'm Tyler, I became a host about three months ago and it has been a cool experience. I had watched games in the past with some friends,
but I actually enjoy smaller groups and getting to meet new people. I have met some great friends and seen some awesome games, and there's always a great
conversation to be had. I am a huge basketball fan, but ever since the Sonics left it has been hard for me to find a new team. If you are a big NBA fan and
have suggestions for a new team come to one of my basketball meetups and convert me! Sometimes meet-ups can seem like a strange idea at first, but let me assure
you that they are a lot of fun and you won't be disappointed! Email if you have any questions."

users = User.create([{email: 'Demo@demo.com', name: 'Demo User',
    image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/c_scale,h_700,w_700/v1484789224/profblank_ionat1.png', location: SAN_FRANCISCO, blurb: demo_blurb, password: 'guestpassword'},
    {email: 'kenm@gmail.com', name: 'Ken Mitchell', image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/v1484774323/pexels-photo_1_kzh0bf.jpg',
    location: SAN_FRANCISCO, blurb: ken_blurb, password: 'password'},
    {email: 'marvincallahan@hotmail.com', name: 'Marvin', image:'http://res.cloudinary.com/dlxtsqgb3/image/upload/v1484770313/pexels-photo-245049_hdloty.png',
       location: 'Boston', blurb: marvin_blurb, password: 'password'},
      {email: 'ciennarae@gmail.com', name: 'Cienna Rae', image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/v1484774186/pexels-photo-57862_uxr98t.jpg', location: 'Boston',
        password: 'password', blurb: cienna_blurb },
    {email: 'kaygray22@gmail.com', name: 'Katarina', image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/v1484770321/pexels-photo_bxpxhc.jpg', location: 'Boston',
      password: 'password', blurb: katarina_blurb },
      {email: 'CaraK@usfca.edu', name: 'Cara Kazascinski', image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/v1484770320/american-football-fan-supporter-girl-163438_slpopn.jpg', location: SAN_FRANCISCO,
        password: 'password', blurb: cara_blurb },
      {email: 'MeganMeede@bostonuniversity.edu', name: 'Meghan', image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/v1484770318/pexels-photo-27411_njdsxh.jpg', location: 'New York',
        password: 'password', blurb: megan_blurb},
      {email: 'paulmed12@hotmail.com', name: 'Paul Medeira', image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/v1484774253/pexels-photo-175701_szqxaa.jpg', location: 'New York',
        password: 'password', blurb: paul_blurb},
        {email: 'robbieh@nyu.edu', name: 'Robert H', image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/v1484770316/pexels-photo-119705_zlb3tc.jpg', location: 'New York',
        password: 'password', blurb: robbie_blurb },
      {email: 'ChrisFY@seattleu.edu', name: 'Chris White', image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/v1484773954/pexels-photo-91227_ky6qfx.jpg', location: 'Seattle',
        password: 'password', blurb: chris_blurb},
        {email: 'MarcusVincent@gmail.com', name: 'Marcus Vincent', image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/v1484774048/pexels-photo-108048_p4pomu.jpg', location: 'Seattle',
          password: 'password', blurb: marcus_blurb},
        {email: 'tylerskier23@hotmail.com', name: 'Tyler R', image: 'http://res.cloudinary.com/dlxtsqgb3/image/upload/v1484770309/pexels-photo-249766_taueqs.jpg', location: 'Seattle',
          password: 'password', blurb: tyler_blurb}])

# create_table "events", force: :cascade do |t|
#   t.integer  "host_id",  null: false
#   t.integer  "city_id",  null: false
#   t.string   "title",    null: false
#   t.string   "address",  null: false
#   t.string   "sport",    null: false
#   t.integer  "capacity"
#   t.datetime "time",     null: false
# end
# DateTime to parsed string/ How to check if you are sure when joining/





titles = ["Sports on a Saturday", "Come to Tom's Cafe!", "Watching in the park", "Going to the bar",
"Several Games at Once!", "Small Group Game", "Going to the Game!", "The playoffs are near", "Come watch with us!",
 "Title game this weekend", "Rivalry Game, Will be Good", "College Basketball this Weekend", "Are you into Hockey?", "Come Meet Some Fans!",
"Game at the Roanoke", "Second Time Hosting"]
 sports = ['Football', 'Basketball', 'Baseball', 'Soccer', 'Hockey']
# Seattle: 0, SF: 1, New York: 2, Boston: 3
# DemoSF: 0, KenSF: 1, MarvinBoston: 2 CiennaBoston: 3 KatBoston: 4
# CaraSF: 5 MeganNY: 6, PaulNY: 7, RobbieNY: 8, ChrisSEA: 9, MarcusSEA: 10, TylerSEA: 11

6.times do
  for i in 0..3
    event = Event.new
    event.city_id = cities[i].id
    event.host_id = User.where({city_id: event.city_id}).sample.id
    event.time = Faker::Time.forward(32, :afternoon)
    event.address = Faker::Address.street_address
    event.title = titles.pop
    event.sport = sports.sample
    event.capacity = rand(4..20)
    event.save
  end
end
