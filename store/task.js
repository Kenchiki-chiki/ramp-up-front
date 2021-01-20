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
    }).catch(() => {
      return { errors: ['エラーが発生しました'] }
    })
    if (res.errors && res.errors.length !== 0) {
      return {
        errors: res.errors
      }
    } else{
      commit('saveTasks', res)
      return {}
    }
    
  },
  async fetchTasks({ commit }) {
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
    const res = await this.$axios.$patch(url,params, {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    }).catch(() => {
      return { errors: ['エラーが発生しました'] }
    })
    if (res.errors && res.errors.length !== 0) {
      return {
        errors: res.errors
      }
    } else{
      return {}
    }
  }

}

export const mutations = {
  saveTasks(state, saveTasks) {
    const tasks = state.tasks.concat(saveTasks)
    state.tasks =tasks
  },

  setTasks(state, payload) {
    state.tasks = []
    const Tasks = state.tasks.concat(payload)
    state.tasks = Tasks
  }
  
}

export const getters = {
  tasks(state) {
    return state.tasks
  }
}