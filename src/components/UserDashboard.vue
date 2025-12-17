<template>
  <div class="dashboard-page">
    <header class="dashboard-header">
      <div class="header-content">
        <div>
          <h1>Welcome, {{ authStore.currentUser?.name }}!</h1>
          <p>Browse and register for events</p>
        </div>
        <div class="header-actions">
          <LanguageSwitcher />
          <router-link to="/home" class="btn-home">🏠 Homepage</router-link>
          <button @click="handleLogout" class="btn-logout">Logout</button>
        </div>
      </div>
    </header>

    <main class="dashboard-main">
      <div class="container">
        <h2>Available Events</h2>

        <div v-if="newsStore.loading" class="loading">
          Loading events...
        </div>

        <div v-else class="events-grid">
          <div v-for="event in newsStore.allNews" :key="event.id" class="event-card">
            <div class="event-image">
              <img :src="event.image" :alt="event.title" />
            </div>
            
            <div class="event-content">
              <span class="event-group">{{ event.group }}</span>
              <h3 class="event-title">{{ event.title }}</h3>
              <p class="event-body">{{ event.body }}</p>
              <div class="event-meta">
                <span>📅 {{ event.date }}</span>
                <span v-if="event.location">📍 {{ event.location }}</span>
              </div>
              
              <div class="event-registration">
                <span class="registration-count">
                  {{ event.registrations.length }} registered
                </span>
                
                <button
                  v-if="!isRegistered(event.id)"
                  @click="registerForEvent(event.id)"
                  class="btn-register"
                >
                  Register
                </button>
                <button
                  v-else
                  @click="unregisterFromEvent(event.id)"
                  class="btn-unregister"
                >
                  ✓ Registered
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useNewsStore } from '../stores/news'
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: 'UserDashboard',
  components: {
    LanguageSwitcher,
  },
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()
    const newsStore = useNewsStore()

    onMounted(() => {
      newsStore.fetchNews()
    })

    const handleLogout = () => {
      authStore.logout()
      router.push('/login')
    }

    const isRegistered = (newsId) => {
      return newsStore.isUserRegistered(newsId, authStore.currentUser?.id)
    }

    const registerForEvent = async (newsId) => {
      const result = await newsStore.registerForEvent(newsId, authStore.currentUser?.id)
      if (result.success) {
        alert('Successfully registered for event!')
      }
    }

    const unregisterFromEvent = async (newsId) => {
      const result = await newsStore.unregisterFromEvent(newsId, authStore.currentUser?.id)
      if (result.success) {
        alert('Successfully unregistered from event')
      }
    }

    return {
      authStore,
      newsStore,
      handleLogout,
      isRegistered,
      registerForEvent,
      unregisterFromEvent,
    }
  },
}
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  background: #f3f4f6;
}

.dashboard-header {
  background: linear-gradient(135deg, #0f6bff 0%, #0a5bff 100%);
  color: #ffffff;
  padding: 32px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.header-content h1 {
  margin: 0;
  font-size: 32px;
  font-weight: 700;
}

.header-content p {
  margin: 4px 0 0;
  opacity: 0.9;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.btn-home, .btn-logout {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
}

.btn-home:hover, .btn-logout:hover {
  background: rgba(255, 255, 255, 0.3);
}

.dashboard-main {
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.container h2 {
  font-size: 28px;
  color: #111827;
  margin: 0 0 32px;
}

.loading {
  text-align: center;
  padding: 60px 20px;
  font-size: 18px;
  color: #6b7280;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

.event-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.event-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-content {
  padding: 20px;
}

.event-group {
  display: inline-block;
  font-size: 13px;
  color: #6b7280;
  background: #f3f4f6;
  padding: 4px 12px;
  border-radius: 12px;
  margin-bottom: 8px;
}

.event-title {
  font-size: 22px;
  font-weight: 700;
  color: #111827;
  margin: 8px 0 12px;
}

.event-body {
  font-size: 14px;
  line-height: 1.6;
  color: #4b5563;
  margin: 0 0 16px;
}

.event-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 16px;
}

.event-registration {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
}

.registration-count {
  font-size: 14px;
  color: #6b7280;
}

.btn-register, .btn-unregister {
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.btn-register {
  background: #0f6bff;
  color: #ffffff;
}

.btn-register:hover {
  background: #0c5ed8;
}

.btn-unregister {
  background: #10b981;
  color: #ffffff;
}

.btn-unregister:hover {
  background: #059669;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .events-grid {
    grid-template-columns: 1fr;
  }
}
</style>
