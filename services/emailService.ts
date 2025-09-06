import { FormData } from '../types';

/**
 * MOCK IMPLEMENTATION for sending an email.
 * This function simulates a network request to an email service.
 * It logs the email content to the console for development and testing purposes
 * and resolves successfully after a short delay to mimic a real API call.
 *
 * To send real emails, you can replace this with a service like EmailJS.
 * The original EmailJS implementation is commented out below for your convenience.
 *
 * @param data The form data to be sent.
 * @returns A promise that resolves when the "email" is "sent".
 */
export const sendEmail = async (data: FormData): Promise<void> => {
  console.log('--- Mock Email Service ---');
  console.log('Simulating email dispatch. In a real app, this would send an email.');
  console.log('Email Data:', {
    to: 'abitechwork@gmail.com',
    subject: `New lead from landing page — ${data.name} (${data.serviceInterest})`,
    body: `
      Hello Techwork By Abi team,

      You received a new lead from the landing page.

      Name: ${data.name}
      Email: ${data.email}
      Service interest: ${data.serviceInterest}
      Message:
      ${data.message || '(No message provided)'}

      Please reply promptly. — Automated notification from your landing page.
    `,
  });

  // Simulate a network delay of 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For this mock, we always assume the email was sent successfully.
  console.log('--- Mock email "sent" successfully! ---');
  return Promise.resolve();
};


/*
// ==============================================================================
//  REAL EMAILJS IMPLEMENTATION (Commented out for development)
// ==============================================================================
// To use this, uncomment the code below, add your EmailJS credentials,
// and make sure the EmailJS SDK script is included in index.html.
// ==============================================================================

// This tells TypeScript that the 'emailjs' object exists on the global scope,
// as it's loaded from a <script> tag in index.html.
declare const emailjs: any;

export const sendEmail = async (data: FormData): Promise<void> => {
  // --- REPLACE THESE VALUES WITH YOUR ACTUAL EMAILJS CREDENTIALS ---
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
  // --------------------------------------------------------------------

  if (SERVICE_ID === 'YOUR_SERVICE_ID' || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.error('EmailJS is not configured. Please add your credentials in services/emailService.ts.');
    // Throw an error to show the user a message in the UI
    throw new Error('EmailJS is not configured by the developer.');
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    service_interest: data.serviceInterest,
    message: data.message || '(No message provided)',
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log('SUCCESS! Email sent.', response.status, response.text);
  } catch (err) {
    console.error('FAILED to send email. Check your EmailJS credentials and configuration.', err);
    throw err;
  }
};
*/