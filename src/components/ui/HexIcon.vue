<template>
  <div id="hex-icon">
    <img :src="`/static/hexIcons/48x48/${iconName}.png`" :alt="iconName" width="48px" height="48px">
  </div>
</template>
<script>
export default {
  name: 'hex-icon',
  props: ['iconName'],
  data: function data () {
    return {

    }
  }
}
</script>
<style lang="scss">
</style>
