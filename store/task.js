export const state = () => ({
  tasks: [],
})

export const actions = {
  async saveTasks({ commit }, tasks) {
    const res = await this.$axios.$post('/api/v1/tasks', tasks, {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    commit('saveTasks', res)
    return res
  },
  async fetchTasks({ commit }) {
    console.log('===fetchTasks===')
    const res = await this.$axios.$get('/api/v1/tasks', {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    commit('setTasks', res)
    return res
  },
  async deleteTasks({ commit }) {
    await this.$axios.$delete('/api/v1/tasks/destroy_all', {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
  },
  async fetchEditTask({ commit }, taskID) {
    console.log('====fetchEditTask===')
    console.log(taskID)
    const res = await this.$axios.$get('/api/v1/tasks/fetch_edit_task', {
      params:{taskID},
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    return res
  },
  async editTask({ commit }, params) {
    const url = `/api/v1/tasks/${params[0]}`
    console.log('====editTask===')
    const res = await this.$axios.$patch(url,params, {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
  }

}

export const mutations = {
  saveTasks(state, saveTasks) {
    console.log('===saveTasks===')
    console.log(saveTasks)
    console.log(state.tasks)
    const tasks = state.tasks.concat(saveTasks)
    state.tasks =tasks
  },

  setTasks(state, payload) {
    console.log('===setTasks===')
    state.tasks = []
    const Tasks = state.tasks.concat(payload)
    state.tasks = Tasks
    console.log(state.tasks)
  }
  
}

export const getters = {
  tasks(state) {
    return state.tasks
  }
}