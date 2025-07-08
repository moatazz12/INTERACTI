import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'barkiaisims@gmail.com',  
      pass: process.env.GMAIL_APP_PASSWORD,  
    },
  });

 const mailOptions = {
  from: email,
  to: 'yacineagrebi96@gmail.com',
  subject: `[CONTACT] ${subject}`,
  html: `
    <div style="font-family: 'Segoe UI', Roboto, sans-serif; max-width: 640px; margin: auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);">
      <!-- En-tête -->
      <div style="background-color: #301f50; padding: 24px; color: white; text-align: center;">
        <img src="/logo.png" alt="Logo Interactii" style="max-height: 60px; margin-bottom: 12px;" />
        <h2 style="margin: 0; font-size: 20px;">💬 Nouveau message via le formulaire de contact</h2>
      </div>

      <!-- Contenu -->
      <div style="padding: 24px; background-color: #ffffff;">
        <table style="width: 100%; font-size: 16px; color: #333;">
          <tr>
            <td style="padding: 8px 0;"><strong style="color:#301f50;">👤 Nom :</strong></td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong style="color:#301f50;">📧 Email :</strong></td>
            <td style="padding: 8px 0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong style="color:#301f50;">📝 Sujet :</strong></td>
            <td style="padding: 8px 0;">${subject}</td>
          </tr>
        </table>

        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />

        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          <strong style="color:#301f50;">💬 Message :</strong><br/>
          ${message.replace(/\n/g, '<br/>')}
        </p>
      </div>

      <!-- Pied de page -->
      <div style="background-color: #FBD915; padding: 12px; text-align: center; color: #301f50; font-weight: bold; font-size: 14px;">
        Interactii • Message généré automatiquement depuis le formulaire de contact
      </div>
    </div>
  `,
};

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(' Erreur lors de l’envoi de l’e-mail :', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
