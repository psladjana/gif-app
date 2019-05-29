import Vue from 'vue';
import Vuex from 'vuex';
import gifModule from './gif';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gifModule,
  },
});
