<template>
  <div class="infra-page">
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
      <section class="hero-section">
        <div class="container hero-grid">
          <h1 class="hero-title">Our Infrastructure</h1>
          <p class="hero-lede">
            Everything for comfortable learning, creativity, and student life at JIHC.
          </p>
        </div>
      </section>
      <section class="main-image container">
        <figure class="big-image">
          <img
            :src="currentData.mainImage"
            :alt="currentData.mainImageAlt"
            class="big-image-img"
          />
        </figure>
      </section>

      <section class="tabs container">
        <button 
          class="tab-pill" 
          v-for="tab in tabs" 
          :key="tab.id" 
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.name }}
        </button>
      </section>
      <section class="description container">
        <div class="desc-icon">⚙️</div>
        <p class="desc-text with-icon">
          {{ currentData.description }}
        </p>
      </section>

      <section class="gallery container">
        <div class="gallery-grid" :class="`gallery-${currentData.gallery.length}`">
          <figure class="gallery-card" v-for="(item, idx) in currentData.gallery" :key="idx">
            <img :src="item.src" :alt="item.alt" class="gallery-img" />
          </figure>
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
  name: "InfrastructurePage",
  components: {
    NavigationMenu,
    LanguageSwitcher,
  },
  data() {
    return {
      activeTab: "building-a",
      tabs: [
        { id: "building-a", name: "Building A" },
        { id: "building-b-dorm", name: "Building B + Dorm" },
        { id: "football-field", name: "Football Field" },
        { id: "barbecue", name: "Barbecue" },
        { id: "canteen", name: "Canteen" },
        { id: "sport-hall", name: "Sport Hall" }
      ],
      tabData: {
        "building-a": {
          mainImage: "/src/assets/college-surt.jpg",
          mainImageAlt: "Building A - Main educational center",
          description: "The main educational center of JIHC. Here students attend lectures, workshops, and computer labs. The building includes modern classrooms, multimedia equipment, and an assembly hall for large college events.",
          gallery: [
            {
              src: "/src/assets/college-image1.jpg",
              alt: "Building A exterior view",
            },
            {
              src: "/src/assets/buildingA1.jpg",
              alt: "Classroom with students",
            },
            {
              src: "/src/assets/buildingA2.jpg",
              alt: "Assembly hall",
            },
            {
              src: "/src/assets/buildingA3.jpg",
              alt: "Computer lab",
            },
            {
              src: "/src/assets/buildingA4.jpg",
              alt: "Lecture hall",
            },
            {
              src: "/src/assets/buildingA1.jpg",
              alt: "Modern classroom",
            },
          ],
        },
        "building-b-dorm": {
          mainImage: "/src/assets/college-surt.jpg",
          mainImageAlt: "Building B and Dormitory",
          description: "Building B houses additional classrooms and study spaces, while the dormitory provides comfortable accommodation for students. The dormitory features modern facilities, common areas, and a supportive living environment for students from different regions.",
          gallery: [
            {
              src: "/src/assets/buildingB1.png",
              alt: "Building B exterior",
            },
            {
              src: "/src/assets/buildingB2.jpg",
              alt: "Dormitory room",
            },
            {
              src: "/src/assets/buildingB3.jpg",
              alt: "Common area",
            },
            {
              src: "/src/assets/buildingB4.jpg",
              alt: "Study room",
            },
            {
              src: "/src/assets/buildingB5.jpg",
              alt: "Dormitory hallway",
            },
            {
              src: "/src/assets/buildingB3.jpg",
              alt: "Student lounge",
            },
          ],
        },
        "Football Field": {
          mainImage: "/src/assets/college-surt.jpg",
          mainImageAlt: "Football Field",
          description: "A favorite place for active students. The field hosts regular training sessions, friendly matches, and sports festivals. It's where teamwork, energy, and school spirit meet.",
          gallery: [
            {
              src: "/src/assets/footbal.jpg",
              alt: "Football field overview",
            },
          ],
        },
        "barbecue": {
          mainImage: "/src/assets/college-surt.jpg",
          mainImageAlt: "Barbecue Area",
          description: "A cozy outdoor spot for student gatherings. Used for celebrations, club activities, and team-building events. It's surrounded by greenery – the perfect place to relax after classes.",
          gallery: [
            {
              src: "/src/assets/barbe1.jpg",
              alt: "Barbecue area overview",
            },
            {
              src: "/src/assets/barbe2.jpg",
              alt: "Barbecue facilities",
            },
          ],
        },
        "canteen": {
          mainImage: "/src/assets/college-surt.jpg",
          mainImageAlt: "College Canteen",
          description: "A modern and spacious dining area. Offers a variety of healthy and delicious meals. It's a place for students and staff to enjoy breakfast, lunch, and dinner in a comfortable atmosphere.",
          gallery: [
            {
              src: "/src/assets/tamak1.jpg",
              alt: "Canteen interior",
            },
            {
              src: "/src/assets/tamak2.jpg",
              alt: "Dining area",
            },
          ],
        },
        "sport-hall": {
          mainImage: "/src/assets/college-surt.jpg",
          mainImageAlt: "Sport Hall",
          description: "A modern indoor space for sports and fitness activities. Equipped with basketball hoops, volleyball nets, and training equipment. Students use it for physical education, tournaments, and healthy recreation all year round.",
          gallery: [
            {
              src: "/src/assets/sport.jpg",
              alt: "Sport hall overview",
            },
          ],
        },
      },
    };
  },
  computed: {
    currentData() {
      return this.tabData[this.activeTab] || this.tabData["building-a"];
    },
  },
  mounted() {
    const tabParam = this.$route.query.tab;
    if (tabParam && this.tabs.some(t => t.id === tabParam)) {
      this.activeTab = tabParam;
    }
  },
  watch: {
    '$route.query.tab'(newTab) {
      if (newTab && this.tabs.some(t => t.id === newTab)) {
        this.activeTab = newTab;
      }
    },
  },
};
</script>

<style scoped>
.infra-page {
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
.hero-section {
  padding: 40px 0 24px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
}

.hero-title {
  margin: 0;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  color: #0f6bff;
  line-height: 1.1;
}

.hero-lede {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: #6b7280;
}
.main-image {
  padding-bottom: 32px;
  margin-bottom: 30px;
}

.big-image {
  margin: 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
}

.big-image-img {
  width: 100%;
  height: 600px;
  display: block;
  object-fit: cover;
}
.tabs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding-bottom: 20px;
}

.tab-pill {
  padding: 10px 18px;
  border-radius: 999px;
  border: none;
  background: #ffffff;
  color: #6b7280;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-pill:hover {
  background: #f3f4f6;
  color: #111827;
}

.tab-pill.active {
  background: #0f6bff;
  color: #ffffff;
}

.description {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 12px;
  padding: 0 0 28px;
}

.desc-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #e8f2ff;
  color: #0f6bff;
  font-size: 20px;
  flex-shrink: 0;
}

.desc-text {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #0f6bff;
  max-width: 800px;
}

.desc-text.with-icon {
  margin-top: 0;
}
.gallery {
  padding-bottom: 60px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.gallery-grid.gallery-1 {
  grid-template-columns: 1fr;
  max-width: 100%;
  margin: 0 auto;
}
.gallery-grid.gallery-2 {
  grid-template-columns: repeat(2, 1fr);
}

.gallery-card {
  margin: 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.1);
  aspect-ratio: 16/ 9;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    grid-template-columns: 1.5fr 1fr;
  }
}

@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .tabs {
    padding-bottom: 14px;
  }

  .gallery-grid {
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
}
</style>

