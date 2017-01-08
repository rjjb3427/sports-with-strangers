## HTML API / HTTP-Requests

### Root

- `GET /` - loads root page with React components to render web app

## JSON API - AJAX Requests

### Users

- `POST /api/users`
- `PATCH /api/users`
  -change home city
- `PATCH /api/users`
- `GET  /api/users/:userId`
  -get user detail

### Session

- `POST /api/session`
- `DELETE /api/session`

### Dashboard

- `GET /api/dashboard`
  - visit user dashboard

### Cities

- `GET /api/cities`
  - visit city home page with list of cities
- `GET /api/cities/:cityId`
- `POST /api/cities/:cityId`
  - post new event to city index

### Events

- `GET /api/cities/:cityId/:eventId`
- `POST /api/cities/:cityId/:eventId`
  - add to attendees
- `PATCH /api/cities/:cityId/:eventId`
- `DELETE /api/cities/:cityId/:eventId`
