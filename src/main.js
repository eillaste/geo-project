import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

Vue.config.productionTip = false;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
