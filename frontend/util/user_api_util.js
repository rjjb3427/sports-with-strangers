export const fetchHost = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);
