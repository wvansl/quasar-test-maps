// import something here
import * as VueGoogleMaps from 'vue2-google-maps'

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAKbbj2SJPOhAMFOlKEtptFE4LRbOW7eCA',
      libraries: 'places', // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)
    }
  })
}