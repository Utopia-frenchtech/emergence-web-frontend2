<template>
  <div class="level">
    {{$t('components.level.level')}} <span class="level-value">{{level}}</span>
  </div>
</template>
<script>
export default {
  name: 'level',
  props: ['level'],
  data: function data () {
    return {

    }
  }
}
</script>
<style lang="scss">
  .level{
    font-size: 130%;
    .level-value{
      text-decoration: underline;
    }
  }
</style>
