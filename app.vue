<template>
  <div>
    <NuxtLayout :name="useRoute().path.includes('auth') ? 'auth' : 'default'">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
