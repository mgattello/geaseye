import Vue from 'vue'
import App from './App.vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import NASA_DATASET from '../data/dataset.json'

Vue.use(Chartkick.use(Chart))

const store = {
  debug: true,
  state: {
    dataset: {
      NASA_DATASET
    }
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with ', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}

new Vue({
  data: {
    privateState: {},
    sharedState: store.state
  },
  render: h => h(App),
}).$mount('#app')
