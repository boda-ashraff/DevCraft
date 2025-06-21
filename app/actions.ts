"use server"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const serviceType = formData.get("serviceType") as string
  const message = formData.get("message") as string

  // In a real application, you would integrate with an email service like:
  // - Resend, SendGrid, Nodemailer, etc.
  // For now, we'll simulate the email sending

  try {
    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically send the email using your preferred email service
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      company,
      serviceType,
      message,
      to: "abde51654@gmail.com",
    })

    return {
      success: true,
      message: "Thank you for your message! We will get back to you within 24 hours.",
    }
  } catch (error) {
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again.",
    }
  }
}
