import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = process.env.CONTACT_EMAIL ?? 'storiesbyphotofilms@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, eventDate, eventType, message } = body

    if (!name || !email || !phone || !eventType || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Photofilms Website <noreply@photofilms.in>',
      to: TO,
      replyTo: email,
      subject: `New ${eventType} Enquiry from ${name}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:580px;margin:0 auto;color:#1a1614;">
          <div style="background:#1a1614;padding:28px 32px;">
            <h1 style="color:#c9a84c;font-size:22px;margin:0;letter-spacing:0.05em;">PHOTOFILMS</h1>
            <p style="color:rgba(255,255,255,0.5);font-size:11px;margin:4px 0 0;letter-spacing:0.2em;text-transform:uppercase;">New Website Enquiry</p>
          </div>

          <div style="padding:32px;background:#faf8f5;border:1px solid rgba(26,22,20,0.08);">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid rgba(26,22,20,0.06);font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:#888;width:120px;">Name</td><td style="padding:10px 0;border-bottom:1px solid rgba(26,22,20,0.06);font-size:14px;color:#1a1614;">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid rgba(26,22,20,0.06);font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:#888;">Email</td><td style="padding:10px 0;border-bottom:1px solid rgba(26,22,20,0.06);font-size:14px;"><a href="mailto:${email}" style="color:#c9a84c;">${email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid rgba(26,22,20,0.06);font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:#888;">Phone</td><td style="padding:10px 0;border-bottom:1px solid rgba(26,22,20,0.06);font-size:14px;"><a href="tel:${phone}" style="color:#c9a84c;">${phone}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid rgba(26,22,20,0.06);font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:#888;">Service</td><td style="padding:10px 0;border-bottom:1px solid rgba(26,22,20,0.06);font-size:14px;">${eventType}</td></tr>
              ${eventDate ? `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(26,22,20,0.06);font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:#888;">Event Date</td><td style="padding:10px 0;border-bottom:1px solid rgba(26,22,20,0.06);font-size:14px;">${new Date(eventDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</td></tr>` : ''}
            </table>

            <div style="margin-top:24px;">
              <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:#888;margin-bottom:8px;">Message</p>
              <p style="font-size:14px;line-height:1.8;color:#1a1614;background:#fff;padding:16px;border-left:3px solid #c9a84c;margin:0;">${message.replace(/\n/g, '<br/>')}</p>
            </div>

            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${email}" style="display:inline-block;background:#c9a84c;color:#1a1614;font-size:12px;font-weight:600;padding:12px 28px;text-decoration:none;letter-spacing:0.12em;text-transform:uppercase;">Reply to ${name}</a>
            </div>
          </div>

          <p style="text-align:center;font-size:11px;color:#aaa;padding:16px;">Sent from photofilms.in contact form</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', JSON.stringify(error))
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log('Email sent, id:', data?.id)
    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Resend exception:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
