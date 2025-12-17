<template>
  <ul class="nav-links">
    <li class="nav-item">
      <router-link to="/home" class="nav-link">{{ t('home') }}</router-link>
    </li>
    <li class="nav-item dropdown">
      <router-link to="/college" class="nav-link">{{ t('college') }}</router-link>
      <div class="dropdown-menu">
        <router-link to="/college/history" class="dropdown-item">{{ t('collegeHistory') }}</router-link>
        <router-link to="/college/facts" class="dropdown-item">{{ t('keyFacts') }}</router-link>
        <router-link to="/college/documents" class="dropdown-item">{{ t('documents') }}</router-link>
        <router-link to="/team" class="dropdown-item">{{ t('team') }}</router-link>
        <router-link to="/college/board" class="dropdown-item">{{ t('boardOfTrustees') }}</router-link>
        <router-link to="/college/announcements" class="dropdown-item">{{ t('announcements') }}</router-link>
      </div>
    </li>
    <li class="nav-item dropdown">
      <span class="nav-link">{{ t('specialists') }}</span>
      <div class="dropdown-menu">
        <router-link to="/specialists/it" class="dropdown-item">{{ t('itSpecialist') }}</router-link>
        <router-link to="/specialists/accounting" class="dropdown-item">{{ t('accountingSpecialist') }}</router-link>
      </div>
    </li>
    <li class="nav-item">
      <router-link to="/team" class="nav-link">{{ t('team') }}</router-link>
    </li>
    <li class="nav-item dropdown">
      <span class="nav-link">{{ t('admission') }}</span>
      <div class="dropdown-menu">
        <router-link to="/admission/submission" class="dropdown-item">{{ t('documentSubmission') }}</router-link>
        <router-link to="/admission/transfer" class="dropdown-item">{{ t('transfer') }}</router-link>
        <router-link to="/admission/join" class="dropdown-item">{{ t('join') }}</router-link>
        <router-link to="/specialists" class="dropdown-item">{{ t('specialists') }}</router-link>
      </div>
    </li>
    <li class="nav-item dropdown">
      <span class="nav-link">{{ t('infrastructure') }}</span>
      <div class="dropdown-menu">
        <router-link to="/infrastructure?tab=building-a" class="dropdown-item">{{ t('buildingA') }}</router-link>
        <router-link to="/infrastructure?tab=building-b-dorm" class="dropdown-item">{{ t('buildingB') }}</router-link>
        <router-link to="/infrastructure?tab=football-field" class="dropdown-item">{{ t('footballField') }}</router-link>
        <router-link to="/infrastructure?tab=barbecue" class="dropdown-item">{{ t('barbecue') }}</router-link>
        <router-link to="/infrastructure?tab=canteen" class="dropdown-item">{{ t('canteen') }}</router-link>
        <router-link to="/infrastructure?tab=sport-hall" class="dropdown-item">{{ t('sportHall') }}</router-link>
      </div>
    </li>
    <li class="nav-item">
      <router-link to="/calendar" class="nav-link">{{ t('calendar') }}</router-link>
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useLanguageStore } from '../stores/language'
import { useTranslation } from '../locales/translations'

export default {
  name: "NavigationMenu",
  setup() {
    const langStore = useLanguageStore()
    const t = computed(() => useTranslation(langStore.currentLanguage))

    return {
      t: (key) => t.value(key),
    }
  },
};
</script>

<style scoped>
.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  font-size: 13px;
  font-weight: 500;
  color: #111827;
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  cursor: default;
}

.nav-item.dropdown .nav-link {
  cursor: pointer;
}

.nav-link::after {
  content: '▼';
  font-size: 8px;
  opacity: 0.6;
  transition: transform 0.2s;
  margin-left: 2px;
}

.nav-item:not(.dropdown) .nav-link::after {
  display: none;
}

.nav-item.dropdown:hover .nav-link::after,
.nav-item.dropdown.active .nav-link::after {
  transform: rotate(180deg);
}

.nav-link:hover,
.nav-link.router-link-active {
  border-color: #0f6bff;
}

/* White nav links (for blue header) */
.nav-links.white-nav .nav-link {
  color: #ffffff;
}

.nav-links.white-nav .nav-link:hover,
.nav-links.white-nav .nav-link.router-link-active {
  border-color: #ffffff;
}

.nav-item.dropdown .nav-link::after {
  display: block;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.15);
  padding: 8px 0;
  min-width: 220px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  z-index: 1000;
  list-style: none;
  margin: 0;
}

.nav-item.dropdown:hover .dropdown-menu,
.nav-item.dropdown.active .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 500;
  color: #111827;
  text-decoration: none;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
  color: #0f6bff;
}

.dropdown-item.router-link-active {
  background-color: #e8f2ff;
  color: #0f6bff;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    flex-wrap: wrap;
    gap: 14px;
  }

  .dropdown-menu {
    min-width: 200px;
  }
}
</style>

