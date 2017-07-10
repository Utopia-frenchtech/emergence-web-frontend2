<template>
  <form v-on:submit.prevent="onSignup" id="signup" class="vertical big">
    <div class="">
      <input type="text" name="username" v-model="username" :placeholder="$t('models.user.userName')">
    </div>
    <div class="">
      <input type="text" name="email" v-model="email" :placeholder="$t('models.user.email')">
    </div>
    <div class="">
      <input type="password" name="password" v-model="password" :placeholder="$t('models.user.password')">
    </div>
    <div class="button-wrapper">
      <altai-button type="submit" :disabled="isDisabled">{{$t('components.user.signup.button')}}</altai-button>
    </div>
    <div class="links">
      <router-link :to="{ name: 'Login'}">{{$t('components.user.login.alreadyMember')}}</router-link>
    </div>
  </div>
</form>
</template>
<script>
import AltaiButton from '@/components/ui/AltaiButton'
import API from '@/services/API'
import stringHelpers from '@/helpers/stringHelpers'
export default {
  name: 'signup',
  components: {
    AltaiButton
  },
  data: function data () {
    return {
      email: '',
      username: '',
      password: '',
    }
  },
  computed: {
    isDisabled: function () {
      return stringHelpers.isEmpty(this.username) || stringHelpers.isEmpty(this.email) || stringHelpers.isSmaller(this.password, 6)
    }
  },
  methods: {
    onSignup: function () {
      API.user.signup({ name: this.username, email: this.email, password: this.password }).then((user) => {
        // go back to the chat interface
        this.$router.push({ name: 'Chat' })
      })
    }
  }
}
</script>
<style lang="scss">
</style>
