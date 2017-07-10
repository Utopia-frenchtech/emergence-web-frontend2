<template>
  <nav id="top-menu">
    <div class="menu-block left-menu-button">
      <i class="fa fa-bars" v-on:click.prevent="toggleLeftMenu"></i>
    </div>
    <div class="menu-block user-menu">
      <div v-if="user" class="user-info">
        <div class="">
          {{user.name}}
        </div>
        <div>
          <level :level="exp.level"></level>
        </div>
      </div>
      <div v-else class="user-login">
        <router-link :to="{ name: 'Login'}">
          <altai-button>{{$t('components.user.login.label')}}</altai-button>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import Level from '@/components/emergence/Level'
import AltaiButton from '@/components/ui/AltaiButton'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'top-menu',
  components: {
    Level,
    AltaiButton,
  },
  data: function data () {
    return {
    }
  },
  computed: {
    ...mapState(['user', 'exp']),
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapMutations(['toggleLeftMenu'])
  }
}
</script>
<style lang="scss">
#top-menu{
  display: flex;
  padding: 8px;
  margin: 8px 0px;
  .menu-block{
    padding: 0px 16px;
  }
  .left-menu-button{
    font-size: 200%;
    color: #666666;
  }
  .user-menu{
    flex-grow: 1;
    text-align: right;
  }
  .user-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

</style>
