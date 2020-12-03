<template>
  <div class="flex-grow bg-gradient-to-b from-gray-800 to-gray-500">
    <Hero />
    <div class="container mx-auto">
      <div v-for="region in regions" :key="region.name">
        <h2 class="region text-xl font-bold text-white">{{ region.name }}</h2>
        <!-- <CardsList :datasource="cardsFromRegion(region.name)" /> -->
      </div>
    </div>
  </div>
</template>
<script>
import Hero from '@/components/Hero.vue';
import globals from '../assets/globals-en_us';

export default {
  components: {
    Hero
  },
  setup() {
    return { regions: globals.regions };
  }
};
</script>

<style></style>
