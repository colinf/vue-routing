<template>
  <div class="form-group">
    <label :for="id" class="col-sm-3 control-label">{{ label }}</label>
    <div class="col-sm-9">
      <input :id="id" class="form-control" :value="value" type="text" readonly />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['id', 'label', 'value']
  }
</script>

<style scoped>

</style>
