<template>
  <div>
    <Menubar :model="navbarItems"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { useToast } from "primevue/usetoast";

const router = useRouter();
const { setLocale, availableLocales, t, locale, getLocaleMessage } = useI18n();
const toast = useToast();

const localesItems: object[] = [];
availableLocales.forEach((i) => {
  localesItems.push({
    label: getLocaleMessage(i).locale,
    command: () => {
      switchLocale(i);
    },
  });
});

function switchLocale(locale: string) {
  setLocale(locale);

  toast.add({
    severity: "info",
    summary: getLocaleMessage(locale).changeUserSettings,
    detail: `${getLocaleMessage(locale).switchLocale}`,
    life: 3000,
  });
}

const navbarItems = ref([
  {
    label: t("home"),
    icon: "pi pi-home",
    command: () => {
      router.push("/");
    },
  },
  {
    label: t("profile"),
    icon: "pi pi-user",
    command: () => {
      router.push("/profile");
    },
  },
  {
    label: t("language"),
    icon: "pi pi-language",
    items: localesItems,
  },
]);
</script>

<style>

</style>
