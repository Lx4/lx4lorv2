<template>
  <div>
    <filter-header title="Sets" name-ref="sets" />
    <multiselect
      class="mt-2"
      :value="filters.sets"
      placeholder="All sets"
      label="name"
      track-by="nameRef"
      :options="sets"
      :multiple="true"
      @input="updateSetsFiltersAction"
    >
    </multiselect>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Multiselect from 'vue-multiselect';
import { sets } from '../assets/globals-en_us';
import FilterHeader from './FilterHeader.vue';

export default {
  components: {
    Multiselect,
    FilterHeader,
  },
  data() {
    return {
      sets,
    };
  },
  computed: {
    ...mapState(['filters']),
    isFilterEmpty() {
      return !this.filters.sets.length;
    },
  },
  methods: {
    ...mapMutations(['clearFilterValue']),
    ...mapActions(['updateSetsFiltersAction']),
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped></style>
