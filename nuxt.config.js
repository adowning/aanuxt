module.exports = {
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    vendor: ['vuetify', 'jwt-decode', 'axios']
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    ['@nuxtjs/pwa', '~/plugins/vuetify.js']
  ],

  plugins: [
    '~plugins/xhr-cache',
  ],
}
