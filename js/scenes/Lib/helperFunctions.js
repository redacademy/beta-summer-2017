export const calcNextEventDate = (events) => {
  const eventsCopy = events;
  return eventsCopy.find(event => event.date > Math.floor(Date.now() / 1000));
}

export const idToObjs = (event, users) => {
  return event.attendees.reduce((acc, cur)=> {
    acc.attendees.push(users[cur])
    return acc;
  }, {...event, attendees:[]});
}

export const getNextEvent = (events, users) => {
  return idToObjs(calcNextEventDate(events), users);
}
