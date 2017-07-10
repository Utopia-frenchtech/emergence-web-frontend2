<template>
  <button class="altai-button">
      <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'altai-button',
  data: function data () {
    return {

    }
  }
}
</script>
<style lang="scss">
.altai-button{
    border-radius: 5%;
    background-color: #38393B;
    color:#ffffff;
    padding: 12px 24px;
    text-transform: uppercase;
    transition: background-color 0.3s, color 0.3s;
    &:disabled{
      background-color: #989aa1;
      color: #6f7175;
      cursor: not-allowed;
    }
}
</style>
