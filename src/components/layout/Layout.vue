<template>
  <div id="layout" :style="{background: bg}">
    <left-menu
    :show="showLeftMenu"
    ></left-menu>
    <div class="container">
      <top-menu
      :toggleLeftMenu="toggleLeftMenu"
      ></top-menu>
      <main>
        <slot></slot>
      </main>
    </div>
    <div class="right-bar">
      <social-media-bar></social-media-bar>
    </div>
    <altai-footer></altai-footer>
  </div>
</template>

<script>
// @see https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slots
import TopMenu from './TopMenu.vue'
import LeftMenu from './LeftMenu.vue'
import AltaiFooter from './AltaiFooter.vue'
import SocialMediaBar from './SocialMediaBar.vue'
import { mapState } from 'vuex'
import Color from 'color'
export default {
  name: 'layout',
  components: {
    TopMenu,
    LeftMenu,
    AltaiFooter,
    SocialMediaBar,
  },
  data: function data () {
    return {
      showLeftMenu: false,
    }
  },
  computed: {
    ...mapState(['color']),
    bg: function () {
      try {
        const asHSL = Color(this.color).hsl().object()
        const normal = { ...asHSL }
        normal.s = 0xaa // desaturate a little
        normal.l = 0x5b // lighten
        const desaturate = { ...asHSL }
        desaturate.s = 0x11
        desaturate.l = 0x50
        const clear = { ...asHSL }
        clear.s = 0xbb
        clear.l = 0xcc
        // colors as rgb strings
        const colors = [desaturate, clear, normal].map(col => Color(col).rgb().string())
        return `linear-gradient(100deg, ${colors.join(', ')})`
      } catch (err) {
        // fallback color
        return ' linear-gradient(90deg, #858C94, #DFCEBC, #F6E6D9)'
      }
    }
  },
  methods: {
    toggleLeftMenu: function () { this.showLeftMenu = !this.showLeftMenu }
  }
}
</script>
<style lang="scss">
#layout{
  min-height: 600px;
  height: 100vh;
  background: linear-gradient(90deg, #858C94, #DFCEBC, #F6E6D9);
  display: flex;
  flex-direction: column;
  .container{
    flex-grow: 1;
    margin: auto;
    max-height: 100vh;
    min-height: 500px;
    display:flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 800px;
  }
  main {
    height: 100%;
    flex-grow: 1;
    overflow-y: auto;
  }
  .right-bar{
    display:flex;
    position: fixed;
    right:0;
    height: 100vh;
    min-height: 500px;
  }
}
</style>
