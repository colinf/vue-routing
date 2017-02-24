import * as types from './mutation_types'
import api from '../api'

export default {

  fetchTeams: ({commit}) => {
    api.fetchTeams().then(response => {
      commit(types.FETCHED_TEAMS, response.body)
    })
  },
  selectTeam: ({commit}, id) => {
    commit(types.TEAM_SELECTED, id)
  }
}
