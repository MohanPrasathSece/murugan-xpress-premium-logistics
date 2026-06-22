import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* ── Nodemailer transporter ─────────────────────────────────────── */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ── Booking endpoint ───────────────────────────────────────────── */
app.post("/api/book", async (req, res) => {
  const {
    sName, sPhone, sAddr,
    rName, rPhone, rAddr,
    goods, vehicle, weight,
    date, time, pay,
  } = req.body;

  // Basic validation
  if (!sName || !sPhone || !rName || !rPhone || !goods || !vehicle || !date || !time) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
      <div style="background:#1e3a8a;padding:24px 28px">
        <h1 style="color:#fff;margin:0;font-size:20px">🚚 New Booking — Murugan Xpress</h1>
      </div>
      <div style="padding:28px;background:#fff">

        <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
          <tr><td colspan="2" style="padding:8px 0;font-size:13px;font-weight:700;color:#1e3a8a;text-transform:uppercase;letter-spacing:.05em;border-bottom:2px solid #1e3a8a">📦 Sender</td></tr>
          <tr><td style="padding:6px 0;font-size:13px;color:#64748b;width:140px">Name</td><td style="padding:6px 0;font-size:14px;font-weight:600">${sName}</td></tr>
          <tr><td style="padding:6px 0;font-size:13px;color:#64748b">Phone</td><td style="padding:6px 0;font-size:14px;font-weight:600">${sPhone}</td></tr>
          <tr><td style="padding:6px 0;font-size:13px;color:#64748b">Pickup Address</td><td style="padding:6px 0;font-size:14px">${sAddr}</td></tr>
        </table>

        <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
          <tr><td colspan="2" style="padding:8px 0;font-size:13px;font-weight:700;color:#1e3a8a;text-transform:uppercase;letter-spacing:.05em;border-bottom:2px solid #1e3a8a">📍 Receiver</td></tr>
          <tr><td style="padding:6px 0;font-size:13px;color:#64748b;width:140px">Name</td><td style="padding:6px 0;font-size:14px;font-weight:600">${rName}</td></tr>
          <tr><td style="padding:6px 0;font-size:13px;color:#64748b">Phone</td><td style="padding:6px 0;font-size:14px;font-weight:600">${rPhone}</td></tr>
          <tr><td style="padding:6px 0;font-size:13px;color:#64748b">Delivery Address</td><td style="padding:6px 0;font-size:14px">${rAddr}</td></tr>
        </table>

        <table style="width:100%;border-collapse:collapse">
          <tr><td colspan="2" style="padding:8px 0;font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;border-bottom:2px solid #dc2626">🛻 Shipment</td></tr>
          <tr><td style="padding:6px 0;font-size:13px;color:#64748b;width:140px">Goods</td><td style="padding:6px 0;font-size:14px">${goods}</td></tr>
          <tr><td style="padding:6px 0;font-size:13px;color:#64748b">Vehicle</td><td style="padding:6px 0;font-size:14px;font-weight:600">${vehicle}</td></tr>
          <tr><td style="padding:6px 0;font-size:13px;color:#64748b">Weight</td><td style="padding:6px 0;font-size:14px">${weight}</td></tr>
          <tr><td style="padding:6px 0;font-size:13px;color:#64748b">Pickup</td><td style="padding:6px 0;font-size:14px;font-weight:600">${date} at ${time}</td></tr>
          <tr><td style="padding:6px 0;font-size:13px;color:#64748b">Payment</td><td style="padding:6px 0;font-size:14px">${pay}</td></tr>
        </table>
      </div>
      <div style="background:#f8fafc;padding:16px 28px;font-size:12px;color:#94a3b8;text-align:center">
        Murugan Xpress — Sidco Nagar, Villivakkam, Chennai 600049 | 9150474919
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Murugan Xpress Bookings" <${process.env.SMTP_USER}>`,
      to: process.env.BOOKING_EMAIL,
      subject: `New Booking: ${sName} → ${rName} | ${vehicle} on ${date}`,
      html,
      replyTo: sPhone ? undefined : undefined,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try WhatsApp." });
  }
});

/* ── Health check ───────────────────────────────────────────────── */
app.get("/api/health", (_req, res) => res.json({ ok: true }));

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => console.log(`✅  API server running on http://localhost:${PORT}`));
