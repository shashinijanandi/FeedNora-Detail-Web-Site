const express = require('express')
const fs      = require('fs')
const path    = require('path')

const router  = express.Router()
const DB_FILE = path.join(__dirname, '../data/messages.json')

// GET /api/messages — list all contact messages
router.get('/', (req, res) => {
  if (!fs.existsSync(DB_FILE)) {
    return res.json({ messages: [], total: 0 })
  }
  try {
    const messages = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'))
    // Newest first
    messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    res.json({ messages, total: messages.length })
  } catch {
    res.status(500).json({ error: 'Could not read messages' })
  }
})

// DELETE /api/messages/:id — delete a single message
router.delete('/:id', (req, res) => {
  if (!fs.existsSync(DB_FILE)) return res.status(404).json({ error: 'Not found' })
  try {
    let messages = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'))
    const before = messages.length
    messages = messages.filter(m => String(m.id) !== String(req.params.id))
    if (messages.length === before) return res.status(404).json({ error: 'Message not found' })
    fs.writeFileSync(DB_FILE, JSON.stringify(messages, null, 2))
    res.json({ success: true })
  } catch {
    res.status(500).json({ error: 'Could not delete message' })
  }
})

module.exports = router
