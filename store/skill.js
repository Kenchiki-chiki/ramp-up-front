export const state = () => ({
  skillName: []
})

export const actions = {
  async addSkills({ commit }, skillName) {
    console.log('===1===')
    console.log(skillName)
    const res = await this.$axios.$post('http://localhost:3000/api/v1/skills', skillName , {
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
    const skillName = state.skillName.concat(saveSkill)
    console.log('===6===')
    console.log(skillName)
    state.skillName =skillName
    console.log('===7===')
    console.log(skillName)
    console.log(state.skillName)
  }
}

export const getters = {
  content(state) {
    console.log('===8===')
    return state.skillName
  }
}