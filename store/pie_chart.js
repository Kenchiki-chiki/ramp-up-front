export const state = () => ({
  pieChartDatas: [],
  percentageDatas: [],
  percentageRoundDatas: [],
  skillDatas: [],
  rankDatas: []
})
export const actions = {
  async fetchPieCharts({ commit }) {
    const res = await this.$axios.$get('/api/v1/pie_charts', {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
      commit('setPieCharts', res)
  }
}

export const mutations = {
  setPieCharts(state, payload) {
    state.pieChartDatas = []
    state.pieChartDatas = state.pieChartDatas.concat(payload[2])

    state.pieChartDatas.sort(function(a, b){
          if (a[1] > b[1]) return -1;
          if (a[1] < b[1]) return 1;
          return 0;
        });

    let array = state.pieChartDatas

    let skillArrayFunction = function(array) {
      for (let i in array) {
        let skillArray = array[0]
        return skillArray
       }     
    }
    let sortSkill = array.map(skillArrayFunction)

    state.skillDatas = []
    state.skillDatas = state.skillDatas.concat(sortSkill)

    let studyTimeArrayFunction = function(array) {
      for (let i in array) {
        let studyTimeArray = array[1]
        return studyTimeArray
       }     
    }
    let sortStudyTime = array.map(studyTimeArrayFunction)

    let ranks = sortStudyTime.slice().map(function(x){return sortStudyTime.indexOf(x) + 1});
    state.rankDatas = []
    state.rankDatas = state.rankDatas.concat(ranks)

    state.percentageDatas = []
    state.percentageRoundDatas = []
    state.percentageDatas = state.percentageDatas.concat(sortStudyTime)
      let arr = state.percentageDatas

      function percentage(arr, share){ 
          let total = arr.reduce(function(x, y) { 
            return x + y; 
          }); 
          return arr.map(function(x) { 
          return (x/total) * share; 
          }); 
      } 
      let rationedArr = percentage(arr, 100); 

        for(let i in rationedArr) {
          let rationedArrEl = rationedArr[i]
          let n = 1 ;	// 小数点第n位まで残す
          let afterRoundRation = Math.floor( rationedArrEl * Math.pow( 10, n ) ) / Math.pow( 10, n ) ;       
          state.percentageRoundDatas.push(afterRoundRation)
          // return rationArray      
        }  
    
  }
  
}

export const getters = {
  pieChart(state) {
    return state.pieChartDatas
  },
  percentage(state) {
    return state.percentageDatas
  },
  percentageRound(state) {
    return state.percentageRoundDatas
  },
  skillDatas(state) {
    return state.skillDatas
  },
  rankDatas(state) {
    return state.rankDatas
  }

}