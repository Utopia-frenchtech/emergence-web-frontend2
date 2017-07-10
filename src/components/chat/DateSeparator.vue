<template>
  <div class="date-separator">
      <div class="date">
          {{humanizedDate}}
      </div>
      <div class="icon">
          <i class="fa fa-chevron-down"></i>
      </div>
  </div>
</template>
<script>
// import moment from 'moment'
import chatHelpers from '@/helpers/chatHelpers'
export default {
  name: 'date-separator',
  props: ['date'],
  data: function data () {
    return {

    }
  },
  computed: {
    humanizedDate: function () { return chatHelpers.humanizeDate(this.date) }
  },
}
</script>
<style lang="scss" scoped>
.date-separator{
    text-align: center;
    margin-bottom: 4px;
    &:not(:first-child)::before{
      content:'';
      display: block;
      margin: auto;
      width: 70%;
      background-color: rgba(#777777, 0.4);
      height: 1px;
      max-height: 1px;
    }
    .date{
      font-size: 90%;
      padding: 4px 0px;
    }
    .icon{
      font-weight: lighter;
      font-size: 50%;
    }
  }


  </style>
