export const calcNextEventDate = (events) => {
  return events.find(event => event.date > Math.floor(Date.now() / 1000));
}

export const replaceIdArrWithObjs = (objProp, arr) => {
  const arrWithData = objProp.reduce((acc, val) => {
    acc.push(arr[val]);
    return acc;
  }, []);
  return arrWithData;
}

export const getNextEvent = (events, users) => {
  const nextEvent = calcNextEventDate(events);
  nextEvent.attendees = replaceIdArrWithObjs(nextEvent.attendees, users);
  return nextEvent;
}