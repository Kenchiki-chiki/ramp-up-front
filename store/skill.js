export const state = () => ({
  skillNames: []
})

export const actions = {
  async addSkills({ commit }, skillNames) {
    console.log('===1===')
    console.log(skillNames)
    // const res = await this.$axios.$post('http://localhost:8080/api/v1/skills', skillName , {
    const res = await this.$axios.$post('/api/v1/skills', skillNames , {
      headers: {
          'access-token': localStorage.getItem('access-token'),
          uid: localStorage.getItem('uid'),
          client: localStorage.getItem('client'),
        },
    })
    console.log('===2===')
    console.log(res)
    // const saveSkill = res.data
    console.log('===3===')
    // console.log(saveSkill)
    commit('addSkills', res) 
    console.log('===4===')
    return res
  }
  
}

export const mutations = {
  addSkills(state, saveSkill) {
    console.log('===5===')
    console.log(saveSkill)
    // const skillName = state.skillName.concat(saveSkill)
    const skillNames = state.skillNames.concat(saveSkill)
    console.log('===6===')
    console.log(skillNames)
    state.skillNames =skillNames
    console.log('===7===')
    console.log(skillNames)
    console.log(state.skillNames)
  }
}

export const getters = {
  content(state) {
    console.log('===8===')
    return state.skillNames
  }
}