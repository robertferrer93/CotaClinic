import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value = "") {
  const v = String(value).trim();
  // simple y suficiente para este caso (evita falsos positivos muy obvios)
  return v.includes("@") && v.includes(".") && !v.includes(" ");
}

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

    const cleanName = String(name).trim();
    const cleanEmail = String(email || "").trim();
    const cleanPhone = String(phone || "").trim();
    const cleanMessage = String(message).trim();

    const emailOk = isValidEmail(cleanEmail);

    // Escapado para HTML
    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safePhone = escapeHtml(cleanPhone);
    const safeMessage = escapeHtml(cleanMessage);

    await resend.emails.send({
      from: "CotaSport Clinic <contactoweb@cotasportclinic.com>",
      to: "consulta@drcabot.es",
      // Opción B: copia al paciente (si hay email válido)
      bcc: emailOk ? cleanEmail : undefined,
      subject: `Nueva consulta web – ${cleanName}`,
      replyTo: emailOk ? cleanEmail : undefined,
      html: `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height:1.5">
          <h2>Nueva consulta desde la web</h2>

          <table style="border-collapse:collapse; margin-top:12px">
            <tr>
              <td style="padding:6px 10px; font-weight:600;">Nombre</td>
              <td style="padding:6px 10px;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; font-weight:600;">Email</td>
              <td style="padding:6px 10px;">${emailOk ? safeEmail : "-"}</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; font-weight:600;">Teléfono</td>
              <td style="padding:6px 10px;">${safePhone || "-"}</td>
            </tr>
          </table>

          <p style="margin-top:16px; font-weight:600;">Mensaje</p>
          <p style="white-space:pre-wrap;">${safeMessage}</p>

          ${
            emailOk
              ? `
              <p style="margin-top:20px">
                <a
                  href="mailto:${encodeURIComponent(
                    cleanEmail
                  )}?subject=${encodeURIComponent("Re: Consulta CotaSport Clinic")}"
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
