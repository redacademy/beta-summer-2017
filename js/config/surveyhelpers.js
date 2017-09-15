import  { auth, betadb, betausers, betatalks, betaevents, betaquestions }  from './firebase';

const survanswers = {
  "Rate the speaker's ability to tell a story": {
    value: 1,
    quality: "Story Telling",
    question: "Rate the speaker's ability to tell a story"
  },
  "Rate the speaker's ability to adapt the subject matter to the audience": {
    value: 3,
    quality: "Adaptability to Audience",
    question: "Rate the speaker's ability to adapt the subject matter to the audience"
  },
  "How credible do you find the speaker on the topic?": {
    value: 2,
    quality: "Credibility",
    question: "Rate the speaker's ability to tell a story"
  },
  "How clear were the main points and message?": {
    value: 4,
    quality: "Clarity",
    question: "How clear were the main points and message?"
  },
  "Rate the speaker's ability to engage the audience": {
    value: 3,
    quality: "Audience Engagement",
    question: "Rate the speaker's ability to engage the audience"
  },
  "How would you score the speaker's mastery of body language?": {
    value: 4,
    quality: "Body Language",
    question: "How would you score the speaker's mastery of body language?"
  },
  "How would you score the speaker on speaking deliverability?": {
    value: 2,
    quality: "Deliverability",
    question: "How would you score the speaker on speaking deliverability?"
  },
  "Did the speaker use appropriate language for the topic and audience level of understanding?": {
    value: 0, //if it's a bool put 0 or 4
    quality: "Adaptability to the Audience",
    question: "Did the speaker use appropriate language for the topic and audience level of understanding?"
  },
  "Rate your ability to follow the presentation's flow": {
    value: 2,
    quality: "Clarity",
    question: "Rate your ability to follow the presentation's flow"
  },
  "Rate the speaker's mastery of presentation tools such as visual aids, props, videos, etc": {
    value: 3,
    quality: "Deliverability",
    question: "Rate the speaker's mastery of presentation tools such as visual aids, props, videos, etc"
  }
}
const mocktalk= {
  talk_id: '070518c95510',
  speaker_id: 'T9KANSmTttWUMd6JeiMEsXMixPS2',
  respondents: {'EVyPYeHeziX06GqVO9nMZ8ieONh1': false, init: true}
}

export const giveFeedback = (talk, respondent_id, surveyanswers, textfeedback) => {
  if (respondentCheck(talk.respondents, respondent_id)) {
    throw new Error('Alredy surveyed this talk')
  } else {
    transactionCombo(talk, processSurvey(surveyanswers), textfeedback);
  }
}
export const respondentsUpdate = (talkid, userid, textfeedback) => {
  const updates = {}
  if(textfeedback){
    updates[talkid+ '/respondents/' + userid] = textfeedback
  } else {
    updates[talkid+ '/respondents/' + userid] = true
  }
  betatalks.update(updates)
}
export const respondentCheck = (respondents, id) => { 
  return respondents[id] ? true : false
}
export const processSurvey = (answers) => {
  return Object.keys(answers).reduce((acc, cur) => {
    const q = answers[cur]
    if (acc[q.quality]) {
      acc[q.quality].value += valuecalc(q.value)
      acc[q.quality].amount += 1
      return acc
    } else {
      acc[q.quality] = { value: valuecalc(q.value), amount: 1 }
      return acc
    }
  }, {})
}

export const valuecalc = (value) => {
  switch (value) {
  case 4:
      return 10;
  case 3:
      return 7.5;
  case 2:
      return 5;
  case 1:
      return 2.5;
  default:
      return 0;
  }
}

export const transactionCombo = (talk, updates, textfeedback) => {
  const talkref = betatalks.child(talk.talk_id + '/talkStats');
  const speakerref = betausers.child(talk.speaker_id + '/speakerStats');
  talkref.transaction(
    statsUpd(updates), 
    ()=>{return speakerref.transaction(
      statsUpd(updates), 
      respondentsUpdate(talk.talk_id, auth.currentUser.uid, textfeedback)
    )}
  )
}

export const statsUpd = (updates) => {
  return function (stats) {
    return stats.map((cur) => {
      const quality = updates[cur.quality]
      cur.submitAmnt += quality.amount
      cur.value += quality.value
      return cur
    })
  }
}