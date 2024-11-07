<template>
  <div>
    <h1>Quelle belle police n'est est-ce donc pas ?</h1>

    <p>{{ $t('home') }}</p>

    <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
    <Button label="Danger" severity="danger" />
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

useHead({
  title: "Accueil",
});

function toggleDarkMode() {
  document.documentElement.classList.toggle('p-dark');

  toast.add({
    severity: "info",
    summary: getLocaleMessage(locale).changeUserSettings,
    detail: `${getLocaleMessage(locale).switchLocale}`,
    life: 3000,
  });
}
</script>


<style>

</style>
