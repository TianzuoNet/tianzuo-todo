<template>
  <q-card>
    <modal-header>编辑任务</modal-header>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">

        <modal-task-name
          :name.sync="taskToSubmit.name"
          ref="modalTaskName"/>

        <modal-due-date :dueDate.sync="taskToSubmit.dueDate"/>

        <modal-due-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"/>

      </q-card-section>

      <modal-buttons></modal-buttons>
    </form>
  </q-card>
</template>

<script>
import {mapActions} from 'vuex'
import ModalHeader from "components/Tasks/Modals/Shared/ModalHeader";
import ModalTaskName from "components/Tasks/Modals/Shared/ModalTaskName";
import ModalDueDate from "components/Tasks/Modals/Shared/ModalDueDate";
import ModalDueTime from "components/Tasks/Modals/Shared/ModalDueTime";
import ModalButtons from "components/Tasks/Modals/Shared/ModalButtons";

export default {
  components: {ModalButtons, ModalDueTime, ModalDueDate, ModalTaskName, ModalHeader},
  props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: {}
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close');
    }
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)
  },
  comments: {
    'modal-header': require('components/Tasks/Modals/Shared/ModalHeader').default,
    'model-task-name': require('components/Tasks/Modals/Shared/ModalTaskName').default,
    'model-due-date': require('components/Tasks/Modals/Shared/ModalDueDate').default,
    'model-due-time': require('components/Tasks/Modals/Shared/ModalDueTime').default,
    'model-buttons': require('components/Tasks/Modals/Shared/ModalButtons').default,
  }
}
</script>

<style>

</style>
