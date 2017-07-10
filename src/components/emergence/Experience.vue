<template>
  <div id="experience">
    <h2>Expérience</h2>
    <svg :width="width" :viewBox="`0 0 ${width} ${height}`">
      <rect :x="limit" y="0" width="2" v-if="current > 0 && current < total" ></rect>
      <exp-holder x="0" y="0" :width="width" :height="height"></exp-holder>
      <exp-bar :x="2" y="2" :width="limit" :height="height-4"></exp-bar>
    </svg>
  </div>
</template>
<script>
// @see https://developer.mozilla.org/fr/docs/Web/SVG/Tutoriel/D%C3%A9coupages_et_masquages
import ExpBar from './ExpBar.vue'
import ExpHolder from './ExpHolder'
export default {
  name: 'experience',
  props: ['total', 'current'],
  components: { ExpBar, ExpHolder },
  data: function data () {
    return {
      width: 500,
      height: 20,
    }
  },
  computed: {
    limit () {
      return this.current * (this.width / this.total)
    }
  }
}
</script>
<style lang="scss">
.experience{
  text-align: center;
  padding: 8px 0px;
  h2{
    font-weight: normal;
    font-size: 115%;
    color:#333333;
    margin: 8px 0px;
  }
}
</style>
