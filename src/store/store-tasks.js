import Vue from 'vue'
import {uid} from 'quasar'

const state = {
  tasks: {
    "ID1": {
      name: 'Go to shop',
      completed: false,
      dueDate: '2021/01/18',
      dueTime: '18:20'
    },
    "ID2": {
      name: 'Get bananas',
      completed: true,
      dueDate: '2021/01/20',
      dueTime: '18:50'
    },
    "ID3": {
      name: 'Get apples',
      completed: false,
      dueDate: '2021/01/21',
      dueTime: '09:20'
    },
  }
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask({commit}, payload) {
    commit('updateTask', payload)
  },
  deleteTask({commit}, id) {
    commit('deleteTask', id)
  },
  addTask({commit}, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
