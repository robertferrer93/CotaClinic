import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const { name, contact, message } = req.body || {};

    if (!name || !contact || !message) {
      return res.status(400).json({ ok: false });
    }

    await resend.emails.send({
      from: "CotaSport Clinic <onboarding@resend.dev>",
      to: "consulta@drcabot.es",
      subject: `Nueva consulta web – ${name}`,
      html: `
        <h2>Nueva consulta desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Contacto:</strong> ${contact}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
      replyTo: contact.includes("@") ? contact : undefined,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false });
  }
}
