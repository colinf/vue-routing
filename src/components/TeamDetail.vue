<template>
  <form class="form-horizontal" @submit.prevent>
    <form-group id="teamId" label="Id" :value="team.id"></form-group>
    <form-group id="teamName" label="Name" :value="team.name"></form-group>
    <form-group id="stadiumName" label="Stadium" :value="team.stadium.name"></form-group>
    <form-group id="stadiumPostcode" label="Postcode" :value="team.stadium.postcode"></form-group>
    <form-group id="stadiumCapacity" label="Capacity" :value="team.stadium.capacity"></form-group>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default" @click="closeHandler">Close</button>
      </div>
    </div>
  </form>
</template>

<script>
  import FormGroup from './FormGroup.vue'
  export default {
    props: ['team', 'closeHandler'],
    components: { FormGroup }
  }
</script>

<style scoped>

</style>
