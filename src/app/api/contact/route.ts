import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
    }

    // Configure the transporter with your email service provider settings
    // Defaulting to Gmail, for which you need to set EMAIL_USER and EMAIL_PASS in .env.local
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Very basic error handling if creds missing
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('EMAIL_USER or EMAIL_PASS not set. Email cannot be sent.');
      return NextResponse.json({ success: false, message: 'Server configuration error.' }, { status: 500 });
    }

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}
