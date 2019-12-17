const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { name: 'viewport', content: 'width=1200,initial-scale=0,user-scalable=0' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      { name: 'format-detection', content: 'email=no, telephone=no' },
      { name: 'renderer', content: 'webkit' },
      { name: 'full-screen', content: 'yes' },
      { name: 'x5-fullscreen', content: 'true' },
      { name: 'x5-page-mode', content: 'app' },
      { name: 'browsermode', content: 'application' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/common/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/img/common/icon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/common/icon.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ],
    script: [
      { innerHTML: '(function(d,c){var e=d.documentElement,b="orientationchange" in window?"orientationchange":"resize",a=function(){var f=e.clientWidth;if(!f){return}e.style.fontSize=100*(f/1920)+"px"};if(!d.addEventListener){return}c.addEventListener(b,a,false);d.addEventListener("DOMContentLoaded",a,false)})(document,window);', type: 'text/javascript', charset: 'utf-8' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/loading.client.js'}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true, // 代理
    retry: true // 重试
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },
  cache: true
}
