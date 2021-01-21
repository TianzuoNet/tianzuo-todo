<template>
  <q-input
    class="col"
    outlined
    v-model="searchField"
    label="搜索">

    <template v-slot:append>
      <q-icon
        v-if="searchField !== ''"
        name="close"
        @click="searchField = ''"
        class="cursor-pointer"/>
      <q-icon name="search"/>
    </template>
  </q-input>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState('tasks', ['search']),
    searchField: {
      get() {
        return this.search
      },
      set(value) {
        this.setSearch(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSearch'])
  }

}
</script>

<style scoped>

</style>
