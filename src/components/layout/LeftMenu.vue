<template>
  <nav v-on:click="closeLeftMenu" v-if="showLeftMenu" id="left-menu">
    <div v-for="link in links" class="menu-item" v-if="!link.hidden" :key="link.name" >
      <router-link v-on:click.native="closeLeftMenu" :to="{ name: link.name }"><button>{{link.label}}</button></router-link>
    </div>
  </nav>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'left-menu',
  data: function data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
    ...mapState(['showLeftMenu']),
    links () {
      return [
        {
          name: 'Chat',
          label: this.$i18n.t('components.chat.label'),
        },
        {
          name: 'Login',
          label: this.$i18n.t('components.user.login.label'),
          hidden: this.isLoggedIn
        },
        {
          name: 'Signup',
          label: this.$i18n.t('components.user.signup.label'),
          hidden: this.isLoggedIn
        },
        {
          name: 'Account',
          label: this.$i18n.t('components.user.account.label'),
          hidden: !this.isLoggedIn
        },
        {
          name: 'Logout',
          label: this.$i18n.t('components.user.logout.label'),
          hidden: !this.isLoggedIn
        },
      ]
    }
  },
  methods: {
    ...mapMutations(['closeLeftMenu']),
  }
}
</script>
<style lang="scss">
#left-menu{
  position: fixed;
  left:0;
  height: 100vh;
  min-height: 500px;
  min-width: 250px;
  background: linear-gradient(90deg, rgba(#222222, 0.7), rgba(#333333, 0.5));
  padding-top: 48px;
  padding-bottom: 16px;
  .menu-item{
    //border-bottom: 1px solid #ffffff;
    font-size: 120%;
    border-image-source: linear-gradient(90deg, rgba(#000000, 0) 10%, rgba(#ffffff, 0.2), rgba(#000000,0) 90%);
    border-image-slice: 100% 0%;
    border-image-width: 0px 0px 2px 0px;
    border-style: solid;
    &:hover{
    }
  }
  button {
    color: #ffffff;
    width: 100%;
    padding: 16px 32px;
    background-color: rgba(#000000, 0);
    &:hover{
      background: linear-gradient(90deg, rgba(black, 0),rgba(#ffffff, 0.2), rgba(black, 0));
    }
  }
}
#left-menu .menu-item:last-of-type{
  color: red;

}
</style>
