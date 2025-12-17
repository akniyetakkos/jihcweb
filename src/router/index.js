import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import MainPage from '../components/MainPage.vue'
import LoginPage from '../components/LoginPage.vue'
import AdminPanel from '../components/AdminPanel.vue'
import UserDashboard from '../components/UserDashboard.vue'
import SpecialistsPage from '../components/SpecialistsPage.vue'
import SpecialistITPage from '../components/SpecialistITPage.vue'
import SpecialistAccountingPage from '../components/SpecialistAccountingPage.vue'
import TeamPage from '../components/TeamPage.vue'
import AdmissionPage from '../components/AdmissionPage.vue'
import InfrastructurePage from '../components/InfrastructurePage.vue'
import CalendarPage from '../components/CalendarPage.vue'
import EventDetailPage from '../components/EventDetailPage.vue'
import CollegePage from '../components/CollegePage.vue'
import CollegeHistoryPage from '../components/CollegeHistoryPage.vue'
import CollegeFactsPage from '../components/CollegeFactsPage.vue'
import CollegeDocumentsPage from '../components/CollegeDocumentsPage.vue'
import CollegeBoardPage from '../components/CollegeBoardPage.vue'
import CollegeAnnouncementsPage from '../components/CollegeAnnouncementsPage.vue'
import AdmissionSubmissionPage from '../components/AdmissionSubmissionPage.vue'
import AdmissionTransferPage from '../components/AdmissionTransferPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPanel,
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: UserDashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/specialists',
    redirect: '/specialists/it'
  },
  {
    path: '/specialists/it',
    name: 'SpecialistIT',
    component: SpecialistITPage
  },
  {
    path: '/specialists/accounting',
    name: 'SpecialistAccounting',
    component: SpecialistAccountingPage
  },
  {
    path: '/team',
    name: 'Team',
    component: TeamPage
  },
  {
    path: '/admission',
    redirect: '/admission/submission'
  },
  {
    path: '/infrastructure',
    name: 'Infrastructure',
    component: InfrastructurePage
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: CalendarPage
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    component: EventDetailPage
  },
  {
    path: '/college',
    name: 'College',
    component: CollegePage
  },
  {
    path: '/college/history',
    name: 'CollegeHistory',
    component: CollegeHistoryPage
  },
  {
    path: '/college/facts',
    name: 'CollegeFacts',
    component: CollegeFactsPage
  },
  {
    path: '/college/documents',
    name: 'CollegeDocuments',
    component: CollegeDocumentsPage
  },
  {
    path: '/college/board',
    name: 'CollegeBoard',
    component: CollegeBoardPage
  },
  {
    path: '/college/announcements',
    name: 'CollegeAnnouncements',
    component: CollegeAnnouncementsPage
  },
  {
    path: '/admission/submission',
    name: 'AdmissionSubmission',
    component: AdmissionPage
  },
  {
    path: '/admission/join',
    name: 'AdmissionJoin',
    component: AdmissionPage
  },
  {
    path: '/admission/transfer',
    name: 'AdmissionTransfer',
    component: AdmissionTransferPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  // Initialize auth from localStorage
  authStore.initializeAuth()

  // Check if route requires authentication
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
    return
  }

  // Check if route requires admin role
  if (to.meta.requiresAdmin && !authStore.isAdmin) {
    next('/dashboard')
    return
  }

  next()
})

export default router

