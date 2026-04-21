"use client";
import React, { useState } from 'react';
import { Mail, MapPin, Terminal, Send, Globe } from 'lucide-react';
import PrimaryButton from '@/components/PrimaryButton';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Message sent successfully! (Mock)');
  };

  return (
    <div className="flex-1 ">


      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent-primary)] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--accent-secondary)] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 bg-[var(--background-secondary)] border border-[var(--border-primary)] px-4 py-2 rounded-full mb-4">
            <Terminal size={16} className="text-[var(--accent-tertiary)]" />
            <span className="text-sm font-medium tracking-wider text-[var(--accent-neutral)] uppercase">ACM Student Chapter</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">Connect</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            Have a question, want to collaborate on a project, or interested in joining the community? Drop us a line below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[var(--background-secondary)] border border-[var(--border-primary)] rounded-2xl p-8 shadow-[0_4px_30px_var(--shadow-primary)]">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[var(--background-primary)] rounded-lg border border-[var(--border-primary)] text-[var(--accent-primary)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)] font-medium mb-1">Email Us</p>
                    <a href="mailto:hello@acmchapter.edu" className="text-lg hover:text-[var(--accent-primary)] transition-colors">
                      hello@acmchapter.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[var(--background-primary)] rounded-lg border border-[var(--border-primary)] text-[var(--accent-secondary)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)] font-medium mb-1">Visit Us</p>
                    <p className="text-lg leading-relaxed">
                      Computer Science Building<br />
                      Room 404, Tech Campus<br />
                      University City, ST 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-[var(--border-primary)]">
                <p className="text-sm text-[var(--text-secondary)] font-medium mb-4">Follow our socials</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Globe, label: 'Website' }
                  ].map((social, idx) => (
                    <a 
                      key={idx}
                      href="#" 
                      className="p-3 bg-[var(--background-primary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:shadow-[0_0_15px_var(--shadow-primary)] transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--background-secondary)] border border-[var(--border-primary)] rounded-2xl p-8 shadow-[0_4px_30px_var(--shadow-primary)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[var(--accent-neutral)]">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ada Lovelace"
                      className="w-full bg-[var(--background-primary)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all placeholder:text-[var(--text-secondary)]/50"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[var(--accent-neutral)]">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ada@example.com"
                      className="w-full bg-[var(--background-primary)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all placeholder:text-[var(--text-secondary)]/50"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-[var(--accent-neutral)]">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="w-full bg-[var(--background-primary)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all placeholder:text-[var(--text-secondary)]/50"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[var(--accent-neutral)]">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full bg-[var(--background-primary)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all resize-none placeholder:text-[var(--text-secondary)]/50"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className='w-full'
                >
                  <PrimaryButton text='Send Message'/>
                </button>
                
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}