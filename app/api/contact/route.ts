import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = process.env.CONTACT_EMAIL ?? 'storiesbyphotofilms@gmail.com'

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid rgba(26,22,20,0.06);font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:#888;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid rgba(26,22,20,0.06);font-size:14px;color:#1a1614;">${value}</td>
    </tr>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      brideName,
      groomName,
      email,
      phone,
      weddingDate,
      venueCity,
      services,
      functions,
      guestCount,
      message,
    } = body

    if (!brideName || !groomName || !email || !phone || !weddingDate || !venueCity || !services?.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const coupleName = `${brideName} & ${groomName}`
    const formattedDate = new Date(weddingDate).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    const servicesList = Array.isArray(services) ? services.join(', ') : services
    const functionsList = Array.isArray(functions) && functions.length > 0
      ? functions.join(', ')
      : '—'

    const { data, error } = await resend.emails.send({
      from: 'Photofilms Website <noreply@photofilms.in>',
      to: TO,
      replyTo: email,
      subject: `New Wedding Enquiry — ${coupleName} · ${formattedDate}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1a1614;">
          <div style="background:#1a1614;padding:28px 32px;">
            <h1 style="color:#c9a84c;font-size:22px;margin:0;letter-spacing:0.05em;">PHOTOFILMS</h1>
            <p style="color:rgba(255,255,255,0.5);font-size:11px;margin:4px 0 0;letter-spacing:0.2em;text-transform:uppercase;">New Wedding Enquiry</p>
          </div>

          <div style="padding:32px;background:#faf8f5;border:1px solid rgba(26,22,20,0.08);">
            <table style="width:100%;border-collapse:collapse;">
              ${row('Bride', brideName)}
              ${row('Groom', groomName)}
              ${row('Email', `<a href="mailto:${email}" style="color:#c9a84c;">${email}</a>`)}
              ${row('Phone', `<a href="tel:${phone}" style="color:#c9a84c;">${phone}</a>`)}
              ${row('Wedding Date', formattedDate)}
              ${row('City / Venue', venueCity)}
              ${row('Services', servicesList)}
              ${row('Functions', functionsList)}
              ${guestCount ? row('Guest Count', guestCount) : ''}
            </table>

            ${message ? `
            <div style="margin-top:24px;">
              <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:#888;margin-bottom:8px;">Vision / Notes</p>
              <p style="font-size:14px;line-height:1.8;color:#1a1614;background:#fff;padding:16px;border-left:3px solid #c9a84c;margin:0;">${message.replace(/\n/g, '<br/>')}</p>
            </div>` : ''}

            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${email}" style="display:inline-block;background:#c9a84c;color:#1a1614;font-size:12px;font-weight:600;padding:12px 28px;text-decoration:none;letter-spacing:0.12em;text-transform:uppercase;">Reply to ${brideName}</a>
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
