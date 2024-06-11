<script setup>
import Login from "~/pages/auth/login.vue";
import { useAuthStore } from "~/stores/auth";

const searchQury = ref("");

const debounce = () => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      useRootStore().getArticles(searchQury.value);
    }, 1000);
  };
};
const login = () => {
  if (getToken()) {
    useAuthStore().logout();
  }
  navigateTo("/auth/login");
};

const getToken = () => {
  if (process.client) {
    return localStorage.getItem("auth-token");
  } else {
    return undefined;
  }
};
const search = debounce(() => {});
</script>
<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top"
    >
      <div class="container-fluid">
        <NuxtLink class="navbar-brand text-decoration-none" to="/"
          ><b>Articles</b></NuxtLink
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <div class="search-container">
                  <input
                    v-model="searchQury"
                    type="text"
                    class="search-field"
                    placeholder="Search..."
                    @keyup="search"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div class="me-5">
            <button class="btn btn-outline-primary me-2" @click="login">
              {{ getToken() ? "Log out" : "Login" }}
            </button>
            <button
              class="btn btn-outline-secondary"
              @click="
                () =>
                  getToken()
                    ? navigateTo('/blogs/create')
                    : navigateTo('/auth/login')
              "
            >
              Write
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="container mt-5"></div>
  </div>
</template>
<style lang="scss" scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
}

.search-field {
  width: 100%;
  padding: 10px 20px;
  border: 1px solid lightgray !important;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
}

.search-field::placeholder {
  color: #999;
}
</style>
