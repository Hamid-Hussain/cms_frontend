<script setup>
import { useAuthStore } from "~/stores/auth";

const userName = ref("");
const email = ref("");
const password = ref("");
const confirmPass = ref("");

const submit = () => {
  const payload = {
    username: userName.value,
    email: email.value,
    password: password.value,
  };
  useAuthStore().register(payload);
};
</script>
<template>
  <div class="container mt-5">
    <div class="login-container">
      <h2 class="mb-4">Sign Up</h2>
      <div>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            v-model="userName"
            type="text"
            class="form-control"
            id="username"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Confirm Password</label>
          <input
            v-model="confirmPass"
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" class="btn btn-primary w-100" @click="submit">
          Sign Up
        </button>
      </div>
      <div class="d-flex">
        <span class="me-2">
          Already have an account?
          <NuxtLink to="/auth/login">Login.</NuxtLink>
        </span>
      </div>
    </div>
  </div>
</template>
