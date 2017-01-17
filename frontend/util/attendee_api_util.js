export const addAttendee = attendee => (
  $.ajax({
    method: 'POST',
    url: 'api/attendees',
    data: {attendee}
  })
);

export const removeAttendee = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/attendees/${id}`
  })
);
