<template>
  <div>
    <div class="flex items-end">
      <span class="text-white" for="sets">{{ title }}</span>
      <div class="line mx-1 mb-2 opacity-10 bg-gray-100 flex-grow"></div>
      <div
        :class="`text-xs mb-1 ${
          isFilterEmpty(nameRef)
            ? 'text-gray-100 opacity-10'
            : 'text-gray-400 hover:text-white font-semibold cursor-pointer'
        }`"
        @click="clearFilterValue(nameRef)"
      >
        clear
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  props: {
    title: {
      type: String,
    },
    nameRef: {
      type: String,
    },
  },
  computed: {
    ...mapGetters(['isFilterEmpty']),
  },
  methods: {
    ...mapMutations(['clearFilterValue']),
  },
};
</script>

<style lang="scss" scoped></style>
