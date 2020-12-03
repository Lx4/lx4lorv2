<template>
  <div class="flex-grow bg-gradient-to-b from-gray-800 to-gray-500">
    <Hero />
    <div class="container mx-auto">
      <div v-for="region in regions" :key="region.name">
        <h2 class="region text-xl font-bold text-white">{{ region.name }}</h2>
        <CardsList :datasource="cardsFromRegion(region.name)" />
      </div>
    </div>
  </div>
</template>
<script>
import Hero from '@/components/Hero.vue';
import CardsList from '@/components/CardsList.vue';

import globals from '../assets/globals-en_us';

import { getCardsData } from '../composables/cards';
import { computed } from 'vue';

export default {
  components: {
    Hero,
    CardsList
  },
  setup() {
    const cardsData = getCardsData.value;
    function cardsFromRegion(name) {
      return cardsData
        .filter(card => card.region === name)
        .sort((cardA, cardB) => (cardA.cost > cardB.cost ? 1 : -1));
    }

    return {
      regions: globals.regions,
      cardsFromRegion
    };
  }
};
</script>

<style></style>
