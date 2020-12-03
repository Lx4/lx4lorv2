<template>
  <div>
    <div class="content flex flex-col">
      <Menu />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Menu,
    Footer
  }
};
</script>

<style lang="scss">
.button {
  @apply bg-teal-700 px-5 py-2 rounded text-white;
  transition: all 0.1s ease;
}

.button:hover {
  @apply bg-teal-500;
}

// Filters
.line {
  height: 1px;
}

// sticky footer
.content {
  min-height: calc(100vh - 50px);
}

footer {
  height: 50px;
}
</style>
