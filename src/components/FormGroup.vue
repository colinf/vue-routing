<template>
  <div class="form-group">
    <label :for="id" class="col-xs-2 col-sm-2 col-md-2 col-lg-2 control-label">{{ type !== 'button' ? label : '' }}</label>
    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
      <button v-if="type === 'button'" class="btn btn-default" @click="value">{{ label }}</button>
      <input v-else id="teamId" class="form-control" :value="value" type="text" readonly />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['id', 'label', 'value', 'type']
  }
</script>

<style scoped>

</style>
