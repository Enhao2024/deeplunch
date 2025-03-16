import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

interface RequestBody {
  name: string;
  userEmail: string;
  message: string;
  token: string;
}

export async function POST(req: NextRequest) {
  const {
    name, userEmail, message, token,
  }: RequestBody = await req.json();

  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;
  const formData = `secret=${secretKey}&response=${token}`;
  try {
    const res = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    if (res && res.data?.success && res.data?.score > 0.5) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.NODEMAILER_ENDPOINT,
          port: 587,
          secure: false,
          auth: {
            user: process.env.SES_USER,
            pass: process.env.SES_PASS,
          },
        });

        const emailBody = `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h3>New message from ${name} </h3>
            <p> ${message} </p>
          </div>
        `;

        const mailOptions = {
          from: process.env.FROM_EMAIL,
          to: process.env.ADMIN_EMAIL,
          subject: `User message from ${name}`,
          html: emailBody,
          replyTo: userEmail,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
      } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed Email' }, { status: 500 });
      }
    }
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Failed Email' }, { status: 500 });
  }
  return NextResponse.json({ success: false, error: 'Failed Email' }, { status: 500 });
}
