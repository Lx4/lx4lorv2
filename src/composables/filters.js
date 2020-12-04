import { reactive, computed } from 'vue';

// state
const state = reactive({
  filters: {
    sets: [],
    regions: [],
    mana: [],
    types: []
  }
});

// getters
const getFilters = computed(() => state.filters);
