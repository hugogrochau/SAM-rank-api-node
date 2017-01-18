import request from 'superagent'

const API_URL = 'https://20kiyaost7.execute-api.us-west-2.amazonaws.com/prod'

const playlistMap = {
  'Ranked Duel 1v1': '1v1',
  'Ranked Doubles 2v2': '2v2',
  'Ranked Solo Standard 3v3': '3v3s',
  'Ranked Standard 3v3': '3v3',
}

const rankMap = {
  'Grand Champion': 15,
  'Super Champion': 14,
  Champion: 13,
  Superstar: 12,
  'All-Star': 11,
  'Shooting Star': 10,
  'Rising Star': 9,
  'Challenger Elite': 8,
  'Challenger III': 7,
  'Challenger II': 6,
  'Challenger I': 5,
  'Prospect Elite': 4,
  'Prospect III': 3,
  'Prospect II': 2,
  'Prospect I': 1,
  Unranked: 0,
}

const divisionMap = {
  V: 5,
  IV: 4,
  III: 3,
  II: 2,
  I: 1,
}

/* extract ranks from api stats object */
const getRanksFromInformation = (stats) => {
  const ranks = {}
  stats.forEach((stat) => {
    const playlist = playlistMap[stat.label]

    if (playlist) {
      ranks[playlist] = stat.value
      // extract division and rank
      const regex = /\[(\w{1,3})\]\s(.*)/
      const matched = regex.exec(stat.subLabel)
      ranks[`${playlist}_division`] = divisionMap[matched[1]]
      ranks[`${playlist}_tier`] = rankMap[matched[2]]
    }
  })
  return ranks
}

function getInformation(platform, id, apiKey) {
  const rltPlatform = 3 - platform
  return new Promise((resolve, reject) => {
    request
      .get(API_URL)
      .set({ 'X-API-KEY': apiKey })
      .query({
        platform: rltPlatform,
        name: id,
      })
      .then((res) => {
        const info = getRanksFromInformation(res.body.stats)
        info.name = res.body.platformUserHandle
        info.id = res.body.platformUserId
        resolve(info)
      })
      .catch((err) => reject(err))
  })
}
export { getInformation }
