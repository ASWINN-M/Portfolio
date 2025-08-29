import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from './Alert';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  // Auto-hide alert after 5 seconds
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowAlert(false);

    try {
      await emailjs.sendForm(
        'service_x7stire', 
        'template_fjzu09a', 
        form.current,
        'oKjZ9rZlBHpI3FowT' 
      );

      setIsLoading(false);
      form.current.reset();
      setFormData({ from_name: '', from_email: '', message: '' });
      setShowAlert(true);
      setAlertType('success');
      setAlertMessage('Your message has been sent successfully!');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsLoading(false);
      setAlertType('error');
      setAlertMessage('Failed to send message. Please try again.');
      setShowAlert(true);
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I look forward to hearing from you!
          </p>
        </div>

        <form ref={form} className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col items-start w-full gap-5 mb-10">
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
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? 'Send' : 'Sending...'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
