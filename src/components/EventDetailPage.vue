<template>
  <div class="event-detail-page">
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
      <section class="back-link container">
        <router-link to="/" class="back-btn">← Back to Home</router-link>
      </section>
      <section class="event-poster container">
        <figure class="poster-wrapper">
          <img
            :src="eventData.poster"
            :alt="eventData.title"
            class="poster-image"
          />
        </figure>
      </section>
      <section class="event-details container">
        <div class="event-meta">
          <div class="meta-item">
            <span class="meta-icon">📅</span>
            <span class="meta-text">{{ eventData.date }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">📍</span>
            <span class="meta-text">{{ eventData.groups }}</span>
          </div>
        </div>

        <h1 class="event-title">{{ eventData.title }}</h1>
        <p class="event-description">{{ eventData.description }}</p>
        <p class="event-description-extra">{{ eventData.descriptionExtra }}</p>
      </section>

      <section class="event-gallery container" v-if="eventData.gallery && eventData.gallery.length > 0">
        <h2 class="gallery-title">Event Gallery</h2>
        <div class="gallery-grid">
          <figure class="gallery-item" v-for="(image, idx) in eventData.gallery" :key="idx">
            <img :src="image" :alt="`${eventData.title} - Image ${idx + 1}`" class="gallery-image" />
          </figure>
        </div>
      </section>
      <section class="more-events container">
        <h2 class="more-events-title">More News & Events</h2>
        <div class="more-events-grid">
          <article class="more-event-card" v-for="(event, idx) in moreEvents" :key="idx">
            <figure class="more-event-image-wrapper">
              <img :src="event.image" :alt="event.title" class="more-event-image" />
            </figure>
            <div class="more-event-content">
              <p class="more-event-group">{{ event.groups }}</p>
              <h3 class="more-event-title">{{ event.title }}</h3>
              <p class="more-event-description">{{ event.description }}</p>
              <p class="more-event-date">{{ event.date }}</p>
              <router-link :to="`/event/${event.id}`" class="more-event-btn">Read More</router-link>
            </div>
          </article>
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
  name: "EventDetailPage",
  components: {
    NavigationMenu,
    LanguageSwitcher,
  },
  computed: {
    eventId() {
      return this.$route.params.id;
    },
    eventData() {
      const events = {
        'teachers-day': {
          id: 'teachers-day',
          title: "Teacher's Day Celebration",
          groups: "3F-1 and 3F-2 groups",
          date: "October 5, 2025",
          location: "Assembly Hall",
          poster: "/src/assets/kyzyk-concert.png",
          description: "Students expressed their gratitude to teachers through creative performances, heartfelt speeches, and small gifts.",
          descriptionExtra: "Teachers equipped their students to inculcate through creative reinforcements, teach in positive environments.",
          gallery: [
            "/src/assets/kyzykcon1.png",
            "/src/assets/kyzyzkcon2.jpg",
            "/src/assets/kyzykcon3.jpg",
          ],
        },
        'students-day': {
          id: 'students-day',
          title: "Student's Day Celebration",
          groups: "3F-3 and 3F-4 groups",
          date: "November 17, 2025",
          location: "",
          poster: "/src/assets/f3studay.jpg",
          description: "The college will celebrate Student's Day with live performances, fun activities, and awards for active students.",
          descriptionExtra: "",
          gallery: [
             "/src/assets/stuphoto2.jpg",
            "/src/assets/stuphoto1.jpg",
            "/src/assets/stuphoto3.jpg",
          ],
        },
        'pitchdeck': {
          id: 'pitchdeck',
          title: "PitchDeck Event",
          groups: "3F-1 group",
          date: "October 8, 2025",
          location: "",
          poster: "/src/assets/event.png",
          description: "This event will gather talented students and speakers who will share their experience in web development and project presentation skills.",
          descriptionExtra: "",
          gallery: [],
        },
      };
      return events[this.eventId] || events['teachers-day'];
    },
    moreEvents() {
      const allEvents = [
        {
          id: 'students-day',
          title: "Student's Day Celebration",
          groups: "3F-3 and 3F-4 groups",
          date: "November 17, 2025",
          description: "The college will celebrate Student's Day with live performances, fun activities, and awards for active students.",
          image: "/src/assets/f3studay.jpg",
        },
        {
          id: 'pitchdeck',
          title: "PitchDeck Event",
          groups: "3F-1 group",
          date: "October 8, 2025",
          description: "This event will gather talented students and speakers who will share their experience in web development and project presentation skills.",
          image: "/src/assets/event.png",
        },
      ];
      return allEvents.filter(e => e.id !== this.eventId);
    },
  },
};
</script>

<style scoped>
.event-detail-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  color: #111827;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

/* TOP BAR */
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

/* BACK LINK */
.back-link {
  padding: 24px 16px 16px;
}

.back-btn {
  color: #0f6bff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.back-btn:hover {
  text-decoration: underline;
}
.event-poster {
  padding: 0 16px 32px;
}

.poster-wrapper {
  margin: 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
}
.poster-image {
  width: 100%;
  display: block;
  object-fit: cover;
}
.event-details {
  padding: 0 16px 40px;
}
.event-meta {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
}
.meta-icon {
  font-size: 18px;
}
.event-title {
  margin: 0 0 16px;
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 800;
  color: #0f6bff;
}
.event-description {
  margin: 0 0 12px;
  font-size: 15px;
  line-height: 1.7;
  color: #374151;
}
.event-description-extra {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #374151;
}
.event-gallery {
  padding: 0 16px 50px;
}

.gallery-title {
  margin: 0 0 24px;
  font-size: 28px;
  font-weight: 800;
  color: #0f6bff;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.gallery-item {
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);
  aspect-ratio: 1;
}
.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.more-events {
  padding: 0 16px 60px;
}

.more-events-title {
  margin: 0 0 28px;
  font-size: 28px;
  font-weight: 800;
  color: #0f6bff;
}

.more-events-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
}

.more-event-card {
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.more-event-image-wrapper {
  margin: 0;
}

.more-event-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.more-event-content {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.more-event-group {
  margin: 0;
  font-size: 11px;
  color: #6b7280;
}

.more-event-title {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: #111827;
}

.more-event-description {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: #4b5563;
  flex: 1;
}

.more-event-date {
  margin: 0;
  font-size: 11px;
  color: #9ca3af;
}

.more-event-btn {
  margin-top: 8px;
  border-radius: 999px;
  border: 1.5px solid #0f6bff;
  background: #ffffff;
  color: #0f6bff;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 18px;
  text-decoration: none;
  text-align: center;
  width: fit-content;
  transition: all 0.2s;
}

.more-event-btn:hover {
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

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .more-events-grid {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    grid-template-columns: 1.5fr 1fr;
  }
}

@media (max-width: 768px) {
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

