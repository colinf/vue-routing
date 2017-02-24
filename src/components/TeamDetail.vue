<template>
  <form class='form-horizontal' @submit.prevent>
    <form-group id="teamId" label="Id" :value="team.id"></form-group>
    <form-group id="teamName" label="Name" :value="team.name"></form-group>
    <form-group id="stadiumName" label="Stadium" :value="team.stadium.name"></form-group>
    <form-group id="stadiumPostcode" label="Postcode" :value="team.stadium.postcode"></form-group>
    <form-group id="stadiumCapacity" label="Capacity" :value="team.stadium.capacity"></form-group>
    <form-group type="button" label="Close" :value="closeDetail"></form-group>
  </form>
    Team Detail
    {{ team.name }}
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import FormGroup from './FormGroup.vue'
  export default {
    props: ['id'],
    components: {FormGroup},
    computed: {
      team () {
        if (!this.id || this.teams.length === 0) return {id: '', name: '', stadium: {}}
        let teams = this.teams.filter(team => team.id === this.id)
        return teams[0]
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
        this.$router.push('/teams')
      },
      ...mapActions(['  selectTeam'])
    }
  }
</script>

<style scoped>

</style>
