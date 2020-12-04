import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      filters: {
        sets: [],
        regions: [],
        mana: [],
        types: []
      }
    };
  },
  getters: {
    isFilterEmpty: state => name => {
      return !state.filters[name].length;
    }
  },
  mutations: {
    updateSetsFilters(state, value) {
      state.filters.sets = value;
    },
    swapRegionsFilter(state, region) {
      if (
        state.filters.regions.map(reg => reg.nameRef).includes(region.nameRef)
      ) {
        state.filters.regions = state.filters.regions.filter(
          reg => reg.nameRef !== region.nameRef
        );
      } else state.filters.regions.push(region);
    },
    swapManaFilter(state, value) {
      if (!state.filters.mana.includes(value)) {
        state.filters.mana.push(value);
      } else {
        state.filters.mana = state.filters.mana.filter(v => v !== value);
      }
    },
    swapTypesFilter(state, value) {
      if (!state.filters.types.includes(value)) {
        state.filters.types.push(value);
      } else {
        state.filters.types = state.filters.types.filter(v => v !== value);
      }
    },
    clearFilterValue(state, name) {
      state.filters[name] = [];
    }
  },
  actions: {
    updateSetsFiltersAction({ commit }, value) {
      commit('updateSetsFilters', value);
    }
  }
});

export default store;
