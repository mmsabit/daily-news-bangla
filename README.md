## Project Name

**Daily News Bangla** (`daily-news-bangla`)

---

### Project Description
**Daily News Bangla** is a high-performance Bengali news publishing platform. It dynamically aggregates and presents the latest news stories from BBC Bangla across a variety of categories including Bangladesh, International, India, Health, Videos, and Special Features. It provides users with live breaking news updates via an animated ticker, category-wise filtered views, paginated archive browsing, detailed article reading views with rich media support, and secure user authentication (Email/Password, Google OAuth, and GitHub OAuth).

### What Kind of Real Problems Are Solved by This Project?

1. **Centralized & Distraction-Free Native Language News Delivery:**
   - Many online news sites are cluttered with intrusive advertisements, slow load times, and complex navigation. This project offers a clean, ultra-fast, and distraction-free interface tailored specifically for Bengali speakers worldwide.

2. **Accurate Localization & Bengali Cultural Nuances:**
   - Conventional platforms frequently display English numerals and dates for Bengali content. This project solves that by converting all published timestamps into natural Bengali relative time formats (e.g., *"এইমাত্র"*, *"১০ মিনিট আগে"*, *"২ ঘণ্টা আগে"*) and transmuting English numbers to native Bengali numerals (*০, ১, ২, ৩...*).

3. **Real-Time Breaking News Awareness:**
   - Features a live breaking news marquee ticker at the top of every page and a "সর্বাধিক পঠিত" (Most Read) sidebar, enabling readers to quickly digest pressing developments at a glance without having to search across multiple outlets.

4. **Multi-Device Responsive Reading Experience:**
   - Tailored with responsive design principles (Tailwind CSS and DaisyUI) to ensure readers on mobile phones, tablets, and desktops experience identical readability, crisp Bengali typography, and seamless navigation.

5. **Secure Authentication & Community Ready:**
   - Includes full-featured user authentication powered by Better Auth and MongoDB. Users can register and sign in using credentials or one-click OAuth (Google & GitHub), establishing the foundation for personalized news bookmarks, comments, and newsletter subscriptions.

---

## 3. Technologies, Packages, and Libraries Used

