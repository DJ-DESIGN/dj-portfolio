const config = require('./.contentful.json')

export default {
  mode: 'universal',
  // ...
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PORTFOLIO_TYPE_ID: config.CTF_PORTFOLIO_TYPE_ID,
    CTF_PROJECT_TYPE_ID: config.CTF_PROJECT_TYPE_ID
  },
  // ...
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Big+Shoulders+Text|Big+Shoulders+Display|Raleway:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/stn8ceg.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '$dj-blue' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/viewImageLightbox.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      'scss/_custom.scss',
      'scss/_variables.scss'
    ]
  },
  // add your custom rules here
  rules: {
    curly: [2, 'multi-or-nest']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    routes: [
      '/portfolio/fempaq',
      '/portfolio/cboe',
      '/portfolio/poplar-grove',
      '/portfolio/trace-strategies',
      '/portfolio/the-landing',
      '/portfolio/mcghee-insurance-agency',
      '/portfolio/alabama-opportunity-scholarship-fund',
      '/portfolio/break-and-run'
    ]
  }
}
