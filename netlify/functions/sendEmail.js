exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    }
  }

  let payload
  try {
    payload = JSON.parse(event.body)
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }
  }

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  const SENDGRID_TO = process.env.SENDGRID_TO
  const SENDGRID_FROM = process.env.SENDGRID_FROM || 'no-reply@your-domain.com'

  if (!SENDGRID_API_KEY || !SENDGRID_TO) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'SendGrid not configured. Set SENDGRID_API_KEY and SENDGRID_TO env vars.' })
    }
  }

  const name = payload.name || 'No name'
  const email = payload.email || 'No email'
  const message = payload.message || ''

  const emailBody = `New message from website contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

  const sgBody = {
    personalizations: [
      {
        to: [ { email: SENDGRID_TO } ],
        subject: `Nuovo messaggio da ${name}`
      }
    ],
    from: { email: SENDGRID_FROM },
    content: [
      { type: 'text/plain', value: emailBody }
    ]
  }

  try {
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SENDGRID_API_KEY}`
      },
      body: JSON.stringify(sgBody)
    })

    if (!res.ok) {
      const text = await res.text()
      return { statusCode: 502, body: JSON.stringify({ error: 'SendGrid error', detail: text }) }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'SendGrid request failed', detail: err.message }) }
  }
}
