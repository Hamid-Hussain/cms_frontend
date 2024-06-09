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
  <!-- <div class="login-container"> -->
  <!-- <div class="row login vh-100">
    <div class="col-md-8 img-wrapper d-flex">
      <div class="m-auto">
        <h2>
          Welcome to <b><i>Write</i></b>
        </h2>
      </div>
    </div>
    <div class="col-md-4 m-auto form-wrapper d-flex justify-content-center">
      <div class="w-50">
        <h2>Login</h2>
        <div>
          <div class="form-group">
            <label for="username">Email</label>
            <input
              v-model="email"
              class="input-field"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="password"
              class="input-field"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div>
            <button
              class="btn btn-primary w-100 mt-3"
              type="submit"
              @click="submit"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- </div> -->

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
