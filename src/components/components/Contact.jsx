import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";

const SERVICE_ID = "service_424dwvn";
const TEMPLATE_ID = "template_zduuaua";
const PUBLIC_KEY = "g1pdjeQG_ZZDvef1R";
const CONTACT_EMAIL = "aswinmmsa@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    emailjs.init({ publicKey: PUBLIC_KEY });
  }, []);

  useEffect(() => {
    if (!showAlert) return;
    const timer = setTimeout(() => setShowAlert(false), 6000);
    return () => clearTimeout(timer);
  }, [showAlert]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(
      `Portfolio message from ${formData.from_name || "visitor"}`
    );
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.from_name}\n${formData.from_email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowAlert(false);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.from_name,
        from_email: formData.from_email,
        reply_to: formData.from_email,
        message: formData.message,
        to_name: "Aswin",
      });

      setFormData({ from_name: "", from_email: "", message: "" });
      setAlertType("success");
      setAlertMessage("Your message has been sent successfully!");
      setShowAlert(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      const detail =
        error?.text ||
        error?.message ||
        (typeof error === "string" ? error : "Unknown error");

      // Fallback so contact still works if EmailJS dashboard/template blocks
      openMailtoFallback();
      setAlertType("warning");
      setAlertMessage(
        `Email service failed (${detail}). Opening your email app as a backup.`
      );
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center c-space section-spacing"
    >
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Got a project idea, a question, or just want to say hi? Drop a
            message — I'm always up for chatting about AI agents, RAG, or ML
            work.
          </p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              className="field-input field-input-focus"
              placeholder="John Doe"
              value={formData.from_name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              className="field-input field-input-focus"
              placeholder="johndoe@email.com"
              value={formData.from_email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-60"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
