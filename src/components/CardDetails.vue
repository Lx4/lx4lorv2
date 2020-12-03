<template>
  <div>
    <img
      class="card transition duration-200 ease-in-out transform hover:scale-105"
      :src="`https://cdn-lor.lx4.dev/images/cards/${cardCode}.webp`"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    cardCode: {
      type: String,
      default: 'kda',
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 340px;
  height: 512px;
}
</style>
