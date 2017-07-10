<template>
  <form v-on:submit.prevent="_onSubmit" id="message-form">
    <label for="message">{{$t('components.chat.form.label')}}</label>
    <div>
      <div class="wrapper input-wrapper" v-if="!user">
        <input type="text" v-model="name" :placeholder="$t('components.chat.form.name')"/>
      </div>
      <div class="wrapper textarea-wrapper" >
        <textarea ref="textareaEl" class="textarea" v-on:keyup.enter="_onSubmit" v-model="message" rows="3" cols="60" :placeholder="$t('components.chat.form.message')"></textarea>
      </div>
      <div class="button-wrapper">
        <altai-button type="submit" :disabled="isDisabled">{{$t('components.chat.form.button')}}</altai-button>
      </div>
    </div>
  </form>
</template>

<script>
import AltaiButton from '@/components/ui/AltaiButton'
export default {
  name: 'message-form',
  props: ['user', 'onSubmit'],
  components: {
    AltaiButton
  },
  data: function data () {
    return {
      message: null,
      name: null,
    }
  },
  computed: {
    isDisabled: function () {
      return (!(this.name || this.user)) || !(this.message && this.message.length)
    }
  },
  methods: {
    _onSubmit: function (event) {
      if (this.message && this.message.length) {
        this.onSubmit(this.message, this.name)
        // reset the message
        this.message = null
        // focus back on the message form
        this.$refs.textareaEl.focus()
      }
    },
    methods: {
      sendOnEnter: function (event) {
        event.preventDefault()
        if (event.which === 13) {
          this._onSubmit()
        }
      }
    }
  }
}
</script>

<style lang="scss">
#message-form{
  width: 70%;
  min-width: 300px    ;
  padding-top: 12px;
  margin: auto;
  .wrapper {
    padding: 4px 0px;
  }
  .button-wrapper{
    text-align: right;
  }
  textarea{
    width: 100%;
    font-size: 115%;
  }
}
</style>
