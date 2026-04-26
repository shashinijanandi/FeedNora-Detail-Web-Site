const express  = require('express')
const cors     = require('cors')
require('dotenv').config()

const contactRoute = require('./routes/contact')
const messagesRoute = require('./routes/messages')

const app  = express()
const PORT = process.env.PORT || 5000

// ── Middleware ──────────────────────────────────────
app.use(cors({ 
     origin: [
       'http://localhost:5173',
       'https://your-project.vercel.app',  // Add your Vercel URL
       /\.vercel\.app$/  // Allow all Vercel preview URLs
     ]
   }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ── Routes ──────────────────────────────────────────
app.use('/api/contact',  contactRoute)
app.use('/api/messages', messagesRoute)

// ── Health check ────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', project: 'FEEDNORA', timestamp: new Date() })
})

// ── 404 handler ─────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// ── Global error handler ────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`✅ FEEDNORA backend running on http://localhost:${PORT}`)
})
