/**
 * Internationalization configuration
 * @type {[type]}
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import moment from 'moment/min/moment-with-locales'

import locales from '@/assets/locales'

Vue.use(VueI18n)

// setup date locale
export const currentLocale = window.navigator.userLanguage || window.navigator.language
moment.locale(currentLocale)

// i18n config
export const i18nConfig = new VueI18n({
  locale: currentLocale,
  messages: locales,
  fallbackLocale: 'en',
})
export default i18nConfig
