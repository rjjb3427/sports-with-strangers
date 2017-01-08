## SportsWithStrangers

SportsWithStrangers is a full-stack web application inspired by TeaWithStrangers.
Built with Ruby-on-Rails with PostgreSQL for backend data management, and React.js with Redux
state container.  

##  Notes for Implementing Features

#### Notes Before Development

  When a user chooses a home city an ajax request will be made and return all the associated events.
  These events will be stored in state and remain their for the entirety of the session. The NavBar Component will provide a link directly to the user's home city, so that they do not have to navigate to the directory.

  Events in the database hold a foreign key `city_id` to be associated with their locale, such that each user can view the events in his or her city. A user may view another city's events by visiting the cities index page, but upon exit the event items rendered will always default to their home city.
  A user's `currentCity` will be stored in state to keep both `NavBar` text and `EventList` accurate. If a logged-in user chooses to visit another's city page, an ajax request will be made
  to fetch the events associated, and the `EventList` component will be rendered with the proper items.

  The UI should be very similar to TeaWithStrangers, with some small changes such as the option to
  choose a home city upon registration.

Component Overview (No Containers)
![component-overview](components/component-overview.png)
