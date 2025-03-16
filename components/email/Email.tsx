'use client';

import axios from 'axios';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { throttle } from 'radash';
import ShimmerButton from '../ui/magicui/shimmer-button';

function Email() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [clientEmail, setClientEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFields = () => !!clientEmail && !!name && !!content && validateEmail(clientEmail);

  const send = async (token: string) => {
    try {
      await axios.post('/api/sendEmail', {
        name,
        userEmail: clientEmail,
        message: content,
        token,
      });
    } catch (error) {
      console.log('Error sending email');
    }
  };

  const sendWithVerification = async (e: any) => {
    e.preventDefault();
    // TODO: integrate notification
    if (!validateFields()) {
      return;
    }
    if (!executeRecaptcha) {
      return;
    }
    const token = await executeRecaptcha('registerSubmit');
    send(token).then(() => {
      setClientEmail('');
      setName('');
      setContent('');
    });
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left px-8">
          <h1 className="text-5xl font-bold text-neutral-700">Any Thoughts?</h1>
          <div className="py-8 font-semibold text-neutral-700 flex flex-col space-y-2">
            <p className="">
              We value thoughts from everyone.
            </p>
            <p className="">
              Talk to us about your brainstorm and help promoting our garage project!
            </p>
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={name}
                placeholder="name"
                className="input input-bordered"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={clientEmail}
                placeholder="email"
                className="input input-bordered"
                required
                onChange={(e) => setClientEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <textarea
                id="nso-email-content"
                className="textarea input-bordered"
                value={content}
                required
                placeholder="Content"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <ShimmerButton className="shadow-2xl" onClick={throttle({ interval: 2000 }, sendWithVerification)}>
                <span className="whitespace-pre-wrap text-center text-sm font-medium
                leading-none tracking-tight text-white dark:from-white
                dark:to-slate-900/10 lg:text-lg"
                >
                  Send
                </span>
              </ShimmerButton>
            </div>
            <div className="text-xs m-2">
              This site is protected by reCAPTCHA and the Google&nbsp;
              <a className="font-bold" href="https://policies.google.com/privacy">Privacy Policy</a>
              {' '}
              and&nbsp;
              <a className="font-bold" href="https://policies.google.com/terms">Terms of Service</a>
              {' '}
              apply.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Email;
