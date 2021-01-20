<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="name"
      @input="$emit('update:name',$event)"
      :rules="[val => !!val || '任务名称不能为空 ']"
      autofocus
      ref="name"
      class="col"
      clearable
      label="任务名称"/>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style>

</style>
