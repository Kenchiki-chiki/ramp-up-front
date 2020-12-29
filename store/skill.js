export const state = () => ({
  skills: []
})

export const actions = {
  async addSkills({ commit }, skillNames) {
    // console.log('===1===')
    // console.log(skillNames)
    // const res = await this.$axios.$post('http://localhost:8080/api/v1/skills', skillName , {
    const res = await this.$axios.$post('http://localhost:8080/api/v1/skills', skillNames , {
      headers: {
          'access-token': localStorage.getItem('access-token'),
          uid: localStorage.getItem('uid'),
          client: localStorage.getItem('client'),
        },
    })
    // console.log('===2===')
    // console.log(res)
    // const saveSkill = res.data
    // console.log('===3===')
    // console.log(saveSkill)
    commit('addSkills', res)
    // console.log('===4===')
    return res
  },
  async fetchSkills({ commit }) {
    // console.log('===3===')
    const res = await this.$axios.$get('http://localhost:8080/api/v1/skills', {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    // console.log('===4===')
    console.log(res)
    commit('setSkills', res)
  }

}

export const mutations = {
  addSkills(state, saveSkill) {
    // console.log('===5===')
    // console.log(saveSkill)
    // const skillName = state.skillName.concat(saveSkill)
    const skillNames = state.skillNames.concat(saveSkill)
    // console.log('===6===')
    // console.log(skillNames)
    state.skillNames =skillNames
    // console.log('===7===')
    // console.log(skillNames)
    // console.log(state.skillNames)
  },
  setSkills(state, payload) {
    // console.log('===5===')
    console.log(payload)
    state.skills = payload
  }
}

export const getters = {
  skills(state) {
    return state.skills
  },
  content(state) {
    // console.log('===6===')
    return state.skillNames
  }
}
