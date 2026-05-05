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

### Backend environment
Create a `backend/.env` file with these values:
```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=shashini.janandi@gmail.com
```

The contact form sends the inquiry to `EMAIL_TO` and uses `EMAIL_USER` as the SMTP sender.

## Tech Stack
- Frontend: React.js, Tailwind CSS, React Router
- Backend: Node.js, Express.js
- Database: JSON files (can upgrade to MongoDB/PostgreSQL)
