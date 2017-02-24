<template>
  <h4 class='NotFoundComponent'>
    <div>
      Page not found - please check your URL
    </div>
  </h4>
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

<style>
  .NotFoundComponent {
    color: crimson;
  }

</style>
