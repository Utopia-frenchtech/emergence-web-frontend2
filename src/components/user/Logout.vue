<template>
  <div id="logout">
    <p>{{$t('components.user.logout.message')}}</p>
    <div class="links">
      <router-link :to="{ name: 'Login'}">{{$t('components.user.logout.anotherAccount')}}</router-link>
    </div>
  </div>
</template>
<script>
import API from '@/services/API'
export default {
  name: 'logout',
  created: () => {
    API.user.logout()
  },
  data: function data () {
    return {

    }
  }
}
</script>
<style lang="scss">
p{
  font-size: 110%;
}
</style>
