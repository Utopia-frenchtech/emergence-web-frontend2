/**
 * Axios is an helper for HTTP request.
 * In this file we setup the default config, mainly authentication,
 * interceptors (to handle all API errors for example) and headers.
 * @see https://github.com/mzabriskie/axios
 */
import axios from 'axios'
import i18n from '@/config/i18n'
import toastr from 'toastr'

export const Axios = axios.create({
  baseURL: '', // web server ip (not chatscript !)
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  params: {
    // NOTE : we use JWT auth for the sake of simplicity, though OAUTH may be safer in the long run (but more complex to implement)
    token: localStorage.getItem('token') // we always provide the auth token
  }
})
// Add a response interceptor to handle errors
Axios.interceptors.response.use(function (response) {
    // Do something with response data
  return response
}, function (error) {
    // Do something with response error
    // trigger a toaster on error
  toastr.options = {
    'closeButton': true,
    'debug': false,
    'newestOnTop': true,
    'progressBar': false,
    'positionClass': 'toast-bottom-center',
    'preventDuplicates': false,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '500',
    'timeOut': '3000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
  }
  toastr.error(i18n.t('services.api.error.message'), i18n.t('services.api.error.title'))
  return Promise.reject(error)
})

export default Axios
