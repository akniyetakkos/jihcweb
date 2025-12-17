<template>
  <div class="calendar-page">
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
      <section class="title-banner">
        <div class="calendar-title-wrapper">
          <div class="calendar-pill">Academic Calendar</div>
        </div>
      </section>


      <section class="semesters container">
        <div class="semester-card semester-blue">
          <h2 class="semester-title">First Semester 2025</h2>
          <p class="semester-dates">September 1, 2025 - December 20, 2025</p>

          <div class="events-grid events-grid-first">
            <div class="event-card">
              <span class="event-badge badge-green">Sep 1-3</span>
              <p class="event-title">New Student Orientation</p>
            </div>
            <div class="event-card">
              <span class="event-badge badge-blue">Sep 4</span>
              <p class="event-title">Classes Begin</p>
            </div>
            <div class="event-card">
              <span class="event-badge badge-purple">Nov 20 - 30</span>
              <p class="event-title">KET & PET</p>
            </div>
            <div class="event-card">
              <span class="event-badge badge-green">Dec 16-20</span>
              <p class="event-title">Final Exams</p>
            </div>
            <div class="event-card">
              <span class="event-badge badge-purple">Oct 15-22</span>
              <p class="event-title">Midterm Exams</p>
            </div>
            <div class="event-card">
              <span class="event-badge badge-gray">Dec 21</span>
              <p class="event-title">Winter Break Begins</p>
            </div>
          </div>
        </div>
        <div class="semester-card semester-purple">
          <h2 class="semester-title">Second Semester 2026</h2>
          <p class="semester-dates">January 15, 2026 - May 22, 2026</p>

          <div class="events-grid events-grid-second">
            <div class="event-card">
              <span class="event-badge badge-green">Jan 15</span>
              <p class="event-title">Classes Begin</p>
            </div>
            <div class="event-card">
              <span class="event-badge badge-blue">Mar 10-17</span>
              <p class="event-title">Midterm Exams</p>
            </div>
            <div class="event-card">
              <span class="event-badge badge-purple">June 1-20</span>
              <p class="event-title">Final Exams</p>
            </div>
            <div class="event-card">
              <span class="event-badge badge-purple">June 20</span>
              <p class="event-title">Graduation Ceremony</p>
            </div>
            <div class="event-card">
              <span class="event-badge badge-gray">June 21</span>
              <p class="event-title">Summer Break Begins</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="footer-inner">
        <section class="footer-column footer-brand" aria-label="About JIHC">
          <div class="footer-logo">
            <img src="/src/assets/jihclogo-white.png" alt="Jambyl Innovation High College logo"
              class="footer-logo-img" />
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
  name: "CalendarPage",
  components: {
    NavigationMenu,
    LanguageSwitcher,
  },
};
</script>

<style scoped>
.calendar-page {
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

.calendar-title-wrapper {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}

.calendar-pill {
  background: #0f6bff;
  color: #fff;
  padding: 14px 36px;
  font-size: 26px;
  font-weight: 800;
  border-radius: 999px;
  box-shadow: 0 12px 28px rgba(15, 107, 255, .35);
}

.semesters {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 60px;
}

.semester-card {
  border-radius: 20px;
  padding: 36px;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.15);
}

.semester-blue {
  background: #0f6bff;
  color: #ffffff;
}

.semester-purple {
  background: #7c3aed;
  color: #ffffff;
}

.semester-title {
  margin: 0 0 8px;
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 800;
}

.semester-dates {
  margin: 0 0 24px;
  font-size: 15px;
  opacity: 0.9;
}

.events-grid {
  display: grid;
  gap: 16px;
}

.events-grid-first {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
}

.events-grid-first .event-card:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}

.events-grid-first .event-card:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
}

.events-grid-first .event-card:nth-child(3) {
  grid-column: 1;
  grid-row: 2;
}

.events-grid-first .event-card:nth-child(4) {
  grid-column: 2;
  grid-row: 2;
}

.events-grid-first .event-card:nth-child(5) {
  grid-column: 3;
  grid-row: 1;
}

.events-grid-first .event-card:nth-child(6) {
  grid-column: 3;
  grid-row: 2;
}

.events-grid-second {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
}

.events-grid-second .event-card:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}

.events-grid-second .event-card:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
}

.events-grid-second .event-card:nth-child(3) {
  grid-column: 3;
  grid-row: 1;
}

.events-grid-second .event-card:nth-child(4) {
  grid-column: 1;
  grid-row: 2;
}

.events-grid-second .event-card:nth-child(5) {
  grid-column: 2;
  grid-row: 2;
}

.event-card {
  background: #f9fafb;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  min-height: 110px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
}

.event-badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  text-transform: none;
  width: fit-content;
  letter-spacing: 0.02em;
}

.badge-green {
  background: #10b981;
  color: #ffffff;
}

.badge-blue {
  background: #0f6bff;
  color: #ffffff;
}

.badge-purple {
  background: #7c3aed;
  color: #ffffff;
}

.badge-gray {
  background: #9ca3af;
  color: #ffffff;
}

.event-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.5;
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

  .events-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-inner {
    grid-template-columns: 1.5fr 1fr;
  }
}

@media (max-width: 768px) {
  .title-banner {
    padding: 30px 0;
    margin-top: 16px;
    margin-bottom: 32px;
  }

  .semester-card {
    padding: 24px;
  }

  .events-grid {
    grid-template-columns: 1fr;
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

  .semester-card {
    padding: 20px;
  }
}
</style>
