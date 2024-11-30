export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  messages: {
    en: {
      language: "Language",
      locale: "English",
      switchLocale: "You switched the locale to english.",

      changeUserSettings: "User changes",

      home: "Home",
      profile: "Profile",

      ariaLabels: {
        darkMode: "Activate dark mode",
      },
    },
    fr: {
      language: "Langue",
      locale: "Français",
      switchLocale: "Vous avez changé la langue pour français.",

      changeUserSettings: "Changement utilisateur",

      home: "Accueil",
      profile: "Profil",

      ariaLabels: {
        darkMode: "Activate dark mode",
      },
    },
  },
}));
