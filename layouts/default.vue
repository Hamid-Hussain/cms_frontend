<script setup>
import Header from "~/components/common/Header.vue";
</script>
<template>
  <div>
    <!-- <nav class="navbar fixed-top">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
    </nav> -->
    <Header />
    <NuxtPage />
    <footer class="footer">&copy; 2024 Blog. All rights reserved.</footer>
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";

.navbar {
  background-color: $primary-color;
  padding: 1rem;
  color: #fff;

  .nav-link {
    color: #fff;

    &:hover {
      color: $secondary-color;
    }
  }
}
</style>
