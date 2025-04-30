import nodemailer from "nodemailer"

type FeedbackEmailProps = {
  userEmail: string
  overview: string
  game: string
  description: string
  rating: number
}

export async function sendFeedbackEmail({ userEmail, overview, game, description, rating }: FeedbackEmailProps) {
  const adminEmail = process.env.ADMIN_EMAIL

  if (!adminEmail) {
    throw new Error("ADMIN_EMAIL environment variable is not set")
  }

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.example.com",
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_FROM || adminEmail,
    to: adminEmail,
    subject: `Game Feedback: ${game}`,
    text: `
New Feedback Submission

From: ${userEmail}
Game: ${game}
Overview: ${overview}

Description:
${description}
    `,
    html: `
<h2>New Feedback Submission</h2>
<p><strong>From:</strong> ${userEmail}</p>
<p><strong>Game:</strong> ${game}</p>
<p><strong>Overview:</strong> ${overview}</p>
<p><strong>Rating:</strong> ${rating}</p>
<h3>Description:</h3>
<p>${description.replace(/\n/g, "<br>")}</p>
    `,
  }

  // Send email
  await transporter.sendMail(mailOptions)
}
