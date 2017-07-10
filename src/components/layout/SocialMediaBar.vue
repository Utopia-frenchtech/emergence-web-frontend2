<template>
  <div id="social-media-bar">
    <div v-for="link in links" :key="link.iconName" class="icon">
      <a :href="link.link" target="_blank">
        <hex-icon :iconName="link.iconName"></hex-icon>
      </a>
    </div>
  </div>
</template>
<script>
import HexIcon from '@/components/ui/HexIcon'
export default {
  name: 'social-media-bar',
  components: {
    HexIcon
  },
  data: function data () {
    return {

      links: [
        {
          label: 'Google +',
          iconName: 'google-plus',
          link: 'https://plus.google.com/u/0/117808079181543377065',
        }, {
          label: 'Blogger',
          iconName: 'blogger',
          link: this.$i18n.t('links.blogger'),
        }, {
          label: 'Facebook',
          iconName: 'facebook',
          link: 'https://www.facebook.com/Emergence-665378680253389/',
        }, {
          label: 'Twitter',
          iconName: 'twitter',
          link: 'https://twitter.com/FirstonesMbot',
          params: {
            hashtag: '@FirstonesMbot'
          },
        }, {
          label: 'Pinterest',
          iconName: 'pinterest',
          link: 'https://fr.pinterest.com/firstonesmbot/',
        }, {
          label: 'Dribble',
          iconName: 'dribble',
          link: 'https://dribbble.com/FirstonesMbot',
        }, /*{
          label: 'Medium',
          iconName: 'medium',
          link: 'https://medium.com/@firstonesmbot',
        } sadly we lack an hexagonal icon for medium */
      ]
    }
  }
}
</script>
<style lang="scss">
#social-media-bar{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 8px;
  .icon{
  }
}
</style>
