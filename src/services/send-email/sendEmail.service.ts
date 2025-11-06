import nodemailer from "nodemailer";

interface SendEmailProps {
  email: string;
}

class SendEmailService {
  async execute({ email }: SendEmailProps) {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_SECURE === "true",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: '"Equipe JoaoLeandro.site" <joaoleandrotestes@gmail.com>',
        to: `Olá <${email}>`,
        subject: "Recuperação de senha – JoaoLeandro.site",
        html: `
  <div style="
    background-color:#f5f7fa;
    font-family:Arial, Helvetica, sans-serif;
    padding:24px;
    color:#111;
  ">
    <div style="
      background-color:#ffffff;
      border-radius:8px;
      box-shadow:0 2px 6px rgba(0,0,0,0.08);
      max-width:480px;
      margin:auto;
      padding:32px;
    ">
      <h1 style="color:#2e7d32; font-size:22px; margin-top:0;">
        Recuperação de Senha
      </h1>
      <p style="font-size:15px; line-height:1.6;">
        Olá, João 👋 <br><br>
        Recebemos uma solicitação para redefinir sua senha no
        <strong>JoaoLeandro.site</strong>.  
        Clique no botão abaixo para criar uma nova senha:
      </p>
      <div style="text-align:center; margin:28px 0;">
        <a href="https://www.joaoleandro.site"
          style="
            background-color:#2e7d32;
            color:#fff;
            text-decoration:none;
            padding:12px 22px;
            border-radius:6px;
            font-weight:bold;
            display:inline-block;
          ">
          Redefinir Senha
        </a>
      </div>
      <p style="font-size:14px; color:#555;">
        Se você não solicitou essa alteração, ignore este e-mail.
        Sua conta permanecerá segura.
      </p>
      <hr style="border:none; border-top:1px solid #ddd; margin:24px 0;">
      <p style="font-size:12px; color:#999; text-align:center;">
        © 2025 JoaoLeandro.site – Todos os direitos reservados.<br>
        Este é um e-mail automático, por favor não responda.
      </p>
    </div>
  </div>
  `,
      });

      console.log("✅ E-mail enviado:", info.messageId);
    } catch (error) {
      console.error("❌ Erro ao enviar e-mail:", error);
    }
  }
}

export { SendEmailService };
