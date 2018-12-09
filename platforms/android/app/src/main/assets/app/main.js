const Vue = require('nativescript-vue');
const App = require('./components/App');

Vue.config.silent = false;

new Vue({
  render: h => {
    console.log("Rendering");
    return h('frame', [h(App)]);
  }
}).$start();
