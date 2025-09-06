import React, { useState, useCallback } from 'react';
import { ServiceOption, FormData } from '../types';
import { sendEmail } from '../services/emailService';
import Button from './Button';

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    serviceInterest: ServiceOption.WebDesign,
    message: '',
  });
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setStatus('sending');
    try {
      await sendEmail(formData);
      setStatus('success');
      setFormData({ name: '', email: '', serviceInterest: ServiceOption.WebDesign, message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background-dark">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Let's build together</h2>
          <p className="mt-4 text-lg text-dark-text">Let’s talk about your project — quick details are enough to get started.</p>
        </div>

        <div className="bg-content-dark p-8 rounded-xl shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-10">
              <span className="text-4xl">✅</span>
              <h3 className="text-2xl font-bold mt-4 text-light-text">Thanks!</h3>
              <p className="text-dark-text mt-2">We received your message and will reply within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light-text">Full name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 bg-background-dark border border-gray-600 rounded-md shadow-sm text-light-text focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light-text">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 bg-background-dark border border-gray-600 rounded-md shadow-sm text-light-text focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-medium text-light-text">Service interest</label>
                  <select
                    name="serviceInterest"
                    id="serviceInterest"
                    required
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-3 text-light-text bg-background-dark border-gray-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  >
                    <option>{ServiceOption.WebDesign}</option>
                    <option>{ServiceOption.AIAutomation}</option>
                    <option>{ServiceOption.Both}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light-text">Message (Optional)</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Briefly tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 bg-background-dark border border-gray-600 rounded-md shadow-sm text-light-text focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
              </div>
              <div className="mt-8">
                <Button type="submit" variant="primary" className="w-full" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </Button>
                {status === 'error' && <p className="text-red-500 text-sm mt-2 text-center">Something went wrong. Please try again.</p>}
              </div>
              <p className="text-xs text-dark-text text-center mt-4">We’ll only use your email to reply — no spam.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;