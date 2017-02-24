import * as types from './mutation_types'

export default {
  [types.FETCHED_TEAMS] (state, teams) {
    state.teams = teams
  },
  [types.TEAM_SELECTED] (state, id) {
    state.selectedTeam = id
  }
}
