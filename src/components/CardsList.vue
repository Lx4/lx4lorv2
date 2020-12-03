<template>
  <!-- bg-gradient-to-b from-gray-800 to-gray-500 -->
  <div class="cards flex flex-wrap items-center justify-center">
    <div
      v-for="card in datasource"
      :key="card.cardCode"
      class="card h-64 w-48 mr-4 mt-4 mb-4 p-1 transition duration-200 ease-in-out transform hover:scale-110"
    >
      <nuxt-link :to="`/card/${card.cardCode}`"
        ><img
          :src="`https://cdn-lor.lx4.dev/images/cards/${card.cardCode}.webp`"
          alt=""
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datasource: {
      type: [Array, Object],
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.cards::-webkit-scrollbar {
  width: 8px;
}

/* .cards {
  scrollbar-width: thin;
  scrollbar-color: red blue;
} */

.cards::-webkit-scrollbar-track {
  background: #1e293b;
}
.cards::-webkit-scrollbar-thumb {
  background-color: #64748b;
  border-radius: 6px;
  border: 3px solid #64748b;
}
</style>
