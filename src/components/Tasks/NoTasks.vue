<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary"/>
    </template>
    今日没有待办事项！
    <template v-slot:action>
      <q-btn
        @click="$root.$emit('showAddTask')"
        flat
        color="primary"
        label="添加任务"/>
    </template>
  </q-banner>
</template>

<script>
export default {
  name: "NoTasks"
}
</script>

<style scoped>

</style>
