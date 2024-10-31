import nodemailer from "nodemailer";
import Cors from "cors";

// Initialize CORS middleware
const cors = Cors({
  methods: ['POST', 'OPTIONS'], // Allowed methods
  origin: 'https://your-allowed-origin.com', // Replace with your front-end origin or '*' for all
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
});

// Helper function to run middleware
const runMiddleware = (req, res, fn) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });

export default async function handler(req, res) {
  await runMiddleware(req, res, cors); // Run CORS middleware

  if (req.method === "POST") {
    console.log("Request body:", req.body); // Log the request body

    const {
      name,
      email,
      phone,
      company,
      service,
      message,
    } = req.body; // Extract all fields from the request body

    // Validate recipient email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res
        .status(400)
        .json({ message: "Valid recipient email is required" });
    }

    // Validate message length
    if (!message || message.length > 500) {
      return res
        .status(400)
        .json({
          message: "Message is required and must be less than 500 characters",
        });
    }

    // Additional validations for other fields can go here

    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\nMessage: ${message}`,
    };

    try {
      // Send the contact form email
      await transporter.sendMail(mailOptions);

      // Send thank-you email to the recipient
      const thankYouMailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: "Thank You for Your Submission",
        text: `Dear ${name},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nBest regards,\nYour Company Name`,
      };

      // Send the thank-you email
      await transporter.sendMail(thankYouMailOptions);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
