<template>
  <div class="admin-page">
    <header class="admin-header">
      <div class="header-content">
        <div>
          <h1>Admin Panel</h1>
          <p>Manage News & Events</p>
        </div>
        <div class="header-actions">
          <LanguageSwitcher />
          <span class="user-info">👤 {{ authStore.currentUser?.name }}</span>
          <button @click="handleLogout" class="btn-logout">Logout</button>
        </div>
      </div>
    </header>

    <main class="admin-main">
      <div class="container">
        <div class="actions-bar">
          <button @click="showCreateModal = true" class="btn-create">
            ➕ Create New Event
          </button>
        </div>

        <div v-if="newsStore.loading" class="loading">
          Loading...
        </div>

        <div v-else class="news-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Group</th>
                <th>Date</th>
                <th>Registrations</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in newsStore.allNews" :key="item.id">
                <td>{{ item.title }}</td>
                <td>{{ item.group }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.registrations.length }}</td>
                <td class="actions-cell">
                  <button @click="editNews(item)" class="btn-edit">Edit</button>
                  <button @click="deleteNews(item.id)" class="btn-delete">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
    <div v-if="showCreateModal || showEditModal" class="modal-overlay" @click="closeModals">
      <div class="modal-content" @click.stop>
        <h2>{{ showEditModal ? 'Edit Event' : 'Create New Event' }}</h2>
        
        <form @submit.prevent="handleSubmit" class="modal-form">
          <div class="form-group">
            <label>Title</label>
            <input v-model="formData.title" required />
          </div>

          <div class="form-group">
            <label>Group</label>
            <input v-model="formData.group" required />
          </div>

          <div class="form-group">
            <label>Description</label>
            <textarea v-model="formData.body" rows="4" required></textarea>
          </div>

          <div class="form-group">
            <label>Date</label>
            <input v-model="formData.date" required />
          </div>

          <div class="form-group">
            <label>Location</label>
            <input v-model="formData.location" />
          </div>

          <div class="form-group">
            <label>Image URL</label>
            <input v-model="formData.image" />
          </div>

          <div class="modal-actions">
            <button type="button" @click="closeModals" class="btn-cancel">Cancel</button>
            <button type="submit" class="btn-submit">
              {{ showEditModal ? 'Update' : 'Create' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useNewsStore } from '../stores/news'
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: 'AdminPanel',
  components: {
    LanguageSwitcher,
  },
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()
    const newsStore = useNewsStore()

    const showCreateModal = ref(false)
    const showEditModal = ref(false)
    const editingId = ref(null)

    const formData = reactive({
      title: '',
      group: '',
      body: '',
      date: '',
      location: '',
      image: '/src/assets/event.png',
    })

    onMounted(() => {
      newsStore.fetchNews()
    })

    const handleLogout = () => {
      authStore.logout()
      router.push('/login')
    }

    const editNews = (item) => {
      editingId.value = item.id
      Object.assign(formData, {
        title: item.title,
        group: item.group,
        body: item.body,
        date: item.date,
        location: item.location,
        image: item.image,
      })
      showEditModal.value = true
    }

    const deleteNews = async (id) => {
      if (confirm('Are you sure you want to delete this event?')) {
        await newsStore.deleteNews(id)
      }
    }

    const handleSubmit = async () => {
      if (showEditModal.value) {
        await newsStore.updateNews(editingId.value, { ...formData })
      } else {
        await newsStore.createNews({ ...formData })
      }
      closeModals()
    }

    const closeModals = () => {
      showCreateModal.value = false
      showEditModal.value = false
      editingId.value = null
      Object.assign(formData, {
        title: '',
        group: '',
        body: '',
        date: '',
        location: '',
        image: '/src/assets/event.png',
      })
    }

    return {
      authStore,
      newsStore,
      showCreateModal,
      showEditModal,
      formData,
      handleLogout,
      editNews,
      deleteNews,
      handleSubmit,
      closeModals,
    }
  },
}
</script>

<style scoped>
.admin-page {
  min-height: 100vh;
  background: #f3f4f6;
}

.admin-header {
  background: #0f6bff;
  color: #ffffff;
  padding: 24px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content h1 {
  margin: 0;
  font-size: 28px;
}

.header-content p {
  margin: 4px 0 0;
  opacity: 0.9;
}

.header-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.user-info {
  font-size: 14px;
}

.btn-logout {
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.btn-logout:hover {
  background: rgba(255, 255, 255, 0.3);
}

.admin-main {
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.actions-bar {
  margin-bottom: 24px;
}

.btn-create {
  padding: 12px 24px;
  background: #0f6bff;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
}

.btn-create:hover {
  background: #0c5ed8;
}

.loading {
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #6b7280;
}

.news-table {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: #f9fafb;
}

th {
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

td {
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.actions-cell {
  display: flex;
  gap: 8px;
}

.btn-edit, .btn-delete {
  padding: 6px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}

.btn-edit {
  background: #e8f2ff;
  color: #0f6bff;
}

.btn-edit:hover {
  background: #d0e5ff;
}

.btn-delete {
  background: #fee;
  color: #c00;
}

.btn-delete:hover {
  background: #fdd;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-content h2 {
  margin: 0 0 24px;
  color: #111827;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-weight: 600;
  font-size: 14px;
  color: #374151;
}

.form-group input,
.form-group textarea {
  padding: 12px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0f6bff;
}

.modal-actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.btn-cancel, .btn-submit {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-cancel {
  background: #e5e7eb;
  color: #374151;
}

.btn-cancel:hover {
  background: #d1d5db;
}

.btn-submit {
  background: #0f6bff;
  color: #ffffff;
}

.btn-submit:hover {
  background: #0c5ed8;
}
</style>
