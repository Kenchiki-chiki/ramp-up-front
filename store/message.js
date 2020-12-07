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
    console.log('======1======')
    state.content = content
    console.log('======2======')

    if (typeof timeout === 'undefined') {
      console.log('======3======')
      timeout = 3000
      console.log('======4======')
    }
    console.log('======5======')

    setTimeout(() => (state.content = ''), timeout)
    console.log('======6======')
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
