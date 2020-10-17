export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "dental-nuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './assets/plugins/bootstrap-datepicker/bootstrap-datepicker.css',

    './assets/plugins/datatables/dataTables.bootstrap4.min.css',
    './assets/plugins/datatables/buttons.bootstrap4.min.css',

    './assets/plugins/datatables/responsive.bootstrap4.min.css',

    './assets/css/bootstrap.min.css',
    './assets/css/icons.css',
    './assets/css/metisMenu.min.css',
    './assets/css/style.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  server: {
    port: 8080, // default: 3000
    host: "172.16.10.49" // default: localhost
  }
};
