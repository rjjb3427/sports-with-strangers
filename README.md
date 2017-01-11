# Development Overview

[heroku]: https://sportswithstrangers.herokuapp.com/
[trello]: https://trello.com/b/ozHmjpoz/sportswithstrangers

## MVP Requirements

SportsWithStrangers is a web application with inspiration from TeaWithStrangers.
Application built using Ruby on Rails and React-Redux. At minimum, the following criteria
will be met:

- Hosted on Heroku
- Account creation, login, and demo account
- Choose city to view local meet-ups
- View and meet-ups in your area
- Host new meet-ups in your area  
- User dashboard of joined and hosted meet-ups
- Adequate CSS Styling
- Appropriate seed data to display features
- Bug-free navigation  
- Production README [production_readme](docs/production_README.md)

## Docs
* [Wireframes](docs/wireframes)
* [React Components](docs/components)
* [DB schema](docs/schema.md)
* [Sample State](docs/sample-state.md)
* [API endpoints](docs/api-endpoints.md)

## Timeline for Development

### Phase 1: Backend User Handling and Frontend Authentication (2 days)

**Goal:** Functioning application with session handling, login/signup forms, and basic home page.

### Phase 2: City Model, CityList Component, API (2 days)

**Goal:** User can choose, update home city, cities index will render and navigate to cities show page. NavBar reflects current user's home city.


### Phase 3: Events and Event Lists (2 days)

**Goal:** Event lists appear on city show page. Event List Items to have reference to host user (text or image, link in future). Events show user (host) detail and make requests to add/remove current user. (Bonus: Event Capacity + signifier)

### Phase 4: User Add Events (1 day)

**Goal:** Allow users to host new events. Update events to link to user show page of host.

### Phase 5: User Dashboard (1 day)

**Goal:** Both joined and hosted events appear in a User's dashboard in separate lists. User detail appears in dashboard. (Editable)

### Phase 6: - Wrap Up and Polish (1 day)

**Goal:** Complete any unfinished CSS styling, make any unpolished features working and presentable.

### Bonus Features (TBD)
- [ ] Add actual live scores/schedules from public APIs
- [ ] Add small map for event location
- [ ] Arrange Event Lists By Sport
- [ ] Add Favorite Teams or Team Events
