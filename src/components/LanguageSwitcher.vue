<template>
  <div class="language-switcher">
    <select v-model="currentLang" @change="changeLang" class="lang-select">
      <option value="en">Eng</option>
      <option value="ru">Рус</option>
      <option value="kz">Қаз</option>
    </select>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import { useLanguageStore } from '../stores/language'

export default {
  name: 'LanguageSwitcher',
  setup() {
    const langStore = useLanguageStore()
    const currentLang = ref(langStore.currentLanguage)

    watch(() => langStore.currentLanguage, (newLang) => {
      currentLang.value = newLang
    })

    const changeLang = () => {
      langStore.setLanguage(currentLang.value)
    }

    onMounted(() => {
      currentLang.value = langStore.currentLanguage
    })

    return {
      currentLang,
      changeLang,
    }
  },
}
</script>

<style scoped>
.language-switcher {
  position: relative;
}

.lang-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 8px 32px 8px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  cursor: pointer;
  transition: all 0.2s;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23111827' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  min-width: 100px;
}

.lang-select:hover {
  border-color: #0f6bff;
  box-shadow: 0 2px 8px rgba(15, 107, 255, 0.1);
}

.lang-select:focus {
  outline: none;
  border-color: #0f6bff;
  box-shadow: 0 0 0 3px rgba(15, 107, 255, 0.1);
}

.lang-select option {
  padding: 8px;
  font-weight: 600;
}

/* White variant for blue backgrounds */
.lang-select.white-variant {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
}

.lang-select.white-variant:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
}
</style>
