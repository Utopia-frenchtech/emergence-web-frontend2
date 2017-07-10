<template>
  <div id="user-page">
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'user-page',
  data: function data () {
    return {

    }
  }
}
</script>
<style lang="scss">
#user-page{
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
  }
  .links{
    padding: 8px 0px;
  }

}
</style>
