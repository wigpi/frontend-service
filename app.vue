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
    font-optical-sizing: auto;
    font-style: normal;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Bricolage Grotesque", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-variation-settings:
      "wdth" 100;
  }
</style>
