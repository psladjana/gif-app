import * as types from './types';
import { errorHandler } from '@/services/http';
import { getGifsAPI, getGifByIdAPI } from '@/services/api';

const initialState = {
  gifs: [],
  gif: null,
  loading: true,
};

const getters = {
  gifs: state => state.gifs,
  gif: state => state.gif,
  loading: state => state.loading,
};

const actions = {
  setGifs({ commit }) {
    commit(types.SET_LOADING, true);
    return getGifsAPI()
      .then((res) => {
        commit(types.SET_GIFS, res.data);
        return res;
      })
      .catch(err => errorHandler(err))
      .finally(() => commit(types.SET_LOADING, false));
  },
  setGif({ commit }, gifId) {
    commit(types.SET_LOADING, true);
    return getGifByIdAPI(gifId)
      .then((res) => {
        commit(types.SET_GIF, res.data);
        commit(types.SET_LOADING, false);
        return res;
      })
      .catch(err => errorHandler(err));
  },
};

const mutations = {
  [types.SET_GIFS](state, gifs) {
    state.gifs = gifs;
  },
  [types.SET_GIF](state, gif) {
    state.gif = gif;
  },
  [types.SET_LOADING](state, loading) {
    state.loading = loading;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
