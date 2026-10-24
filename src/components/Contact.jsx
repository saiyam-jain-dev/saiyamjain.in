import React, { useState, useRef } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  MapPin, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './Icons';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const formData = new FormData(formRef.current);
      const name = formData.get('from_name') || '';
      const email = formData.get('from_email') || '';
      const subject = formData.get('subject') || '';
      const message = formData.get('message') || '';

      const templateParams = {
        name: name,
        from_name: name,
        user_name: name,
        email: email,
        from_email: email,
        user_email: email,
        reply_to: email,
        subject: subject,
        title: subject,
        message: message,
        time: new Date().toLocaleString()
      };

      await emailjs.send(
        personalInfo.emailjs.serviceId,
        personalInfo.emailjs.templateId,
        templateParams,
        personalInfo.emailjs.publicKey
      );

      setStatus({
        type: 'success',
        message: 'Message delivered successfully. I will follow up with you shortly.'
      });
      formRef.current?.reset();

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#ffffff', '#a1a1aa', '#71717a']
        });
      } catch (err) {}
      } catch (error) {
      console.error('EmailJS Error:', error);
      const errorText = error?.text || error?.message || '';
      const isAuthGrantError = errorText.toLowerCase().includes('invalid grant') || errorText.toLowerCase().includes('reconnect');
      
      setStatus({
        type: 'error',
        message: isAuthGrantError 
          ? 'EmailJS authentication expired: Gmail account needs to be reconnected in your EmailJS dashboard.'
          : 'Direct transmission failed. Please reach out directly to ' + personalInfo.email,
        detail: errorText,
        mailto: `mailto:${personalInfo.email}?subject=${encodeURIComponent(formRef.current?.subject?.value || 'Portfolio Contact')}&body=${encodeURIComponent(formRef.current?.message?.value || '')}`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-900">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
              <span>[06] Connect</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Get in Touch
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 font-mono max-w-sm">
            Open for software engineering opportunities, product builds, and open-source collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="p-5 rounded-2xl stealth-card mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white border border-zinc-800">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider block">Direct Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-bold text-white hover:underline break-all">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Status Pills */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-xl stealth-card">
                  <span className="text-[10px] text-zinc-500 font-mono uppercase block mb-1">Base</span>
                  <span className="text-xs font-bold text-white">India (Remote)</span>
                </div>

                <div className="p-4 rounded-xl stealth-card">
                  <span className="text-[10px] text-zinc-500 font-mono uppercase block mb-1">Response</span>
                  <span className="text-xs font-bold text-emerald-400">Within 24h</span>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                  Networks:
                </p>
                <div className="flex items-center gap-2.5">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl stealth-card text-zinc-400 hover:text-white transition-all hover:scale-105"
                    title="GitHub"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl stealth-card text-zinc-400 hover:text-white transition-all hover:scale-105"
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl stealth-card text-zinc-400 hover:text-white transition-all hover:scale-105"
                    title="Twitter / X"
                  >
                    <TwitterIcon size={16} />
                  </a>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl stealth-card text-zinc-400 hover:text-white transition-all hover:scale-105"
                    title="Instagram"
                  >
                    <InstagramIcon size={16} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl stealth-card">
              
              <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-zinc-500 font-mono mb-6">
                Direct transmission to {personalInfo.email}
              </p>

              {status && (
                <div
                  className={`p-3.5 rounded-xl mb-5 text-xs font-mono ${
                    status.type === 'success'
                      ? 'bg-zinc-900 border border-emerald-500/30 text-emerald-300 flex items-start gap-2.5'
                      : 'bg-zinc-900 border border-rose-500/30 text-rose-300 space-y-2'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {status.type === 'success' ? <Check size={14} className="shrink-0 mt-0.5" /> : null}
                    <span>{status.message}</span>
                  </div>
                  {status.mailto && (
                    <div className="pt-2 border-t border-rose-500/20 flex flex-wrap items-center gap-2">
                      <a
                        href={status.mailto}
                        className="px-3 py-1.5 rounded-lg bg-white text-black font-sans font-bold text-[11px] hover:bg-zinc-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <Mail size={12} />
                        <span>Send via Default Email App</span>
                      </a>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${encodeURIComponent('Portfolio Contact')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-zinc-800 text-white font-sans font-medium text-[11px] hover:bg-zinc-700 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <ArrowUpRight size={12} />
                        <span>Open in Gmail Web</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-700 text-xs font-mono focus:border-zinc-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-700 text-xs font-mono focus:border-zinc-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-700 text-xs font-mono focus:border-zinc-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-mono text-zinc-400">
                      Message
                    </label>
                    <span className="text-[10px] font-mono text-zinc-600">
                      max 1000 chars
                    </span>
                  </div>
                  <textarea
                    name="message"
                    required
                    maxLength={1000}
                    rows={4}
                    placeholder="Tell me about your team, tech stack, or engineering goals..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-700 text-xs font-mono focus:border-cyan-500 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
