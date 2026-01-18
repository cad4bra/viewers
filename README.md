# Viewers

A modern, futuristic web application for Viewers - a visual technology company.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **PocketBase** (Backend/Database)

## Getting Started

### Prerequisites

- Node.js 18+ 
- PocketBase (local or remote instance)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Set up PocketBase:**
   - Download PocketBase from [pocketbase.io](https://pocketbase.io)
   - Run PocketBase: `./pocketbase serve` (or `pb serve` if installed globally)
   - Access admin UI at: http://127.0.0.1:8090/_/
   - Create the following collections via PocketBase admin UI:
     - `project_content` - See schema in `/lib/pocketbase/schema.md`
     - `services` - See schema in `/lib/pocketbase/schema.md`
     - `showcase` - See schema in `/lib/pocketbase/schema.md`
   - Or add initial data manually through the admin interface

3. **Configure environment:**
   - Create `.env.local` in the root directory:
   ```
   NEXT_PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090
   ```
   - For production, replace with your PocketBase instance URL

4. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

**Note:** The app includes fallback/default content, so it will work even if PocketBase collections are empty. Add data through PocketBase admin UI to populate the site.

## Deployment on Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variable: `NEXT_PUBLIC_POCKETBASE_URL`
4. Deploy

## Project Structure

```
/app          - Next.js app router pages
/components   - Reusable React components
/lib          - Utilities, PocketBase client, types
/public       - Static assets
```

## Features

- 🎨 Futuristic gray-blue gradient design
- 📱 Fully responsive
- 🚀 Optimized for Vercel
- 📦 Scalable architecture
- 🔌 PocketBase integration
