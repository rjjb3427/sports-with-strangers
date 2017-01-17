export const addAttendee = attendee => (
  $.ajax({
    method: 'POST',
    url: 'api/attendees',
    data: {attendee}
  })
);

export const removeAttendee = attendee => (
  $.ajax({
    method: 'DELETE',
    url: `api/attendees/1`,
    data: {attendee}
  })
);
