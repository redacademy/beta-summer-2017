export const calcNextEventDate = (events) => {
  const eventsCopy = events;
  return eventsCopy.find(event => event.date > Math.floor(Date.now() / 1000));
}

export const idToObjs = (event, users) => {
  return event.attendees.reduce((acc, cur) => {
    acc.attendees.push(users[cur])
    return acc;
  }, { ...event, attendees: [] });
}

export const getNextEvent = (events, users) => {
  return idToObjs(calcNextEventDate(events), users);
}

export const eventWithSpeakers = (event, users) => {
  return event.talks.map(talk => {
    if(typeof(talk.speaker_id)==='string'){
      talk.speaker_id = users.users[talk.speaker_id]
    }
    return talk
  });
}

export const eventWithTalks = (event, speeches) => {
  return event.talks.reduce((acc, cur) => {
    acc.talks.push(speeches.talks[cur])
    return acc;
  }, { ...event, talks: [] });
}

export const eventDataSet = (event, talks, users) => {
  return eventWithSpeakers(eventWithTalks(event, talks), users)
}
