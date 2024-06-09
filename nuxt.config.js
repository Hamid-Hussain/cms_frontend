export default defineNuxtConfig({
  //   devtools: { enabled: process.env.ENV === 'development' },
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "/bootstrap.min.css",
      //     crossorigin: "anonymous",
      //   },
      // ],
      // script: [
      //   {
      //     src: "/bootstrap.bundle.min.js",
      //       type: "text/javascript",
      //     crossorigin: "anonymous",
      //   },
      // ],
    },
  },
  css: ["@/assets/scss/styles.scss", "bootstrap/dist/css/bootstrap.min.css"],
  imports: {
    dirs: ["stores"],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
      },
    ],
  ],

  pinia: {
    autoImports: [
      "defineStore",
      ["defineStore", "definePiniaStore"],
      "acceptHMRUpdate",
    ],
  },
  // buildModules: [
  //   // Other build modules...
  //   "@pinia/nuxt",
  // ],

  plugins: [{ src: "@/plugins/axios", mode: "client" }],
  runtimeConfig: {
    public: {
      env: process.env.ENV,
      baseUrl: process.env.BASE_URL,
    },
  },
});
