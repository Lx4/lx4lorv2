<template>
  <div>
    <div
      v-if="deckCode"
      class="text-white bg-gray-800 flex flex-col items-center justify-center"
    >
      <div class="inline-block">Current deck code</div>
      <div class="inline-block text-xs border-gray-100 px-4 py-2 mt-2 border">
        {{ deckCode }}
      </div>

      <CardsList class="bg-gray-800" :datasource="deck" />
    </div>
    <div v-else class="flex items-center justify-center mt-20 text-lg">
      No active game detected
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CardsList from '@/components/CardsList.vue';
import { ref, computed } from 'vue';

export default {
  components: {
    CardsList
  },
  setup() {
    const port = ref(21337);
    const deckCode = ref(null);
    const cardsInDeck = ref(null);

    const deck = computed(() => {
      const result = [];
      if (!cardsInDeck.value) return [];
      for (const [key, value] of Object.entries(cardsInDeck.value)) {
        result.push({ cardCode: key, number: value });
      }
      return result;
    });

    setInterval(async () => {
      const { data } = await axios(
        `http://localhost:${port.value}/static-decklist`
      );
      deckCode.value = data.DeckCode;
      cardsInDeck.value = data.CardsInDeck;
    }, 2000);

    return { port, deckCode, cardsInDeck, deck };
  }
};
</script>

<style lang="scss" scoped></style>
