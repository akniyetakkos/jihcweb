import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: localStorage.getItem('language') || 'en',
    availableLanguages: ['en', 'ru', 'kz'],
  }),

  actions: {
    setLanguage(lang) {
      if (this.availableLanguages.includes(lang)) {
        this.currentLanguage = lang
        localStorage.setItem('language', lang)
      }
    },
  },
})
