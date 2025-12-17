<template>
  <div class="specialists-page">
    <header class="top-hero">
      <div class="top-bar">
        <div class="top-inner">
          <div class="logo">
            <img
              src="/src/assets/jihclogo-white.png"
              alt="Jambyl Innovation High College logo"
              class="logo-img"
            />
          </div>

          <NavigationMenu class="white-nav" />

          <LanguageSwitcher />
        </div>
      </div>
    </header>

    <main>
      <section class="title-section">
        <div class="title-wrapper">
          <div class="title-pill">Specialists of JIHC</div>
        </div>
      </section>
      <section class="programs">
        <router-link to="/specialists/it" class="program program-primary">
          <figure class="program-image-wrapper">
            <img
              src="/src/assets/specialists-it.jpg"
              alt="Student learning information systems"
              class="program-image"
            />
          </figure>

          <div class="program-content">
            <span class="program-badge">2 years Program</span>
            <h2 class="program-title">
              Information Systems and<br />
              Software Development
            </h2>
            <p class="program-text">
              Prepare for the digital future with comprehensive training in modern programming
              languages, web development, mobile applications, and database management.
            </p>
            <button class="btn-primary">Apply Now</button>
          </div>
        </router-link>
        <router-link to="/specialists/accounting" class="program program-secondary">
          <div class="program-content">
            <span class="program-badge program-badge-green">2 years Program</span>
            <h2 class="program-title program-title-green">Accounting and Audit</h2>
            <p class="program-text">
              Master the fundamentals of financial accounting, auditing, taxation, and business
              analytics to become a trusted financial professional.
            </p>
            <button class="btn-secondary">Apply Now</button>
          </div>

          <figure class="program-image-wrapper">
            <img
              src="/src/assets/specialists-accounting.png"
              alt="Students studying accounting"
              class="program-image"
            />
          </figure>
        </router-link>
      </section>
      <section class="curriculum" aria-labelledby="curriculum-heading">
        <div class="curriculum-inner">
          <h2 id="curriculum-heading" class="curriculum-heading">Detailed Curriculum</h2>

          <div class="curriculum-grid">
            <div class="curriculum-column">
              <div class="curriculum-header">
                <div class="icon-box purple">
                  <span>&lt;&gt;</span>
                </div>
                <h3>
                  Information Systems and<br />
                  Software Development
                </h3>
              </div>
              <ul class="curriculum-list">
                <li>Scholarship-based education</li>
                <li>Classes based on WorldSkills Competencies</li>
                <li>Participation in various IT hackathons and StartUps</li>
                <li>Module-based learning</li>
                <li>Experienced and advanced lecturers</li>
                <li>Opportunity to intern at an IT company</li>
              </ul>

              <div class="career">
                <h4>Career Opportunities</h4>
                <div class="chips purple-chips">
                  <span class="chip">Mobile Development</span>
                  <span class="chip">UI/UX Design</span>
                  <span class="chip">Graphic Design</span>
                  <span class="chip">Web Development</span>
                </div>
              </div>
            </div>
            <div class="curriculum-column">
              <div class="curriculum-header">
                <div class="icon-box green">
                  <span>₸</span>
                </div>
                <h3>Accounting and Audit</h3>
              </div>
              <ul class="curriculum-list curriculum-list-green">
                <li>Advanced study of English and Mathematics</li>
                <li>
                  Training according to ACCA certification standards (British Association of
                  Chartered Certified Accountants)
                </li>
                <li>Learning 1C</li>
                <li>Mastering Kazakhstan taxation</li>
                <li>Experienced and advanced lecturers</li>
                <li>Opportunity to intern at an audit firm</li>
              </ul>

              <div class="career">
                <h4>Career Opportunities</h4>
                <div class="chips green-chips">
                  <span class="chip">Management</span>
                  <span class="chip">Audit</span>
                  <span class="chip">Marketing</span>
                  <span class="chip">Finance</span>
                </div>
              </div>
            </div>
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
  name: "SpecialistsPage",
  components: {
    NavigationMenu,
    LanguageSwitcher,
  },
};
</script>

<style scoped>
.specialists-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  color: #111827;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.top-hero {
  background: #007bff;
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

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  opacity: 0.95;
  padding-bottom: 4px;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  border-bottom: 2px solid #ffffff;
  opacity: 1;
}
.title-wrapper {
  display: flex;
  justify-content: center; 
  margin: 50px 0;
}

.title-pill {
  background: #0f6bff;
  color: #fff;
  padding: 14px 36px;
  font-size: 26px;
  font-weight: 800;
  border-radius: 999px;
  box-shadow: 0 12px 28px rgba(15, 107, 255, .35);
}
.programs {
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 16px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.program {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.2fr);
  gap: 40px;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.program:hover {
  transform: translateY(-4px);
}

.program-secondary {
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.1fr);
}

.program-image-wrapper {
  margin: 0;
}

.program-image {
  width: 100%;
  border-radius: 26px;
  display: block;
  object-fit: cover;
}

.program-content {
  max-width: 520px;
}

.program-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 999px;
  background: #f1ebff;
  color: #6b21ff;
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 10px;
}

.program-badge-green {
  background: #e1fbf0;
  color: #16a34a;
}

.program-title {
  font-size: 26px;
  font-weight: 800;
  color: #4b008f;
  margin: 0 0 12px;
}

.program-title-green {
  color: #059669;
}

.program-text {
  font-size: 14px;
  line-height: 1.6;
  color: #4b5563;
  margin: 0 0 16px;
}

.btn-primary,
.btn-secondary {
  border-radius: 999px;
  border: none;
  padding: 8px 22px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary {
  background: #4b008f;
  color: #ffffff;
}

.btn-secondary {
  background: #16a34a;
  color: #ffffff;
}

.btn-primary:hover {
  background: #3b0170;
}

.btn-secondary:hover {
  background: #15803d;
}
.curriculum {
  padding: 36px 16px 72px;
}

.curriculum-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.curriculum-heading {
  font-size: 26px;
  font-weight: 800;
  color: #0f6bff;
  margin: 0 0 26px;
}

.curriculum-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
}

.curriculum-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.curriculum-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
}

.icon-box {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
}

.icon-box.purple {
  background: #4b008f;
}

.icon-box.green {
  background: #16a34a;
}

.curriculum-list {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
}

.curriculum-list li {
  position: relative;
  padding-left: 26px;
  font-size: 13px;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 8px;
}

.curriculum-list li::before {
  content: "✔";
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 13px;
  color: #4b008f;
}

.curriculum-list-green li::before {
  color: #16a34a;
}

.career h4 {
  margin: 0 0 10px;
  font-size: 15px;
  font-weight: 700;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
}

.purple-chips .chip {
  background: #4b008f;
}

.green-chips .chip {
  background: #16a34a;
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
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .program {
    grid-template-columns: 1fr;
  }

  .program-secondary {
    grid-template-columns: 1fr;
  }

  .program-secondary .program-image-wrapper {
    order: -1;
  }

  .curriculum-grid {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    grid-template-columns: 1.5fr 1fr;
  }
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }
}
</style>


