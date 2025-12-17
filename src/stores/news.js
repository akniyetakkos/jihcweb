import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [
      {
        id: 1,
        title: "Teacher's Day Celebration",
        group: "3F-1 and 3F-2 groups",
        body: "Students expressed their gratitude to teachers through creative performances, heartfelt speeches, and small gifts.",
        date: "October 5, 2025",
        location: "Assembly Hall",
        image: "/src/assets/kyzyk-concert.png",
        registrations: [],
        createdAt: new Date('2024-10-01'),
      },
      {
        id: 2,
        title: "Student's Day Celebration",
        group: "3F-3 and 3F-4 groups",
        body: "The college will celebrate Student's Day with live performances, fun activities, and awards for active students.",
        date: "November 17, 2025",
        location: "",
        image: "/src/assets/f3studay.jpg",
        registrations: [],
        createdAt: new Date('2024-11-01'),
      },
      {
        id: 3,
        title: "PitchDeck Event",
        group: "3F-1 group",
        body: "This event will gather talented students and speakers who will share their experience in web development and project presentation skills.",
        date: "October 8, 2025",
        location: "",
        image: "/src/assets/event.png",
        registrations: [],
        createdAt: new Date('2024-10-05'),
      },
    ],
    loading: false,
    error: null,
  }),

  getters: {
    allNews: (state) => state.news,
    getNewsById: (state) => (id) => state.news.find(n => n.id === parseInt(id)),
    totalNews: (state) => state.news.length,
  },

  actions: {
    async fetchNews() {
      this.loading = true
      this.error = null
      try {
        // Simulating API call - data already in state
        await new Promise(resolve => setTimeout(resolve, 500))
        // In real app: const response = await axios.get('/api/news')
        // this.news = response.data
        this.loading = false
      } catch (error) {
        this.error = error.message
        this.loading = false
      }
    },

    async createNews(newsData) {
      try {
        const newNews = {
          id: Date.now(),
          ...newsData,
          registrations: [],
          createdAt: new Date(),
        }
        
        this.news.unshift(newNews)
        
        // In real app: await axios.post('/api/news', newsData)
        return { success: true, data: newNews }
      } catch (error) {
        return { success: false, error: error.message }
      }
    },

    async updateNews(id, newsData) {
      try {
        const index = this.news.findIndex(n => n.id === id)
        if (index !== -1) {
          this.news[index] = { ...this.news[index], ...newsData }
        }
        
        // In real app: await axios.put(`/api/news/${id}`, newsData)
        return { success: true }
      } catch (error) {
        return { success: false, error: error.message }
      }
    },

    async deleteNews(id) {
      try {
        const index = this.news.findIndex(n => n.id === id)
        if (index !== -1) {
          this.news.splice(index, 1)
        }
        
        // In real app: await axios.delete(`/api/news/${id}`)
        return { success: true }
      } catch (error) {
        return { success: false, error: error.message }
      }
    },

    async registerForEvent(newsId, userId) {
      try {
        const news = this.news.find(n => n.id === newsId)
        if (news) {
          if (!news.registrations.includes(userId)) {
            news.registrations.push(userId)
          }
        }
        
        // In real app: await axios.post(`/api/news/${newsId}/register`, { userId })
        return { success: true }
      } catch (error) {
        return { success: false, error: error.message }
      }
    },

    async unregisterFromEvent(newsId, userId) {
      try {
        const news = this.news.find(n => n.id === newsId)
        if (news) {
          news.registrations = news.registrations.filter(id => id !== userId)
        }
        
        // In real app: await axios.delete(`/api/news/${newsId}/register/${userId}`)
        return { success: true }
      } catch (error) {
        return { success: false, error: error.message }
      }
    },

    isUserRegistered(newsId, userId) {
      const news = this.news.find(n => n.id === newsId)
      return news ? news.registrations.includes(userId) : false
    },
  },
})
