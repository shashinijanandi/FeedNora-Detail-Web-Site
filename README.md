# FEEDNORA Website — Full Stack Implementation

## Project Structure
```
feednora-website/
├── frontend/          # React.js frontend
│   ├── src/
│   │   ├── components/   # Navbar, Footer, shared components
│   │   ├── pages/        # Home, Research, Solution, Milestones, Documents, About, Contact
│   │   └── assets/       # Images, icons
│   ├── index.html
│   └── package.json
├── backend/           # Node.js/Express backend
│   ├── routes/        # API routes
│   ├── models/        # Data models
│   └── server.js
└── README.md
```

## Setup Instructions

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
node server.js
```

## Tech Stack
- Frontend: React.js, Tailwind CSS, React Router
- Backend: Node.js, Express.js
- Database: JSON files (can upgrade to MongoDB/PostgreSQL)
