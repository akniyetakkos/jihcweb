import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
  }),

  getters: {
    isAdmin: (state) => state.user?.role === 'admin',
    isUser: (state) => state.user?.role === 'user',
    currentUser: (state) => state.user,
  },

  actions: {
    async login(email, password) {
      try {
        // Simulating API call - in real app, use axios
        // For demo: admin@jihc.edu.kz / admin123, user@jihc.edu.kz / user123
        const users = [
          { id: 1, email: 'admin@jihc.edu.kz', password: 'admin123', role: 'admin', name: 'Admin User' },
          { id: 2, email: 'user@jihc.edu.kz', password: 'user123', role: 'user', name: 'Regular User' },
        ]

        const user = users.find(u => u.email === email && u.password === password)
        
        if (!user) {
          throw new Error('Invalid credentials')
        }

        // Remove password from user object
        const { password: _, ...userWithoutPassword } = user
        
        this.user = userWithoutPassword
        this.token = 'mock-jwt-token-' + user.id
        this.isAuthenticated = true
        
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(userWithoutPassword))
        
        return { success: true, user: userWithoutPassword }
      } catch (error) {
        return { success: false, error: error.message }
      }
    },

    async register(userData) {
      try {
        // Simulating registration - in real app, use axios
        const newUser = {
          id: Date.now(),
          ...userData,
          role: 'user', // All new users are regular users
        }

        const { password: _, ...userWithoutPassword } = newUser
        
        this.user = userWithoutPassword
        this.token = 'mock-jwt-token-' + newUser.id
        this.isAuthenticated = true
        
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(userWithoutPassword))
        
        return { success: true, user: userWithoutPassword }
      } catch (error) {
        return { success: false, error: error.message }
      }
    },

    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },

    initializeAuth() {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
      
      if (token && user) {
        this.token = token
        this.user = JSON.parse(user)
        this.isAuthenticated = true
      }
    },
  },
})
