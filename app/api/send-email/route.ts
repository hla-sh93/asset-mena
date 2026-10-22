import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer')

export async function POST(request: NextRequest) {
  try {
    const { from, name, message, captcha } = await request.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,

        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    })

    const mailOption = {
      from: from,
      to: 'l.leona@asset-uae.com',
      subject: `${name} Send You An Email From Asset Website`,
      html: `
      <h1 style='color: "#294982"; text-align: center'>Email From Asset Website Contact Form</h1>
        <h2 style="color: #294982"> name:</h2>
        <p style="font-size: 18px"> ${name} </p>
        <h2 style="color: #294982"> Email Address:</h2>
        <p style="font-size: 18px">  ${from} </p>
        <h2 style="color: #294982"> message:</h2>
        <p style="font-size: 18px"> ${message} </p>
        `,
    }

    const formData = `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${captcha}`
    try {
      const res: Response = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )

      if (res?.ok) {
        // Send Email
        await transporter.sendMail(mailOption)

        return NextResponse.json(
          { message: 'Email Sent Successfully' },
          { status: 200 },
        )
      } else {
        return NextResponse.json({ message: 'Server Error' }, { status: 500 })
      }
    } catch (e) {
      console.log('recaptcha error:', e)
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to Send Email' },
      { status: 500 },
    )
  }
}
