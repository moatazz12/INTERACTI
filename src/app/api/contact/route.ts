import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465, 
    secure: true,
    auth: {
      user: 'contact@interactiagency.com',  
      pass: process.env.OVH_MAIL_PASSWORD,  
    },
  });

 const mailOptions = {
  from: email,
  to: 'contact@interactiagency.com',
  subject: `[CONTACT] ${subject}`,
  html: `
    <div style="font-family: 'Segoe UI', Roboto, sans-serif; max-width: 640px; margin: auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);">
      <!-- En-tête -->
      <div style="background-color: #330052; padding: 24px; color: white; text-align: center;">
        <img src="cid:logoCID" alt="Logo Interacti" style="max-height: 100px; margin-bottom: 12px;" />
        <h2 style="margin: 0; font-size: 20px;">💬 Nouveau message vous attend </h2>
      </div>

      <!-- Contenu -->
      <div style="padding: 24px; background-color: #ffffff;">
        <table style="width: 100%; font-size: 16px; color: #333;">
          <tr>
            <td style="padding: 8px 0;"><strong style="color:#330052;">👤 Nom :</strong></td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong style="color:#330052;">📧 Email :</strong></td>
            <td style="padding: 8px 0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong style="color:#330052;">📝 Sujet :</strong></td>
            <td style="padding: 8px 0;">${subject}</td>
          </tr>
        </table>

        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />

        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          <strong style="color:#330052;">💬 Message :</strong><br/>
          ${message.replace(/\n/g, '<br/>')}
        </p>
      </div>

      <!-- Pied de page -->
      <div style="background-color: #FFD900; padding: 12px; text-align: center; color: #330052; font-weight: bold; font-size: 14px;">
        Interacti • Message généré automatiquement depuis le formulaire de contact
      </div>
    </div>
  `,
  attachments: [
    {
      filename: 'logo.png',
      path: `${process.cwd()}/public/logo.png`, 
      cid: 'logoCID',
    },
  ],
};

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(' Erreur lors de l’envoi de l’e-mail :', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
