# Next.js Dashboard App (Course Project)

This project was built by following the [Next.js Dashboard App Course](https://nextjs.org/learn/dashboard-app).  
It demonstrates how to create a **modern full-stack web application** using Next.js 13+ App Router, React Server Components, and Vercel Postgres.

---

## 📖 Course Chapters & What I Learned

### 1. Getting Started
- Set up a new Next.js project with the **App Router**.
- Learned the differences between the old `pages/` directory and the `app/` directory.

### 2. CSS Styling
- Used **CSS Modules** and global styles.
- Applied responsive layouts for the dashboard.

### 3. Optimizing Fonts and Images
- Implemented **next/font** for custom Google Fonts.
- Used the `<Image />` component for automatic image optimization.

### 4. Creating Layouts and Pages
- Learned about **nested layouts** and **shared UI components**.
- Built routes for Dashboard, Invoices, and Customers.

### 5. Navigating Between Pages
- Added navigation with `<Link />`.
- Used **active link states** and improved routing UX.

### 6. Setting Up Your Database
- Connected the app to **Vercel Postgres**.
- Created and seeded tables for `users`, `customers`, and `invoices`.

### 7. Fetching Data
- Used **async server components** to fetch data directly from the database.
- Learned about **data fetching strategies** in Next.js.

### 8. Static and Dynamic Rendering
- Compared **static** vs. **dynamic** rendering.
- Used caching and revalidation to optimize performance.

### 9. Streaming
- Implemented **React Suspense** for loading states.
- Learned how Next.js streams components to improve perceived performance.

### 10. Partial Prerendering (Optional Preview)
- Explored partial prerendering concepts for future Next.js features.

### 11. Adding Search and Pagination
- Added **search functionality** with query parameters.
- Implemented **pagination** for invoices.

### 12. Mutating Data
- Built forms for creating and editing invoices.
- Learned about **server actions** and `useFormStatus`.

### 13. Handling Errors
- Created **error boundaries** with `error.tsx`.
- Used `not-found.tsx` for custom 404 pages.

### 14. Improving Accessibility
- Ensured components followed **a11y best practices**.
- Used semantic HTML and ARIA roles where needed.

### 15. Adding Authentication
- Implemented **NextAuth.js** for authentication.
- Restricted access to dashboard routes.

### 16. Adding Metadata
- Used the **Metadata API** for SEO-friendly titles, descriptions, and social previews.

### 17. Deploying to Vercel
- Deployed the app to **Vercel** with database integration.
- Learned about environment variables and production setup.

---

## 🛠️ Tech Stack
- [Next.js 13+](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Vercel Postgres](https://vercel.com/postgres)
- [NextAuth.js](https://next-auth.js.org/) for authentication
- [Tailwind CSS](https://tailwindcss.com/) / CSS Modules for styling
- Deployed on [Vercel](https://vercel.com/)

---

## ▶️ Getting Started

Clone the repo:
```bash
git clone https://github.com/YOUR_USERNAME/nextjs-dashboard.git
cd nextjs-dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000.