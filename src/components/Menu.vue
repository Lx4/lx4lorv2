<template>
  <nav class="flex px-4 py-4 bg-gray-800 text-white justify-between">
    <ul class="flex items-center">
      <li class="pr-4">
        <router-link  to="/">
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </router-link>
      </li>
      <li>
        <router-link to="/cards">Cards</router-link>
      </li>
      <li class="ml-4">
        <router-link to="/live">Live</router-link>
      </li>
    </ul>
    <!-- <div class="smallnum" v-if="cartCount > 0">{{ cartCount }}</div> -->
    <router-link to="/profile">Profile</router-link>
  </nav>
</template>



<script>
export default {};
</script>

<style lang="scss" scoped></style>
