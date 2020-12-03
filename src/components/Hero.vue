<template>
  <section
    class="masthead"
    :style="
      `background-image: url(https://cdn-lor.lx4.dev/images/cards/${randomCode}-full.png)`
    "
    role="img"
    aria-label="Image Description"
  >
    <h1>Legends of Runeterra</h1>
    <router-link to="/cards">
      <button class="button">Browse Cards &raquo;</button>
    </router-link>
  </section>
</template>

<script>
import { getRandomCode } from '../composables/cards';

export default {
  setup() {
    return { randomCode: getRandomCode };
  }
};
</script>

<style lang="scss" scoped>
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 80vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 36%,
    rgba(0, 0, 0, 0.65) 100%
  );
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 8vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;
}
</style>
