# Jambyl Innovation High College - Web Application

A full-stack web application for Jambyl Innovation High College featuring news/events management, user authentication, and role-based access control.

## 🎯 Project Overview

This is a Vue.js 3 frontend application that provides:
- **Public Homepage** - College information, news, and events
- **User Dashboard** - Browse and register for events
- **Admin Panel** - Full CRUD operations for managing news/events
- **Authentication System** - Login with role-based access (Admin/User)
- **State Management** - Pinia for centralized state
- **Responsive Design** - Works on all devices

## 🚀 Features

### For Visitors
- View college information
- Browse latest news and events
- Explore infrastructure, specialists, and team
- Responsive navigation

### For Users
- Login with credentials
- Browse all available events
- Register for events
- Track registered events
- Personal dashboard

### For Admins
- Full CRUD operations for news/events
- Create new events with details
- Edit existing events
- Delete events
- View registration statistics
- Admin-only protected routes

## 🛠 Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Router:** Vue Router 4
- **State Management:** Pinia
- **HTTP Client:** Axios
- **Build Tool:** Vite
- **Styling:** Custom CSS (Scoped)

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js) or **yarn**

### Step-by-Step Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/jihcweb.git
cd jihcweb
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in terminal).

4. **Build for production:**
```bash
npm run build
```

5. **Preview production build:**
```bash
npm run preview
```

## ⚙️ Setup

### Environment Configuration

Currently, the application uses localStorage for data persistence. No environment variables are required for basic functionality.

### Initial Setup

1. After installation, the application is ready to use
2. No database setup required (uses browser localStorage)
3. No API keys needed for development

### Development Mode

- Hot Module Replacement (HMR) is enabled
- Changes are reflected immediately in the browser
- Console logs are available for debugging

## 🎮 Usage

### For Visitors (No Login Required)

1. **Browse the Homepage:**
   - View college information and news
   - Explore events and announcements
   - Navigate through different sections

2. **View College Information:**
   - Access college history, facts, and documents
   - Explore infrastructure and facilities
   - View team members and specialists

### For Registered Users

1. **Login:**
   - Navigate to `/login`
   - Use credentials: `user@jihc.edu.kz` / `user123`

2. **Access Dashboard:**
   - After login, you'll be redirected to `/dashboard`
   - Browse all available events
   - Register for events you're interested in
   - View your registered events

3. **Event Registration:**
   - Click on any event to view details
   - Click "Register" button to register
   - Your registrations are saved in your dashboard

### For Administrators

1. **Admin Login:**
   - Navigate to `/login`
   - Use credentials: `admin@jihc.edu.kz` / `admin123`

2. **Access Admin Panel:**
   - After login, navigate to `/admin`
   - Full CRUD operations available

3. **Manage Events:**
   - **Create:** Click "Add New Event" button
   - **Edit:** Click edit icon on any event
   - **Delete:** Click delete icon (with confirmation)
   - **View:** All events are displayed in a table

4. **Manage News:**
   - Similar CRUD operations for news items
   - All changes are saved immediately

## 🔐 Demo Credentials

### Admin Account
- Email: `admin@jihc.edu.kz`
- Password: `admin123`
- Access: Full CRUD operations on news/events

### User Account
- Email: `user@jihc.edu.kz`
- Password: `user123`
- Access: Browse and register for events

## 📁 Project Structure

```
jihcweb/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Vue components
│   │   ├── MainPage.vue
│   │   ├── LoginPage.vue
│   │   ├── AdminPanel.vue
│   │   ├── UserDashboard.vue
│   │   ├── NavigationMenu.vue
│   │   └── ...other pages
│   ├── stores/          # Pinia stores
│   │   ├── auth.js      # Authentication store
│   │   └── news.js      # News/Events store
│   ├── router/          # Vue Router configuration
│   │   └── index.js
│   ├── App.vue          # Root component
│   ├── main.js          # Entry point
│   └── style.css        # Global styles
├── public/              # Public static files
├── package.json
├── vite.config.js
└── README.md
```

## 🔑 Key Components

### Authentication (`stores/auth.js`)
- Login/Logout functionality
- Role-based access control (Admin/User)
- Token management with localStorage
- Auto-initialize on page load

### News Management (`stores/news.js`)
- CRUD operations for events
- Event registration system
- Loading and error states
- Local state management (simulates API)

### Protected Routes
- `/login` - Public login page
- `/dashboard` - User-only dashboard (requires auth)
- `/admin` - Admin-only panel (requires admin role)
- All other routes redirect unauthenticated users to login

## 🎨 Features Breakdown

### State Management (Pinia)
- Centralized state for auth and news
- Reactive data updates
- Persistent authentication
- Easy to integrate with real API

### Routing & Navigation Guards
- Protected routes with authentication check
- Role-based access control
- Automatic redirects
- Breadcrumb navigation

### CRUD Operations
- **Create:** Admin can create new events
- **Read:** All users can view events
- **Update:** Admin can edit events
- **Delete:** Admin can remove events

### Form Validation
- Required field validation
- Email format validation
- Password requirements
- Real-time error messages

### UI/UX
- Modern, clean design
- Responsive layout
- Loading states
- Error handling
- Success notifications
- Modal dialogs for forms

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Deploy!

## 📝 API Integration

Currently using localStorage as a mock backend. To integrate with a real API:

1. Update `stores/auth.js`:
```javascript
import axios from 'axios'

async login(email, password) {
  const response = await axios.post('/api/auth/login', { email, password })
  this.token = response.data.token
  // ...rest of logic
}
```

2. Update `stores/news.js`:
```javascript
async fetchNews() {
  const response = await axios.get('/api/news')
  this.news = response.data
}
```

## 🧪 Testing

The project includes:
- Manual testing for all CRUD operations
- Role-based access testing
- Responsive design testing
- Form validation testing


### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Future Enhancements

- [ ] Real backend API integration
- [ ] File upload for event images
- [ ] Email notifications
- [ ] Advanced search and filters
- [ ] User profile management
- [ ] Event calendar view
- [ ] Analytics dashboard
- [ ] Multi-language support (EN/RU/KZ)

## 📄 License

© 2025 Jambyl Innovation High College. All rights reserved.

## 📧 Contact

- Email: info@jihc.edu.kz
- Phone: +7 (707) 802-00-88
- Address: Kazakhstan, Taraz, Pushkin Street, 134

## 🔗 Live Demo

### Production Deployment

- **Live Application:** [https://your-app.vercel.app](https://your-app.vercel.app) *(Update after deployment)*
- **GitHub Repository:** [https://github.com/YOUR_USERNAME/jihcweb](https://github.com/YOUR_USERNAME/jihcweb) *(Update with your repository URL)*

### Demo Accounts

You can test the application using these credentials:

**Admin Account:**
- Email: `admin@jihc.edu.kz`
- Password: `admin123`
- Access: Full admin panel with CRUD operations

**User Account:**
- Email: `user@jihc.edu.kz`
- Password: `user123`
- Access: User dashboard with event registration

---

## 📝 Notes

- After deploying to Vercel/Netlify, update the Live Demo section above with your actual deployment URL
- Update the GitHub Repository URL with your actual repository link
- The application uses localStorage, so data persists in your browser session