### **Core Framework & Runtime**
- **[Next.js 16 (v16.3.8)](https://nextjs.org/)** – App Router, Server-Side Rendering (SSR), Server Components, and API Route Handlers.
- **[React 19 (v19.2.8)](https://react.dev/)** – Latest React primitives and concurrent features.
- **[TypeScript 5](https://www.typescriptlang.org/)** – End-to-end static typing for robust code quality and maintainability.

### **Authentication & Database**
- **[Better Auth (v1.7.7)](https://www.better-auth.com/)** – Type-safe authentication framework for Next.js.
- **[@better-auth/mongo-adapter (v1.7.7)](https://www.npmjs.com/package/@better-auth/mongo-adapter)** – Official MongoDB adapter for Better Auth session and user management.
- **[MongoDB Node Driver (v7.7.0)](https://www.mongodb.com/)** – Official native driver to persist user accounts, sessions, and credentials.

### **Styling & UI Components**
- **[Tailwind CSS v4](https://tailwindcss.com/)** – Next-generation utility-first CSS framework.
- **[@tailwindcss/postcss](https://www.npmjs.com/package/@tailwindcss/postcss)** – PostCSS integration for Tailwind v4.
- **[DaisyUI v5](https://daisyui.com/)** – Accessible Tailwind CSS component library for modern buttons, forms, and cards.
- **[React Icons (v5.7.0)](https://react-icons.github.io/react-icons/)** – Comprehensive icon sets (FontAwesome, Material, etc.).
- **[react-marquee-text (v1.0.6)](https://www.npmjs.com/package/react-marquee-text)** – Smooth horizontal ticker animation for breaking news.

### **Dev Tools & Optimization**
- **[Babel Plugin React Compiler (v1.0.0)](https://react.dev/learn/react-compiler)** – Automated memoization and performance optimizations.
- **[ESLint (v8.57.1)](https://eslint.org/)** & **eslint-config-next (v14.2.35)** – Code linting and adherence to best practices.

---

## 4. Where We Get the API?

The news data is sourced from an open-source, Vercel-hosted REST API that scrapes and parses structured news directly from **BBC Bangla (বিবিসি বাংলা)**.

- **Base API URL:** `https://news-api-v2.vercel.app`

### **API Endpoints Used in the Project:**

| Endpoint | Method | Description | Usage in Project |
| :--- | :---: | :--- | :--- |
| `/api/categories` | `GET` | Fetches all available news categories/topics | Used in Navbar (`NavLink.tsx`) for dynamic category menus |
| `/api/news/sections` | `GET` | Fetches categorized sections (Lead, Bangladesh, International, Health, Video, etc.) | Used on Homepage (`page.tsx`) to render section blocks |
| `/api/news?limit=10` | `GET` | Retrieves top latest headlines | Used in the Breaking News ticker (`Marquee.tsx`) |
| `/api/news/most-read` | `GET` | Fetches the list of most-read / trending articles | Used in the sidebar component (`MostRead.tsx`) |
| `/api/category/:catagory_id?page=:page` | `GET` | Fetches paginated news stories for a specific category slug | Used in Category route (`/category/[catagory_id]/page.tsx`) |
| `/api/article/:newsid` | `GET` | Fetches full article content (text paragraphs, images, captions, source link) | Used in Single News route (`/news/[newsid]/page.tsx`) |

---

## 5. File Structure

```text
daily-news-bangla/
├── public/                                # Public static assets
├── src/
│   ├── app/                               # Next.js App Router (Pages, layouts & routes)
│   │   ├── (auth)/                        # Authentication route group
│   │   │   ├── signin/
│   │   │   │   └── page.tsx               # Login page (Email/Password & Social OAuth)
│   │   │   └── signup/
│   │   │       └── page.tsx               # Registration page
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.ts           # Better Auth server endpoint handler
│   │   ├── category/
│   │   │   └── [catagory_id]/
│   │   │       ├── page.tsx               # Category-based news listing
│   │   │       └── Pagination.tsx         # Category pagination controller
│   │   ├── news/
│   │   │   └── [newsid]/
│   │   │       └── page.tsx               # Single news article detailed view
│   │   ├── favicon.ico                    # Application favicon
│   │   ├── globals.css                    # Global styles & Tailwind CSS configuration
│   │   ├── layout.tsx                     # Root layout (wraps Navbar, Marquee, Footer)
│   │   └── page.tsx                       # Homepage (Lead news & curated sections)
│   │
│   ├── asset/                             # Static bundled assets
│   │   └── logo.png                       # Portal branding logo
│   │
│   ├── component/                         # Reusable UI Components
│   │   ├── main-section/
│   │   │   └── MainSection.tsx            # Main hero news section
│   │   ├── navber/
│   │   │   ├── Navber.tsx                 # Top navigation bar
│   │   │   ├── NavInfo.tsx                # Date, time & auth action buttons
│   │   │   └── NavLink.tsx                # Dynamic category navigation links
│   │   ├── othernews/
│   │   │   ├── NewsCard.tsx               # Reusable news card component
│   │   │   └── OtherNews.tsx              # Grid section for topical news
│   │   ├── Footer.tsx                     # Global footer with credits & links
│   │   ├── Marquee.tsx                    # Breaking news horizontal scrolling ticker
│   │   └── MostRead.tsx                   # Most-read articles sidebar component
│   │
│   ├── lib/                               # Core libraries & configurations
│   │   ├── auth.ts                        # Better Auth server configuration with MongoDB
│   │   └── auth-client.ts                 # Better Auth client for frontend authentication
│   │
│   └── type/                              # TypeScript type declarations & utility helpers
│       ├── function.ts                    # Bangla relative time ago & Bengali digit converters
│       └── NewsType.ts                    # TypeScript types for API payloads and articles
│
├── .env                                   # Local environment variables
├── .gitignore                             # Git ignore rules
├── eslint.config.mjs                      # ESLint configuration
├── next.config.ts                         # Next.js configuration
├── package.json                           # Dependencies and NPM scripts
├── postcss.config.mjs                     # PostCSS configuration for Tailwind CSS v4
├── README.md                              # Project documentation
└── tsconfig.json                          # TypeScript configuration
```

---

## 6. How to Setup This Project Locally

Follow these step-by-step instructions to run the project on your local machine:

### Prerequisites
Make sure you have the following installed on your system:
- **Node.js**: v18.18.0 or v20.x or higher
- **npm** (comes with Node.js) or **pnpm** / **yarn**
- **MongoDB**: A free MongoDB Atlas cluster connection string or a local MongoDB server running.

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/mmsabit/daily-news-bangla.git
cd daily-news-bangla
```

---

### Step 2: Install Dependencies
Install all required packages using npm:
```bash
npm install
```

---

### Step 3: Configure Environment Variables
Create a `.env` (or `.env.local`) file in the root directory of the project:

```env
# Better Auth Configuration
BETTER_AUTH_SECRET=your_random_generated_secret_string
BETTER_AUTH_URL=http://localhost:3000

# MongoDB Database Connection
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.your-cluster.mongodb.net/?retryWrites=true&w=majority

# Google OAuth Credentials (Optional / for Google Sign-In)
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth Credentials (Optional / for GitHub Sign-In)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

> **Note:**
> - You can generate a random secret for `BETTER_AUTH_SECRET` by running:
>   ```bash
>   openssl rand -base64 32
>   ```
> - Ensure your MongoDB Atlas cluster allows network access from your current IP address (`0.0.0.0/0` for development).

---

### Step 4: Run the Development Server
```bash
npm run dev
```

The application will start at:
```
http://localhost:3000
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the portal.

---

### Step 5: Building for Production (Optional)
To test or deploy the production build locally:

```bash
# Build the Next.js application
npm run build

# Start the production server
npm run start
```

