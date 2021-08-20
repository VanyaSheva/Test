require('./api/api')

import './assets/scss/main.scss';
import Vue from 'vue'
import {store} from './store';
import App from './App.vue'
import {router} from './router';
import 'vue-loaders/dist/vue-loaders.css';
import VueLoaders from 'vue-loaders';

Vue.use(VueLoaders);

Vue.component('main-template', App);

new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');

