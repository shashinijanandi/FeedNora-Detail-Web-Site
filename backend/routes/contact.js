const express   = require('express')
const nodemailer = require('nodemailer')
const { body, validationResult } = require('express-validator')
const fs = require('fs')
const path = require('path')

const router = express.Router()

// ── In-memory message store (replace with DB in production) ──
const DB_FILE = path.join(__dirname, '../data/messages.json')

function saveMessage(msg) {
  // Ensure data folder exists
  const dir = path.dirname(DB_FILE)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  let messages = []
  if (fs.existsSync(DB_FILE)) {
    try { messages = JSON.parse(fs.readFileSync(DB_FILE, 'utf8')) } catch {}
  }
  messages.push({ ...msg, id: Date.now(), createdAt: new Date().toISOString() })
  fs.writeFileSync(DB_FILE, JSON.stringify(messages, null, 2))
}

// ── Nodemailer transporter ────────────────────────────────────
function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

// ── POST /api/contact ─────────────────────────────────────────
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  ],
  async (req, res) => {
    // Validate
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, message } = req.body

    // Save to local JSON
    saveMessage({ name, email, message })

    // Send email (skip if env vars not set — useful in dev)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = createTransporter()
        await transporter.sendMail({
          from: `"FEEDNORA Contact" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          replyTo: email,
          subject: `New message from ${name} — FEEDNORA Website`,
          html: `
            <div style="font-family:Poppins,sans-serif;max-width:600px;margin:0 auto;">
              <div style="background:#14532d;padding:24px;border-radius:12px 12px 0 0;text-align:center;">
                <h1 style="color:white;margin:0;font-size:22px;">FEED<span style="color:#4ade80;">NORA</span></h1>
                <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:13px;">New Contact Message</p>
              </div>
              <div style="background:#f8f9fa;padding:28px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="padding:8px 0;font-size:13px;color:#64748b;font-weight:600;width:80px;">Name</td>
                      <td style="padding:8px 0;font-size:13px;color:#1e293b;">${name}</td></tr>
                  <tr><td style="padding:8px 0;font-size:13px;color:#64748b;font-weight:600;">Email</td>
                      <td style="padding:8px 0;font-size:13px;color:#1e293b;"><a href="mailto:${email}">${email}</a></td></tr>
                </table>
                <div style="margin-top:16px;padding:16px;background:white;border-radius:8px;border:1px solid #e2e8f0;">
                  <p style="font-size:13px;color:#64748b;font-weight:600;margin-bottom:8px;">Message</p>
                  <p style="font-size:14px;color:#1e293b;line-height:1.7;margin:0;">${message.replace(/\n/g, '<br/>')}</p>
                </div>
                <p style="font-size:11px;color:#94a3b8;margin-top:16px;text-align:center;">
                  Received at ${new Date().toLocaleString()} | FEEDNORA Website
                </p>
              </div>
            </div>
          `,
        })
      } catch (emailErr) {
        console.error('Email send error:', emailErr.message)
        // Don't fail the request — message is already saved
      }
    }

    res.status(200).json({ success: true, message: 'Message received. Thank you!' })
  }
)

module.exports = router
