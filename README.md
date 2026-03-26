# Knowledge Base UI — Aventisia Front-end Assignment

A pixel-accurate React implementation of the Figma design provided in the Aventisia front-end developer assignment.

## Live Demo

[https://knowledge-base-ui-five.vercel.app/](https://knowledge-base-ui-five.vercel.app/)

---

## Screenshots

### Screen 1 — Knowledge Base Home

![Knowledge Base Home](assets/image1.png)

### Screen 2 — Create New Knowledge Base Modal

![Create New Modal](assets/image2.png)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework (functional components + hooks) |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icon library |

**Primary Color:** `#4F46E5` &nbsp; **Secondary Color:** `#1E1B4B`

---

## Features

- Pixel-accurate replication of both Figma screens
- Fully responsive layout with sidebar + main content
- **Create New** button opens a slide-in modal with a complete form
- Form fields: Name, Description, Vector Store (dropdown), LLM Embedding Model (dropdown)
- Modal closes on X click or clicking outside
- Pagination controls in the footer
- Clean component-based architecture

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx            # Top navigation bar
│   ├── Sidebar.jsx           # Left navigation (MY PROJECTS / ORCHESTRATOR / ADMIN)
│   ├── KnowledgeBasePage.jsx # Main content area with card grid
│   ├── KnowledgeBaseCard.jsx # Individual knowledge base card
│   ├── CreateNewModal.jsx    # Slide-in modal with creation form
│   └── Pagination.jsx        # Footer pagination controls
├── App.jsx                   # Root component with modal state
├── main.jsx                  # Entry point
└── index.css                 # Tailwind imports
```

---

## Getting Started

**Prerequisites:** Node.js 16+

```bash
# Clone the repository
git clone https://github.com/arpitkasaudhan/knowledge-base-ui.git
cd knowledge-base-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build
```

---

## Component Design Decisions

- **Separation of concerns** — each component has a single responsibility; page-level state (modal open/close) lives in `App.jsx` and is passed down via props.
- **Reusable `KnowledgeBaseCard`** — accepts `title`, `description`, and `createdOn` props, making it easy to swap in real API data.
- **Controlled form in `CreateNewModal`** — all inputs are controlled via a single `form` state object, ready to be wired to an API call.
- **Tailwind custom colors** — `primary` and `secondary` are registered in `tailwind.config.js` for consistent usage across all components.
