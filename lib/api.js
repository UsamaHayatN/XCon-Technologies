const sendContactForm = async (values) => {
  // Log the data that will be sent to the server
  console.log("Sending Contact Form Data:", {
    to: values.email,
    subject: "Contact Form Submission",
    text: `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nCompany: ${values.company}\nService: ${values.service}\nMessage: ${values.message}`,
  });

  const response = await fetch("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: values.email, // Replace with the actual recipient email or use values.email
      subject: "Contact Form Submission",
      text: `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nCompany: ${values.company}\nService: ${values.service}\nMessage: ${values.message}`,
    }),
  });

  if (!response.ok) throw new Error("Failed to send message");
  return response.json();
};

export default sendContactForm;
