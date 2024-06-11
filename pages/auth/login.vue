<script setup>
import { useAuthStore } from "~/stores/auth";

const email = ref("");
const password = ref("");

const submit = () => {
  console.log("submitttt");
  const payload = {
    email: email.value,
    password: password.value,
  };
  useAuthStore().login(payload);
};
</script>
<template>
  <div class="container mt-5">
    <div class="login-container">
      <h2 class="text-start mb-4">Login</h2>
      <div>
        <div class="mb-3">
          <label for="email" class="form-label">Username</label>
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

        <button type="submit" class="btn btn-primary w-100" @click="submit">
          Login
        </button>
      </div>
      <div class="d-flex mt-2">
        <span class="me-2">
          Don't have an account?
          <NuxtLink to="/auth/register">Sign Up.</NuxtLink>
        </span>
      </div>
    </div>
  </div>
</template>
