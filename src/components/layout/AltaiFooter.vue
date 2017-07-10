<template>
  <div id="altai-footer">
    <ul class="horizontal">
      <li v-for="link in links" :key="link.label">
        <a v-if="!!link.link" :href="link.link" :target="link.external && '_blank'">{{link.label}}</a>
        <router-link v-if="!!link.name" :to="{ name: link.name }"><a>{{link.label}}</a></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'altai-footer',
  data: function data () {
    return {
      links: [{
        label: 'Utopia',
        link: 'http://utopia.french.tech',
        external: true,
      }, {
        label: 'FirstOnes',
        link: 'http://dreamoffreedom.faith',
        external: true,
      }, {
        label: this.$i18n.t('components.info.legalTerms.label'),
        name: 'LegalTerms',
      }, {
        label: 'Contact',
        link: 'mailto:contact@emergence.site',
      }
      ]
    }
  }
}
</script>
<style lang="scss">
#altai-footer{
  text-align: center;
  li{
    padding: 8px;
  }
  a {
    font-style: normal;
    color: #444444;
    &:hover{
      color: #888888;
    }
  }
}
</style>
