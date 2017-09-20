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
    if (typeof (talk.speaker_id) === 'string') {
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

export const parseGoalsObjToArr = goalsObj => {
  return Object.keys(goalsObj).reduce((acc, val) => {
    if (goalsObj[val] === "") {
      return acc;
    } else {
      acc.push(goalsObj[val])
      return acc;
    }
  }, []);
};

export const findTalks = (talkIds, talks) => {
  return talkIds.reduce((acc, curr) => {
    acc.push(talks[curr])
    return acc;
  }, []);
}

export const findRespondentDetails = (respondents, users) => {
  return Object.keys(respondents).reduce((acc, curr) => {
    if (typeof respondents[curr] !== 'string') {
      return acc;
    } else {
      acc.push({
        comment: respondents[curr],
        name: users[curr].fullName,
        imageUrl: users[curr].imageUrl
      });
      return acc;
    }
  }, [])
}

