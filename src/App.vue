<template>
  <div id="app">
    <layout>
      <router-view></router-view>
    </layout>
  </div>
</template>

<script>

// font-awesome
import 'font-awesome/css/font-awesome.min.css'
// css reset
import 'normalize.css'
import 'toastr/build/toastr.min.css'
import localStorageHelpers from '@/helpers/localStorageHelpers'
import API from '@/services/API'

import Layout from '@/components/layout/Layout'
export default {
  name: 'app',
  components: {
    Layout
  },
  created: function () {
    // get the userId if logged in or ask the server to provide a unique id for demo purpose
    if (!localStorage.getItem('userId')) {
      API.user.demo().then((randomId) => {
        localStorage.setItem('userId', randomId)
        this.$store.commit('updateUserId', randomId)
      })
    }
    // load route params
    const { color } = this.$route.query
    if (color) this.$store.commit('updateColor', color)
  },
}
</script>

<style lang="scss">
@import './assets/style/app.scss'
</style>
