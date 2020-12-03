// import Vue from 'Vue'
// import Vuex from 'Vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   namespaced: true,
//   state,
//   mutations
// })

const state = {
  content: ''
}

// 受け取った引数contentをstateのcontentに代入
const mutations = {
  setContent (state, { content, timeout }) {
    state.content = content

    if (typeof timeout === 'undefined') {
      timeout = 3000
    }

    setTimeout(() => (state.content = ''), timeout)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
