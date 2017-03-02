<template>
  <team-detail v-if="team.id" :team="team" :closeHandler="closeDetail"></team-detail>
  <div v-else class="error">
    Team with id of <b>{{ id }}</b> not found
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import TeamDetail from './TeamDetail.vue'
  export default {
    props: ['id'],
    components: { TeamDetail },
    computed: {
      team () {
        if (!this.id || this.teams.length === 0) return {}
        let filteredTeams = this.teams.filter(team => team.id === this.id)
        if (filteredTeams.length > 0) {
          return filteredTeams[0]
        } else {
          return {}
        }
      },
      ...mapState(['teams'])
    },
    mounted () {
      this.selectTeam(this.id)
    },
    watch: {
      id (newId) {
        this.selectTeam(newId)
      }
    },
    methods: {
      closeDetail () {
        this.selectTeam('')
        this.$router.push('/teams')
      },
      ...mapActions(['selectTeam'])
    }
  }
</script>

<style scoped>
  .error {
    color: crimson;
  }

</style>
