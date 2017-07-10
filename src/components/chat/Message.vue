<template>
  <div class="message"
  v-bind:class="{self:self, default:!self}" >
    <div class="bubble">
      <div class="info-bar">
        <div class="date">{{humanizedTime}}</div>
        <div class="sender">
          {{message.sender.name}}
        </div>
      </div>
      <div class="content">
        {{message.content}}
      </div>
    </div>
</div>
</template>

<script>
import chatHelpers from '@/helpers/chatHelpers'
export default {
  name: 'message',
  props: ['message', 'self'],
  data: function data () {
    return {
    }
  },
  computed: {
    humanizedTime: function () { return chatHelpers.humanizeTime(this.message.createdAt) }
  }
}
</script>

<style lang="scss">
/// TODO : differentiate sender from receiver
.message{
  padding: 8px 24px;
  .bubble{
    border-radius: 5px;
    width: 60%;
    margin: 4px 0px;
    min-width: 100px;
    padding: 8px 24px 12px 24px;
  }
  .info-bar{
    font-size: 80%;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    .date {
    }
    .sender{
      font-weight: bold;
    }
  }
  &.default{
    .bubble{
      margin-left: auto;
      background: linear-gradient(70deg, rgba(#999999, 0.5), rgba(#888888, 0.5));
    }
  }
  &.self{
    .bubble{
      margin-right: auto;
      color: #ffffff;
      background: linear-gradient(70deg, rgba(#3282b8, 0.5), rgba(#4c95b0, 0.5));
    }
  }
}
</style>
