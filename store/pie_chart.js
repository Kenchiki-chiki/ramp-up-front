export const state = () => ({
  pieChartDatas: [],
  percentageDatas: [],
  percentageRoundDatas: []
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
      // return { res: res }
      console.log('===fetchPieCharts2===')
      commit('setPieCharts', res)
      console.log(res)
      return res 
  }
}

export const mutations = {
  setPieCharts(state, payload) {
    console.log('===setPieCharts===')
    state.pieChartDatas = []
    state.pieChartDatas = state.pieChartDatas.concat(payload[2])

    state.pieChartDatas.sort(function(a, b){
          if (a[1] > b[1]) return -1;
          if (a[1] < b[1]) return 1;
          return 0;
        });

    let array = state.pieChartDatas

    var studyTimeArrayFunction = function(array) {
      for (let i in array) {
        let studyTimeArray = array[1]
        return studyTimeArray
       }     
    }

    var result = array.map(studyTimeArrayFunction)
    state.percentageDatas = []
    state.percentageRoundDatas = []
    console.log('===concatCheck===')
    console.log(result)
    console.log(state.percentageDatas)
    state.percentageDatas = state.percentageDatas.concat(result)
      var arr = state.percentageDatas

      function percentage(arr, share){ 
          var total = arr.reduce(function(x, y) { 
            return x + y; 
          }); 
          return arr.map(function(x) { 
          return (x/total) * share; 
          }); 
      } 
      var rationedArr = percentage(arr, 100); 

        for(let i in rationedArr) {
          let rationedArrEl = rationedArr[i]
          var n = 1 ;	// 小数点第n位まで残す
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
    console.log('===percentageRoundGetters===')
    console.log(state.percentageRoundDatas)
    return state.percentageRoundDatas
  }

}