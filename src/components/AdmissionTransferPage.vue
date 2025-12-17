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

 <section class="page-content container">
  <h1 class="page-title">Rules for Transferring from Another College</h1>

  <div class="official-note">
    <strong>Legal basis:</strong><br />
    Order of the Minister of Education and Science of the Republic of Kazakhstan
    dated January 20, 2015, No. 19. On the approval of rules for providing state
    services in the field of technical and vocational, post-secondary education.
  </div>
  <div class="info-card">
    <h2>General Provisions</h2>
    <p>
      Transfer of students from one educational institution to another,
      including transfers between forms of education, specialties, and funding
      types, is carried out subject to the elimination of academic differences
      in learning modules and disciplines.
    </p>
  </div>

  <div class="info-card">
    <h2>Transfer Conditions</h2>
    <ol>
      <li>
        Transfers from fee-based education to state-funded education are carried
        out during the academic year as vacancies become available.
      </li>
      <li>
        In cases of relocation of parents or legal guardians of a minor student,
        transfer is allowed outside the vacation period upon submission of
        supporting documents.
      </li>
      <li>
        In all other cases, student transfers are carried out during summer and
        winter vacations.
      </li>
    </ol>
  </div>

  <div class="info-card highlight-card">
    <h2>Transfer to State-Funded Education</h2>
    <p>
      Information on the availability of vacant state-funded places is published
      on information boards and official websites of the educational
      organization.
    </p>
    <p>
      The decision to transfer a student is made by a collegial body involving
      teachers and representatives of student self-governance bodies, based on
      the student’s academic performance.
    </p>
  </div>
</section>
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
  name: "CollegeDocumentsPage",
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
.official-note {
  background: #f9fafb;
  border-left: 4px solid #0f6bff;
  padding: 20px 24px;
  margin-bottom: 40px;
  font-size: 14px;
  color: #374151;
  line-height: 1.6;
}

.info-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
}

.info-card h2 {
  margin: 0 0 16px;
  font-size: 22px;
  font-weight: 700;
  color: #0f6bff;
}

.info-card p {
  margin: 0 0 12px;
  line-height: 1.7;
  color: #374151;
}

.info-card ol {
  padding-left: 18px;
}

.info-card li {
  margin-bottom: 12px;
  line-height: 1.6;
  color: #374151;
}
.highlight-card {
  background: linear-gradient(135deg, #f0f6ff, #ffffff);
  border: 1px solid #e0ecff;
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
