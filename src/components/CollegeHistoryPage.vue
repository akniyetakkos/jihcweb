<template>
  <div class="college-page">
    <header class="top-hero">
      <div class="top-bar">
        <div class="top-inner">
          <div class="logo">
            <img src="/src/assets/jihclogo-white.png" alt="Jambyl Innovation High College logo" class="logo-img" />
          </div>

          <NavigationMenu class="white-nav" />

          <LanguageSwitcher />
        </div>
      </div>
    </header>

    <main>
      <section class="page-content container">
        <h1 class="page-title">College History</h1>
        <div class="content-wrapper">
          <p class="content-text">
            Jambyl Innovation High College was established with a vision to provide high-quality education 
            and prepare students for successful careers in technology, economics, and education.
          </p>
          <p class="content-text">
           The Public State-Owned Enterprise 'Zhambyl Innovation High College' under the Department of Education of the Zhambyl Region Akimat was established in 1993. The college is better known to the public as the former Kazakh-Turkish College.

The college provides modern vocational and technical education under a program approved by the Ministry of Education and Science of the Republic of Kazakhstan.

The college operates in accordance with the quality standards of the educational and upbringing processes of the 'Bilim Innovation Foundation' (operator of the Bilim Innovation Lyceum network) and functions under the patronage of 'SDU University.'

All natural science, mathematics, and professional subjects are taught in English. Special attention is given to value-oriented education.

The college prepares specialists in economics and pedagogy, as well as professionals in the field of information technology.
          </p>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <section class="footer-column footer-brand" aria-label="About JIHC">
          <div class="footer-logo">
            <img src="/src/assets/jihclogo-white.png" alt="Jambyl Innovation High College logo" class="footer-logo-img" />
          </div>
          <p class="footer-description">
            We inspire students to innovate, create, and grow as future professionals.
          </p>
          <p class="footer-copy">© 2025 Jambyl Innovation High College. All rights reserved.</p>
        </section>

        <section class="footer-column" aria-label="Contact information">
          <h3 class="footer-heading">Contact Us</h3>
          <p class="footer-link">info@jihc.edu.kz</p>
          <p class="footer-link">+7 (707) 802-00-88</p>
          <p class="footer-link">Kazakhstan, Taraz, Pushkin Street, 154</p>
        </section>

        <section class="footer-column" aria-label="Social media">
          <h3 class="footer-heading">Follow Us</h3>
          <p class="footer-link">@jihc.kz</p>
          <p class="footer-link">@jihc_kz</p>
        </section>
      </div>
    </footer>
  </div>
</template>

<script>
import NavigationMenu from './NavigationMenu.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
  name: "CollegeHistoryPage",
  components: {
    NavigationMenu,
    LanguageSwitcher,
  },
};
</script>

<style scoped>
.college-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  color: #111827;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.top-hero {
  background: #0f6bff;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 0 16px 32px rgba(0, 64, 166, 0.25);
}

.top-bar {
  max-width: 1120px;
  margin: 0 auto;
  padding: 20px 16px 14px;
}

.top-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 32px;
  object-fit: contain;
}

main {
  flex: 1;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
}

.page-content {
  padding: 60px 16px;
}

.page-title {
  margin: 0 0 32px;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  color: #0f6bff;
}

.content-wrapper {
  max-width: 800px;
}

.content-text {
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 1.7;
  color: #374151;
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
  .top-inner {
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
  }

  .footer-inner {
    grid-template-columns: 1.5fr 1fr;
  }
}

@media (max-width: 768px) {
  .page-content {
    padding: 40px 16px;
  }

  .footer-inner {
    grid-template-columns: 1fr;
  }
}
</style>
