const express = require('express')
const cors = require('cors')
require('dotenv').config()
const contactRoute = require('../backend/routes/contact')
const messagesRoute = require('../backend/routes/messages')

const app = express()

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://feednora-website.vercel.app',
    /\.vercel\.app$/
  ]
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/contact', contactRoute)
app.use('/api/messages', messagesRoute)

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', project: 'FEEDNORA', timestamp: new Date() })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

module.exports = app  // ← export instead of app.listen()