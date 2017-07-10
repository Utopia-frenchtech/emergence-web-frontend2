<template>
    <rect :x="x" :y="y" :width="width" :height="height"
      class="exp-bar"
    ></rect>
</template>
<script>
export default {
  name: 'exp-bar',
  props: ['width', 'height', 'x', 'y'],
  data: function data () {
    return {

    }
  }
}
</script>
<style lang="scss">
.exp-bar{
  fill: rgba(#6cced1, 0.9);
}
</style>
