<template>
  <div class="jihc-page">
    <header class="hero">
  <img
    src="/src/assets/college-aldy.png"
    alt="Jambyl Innovation High College building"
    class="hero-image"
  />

  <div class="hero-text">
    <h1>{{ t('heroTitle') }}</h1>
    <p>{{ t('heroSubtitle') }}</p>
  </div>

  <nav class="top-nav">
    <div class="nav-inner">
      <div class="logo">
        <img
          src="/src/assets/jihclogo-black.png"
          alt="Jambyl Innovation High College logo"
          class="logo-img"
        />
      </div>

      <NavigationMenu />

      <div class="header-right">
        <router-link v-if="!authStore.isAuthenticated" to="/login" class="btn-login-nav">
          {{ t('login') }}
        </router-link>
        <router-link v-else-if="authStore.isAdmin" to="/admin" class="btn-dashboard">
          {{ t('adminPanel') }}
        </router-link>
        <router-link v-else to="/dashboard" class="btn-dashboard">
          {{ t('dashboard') }}
        </router-link>

        <LanguageSwitcher />
      </div>
    </div>
  </nav>
</header>


    <main>
      <section class="intro">
        <div class="intro-inner">
       

          <div class="stats-bar" aria-label="College statistics">
            <div class="stat-item">
              <div class="stat-value">2100+</div>
              <div class="stat-label">{{ t('graduates') }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">7.0</div>
              <div class="stat-label">{{ t('avgIELTS') }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">95%</div>
              <div class="stat-label">{{ t('employment') }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">2</div>
              <div class="stat-label">{{ t('areasOfStudy') }}</div>
            </div>
          </div>
        </div>
      </section>

    <section class="about-section">
  <div class="about-image-wrapper">

    <img
      src="/src/assets/stu-image.png"
      alt="About JIHC"
      class="about-image"
    />

    <h1 class="about-title">
      <b>About</b> Jambyl Innovation <br> High College

    </h1>

    <div class="about-text">
      <p>{{ t('aboutText1') }}</p>

      <p>
        Our <strong>mission</strong> is to combine strong academic knowledge with
        real practical experience to meet the demands of today’s job market.
      </p>

      <p>{{ t('aboutText3') }}</p>
    </div>

  </div>
</section>


      <section class="news" aria-labelledby="news-heading">
        <div class="news-inner">
          <h2 id="news-heading">{{ t('newsTitle') }}</h2>

          <div class="news-grid">
            <article class="news-card">
              <figure class="news-image-wrapper">
                <img
                  src="/src/assets/kyzyk-concert.png"
                  alt="Teachers' Day celebration poster"
                  class="news-image"
                />
              </figure>
              <div class="news-meta">
                <p class="news-group">3F-1 and 3F-2 groups</p>
                <h3 class="news-title">Teacher’s Day Celebration</h3>
              </div>
              <p class="news-body">
                Students expressed their gratitude to teachers through creative performances,
                heartfelt speeches, and small gifts.
              </p>
              <p class="news-date">October 5, 2025</p>
              <div class="news-footer">
                <span class="news-location">Assembly Hall</span>
                <router-link to="/event/teachers-day" class="btn-outline">{{ t('readMore') }}</router-link>
              </div>
            </article>
            <article class="news-card">
              <figure class="news-image-wrapper">
                <img
                  src="/src/assets/f3studay.jpg"
                  alt="Group of students at Student's Day celebration"
                  class="news-image"
                />
              </figure>
              <div class="news-meta">
                <p class="news-group">3F-3 and 3F-4 groups</p>
                <h3 class="news-title">Student’s Day Celebration</h3>
              </div>
              <p class="news-body">
                The college will celebrate Student’s Day with live performances, fun activities,
                and awards for active students.
              </p>
              <p class="news-date">November 17, 2025</p>
              <div class="news-footer">
                <span class="news-location"></span>
                <router-link to="/event/students-day" class="btn-outline">{{ t('readMore') }}</router-link>
              </div>
            </article>
            <article class="news-card">
              <figure class="news-image-wrapper">
                <img
                  src="/src/assets/event.png"
                  alt="PitchDeck Event poster"
                  class="news-image"
                />
              </figure>
              <div class="news-meta">
                <p class="news-group">3F-1 group</p>
                <h3 class="news-title">PitchDeck Event</h3>
              </div>
              <p class="news-body">
                This event will gather talented students and speakers who will share their
                experience in web development and project presentation skills.
              </p>
              <p class="news-date">October 8, 2025</p>
              <div class="news-footer">
                <span class="news-location"></span>
                <router-link to="/event/pitchdeck" class="btn-outline">{{ t('readMore') }}</router-link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="footer-inner">
        <section class="footer-column footer-brand" aria-label="About JIHC">
          <div class="footer-logo">
            <img
              src="/src/assets/jihclogo-white.png"
              alt="Jambyl Innovation High College logo"
              class="footer-logo-img"
            />
          </div>
          <p class="footer-description">
            {{ t('footerDescription') }}
          </p>
          <p class="footer-copy">
            {{ t('copyright') }}
          </p>
        </section>

        <section class="footer-column" aria-label="Contact information">
          <h3 class="footer-heading">{{ t('contactUs') }}</h3>
          <p class="footer-link">info@jihc.edu.kz</p>
          <p class="footer-link">+7 (707) 802-00-88</p>
          <p class="footer-link">Kazakhstan, Taraz, Pushkin Street, 134</p>
        </section>

        <section class="footer-column" aria-label="Social media">
          <h3 class="footer-heading">{{ t('followUs') }}</h3>
          <p class="footer-link">@jihc_kz</p>
          <p class="footer-link">@jihc_kz</p>
        </section>
      </div>
    </footer>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import NavigationMenu from './NavigationMenu.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { useAuthStore } from '../stores/auth'
import { useNewsStore } from '../stores/news'
import { useLanguageStore } from '../stores/language'
import { useTranslation } from '../locales/translations'

export default {
  name: "JihcLandingPage",
  components: {
    NavigationMenu,
    LanguageSwitcher,
  },
  setup() {
    const authStore = useAuthStore()
    const newsStore = useNewsStore()
    const langStore = useLanguageStore()

    const t = computed(() => useTranslation(langStore.currentLanguage))

    onMounted(() => {
      authStore.initializeAuth()
      newsStore.fetchNews()
    })

    return {
      authStore,
      newsStore,
      langStore,
      t: (key) => t.value(key),
    }
  },
}
</script>

<style scoped>
 .jihc-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background-color: #ffffff;
  color: #111827;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
}
.hero-text {
  position: absolute;
  bottom:0px;
  left: 170px;
  max-width: 80%;
  text-align: right;
  color:  #0f6bff;
}

.hero-text h1 {
  font-size: 84px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 12px;
}

.hero-text p {
  font-size: 30px;
  opacity: 0.9;
}
.top-nav {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: min(1100px, 100% - 32px);
  background: #ffffff;
  border-radius: 999px;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.18);
  padding: 12px 26px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 160px;
}

.logo-img {
  height: 32px;
  object-fit: contain;
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.2;
  text-transform: uppercase;
  color: #111827;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn-login-nav, .btn-dashboard {
  padding: 8px 18px;
  background: #0f6bff;
  color: #ffffff;
  border-radius: 999px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-login-nav:hover, .btn-dashboard:hover {
  background: #0c5ed8;
  transform: translateY(-1px);
}

.jihc-page main {
  flex: 1;
  background: #ffffff;
}

.about,
.news {
  padding-inline: 16px;
}

.intro-inner,
.about-inner,
.news-inner,
.footer-inner {
  max-width: 1120px;
  margin: 0 auto;
}
.intro {
  padding-top: 40px;
  padding-bottom: 52px;
  width: 100%;
  padding-inline: 0;
}

.intro-inner {
  text-align: left;
  max-width: 85%;
  padding-inline: 16px;
  margin-top: 50px;
}
.intro .stats-bar {
  font-size: clamp(30px, 4vw, 40px);
  line-height: 1.15;
  color: #ffffff;
  margin: 0 0 8px;
}
.intro .stat-value{
  font-size: 42px;
}
.intro .stat-label{
  font-size: 16px;
}

.stats-bar {
  background: #0f6bff;
  color: #ffffff;
  border-radius: 18px;
  padding: 20px 32px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  box-shadow: 0 16px 38px rgba(0, 60, 166, 0.4);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 12px;
  line-height: 1.4;
  opacity: 0.9;
}
.about-section {
  padding: 80px 0;
  background: #ffffff;
}
.about-image-wrapper {
  position: relative;
  max-width: 85%;
  margin: 0 auto;
}
.about-image {
  width: 100%;
  display: block;
  border-radius: 32px;
}
.about-title {
  position: absolute;
  top: 12px;
  left: 27px;

  font-size: 70px;
  font-weight: 700;
  line-height: 1.2;
  color: #0a5bff;
  max-width: 100%;
}
.about-text {
  position: absolute;
  bottom: 75px;
  right: 20px;

  max-width: 50%;

  font-size: 20px;
  line-height: 1.7;
  color: #222222;
}

.about-text p {
  margin-bottom: 14px;
}
.news {
  padding-top: 12px;
  padding-bottom: 90px;
}

.loading {
  text-align: center;
  padding: 60px 20px;
  font-size: 18px;
  color: #6b7280;
}

.news-inner {
  max-width: 85%;
  padding: 0 20px;
}

.news-inner h2 {
  font-size: 60px; 
  font-weight: 800;
  display: flex;
  text-align: right;
  color: #0f6bff;
  margin: 0 0 32px; 
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}

.news-card {
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  padding: 20px 22px 24px; 
  display: flex;
  flex-direction: column;
  height: 100%;
}

.news-image-wrapper {
  margin: 0 0 16px;
}

.news-image {
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
  display: block;
}

.news-meta {
  margin-bottom: 8px;
}

.news-group {
  margin: 0 0 4px;
  font-size: 15px; 
  color: #6b7280;
  font-weight: 500;
}

.news-title {
  margin: 0;
  font-size: 30px; 
  font-weight: 700;
  color: #111827;
  line-height: 1.3;
}

.news-body {
  flex: 1;
  font-size: 15px;
  line-height: 1.65;
  color: #4b5563;
  margin: 12px 0 14px;
}

.news-date {
  font-size: 18px; 
  color: #9ca3af;
  margin: 0 0 12px;
  font-weight: 500;
}

.news-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.news-location {
  font-size: 15px; 
  color: #6b7280;
  font-weight: 500;
}

.btn-outline {
  border-radius: 999px;
  border: 1.5px solid #0f6bff;
  background: #ffffff;
  color: #0f6bff;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 22px; 
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
}

.btn-outline:hover {
  background: #0f6bff;
  color: #ffffff;
}

@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .news-inner h2 {
    font-size: 48px;
  }
}

@media (max-width: 640px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .news-inner h2 {
    font-size: 40px;
  }
  
  .news-title {
    font-size: 20px;
  }
  
  .news-body {
    font-size: 15px;
  }
}
.site-footer {
  background: #0f6bff;
  color: #ffffff;
  padding: 60px 16px 34px;
}

.footer-inner {
  max-width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1.2fr 1.2fr;
  gap: 40px;
  align-items: flex-start;
}

.footer-column {
  font-size: 16px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.footer-logo-img {
  height: 50px;
  object-fit: contain;
}

.footer-description {
  margin: 0 0 10px;
  max-width: 270px;
}

.footer-copy {
  margin: 0;
  font-size: 13px;
  opacity: 0.9;
}

.footer-heading {
  margin: 0 0 10px;
  font-size: 32px;
  font-weight: 700;
}

.footer-link {
  margin: 0 0 6px;
}
@media (max-width: 992px) {
  .top-nav {
    padding-inline: 18px;
  }

  .nav-links {
    gap: 14px;
  }

  .about-inner {
    grid-template-columns: 1.1fr;
  }

  .about-image-wrapper {
    order: -1;
  }

  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-inner {
    grid-template-columns: 1.5fr 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 320px;
  }

  .top-nav {
    top: 14px;
  }

  .nav-inner {
    flex-wrap: wrap;
    justify-content: center;
  }

  .logo {
    justify-content: center;
  }

  .nav-links {
    order: 3;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4px;
  }

  .stats-bar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .news-grid {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    grid-template-columns: 1fr;
  }

  .footer-brand {
    order: 3;
  }
}

@media (max-width: 480px) {
  .top-nav {
    border-radius: 22px;
    padding: 10px 14px;
  }

  .nav-links a {
    font-size: 12px;
  }

  .stats-bar {
    padding-inline: 18px;
  }

  .about {
    padding-top: 42px;
    padding-bottom: 56px;
  }

  .news {
    padding-bottom: 64px;
  }
}
</style>