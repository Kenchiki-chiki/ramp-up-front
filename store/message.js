export const state = () => ({
  content: []
})

export const actions = {
  setContent({ commit }, content) {
    commit('setContent', content)
  }
}

export const mutations = {
  setContent(state, payload) {
    state.content = payload
  }
}

export const getters = {
  content(state) {
    return state.content
  }
}
