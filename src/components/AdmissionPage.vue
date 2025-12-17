<template>
  <div class="admission-page">
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
      <section class="hero-cta">
        <div class="cta-pill">Join Us</div>
      </section>

      <section class="section" aria-labelledby="required-docs-heading">
        <div class="container">
          <h2 id="required-docs-heading" class="section-title">Required Documents</h2>
          <p class="section-subtitle">
            Ensure you have all necessary documents ready before submitting your application.
          </p>

          <div class="docs-grid">
            <div class="doc-item" v-for="doc in documents" :key="doc.title">
              <div class="doc-icon">{{ doc.icon }}</div>
              <p class="doc-text">{{ doc.title }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" aria-labelledby="transfer-heading">
        <div class="container">
          <h2 id="transfer-heading" class="section-title">Rules for Transferring from Another College</h2>
          <p class="section-subtitle">
            Official regulations and procedures for student transfers
          </p>

          <div class="cards-grid">
            <article class="info-card" v-for="card in transferCards" :key="card.title">
              <div class="card-icon">{{ card.icon }}</div>
              <h3 class="card-title">{{ card.title }}</h3>
              <p class="card-body">{{ card.body }}</p>
            </article>
          </div>
        </div>
      </section>
      <section class="section form-section" aria-labelledby="apply-heading">
        <div class="container">
          <h2 id="apply-heading" class="section-title">Submit Your Application</h2>
          <p class="section-subtitle">Fill in your details and we’ll get back to you soon</p>

          <form class="apply-form">
            <input type="text" placeholder="Name" aria-label="Name" />
            <input type="email" placeholder="Email" aria-label="Email" />
            <input type="tel" placeholder="Phone Number" aria-label="Phone Number" />
            <button type="button" class="btn-primary">Apply Now</button>
          </form>
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
  name: "AdmissionPage",
  components: {
    NavigationMenu,
    LanguageSwitcher,
  },
  data() {
    return {
      documents: [
        { title: "Application for document submission", icon: "📝" },
        { title: "Medical certificate (form №075-U)", icon: "🏥" },
        { title: "Certificate of social status (if available)", icon: "📄" },
        { title: "Four 3×4 cm photos", icon: "📷" },
        { title: "Original education certificate / diploma", icon: "🎓" },
        { title: "Copy of identity card", icon: "🪪" },
      ],
      transferCards: [
        {
          title: "Regulation",
          body:
            "Order of the Minister of Education and Science of the Republic of Kazakhstan dated January 20, 2015, No. 19.",
          icon: "📘",
        },
        {
          title: "Transfers Include",
          body:
            "Transfers from one college to another, between specialties or forms of education. All transfers require checking academic differences and course equivalency.",
          icon: "🎒",
        },
        {
          title: "Special Situations",
          body:
            "Transfers outside regular vacation periods are permitted if parents or legal guardians relocate. Supporting documents must be provided to verify the relocation.",
          icon: "⚠️",
        },
        {
          title: "Vacant State-Funded Seats",
          body:
            "Information about available state-funded grants is published on the college’s website and displayed on information boards within the institution for transparency and equal access.",
          icon: "🏛️",
        },
        {
          title: "Transfer Committee",
          body:
            "A specialized transfer committee reviews all applications and decides based on performance, available seats, and compatibility with the chosen program of study.",
          icon: "👥",
        },
      ],
    };
  },
};
</script>

<style scoped>
.admission-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #ffffff;
  color: #111827;
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

main {
  flex: 1;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
}

.hero-cta {
  display: flex;
  justify-content: center;
  padding: 32px 16px 18px;
}

.cta-pill {
  background: #0f6bff;
  color: #ffffff;
  border-radius: 999px;
  padding: 12px 32px;
  font-size: 26px;
  font-weight: 800;
  box-shadow: 0 12px 28px rgba(0, 64, 166, 0.24);
}

.section {
  padding: 30px 0;
}

.section-title {
  font-size: 28px;
  font-weight: 800;
  color: #0f6bff;
  margin: 0 0 8px;
}

.section-subtitle {
  margin: 0 0 18px;
  color: #374151;
  font-size: 14px;
  line-height: 1.6;
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 28px;
  align-items: start;
}

.doc-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}

.doc-icon {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: #e8f2ff;
  color: #0f6bff;
  display: grid;
  place-items: center;
  font-size: 16px;
  flex-shrink: 0;
}

.doc-text {
  margin: 0;
  font-size: 14px;
  color: #1f2937;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 8px;
}

.info-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.08);
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-icon {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: #e8f2ff;
  color: #0f6bff;
  display: grid;
  place-items: center;
  font-size: 16px;
}

.card-title {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: #0f6bff;
}

.card-body {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: #374151;
}
.form-section {
  padding-bottom: 60px;
}

.apply-form {
  margin-top: 12px;
  display: grid;
  gap: 12px;
}

.apply-form input {
  padding: 14px 16px;
  border-radius: 12px;
  border: 1.5px solid #e5e7eb;
  font-size: 14px;
  outline: none;
}

.apply-form input:focus {
  border-color: #0f6bff;
  box-shadow: 0 0 0 3px rgba(15, 107, 255, 0.15);
}

.btn-primary {
  border: none;
  border-radius: 12px;
  background: #0f6bff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  padding: 14px 18px;
  cursor: pointer;
  box-shadow: 0 12px 26px rgba(0, 64, 166, 0.22);
}

.btn-primary:hover {
  background: #0c5ed8;
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

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
  }

  .docs-grid {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    grid-template-columns: 1.5fr 1fr;
  }
}

@media (max-width: 680px) {
  .cta-pill {
    font-size: 22px;
    padding: 10px 24px;
  }

  .section-title {
    font-size: 24px;
  }

  .footer-inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .top-bar {
    padding: 16px 14px 12px;
  }

  .nav-links a {
    font-size: 12px;
  }

  .info-card {
    padding: 14px;
  }
}
</style>

