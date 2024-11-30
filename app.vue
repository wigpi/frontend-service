<template>
  <Toast />
  <NavbarComponent />

  <NuxtPage />
</template>

<script setup lang="ts">
import NavbarComponent from "./src/components/NavbarComponent.vue";
</script>

<style>
  * {
    font-family: Inter, sans-serif;
  }
</style>
