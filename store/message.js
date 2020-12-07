export const state = () => ({
  content: ''
})

export const actions = {
  setContent({ commit }, { content, timeout }) {
    commit('setContent', content)

    if (typeof timeout === 'undefined') {
      timeout = 3000
    }

    setTimeout(() => (commit('setContent', '')), timeout)
  }
}

// actionsから受け取った引数contentをstateのcontentに代入
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
