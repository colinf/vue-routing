<template>
  <div class='About'>
    <img src="../assets/room-with-a-view.png" />
    <h2>Route with a Vue</h2>
    <p>An example project to demonstrate vue-router.</p>
    <p>
      For more information see the associated
      <a href="http://www.apple.com">blog post</a>
    </p>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapState([])
    },
    methods: {
      ...mapActions([])
    }
  }
</script>

<style scoped>

</style>
