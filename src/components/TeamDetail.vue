<template>
  <div class="detail-pane">
    <form class="form-horizontal" @submit.prevent>
      <form-group id="teamId" label="Id" :value="team.id"></form-group>
      <form-group id="teamName" label="Name" :value="team.name"></form-group>
      <form-group id="stadiumName" label="Stadium" :value="team.stadium.name"></form-group>
      <form-group id="stadiumPostcode" label="Postcode" :value="team.stadium.postcode"></form-group>
      <form-group id="stadiumCapacity" label="Capacity" :value="team.stadium.capacity"></form-group>
      <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
          <button type="submit" class="btn btn-default" @click="closeHandler">Close</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import FormGroup from './FormGroup.vue'
  export default {
    props: ['team', 'closeHandler'],
    components: {FormGroup}
  }
</script>

<style>

  .detail-pane {
    padding-top: 10px;
    padding-right: 10px;
    border: #c0c0c0 1px solid;
  }

</style>
