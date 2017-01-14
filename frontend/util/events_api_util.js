export const fetchUserEvents = id => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {event: { host_id: id }}
  })
);

export const fetchCityEvents = id => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {event: { city_id: id}}
  })
);
