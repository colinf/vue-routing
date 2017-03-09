<template>
  <div class='list-group'>
    <router-link v-for="team in teams" :to="`/teams/${team.id}`"
                 class="list-group-item">{{ team.name }}</router-link>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    props: ['id'],
    computed: {
      ...mapState(['teams', 'selectedTeam'])
    },
    methods: {
      ...mapActions(['fetchTeams', 'selectTeam'])
    },
    mounted () {
      this.fetchTeams()
    }
  }
</script>

<style scoped>

</style>
