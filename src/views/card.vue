<template>
  <div
    class="card-code flex flex-col justify-center relative bg-no-repeat bg-center"
    :style="
      `background-color: black; background-image:  url(https://cdn-lor.lx4.dev/images/cards/${cardCode}-full.png)`
    "
  >
    <div class="card-details container mx-auto">
      <svg
        class="absolute top-0 right-0 w-12 h-12 mr-4 mt-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 75 75"
        fill="none"
        @click="router.back()"
      >
        <circle cx="37.5" cy="37.5" r="36.5" stroke="black" stroke-width="2" />
        <line
          x1="57.1132"
          y1="19.0607"
          x2="19.0606"
          y2="57.1133"
          stroke="black"
          stroke-width="3"
        />
        <line
          x1="19.0607"
          y1="16.9393"
          x2="57.1133"
          y2="54.9919"
          stroke="black"
          stroke-width="3"
        />
      </svg>
      <div class="lg:flex justify-center items-center">
        <section class="flex flex-col items-center justify-center">
          <card-details :card-code="cardCode" />
        </section>
        <!-- <div class="max-w-xl ml-4 px-4 text-white bg-black bg-opacity-60">
          <span>{{ currentCard.flavorText }}</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

import CardDetails from '@/components/CardDetails.vue';

import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getCardsData } from '../composables/cards';

export default {
  props: ['cardCode'],
  components: {
    CardDetails
  },
  setup({ cardCode }) {
    const cardsData = getCardsData.value;

    const currentCard = computed(() => {
      return cardsData.find(card => card.cardCode === cardCode);
    });

    const router = useRouter()

    onMounted(() => {
      if (['Spell', 'Ability'].includes(currentCard.value.type)) {
        const tl = gsap.timeline();
        tl.to('.card-code', { duration: 0.6, backgroundSize: '100%' });
      } else gsap.to('.card-code', { backgroundSize: 'cover' });
    });

    return { cardCode, router };
  }
};
</script>

<style lang="scss" scoped>
.card-code {
  min-height: calc(100vh - 106px);
  background-size: 0%;
}
</style>
