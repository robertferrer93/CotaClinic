import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const { name, email, phone, message } = req.body || {};

    // Validaciones mínimas
    if (!name || !message || (!email && !phone)) {
      return res.status(400).json({ ok: false });
    }

    await resend.emails.send({
      from: "CotaSport Clinic <contactoweb@cotasportclinic.com>",
      to: "consulta@drcabot.es",
      subject: `Nueva consulta web – ${name}`,
      replyTo: email && email.includes("@") ? email : undefined,
      html: `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height:1.5">
          <h2>Nueva consulta desde la web</h2>

          <table style="border-collapse:collapse; margin-top:12px">
            <tr>
              <td style="padding:6px 10px; font-weight:600;">Nombre</td>
              <td style="padding:6px 10px;">${name}</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; font-weight:600;">Email</td>
              <td style="padding:6px 10px;">${email || "-"}</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; font-weight:600;">Teléfono</td>
              <td style="padding:6px 10px;">${phone || "-"}</td>
            </tr>
          </table>

          <p style="margin-top:16px; font-weight:600;">Mensaje</p>
          <p style="white-space:pre-wrap;">${message}</p>

          ${
            email
              ? `
              <p style="margin-top:20px">
                <a
                  href="mailto:${email}?subject=Re:%20Consulta%20CotaSport%20Clinic"
                  style="display:inline-block; padding:10px 14px; background:#0B375F; color:#fff; text-decoration:none; border-radius:8px"
                >
                  Responder al paciente
                </a>
              </p>
              `
              : ""
          }
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false });
  }
}
