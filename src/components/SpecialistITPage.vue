<template>
  <div class="specialist-page">
    <header class="top-hero">
      <div class="top-bar">
        <div class="top-inner">
          <img src="/src/assets/jihclogo-white.png" class="logo-img" />

          <NavigationMenu class="white-nav" />

          <LanguageSwitcher />
        </div>
      </div>
    </header>
    <main class="container">
      <section class="hero-card">
        <div class="hero-image">
          <img src="/src/assets/specialists-it.jpg" alt="Students" />
        </div>

        <div class="hero-content">
          <span class="program-badge">2 years Program</span>

          <h1>Information Systems and Software Development</h1>

          <p>
            Prepare for the digital future with comprehensive training in modern
            programming languages, web development, mobile applications, and
            database management.
          </p>
        <router-link to="/admission/submission" class="dropdown-item">
          <button class="btn-primary">Apply Now</button></router-link>

        </div>
      </section>
      <section class="features">
        <h2>Information Systems and Software Development</h2>

        <ul class="feature-list">
          <li>Scholarship based education</li>
          <li>Classes based on WorldSkills Competencies</li>
          <li>Participation in various IT hackathons and StartUps</li>
          <li>Module-based learning</li>
          <li>Experienced and advanced lecturers</li>
          <li>Opportunity to intern at an IT company</li>
        </ul>
      </section>
      <section class="career">
        <h3>Career Opportunities</h3>

        <div class="chips">
          <span>Mobile Development</span>
          <span>UI/UX Design</span>
          <span>Graphic Design</span>
          <span>Web Development</span>
        </div>
      </section>

      <a class="details-link">Detailed Curriculum</a>
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
import NavigationMenu from './NavigationMenu.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
  name: "SpecialistITPage",
  components: { 
    NavigationMenu,
    LanguageSwitcher,
  },
};
</script>

<style scoped>
.specialist-page {
  font-family: system-ui, sans-serif;
  background: #fff;
  color: #111827;
}

.top-hero {
  background: #0f6bff;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
}

.top-bar {
  max-width: 1120px;
  margin: 0 auto;
  padding: 18px;
}

.top-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-img {
  height: 32px;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 60px 16px;
}

.hero-card {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 80px;
}

.hero-image img {
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
}

.hero-content h1 {
  font-size: 40px;
  font-weight: 800;
  color: #6d28d9;
  margin: 16px 0;
}

.hero-content p {
  font-size: 16px;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 28px;
}

.program-badge {
  display: inline-block;
  background: #7c3aed;
  color: #fff;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.btn-primary {
  background: #6d28d9;
  color: #fff;
  border: none;
  padding: 14px 30px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.features h2 {
  font-size: 20px;
  margin-bottom: 24px;
}

.feature-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 14px;
}

.feature-list li {
  padding-left: 28px;
  position: relative;
  font-size: 15px;
}

.feature-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #7c3aed;
  font-weight: 700;
}

/* CAREER */
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
  background: #ede9fe;
  color: #6d28d9;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
}

/* LINK */
.details-link {
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
  .hero-card {
    grid-template-columns: 1fr;
  }
}
</style>
