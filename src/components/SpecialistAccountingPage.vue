<template>
  <div class="page">
    <header class="top-hero">
      <div class="top-inner">
        <img src="/src/assets/jihclogo-white.png" class="logo" />
        <NavigationMenu class="white-nav" />
        <LanguageSwitcher />
      </div>
    </header>
    <main class="container">
      <section class="hero">
        <div class="hero-text">
          <span class="badge">2 years Program</span>
          <h1>Accounting and Audit</h1>
          <p>
            Master the fundamentals of financial accounting, auditing, taxation,
            and business analytics to become a trusted financial professional.
          </p>
            <router-link to="/admission/submission" class="dropdown-item">
         <button class="apply-btn">Apply Now</button></router-link>

        </div>
        <div class="hero-image">
          <img src="/src/assets/specialists-accounting.png" />
        </div>
      </section>
      <section class="info">
        <h2>
          <span class="icon">📄</span>
          Accounting and Audit
        </h2>

        <ul class="check-list">
          <li>Advanced study of English and Mathematics</li>
          <li>
            Training according to ACCA certification standards (British Association
            of Chartered Certified Accountants)
          </li>
          <li>Learning 1C</li>
          <li>Mastering Kazakhstan taxation</li>
          <li>Experienced and advanced lecturers</li>
          <li>Opportunity to intern at an audit firm</li>
        </ul>
      </section>
      <section class="career">
        <h3>Career Opportunities</h3>
        <div class="chips">
          <span>Management</span>
          <span>Audit</span>
          <span>Marketing</span>
          <span>Finance</span>
        </div>
      </section>

      <a class="details">Detailed Curriculum</a>
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
            We inspire students to innovate, create, and grow as future professionals.
          </p>
          <p class="footer-copy">
            © 2025 Jambyl Innovation High College. All rights reserved.
          </p>
        </section>

        <section class="footer-column" aria-label="Contact information">
          <h3 class="footer-heading">Contact Us</h3>
          <p class="footer-link">info@jihc.edu.kz</p>
          <p class="footer-link">+7 (707) 802-00-88</p>
          <p class="footer-link">Kazakhstan, Taraz, Pushkin Street, 134</p>
        </section>

        <section class="footer-column" aria-label="Social media">
          <h3 class="footer-heading">Follow Us</h3>
          <p class="footer-link">@jihc_kz</p>
          <p class="footer-link">@jihc_kz</p>
        </section>
      </div>
    </footer>
  </div>
</template>

<script>
import NavigationMenu from "./NavigationMenu.vue";
import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
  name: "SpecialistsAccountingPage",
  components: { 
    NavigationMenu,
    LanguageSwitcher,
  },
};
</script>

<style scoped>
.page {
  font-family: system-ui, sans-serif;
  color: #111827;
  background: #fff;
}
.top-hero {
  background: #0f6bff;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
}

.top-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 32px;
}



.lang-removed button {
  display: none;
  padding: 4px 10px;
}

.lang .active {
  background: #fff;
  color: #111;
  border-radius: 999px;
}
.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 70px 16px;
}
.hero {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-text h1 {
  font-size: 42px;
  font-weight: 800;
  color: #16a34a;
  margin: 16px 0;
}

.hero-text p {
  font-size: 16px;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 28px;
}

.badge {
  background: #22c55e;
  color: #fff;
  font-size: 12px;
  padding: 6px 14px;
  border-radius: 999px;
  font-weight: 600;
}

.apply-btn {
  background: #22c55e;
  color: #fff;
  border: none;
  padding: 14px 32px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}

.hero-image img {
  width: 100%;
  border-radius: 28px;
  object-fit: cover;
}
.info {
  margin-top: 90px;
}

.info h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  margin-bottom: 28px;
}

.check-list {
  list-style: none;
  padding: 0;
  max-width: 640px;
  display: grid;
  gap: 14px;
}

.check-list li {
  position: relative;
  padding-left: 28px;
  font-size: 15px;
}

.check-list li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: #22c55e;
  font-weight: 700;
}
.career {
  margin-top: 60px;
}

.career h3 {
  margin-bottom: 20px;
}

.chips {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.chips span {
  background: #dcfce7;
  color: #16a34a;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
}
.details {
  display: inline-block;
  margin-top: 40px;
  color: #2563eb;
  font-weight: 600;
  cursor: pointer;
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
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }
}
</style>
