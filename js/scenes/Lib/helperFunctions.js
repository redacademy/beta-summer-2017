export const calcNextEventDate = (events) => {
  return events.find(event => event.date > Math.floor(Date.now() / 1000));
}

export const replaceIdArrWithObjs = (objProp, arr) => {
  return objProp.reduce((acc, val) => {
    acc.push(arr[val]);
    return acc;
  }, []);
}

export const getNextEvent = (events, users) => {
  const nextEvent = calcNextEventDate(events);
  nextEvent.attendees = replaceIdArrWithObjs(nextEvent.attendees, users);
  return nextEvent;
}