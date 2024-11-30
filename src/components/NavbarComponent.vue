<template>
  <Menubar :model="items">
    <template #start>
      <div class="mt-1">
        <Image src="./wigpi_logo.png" height="40" />
      </div>
      <h2 class="mx-2 my-auto title">WIGPI</h2>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <a v-ripple class="flex items-center" v-bind="props.action">
        <i v-if="item.icon" :class="item.icon"></i>
        <span>{{ item.label }}</span>

        <Badge v-if="item.badge" :class="{ 'ml-auto': !root}" :value="item.badge" />
        <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
      </a>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <Avatar image="https://i.pravatar.cc/48" shape="circle" />
      </div>
    </template>
  </Menubar>
  {{locale}}
</template>

<script lang="ts" setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const router = useRouter();
const { setLocale, availableLocales, t, getLocaleMessage, locale } = useI18n();

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

const items = [
  {
    label: t("home"),
    icon: "pi pi-home",
    command: () => {
      router.push("/");
    },
  },
  {
    label: t("language"),
    icon: "pi pi-language",
    items: localesItems,
  },
  {
    label: t("profile"),
    icon: "pi pi-user",
  },
];
</script>

<style>
.title {
  cursor: default;
}
</style>
