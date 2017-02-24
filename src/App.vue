<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <ul class="nav nav-pills nav-stacked">
            <li><router-link :to="teamLink">Teams</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div>
        <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <router-view></router-view>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <router-view name="detail"></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from './vuex/store'
  import { mapState } from 'vuex'

  export default {
    store,
    computed: {
      teamLink () {
        return '/teams' + (this.selectedTeam ? '/' + this.selectedTeam : '')
      },
      ...mapState(['selectedTeam'])
    }
  }
</script>

<style>

  .router-link-active {
    background-color: #eeeeee;
  }

</style>
