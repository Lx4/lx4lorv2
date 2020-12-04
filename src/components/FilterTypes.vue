<template>
  <div>
    <filter-header title="Types" name-ref="types" />
    <div class="relative">
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div
          v-for="type in types"
          :key="type"
          :class="`flex cursor-pointer ease-in-out transition-all hover:opacity-100 opacity-50 ${
            isActive(type) ? 'opacity-100' : 'opacity-50'
          }`"
          @click="swapTypesFilter(type)"
        >
          <img class="w-6 inline" :src="`/types/${type}.svg`" :alt="type" />
          <span class="ml-2 text-white">{{ type }}</span>
        </div>
        <div
          class="wip absolute h-full w-full top-0 left-0 flex items-center justify-center border"
        >
          <div class="text-gray-300">Work in Progress</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { types } from '../assets/globals-added.json';
import FilterHeader from './FilterHeader.vue';

export default {
  components: {
    FilterHeader,
  },
  data() {
    return {
      types,
    };
  },
  computed: {
    ...mapState(['filters']),
  },
  methods: {
    ...mapMutations(['swapTypesFilter', 'clearFilterValue']),

    isActive(type) {
      if (this.filters.types.includes(type)) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wip {
  backdrop-filter: blur(1px);
}
</style>
