<template>
  <div class="flex flex-grow">
    <!-- <transition name="fade"> -->
    <!-- v-if="showCards" -->
    <div :class="`${showFilters && 'nowidth'}`">
      <div class="pl-8 py-4 bg-gray-700 flex items-center justify-between">
        <div>
          <h1 class="text-2xl text-white">Cards Gallery</h1>

          <p class="inline ml-1 text-gray-300 text-xs">
            ({{ filteredCardsNumber }} / {{ cardsData.length }} results)
          </p>
        </div>
        <svg
          class="w-8 h-8 mr-4 border rounded"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          @click="toggleFilters"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </div>
      <div class="cards">
        <CardsList :datasource="filteredCards" />
      </div>
    </div>
    <!-- </transition> -->
    <transition name="fade">
      <Filters v-if="showFilters" @toggle-filters="toggleFilters" />
    </transition>
  </div>
</template>

<script>
import Filters from '@/components/Filters.vue';
import CardsList from '@/components/CardsList.vue';
// import gsap from 'gsap';

//import { mapState } from 'vuex';
import { getCardsData } from '../composables/cards';
import { getFilters } from '../composables/filters';
import { computed, ref, onMounted, onUnmounted } from 'vue';

export default {
  components: {
    Filters,
    CardsList,
  },
  setup () {
    const showFilters = ref(false);
    const cardsData = getCardsData.value;
    const filters = getFilters.value;

    const filteredCards = computed(() => {
      let result = cardsData;
      // filter by sets
      if (filters.sets.length !== 0) {
        result = result.filter((card) => {
          return filters.sets
            .map(({ nameRef }) => nameRef)
            .includes(card.set);
        });
      }
      // filter by regions
      if (filters.regions.length !== 0) {
        result = result.filter((card) => {
          return filters.regions
            .map(({ nameRef }) => nameRef)
            .includes(card.regionRef);
        });
      }
      // filter by manacost
      if (filters.mana.length !== 0) {
        result = result.filter((card) => {
          return (
            filters.mana.includes(card.cost) ||
            (card.cost > 7 && filters.mana.includes(7))
          );
        });
      }
      return result;
    })
    const filteredCardsNumber = computed(() =>  filteredCards.length);

    const toggleFilters = () => showFilters.value = !showFilters.value;

    const onResize = () => {
      if (window.innerWidth > 960) {
        showFilters.value = true;
      } else {
        showFilters.value = false;
      }
    },
  return {showFilters, filteredCards, filteredCardsNumber, toggleFilters}
  }

  onMounted() {
    window.addEventListener('resize', onResize);
    if (window.innerWidth > 960) {
      this.showFilters = true;
    }
  },
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style lang="scss" scoped>
.cards {
  max-height: calc(100vh - 130px);
  overflow: auto;
}

@media only screen and (max-width: 640px) {
  .nowidth {
    width: 0%;
    transition: width 0.2s;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: width 0.3s;
  /* transform: scaleX(1); */
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 0;
  /* transform: scaleX(0); */
}
</style>
