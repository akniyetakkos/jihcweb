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
    <main class="container">
      <section class="board-section">
        <h1 class="board-title">Board of Trustees</h1>
        <p class="board-subtitle">
          The Board of Trustees oversees the strategic direction and governance of Jambyl Innovation High College.
        </p>
        <div class="chair-card">
          <h2 class="member-name">Иренбаев Алимжан Бекежанович</h2>
          <p class="member-role">Chairperson of the Board of Trustees</p>
        </div>
        <div class="members-grid">
          <div class="member-card">
            <h3 class="member-name">Лесхан Даурен</h3>
            <p class="member-role">Member of the Board of Trustees</p>
          </div>

          <div class="member-card">
            <h3 class="member-name">Муканов Алмас Джубайулы</h3>
            <p class="member-role">Member of the Board of Trustees</p>
          </div>

          <div class="member-card">
            <h3 class="member-name">Бермаганбетов Галымбек Темирбекович</h3>
            <p class="member-role">Member of the Board of Trustees</p>
          </div>

          <div class="member-card">
            <h3 class="member-name">Жантаева Ардак Мыктбековна</h3>
            <p class="member-role">Member of the Board of Trustees</p>
          </div>

          <div class="member-card">
            <h3 class="member-name">Шалгынбаев Жумадил Мурзабекулы</h3>
            <p class="member-role">Member of the Board of Trustees</p>
          </div>

          <div class="member-card">
            <h3 class="member-name">Джурымбаев Галымжан Бахитжанович</h3>
            <p class="member-role">Member of the Board of Trustees</p>
          </div>
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
  name: "CollegeBoardPage",
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
.board-section {
  padding: 80px 0;
  text-align: center;
}

.board-title {
  font-size: 42px;
  font-weight: 800;
  color: #0f6bff;
  margin-bottom: 16px;
}

.board-subtitle {
  max-width: 100%;
  margin: 0 auto 50px;
  color: #4b5563;
  line-height: 1.7;
}
.chair-card {
  background: linear-gradient(135deg, #0f6bff, #3b82f6);
  color: white;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 50px;
  box-shadow: 0 20px 40px rgba(15, 107, 255, 0.3);
}

.chair-card .member-role {
  opacity: 0.9;
}
.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.member-card {
  background: #f9fafb;
  padding: 28px;
  border-radius: 18px;
  transition: 0.3s ease;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.member-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 36px rgba(0,0,0,0.08);
}

.member-name {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
}

.member-role {
  font-size: 14px;
  color: #6b7280;
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
