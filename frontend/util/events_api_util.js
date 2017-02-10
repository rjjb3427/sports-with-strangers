export const fetchHostEvents = id => (
  $.ajax({
    method: 'GET',
    url: `api/events?event[host_id]=${id}`
  })
);

export const fetchCityEvents = id => (
  $.ajax({
    method: 'GET',
    url: `api/events?event[city_id]=${id}`
  })
);

export const createEvent = event => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: {event}
  })
);

export const deleteEvent = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  })
);
