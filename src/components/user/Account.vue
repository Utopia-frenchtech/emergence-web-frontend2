<template>
  <form v-on:submit.prevent="onUpdate" id="account" class="vertical big">
    <div class="flex">
      <div>
        <input type="text" name="firstName" v-model="firstName" :placeholder="$t('models.user.firstName')">
      </div>
      <div>
        <input type="text" name="lastName" v-model="lastName" :placeholder="$t('models.user.lastName')">
      </div>
    </div>
    <div class="flex">
      <div>
        <input type="email" name="email" v-model="email" :placeholder="$t('models.user.email')">
      </div>
      <div>
        <input type="tel" name="phone" v-model="phone" :placeholder="$t('models.user.phone')">
      </div>
    </div>
    <div class="">
      <input class="full-width" type="text" name="address" v-model="address" :placeholder="$t('models.user.address')">
    </div>
    <div class="flex">
      <div>
        <input type="text" name="zip-code" v-model="zipCode" :placeholder="$t('models.user.zipCode')">
      </div>
      <div>
        <input type="text" name="city" v-model="city" :placeholder="$t('models.user.city')">
      </div>
    </div>
    <div class="button-wrapper">
      <altai-button type="submit" :disabled="isDisabled">{{$t('components.user.account.button')}}</altai-button>
    </div>
    <div class="links">
      <router-link :to="{ name: 'Login'}">{{$t('components.user.login.alreadyMember')}}</router-link>
    </div>
  </div>
</form>
</template>
<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import AltaiButton from '@/components/ui/AltaiButton'
import API from '@/services/API'
export default {
  name: 'account',
  components: {
    AltaiButton
  },
  data: function data () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      address: null,
      city: null,
      zipCode: null,
      ...this.$store.state.user,
    }
  },
  computed: {
    isDisabled () {
      return _.isEqual(this.newUser, this.initialUser) // initial user is not updated, but user is
    },
    initialUser () {
      const user = this.$store.state.user
      return {
        firstName: user.firstName || null,
        lastName: user.lastName || null,
        email: user.email || null,
        phone: user.phone || null,
        address: user.address || null,
        city: user.city || null,
        zipCode: user.zipCode || null,
        vename: user.vename || null,
      }
    },
    newUser () {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        address: this.address,
        city: this.city,
        zipCode: this.zipCode,
        vename: this.vename,
      }
    }
  },
  methods: {
    onUpdate: function () {
      API.user.update(this.newUser).then((user) => {
        // go back to the chat interface
        this.$router.push({ name: 'Chat' })
      })
    }
  }
}
</script>
<style lang="scss">
.flex{
  :first-child{
    margin-right: 8px;
  }
  :not(:first-child){
    margin-left: 8px;
  }
}
</style>
