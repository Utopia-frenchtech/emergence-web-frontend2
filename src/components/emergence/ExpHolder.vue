<template>
    <rect :x="x" :y="y" :width="width" :height="height"
      class="exp-holder"
    ></rect>
</template>
<script>
export default {
  name: 'exp-holder',
  props: ['width', 'height', 'x', 'y'],
  data: function data () {
    return {

    }
  }
}
</script>
<style lang="scss">
.exp-holder{
  fill: rgba(#d1ffff, 0.3);
  stroke: #eeeeee;
  stroke-width: 1;
}
</style>
