<template>
  <div
    class="filters flex-shrink-0 px-4 py-4 bg-gray-700 border-l border-black"
  >
    <div class="flex justify-between items-center">
      <h1 class="text-2xl text-white">Filters</h1>
      <svg
        class="sm:hidden w-8 p-1 h-8 mr-4 border rounded"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        @click="$emit('toggle-filters')"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    </div>

    <!-- <div class="mt-4">
      <filter-sets />
    </div> -->
    <div class="mt-4">
      <filter-regions />
    </div>
    <div class="mt-4">
      <filter-manacost />
    </div>
    <div class="mt-4">
      <filter-types />
    </div>
  </div>
</template>

<script>
import FilterManacost from './FilterManacost.vue';
import FilterRegions from './FilterRegions.vue';
import FilterSets from './FilterSets';
import FilterTypes from './FilterTypes';

export default {
  components: {
    FilterSets,
    FilterRegions,
    FilterManacost,
    FilterTypes
  }
};
</script>

<style lang="scss" scoped>
.filters {
  transition: all 300ms ease-in-out;
  // transition: transform 1s ease-in-out;
  transform-origin: 100% 50%;
  width: 400px;
}

@media only screen and (max-width: 640px) {
  .filters {
    width: 100%;
  }
}
</style>
