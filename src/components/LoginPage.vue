<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <div class="logo-section">
          <img src="/src/assets/jihclogo-black.png" alt="JIHC Logo" class="logo" />
          <h1>Welcome to JIHC</h1>
          <p>Sign in to continue</p>
        </div>

        <div v-if="error" class="error-message">
          {{ error }}
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="your.email@jihc.edu.kz"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" class="btn-login" :disabled="loading">
            {{ loading ? 'Signing in...' : 'Sign In' }}
          </button>
        </form>

        <div class="demo-credentials">
          <p><strong>Demo Credentials:</strong></p>
          <p>Admin: admin@jihc.edu.kz / admin123</p>
          <p>User: user@jihc.edu.kz / user123</p>
        </div>

        <div class="back-link">
          <router-link to="/home">← Back to Homepage</router-link>
        </div>

        <div class="lang-switcher-wrapper">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: 'LoginPage',
  components: {
    LanguageSwitcher,
  },
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()
    
    const email = ref('')
    const password = ref('')
    const error = ref('')
    const loading = ref(false)

    const handleLogin = async () => {
      loading.value = true
      error.value = ''

      const result = await authStore.login(email.value, password.value)

      if (result.success) {
        if (authStore.isAdmin) {
          router.push('/admin')
        } else {
          router.push('/dashboard')
        }
      } else {
        error.value = result.error
      }

      loading.value = false
    }

    return {
      email,
      password,
      error,
      loading,
      handleLogin,
    }
  },
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f6bff 0%, #0a5bff 100%);
  padding: 20px;
}

.login-container {
  width: 100%;
  max-width: 440px;
}

.login-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.logo-section {
  text-align: center;
  margin-bottom: 32px;
}

.logo {
  height: 60px;
  margin-bottom: 20px;
}

.logo-section h1 {
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px;
}

.logo-section p {
  color: #6b7280;
  margin: 0;
}

.error-message {
  background: #fee;
  color: #c00;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 14px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.form-group input {
  padding: 14px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.2s;
}

.form-group input:focus {
  outline: none;
  border-color: #0f6bff;
  box-shadow: 0 0 0 3px rgba(15, 107, 255, 0.1);
}

.btn-login {
  background: #0f6bff;
  color: #ffffff;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 8px;
}

.btn-login:hover:not(:disabled) {
  background: #0c5ed8;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(15, 107, 255, 0.3);
}

.btn-login:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.demo-credentials {
  margin-top: 24px;
  padding: 16px;
  background: #f3f4f6;
  border-radius: 12px;
  font-size: 13px;
  color: #6b7280;
}

.demo-credentials p {
  margin: 4px 0;
}

.back-link {
  text-align: center;
  margin-top: 20px;
}

.back-link a {
  color: #0f6bff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.back-link a:hover {
  text-decoration: underline;
}

.lang-switcher-wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
