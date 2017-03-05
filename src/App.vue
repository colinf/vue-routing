<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-2 menu-pane">
          <ul class="nav nav-stacked">
            <li><router-link :to="teamLink">Teams</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div>
        <div class="col-xs-10">
          <div class="row">
            <div class="col-xs-4">
              <router-view></router-view>
            </div>
            <div class="col-xs-8">
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

  #app {
    margin-top: 10px;
  }

  .router-link-active {
    background-color: #eeeeee;
  }

  .menu-pane {
    background-color: #c0c0c0;
    padding-top: 10px;
    min-height: 600px;
  }

</style>
