import VueScrollTo from 'vue-scrollto'

export default ({ Vue }) => {
        Vue.use(VueScrollTo, {
                container: "body",
                duration: 500,
                easing: "ease",
                offset: 0,
                cancelable: true,
                onStart: false,
                onDone: false,
                onCancel: false,
                x: false,
                y: true
        })
  }
