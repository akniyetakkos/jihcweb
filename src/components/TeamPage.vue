<template>
  <div class="team-page">
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
      <section class="hero-photo">
        <div class="hero-mask">
          <img src="/src/assets/teamhero-image.png" alt="JIHC team group photo" class="hero-img" />
        </div>
      </section>

      <section class="title-section">
        <div class="title-pill">
          <h1>
            <span class="title-strong">The Team</span>
            <span class="title-regular"> Behind JIHC’s Innovation and Success</span>
          </h1>
        </div>
      </section>
      <section class="team-grid-section">
        <div class="team-grid">
          <article
            v-for="member in teamMembers"
            :key="member.name"
            class="team-card"
          >
            <figure class="card-photo">
              <img :src="member.photo" :alt="member.name" />
              <div class="card-gradient"></div>
            </figure>

            <div class="card-info card-info-default">
              <p class="card-name">{{ member.name }}</p>
              <p class="card-role">{{ member.role }}</p>
            </div>

            <div class="card-overlay">
              <img src="/src/assets/jihclogo-white.png" alt="JIHC logo" class="card-logo" />
              <p class="card-name overlay-name">{{ member.name }}</p>
              <p class="card-role overlay-role">{{ member.role }}</p>
              <p v-if="member.description" class="card-desc overlay-desc">{{ member.description }}</p>
            </div>
          </article>
        </div>
        <div class="cta">
          <button class="btn-outline">Show All</button>
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
  name: "TeamPage",
  components: {
    NavigationMenu,
    LanguageSwitcher,
  },
  data() {
    return {
      teamMembers: [
        {
          name: "Maksat Galiuyev",
          role: "Web Development",
          photo: "/src/assets/maks.JPG",
        },
        {
          name: "Aibol Agai",
          role: "Graph Design",
          photo: "/src/assets/aibol.JPG",
          description: "Our Graphic Design teacher inspires creativity and visual thinking.",
        },
        {
          name: "Nurzhan Sagyndyk",
          role: "UX | UI Design",
          photo: "src/assets/rebza.JPG",

        },
        {
          name: "Shynar Altynbekova",
          role: "Economic",
          photo: "/src/assets/shynar.JPG",
        },
        {
          name: "Nazken Bek",
          role: "English",
          photo: "/src/assets/nazken.JPG",
        },
        {
          name: "Erzhan Akhmet",
          role: "World History",
          photo: "/src/assets/ahmet.JPG",
        },
        {
          name: "Tamara Karimberdieva",
          role: "Russian Literature",
          photo: "/src/assets/tamara.jpg",
        },
        {
          name: "Aizhan Berdibaeva",
          role: "Economic",
          photo: "/src/assets/aizhan.JPG",
        },
        {
          name: "Agasultan Abzelbek",
          role: "Mathematics",
          photo: "/src/assets/agasultan.JPG",
        },
        {
          name: "Olzhas Toktasyn",
          role: "Mobile Development",
          photo: "/src/assets/olzhas.JPG",
        },
        {
          name: "Aizhan Pashanova",
          role: "English",
          photo: "/src/assets/aizhanp.JPG",
        },
        {
          name: "Erzhan Koyshybekov",
          role: "Physics",
          photo: "/src/assets/erzhan.JPG",
        },
      ],
    };
  },
};
</script>

<style scoped>
.team-page {
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

.hero-photo {
  margin-top: 10px;
}

.hero-mask {
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
  display: block;
}

.title-section {
  padding: 38px 16px 30px;
}

.title-pill {
  max-width: 1120px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 28px;
  padding: 18px 22px;
}

.title-pill h1 {
  margin: 0;
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 800;
  color: #0f6bff;
  line-height: 1.25;
}

.title-strong {
  color: #0f6bff;
}

.title-regular {
  color: #1f2937;
}

.team-grid-section {
  padding: 10px 16px 70px;
}

.team-grid {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.team-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #f3f4f6;
  box-shadow: 0 16px 30px rgba(0, 64, 166, 0.12);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 64, 166, 0.18);
}

.card-photo {
  position: relative;
  margin: 0;
  width: 100%;
  aspect-ratio: 3 / 5;
}

.card-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 123, 255, 0) 35%, rgba(0, 123, 255, 0.8) 100%);
}

.card-info {
  position: absolute;
  bottom: 14px;
  left: 14px;
  right: 14px;
  color: #ffffff;
  transition: opacity 0.25s ease;
}

.card-name {
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 700;
}

.card-role {
  margin: 0;
  font-size: 12px;
  opacity: 0.92;
}

.card-desc {
  margin: 10px 0 0;
  font-size: 12px;
  line-height: 1.5;
}
.card-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  padding: 20px 18px;
  text-align: left;
  color: #ffffff;
  background: linear-gradient(180deg, rgba(0, 123, 255, 0.15) 0%, rgba(0, 123, 255, 0.95) 100%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease;
}

.card-logo {
  height: 44px;
  width: 44px;
  object-fit: contain;
}

.overlay-name {
  font-size: 16px;
  margin-top: 4px;
}

.overlay-role {
  font-size: 12px;
  opacity: 0.92;
}

.overlay-desc {
  margin-top: 6px;
}
.team-card:hover .card-overlay {
  opacity: 1;
  visibility: visible;
}

.team-card:hover .card-info-default {
  opacity: 0;
}

.cta {
  max-width: 1120px;
  margin: 22px auto 0;
  display: flex;
  justify-content: center;
}

.btn-outline {
  border-radius: 999px;
  border: 1.5px solid #0f6bff;
  background: #ffffff;
  color: #0f6bff;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 22px;
  cursor: pointer;
}

.btn-outline:hover {
  background: #0f6bff;
  color: #ffffff;
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
@media (max-width: 1100px) {
  .team-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .top-inner {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .team-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .hero-img {
    max-height: 360px;
  }

  .title-section {
    padding: 28px 16px 20px;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    grid-template-columns: 1fr;
  }
}
</style>

