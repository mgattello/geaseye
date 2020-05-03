<template>
  <div class="hello">
    <h1>Asteroids/Objects found close to Earth this week: {{ element_count }}</h1>
    <h4>Here {{createDataset}}</h4>
    <!-- <h4>{{date_near_earth["2020-01-01"][0].is_potentially_hazardous_asteroid}}</h4> -->
    <line-chart :data="createDataset" style="height: 20rem"></line-chart>
  </div>
</template>

<script>
import Chartkick from 'vue-chartkick'

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      element_count: this.$root.$data.sharedState.dataset.NASA_DATASET.element_count,
      date_near_earth: this.$root.$data.sharedState.dataset.NASA_DATASET.near_earth_objects,
      computedData: ''
    }
  },
  computed: {   
      createDataset: function () {
        let rawObj = Object.entries(this.date_near_earth)
        let finalObject = {}
        rawObj.reduce((accumulator, currentValue) => {
          finalObject[currentValue[0]] = currentValue[1].length
        }, {})
        return finalObject
      }
    },

    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
