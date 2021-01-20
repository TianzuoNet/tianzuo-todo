<template>
  <q-item
    clickable
    @click="updateTask({id:id,updates:{ completed: !task.completed }})"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    v-ripple>
    <q-item-section side top>
      <q-checkbox v-model="task.completed"/>
    </q-item-section>
    <q-item-section>
      <q-item-label
        :class="{ 'text-strike' :task.completed}"
      >{{ task.name }}
      </q-item-label>
    </q-item-section>
    <q-item-section
      v-if="task.dueDate"
      side>
      <div class="row">
        <div class="column justify-center">
          <q-icon
            size="18px"
            name="event"
            class="q-mr-xs"
          />
        </div>
        <div class="column">
          <q-item-label
            class="row justify-end"
            caption>
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label
            class="row justify-end"
            caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTask = true"
          flat
          round
          dense
          color="primary"
          icon="edit"/>
        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="red"
          icon="delete"/>
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task
        :task = "task"
        :id = "id"
        @close="showEditTask = false"/>
    </q-dialog>

  </q-item>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['task', 'id'],
  data() {
    return {
      showEditTask: false
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id) {
      this.$q.dialog({
        title: '确认',
        message: '是否确认删除?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
  components: {
    'edit-task': require('components/Tasks/Modals/EditTask').default,
  }
}
</script>

<style>

</style>
