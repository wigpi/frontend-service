<template>
  <div>
    <h1>{{ $t('dashboardWelcome').replace("%username%", "John") }}</h1>
  </div>
</template>

<script setup>
useHead({
  title: "Accueil",
});
</script>


<style>

</style>
