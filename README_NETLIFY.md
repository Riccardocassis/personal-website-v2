Netlify deployment & contact form setup

1) Environment variables (Netlify dashboard -> Site settings -> Build & deploy -> Environment):

- SENDGRID_API_KEY: your SendGrid API key
- SENDGRID_TO: the email address where you want to receive messages
- SENDGRID_FROM: (optional) the sender email (e.g. no-reply@yourdomain.com)

2) Netlify Functions
- We added `netlify/functions/sendEmail.js` which expects a POST with JSON `{ name, email, message }` and forwards it to SendGrid.

3) Netlify Forms
- The contact form in `src/pages/Contact.vue` includes `data-netlify="true"` and a `form-name` hidden field so Netlify stores submissions.
- The client also calls the Netlify Function to send the email immediately.

4) Local testing
- Install Netlify CLI: `npm i -g netlify-cli`
- Run locally with functions: `netlify dev`

5) Deploy
- Push to your repo and connect to Netlify, or run `netlify deploy --prod` if configured.

6) Notes
- Make sure to set the env vars in Netlify settings; without `SENDGRID_API_KEY` the function will return 500.
- If you prefer a different mail provider (Mailgun, Postmark), the function can be adapted.
