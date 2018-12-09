const Vue = require('nativescript-vue');
const Vuex = require('vuex');

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        jwt: null,
    }
});

Vue.prototype.$store = store;

export default store;