export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'placement-direct',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8080/api'
  },
  router: {
    // middleware: ['loggedIn']
  },
  auth: {
    // localStorage: false,
    // cookie: {
    //   prefix: 'auth.',
    //   options: {
    //     path: '/',
    //     maxAge: 10800
    //   }
    // },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/user', method: 'get', propertyName: 'user' }
        },
        // tokenType: ''
      }
    },
    // plugins: ['~/plugins/axios.js', { src: '~/plugins/auth.js', mode: 'client' }]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
