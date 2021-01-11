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
      console.log('===4===')
      console.log(res)
      // return { res: res }
      commit('setPieCharts', res)
      return res 
  }
}

export const mutations = {
  setPieCharts(state, payload) {
    state.pieChartDatas = []
    console.log('===pie_chart.js===')
    console.log(payload[2])
    console.log(state.pieChartDatas)
    state.pieChartDatas = state.pieChartDatas.concat(payload[2])
    console.log(state.pieChartDatas)
    
    state.pieChartDatas.sort(function(a, b){
          if (a[1] > b[1]) return -1;
          if (a[1] < b[1]) return 1;
          return 0;
        });
    console.log('===学習時間順に並べ替え直後===')
    console.log(state.pieChartDatas)

    console.log('===二次元配列のループ===')

    let array = state.pieChartDatas
    console.log(array)

    var studyTimeArrayFunction = function(array) {
      for (let i in array) {
        let studyTimeArray = array[1]
        console.log(studyTimeArray)
        return studyTimeArray
       }     
    }

    var result = array.map(studyTimeArrayFunction)
    console.log('===map直後===')
    console.log(result)
    state.percentageDatas = state.percentageDatas.concat(result)
    console.log(state.percentageDatas)

    console.log('===割合の算出===')

      console.log('===1===')

      var arr = state.percentageDatas
      console.log('===2===')

      function percentage(arr, share){ 
        console.log('===3===')
          var total = arr.reduce(function(x, y) { 
            console.log('===4===')
            return x + y; 
          }); 
          return arr.map(function(x) { 
          return (x/total) * share; 
          }); 
      } 
      console.log('===5===')
      var rationedArr = percentage(arr, 100); 
      console.log('===6===')
      console.log(rationedArr)
      console.log('===ここまでは上手くいっている(%配列が取れている)===')     

      console.log('===割合を小数点第二位までにする===')

        for(let i in rationedArr) {
          console.log(rationedArr)
          console.log('===7===')
          let rationedArrEl = rationedArr[i]
          var n = 1 ;	// 小数点第n位まで残す
          let afterRoundRation = Math.floor( rationedArrEl * Math.pow( 10, n ) ) / Math.pow( 10, n ) ;
          console.log('===8===')
          console.log(afterRoundRation)       
          state.percentageRoundDatas.push(afterRoundRation)
          console.log(state.percentageRoundDatas)
          console.log('===9===')
          // return rationArray      
        }  

        console.log('===最終確認===')
        console.log(state.percentageRoundDatas)
        
  }
  
}



export const getters = {
  pieChart(state) {
    console.log('=============getters==============')
    console.log(state.pieChartDatas)
    return state.pieChartDatas
  },
  percentage(state) {
    console.log('=============getters2==============')
    console.log(state.percentageDatas)
    return state.percentageDatas
  },
  percentageRound(state) {
    console.log('=============getters2==============')
    console.log(state.percentageRoundDatas)
    return state.percentageRoundDatas
  }

}