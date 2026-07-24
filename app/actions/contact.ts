'use server'

import { Resend } from 'resend'
import { PrismaClient } from '@prisma/client'

const resend = new Resend(process.env.RESEND_API_KEY)
const prisma = new PrismaClient()

export async function submitContact(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  try {
    // Save to database
    await prisma.contactSubmission.create({
      data: { name, email, phone, message },
    })

    // Send email to Des
    await resend.emails.send({
      from: 'W2D Website <onboarding@resend.dev>',
      to: 'inboxme.srinivas@gmail.com',
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}