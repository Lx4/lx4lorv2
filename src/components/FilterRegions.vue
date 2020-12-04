<template>
  <div>
    <filter-header title="Regions" name-ref="regions" />
    <div class="mt-4 grid grid-cols-2 gap-4">
      <div
        v-for="region in regions"
        :key="region.nameRef"
        :class="`flex cursor-pointer ease-in-out transition-all hover:opacity-100 ${
          isActive(region) ? 'opacity-100' : 'opacity-50'
        }`"
        @click="swapRegionsFilter(region)"
      >
        <img
          class="w-6 inline"
          :src="`https://cdn-lor.lx4.dev/images/regions/icon-${region.nameRef.toLowerCase()}.png`"
          :alt="region.name"
        />
        <span class="ml-2 text-white">{{ region.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { regions } from '../assets/globals-en_us.json';

import FilterHeader from './FilterHeader.vue';

export default {
  components: {
    FilterHeader,
  },
  data() {
    return {
      regions: regions.sort((a, b) => (a.name > b.name ? 1 : -1)),
    };
  },
  computed: {
    ...mapState(['filters']),
  },
  methods: {
    ...mapMutations(['swapRegionsFilter', 'clearFilterValue']),

    isActive(region) {
      if (
        this.filters.regions
          .map(({ nameRef }) => nameRef)
          .includes(region.nameRef)
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
