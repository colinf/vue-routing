import request from 'superagent'

const baseUrl = 'http://localhost:3000'

export default {
  fetchTeams: () => {
    return request.get(`${baseUrl}/teams`).accept('json')
  }
}
