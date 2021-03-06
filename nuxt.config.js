import colors from 'vuetify/es5/util/colors'

// var env = process.env.NODE_ENV || 'development';
// console.log('env')
// console.log(env)
// if (env === 'development' || env === 'test') {
//   var API_URL='http://localhost:8080'
// }
// else{
//   var API_URL=process.env.API_URL
// }
// var env = process.env.NODE_ENV

// if (env === 'production') {
//   var API_URL=process.env.API_URL
// }
// else{
//   var API_URL='http://localhost:8080'
// }

// console.log("=====================")
// console.log(process.env.NODE_ENV)

export default {
  // 本番環境と開発環境それぞれのエンドポイントに対応
  axios: {
    baseURL: process.env.NODE_ENV === "production" ? "https://ramp-up-api.herokuapp.com" : "http://localhost:8080"

  },
  
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - ramp-up-front',
    title: 'ramp-up-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    'plugins/vuetify'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  auth: {
    redirect: {
        login: '/',
        logout: '/',
        callback: false,
        home: '',
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/v1/auth/sign_in', method: 'post', propertyName: 'token' },
          logout: false,
          user: false,
        },
      }
    }
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  
}
