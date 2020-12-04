<template>
  <div>
    <filter-header title="Mana Cost" name-ref="mana" />
    <div class="flex justify-around mt-4">
      <button
        v-for="value in manaValue"
        :key="value"
        :class="isActive(value) ? 'mana-active' : 'mana'"
        @click="swapManaFilter(value)"
      >
        {{ value === 7 ? '7+' : value }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import FilterHeader from './FilterHeader.vue';

const manaValue = [0, 1, 2, 3, 4, 5, 6, 7];

export default {
  components: {
    FilterHeader,
  },
  data() {
    return { manaValue };
  },
  computed: {
    ...mapState(['filters']),
  },
  methods: {
    ...mapMutations(['swapManaFilter', 'clearFilterValue']),

    isActive(mana) {
      if (this.filters.mana.includes(mana)) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.mana {
  @apply flex items-center justify-center outline-none h-8 w-8 border border-gray-500 text-gray-400 bg-gray-600 rounded-full hover:border-white hover:bg-gray-700;
}
.mana-active {
  @apply flex items-center justify-center outline-none h-8 w-8 border border-gray-400 text-white bg-gray-800 rounded-full;
}

button {
  transition: all 0.1s;
}
</style>
