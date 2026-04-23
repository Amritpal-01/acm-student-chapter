"use client";
import React, { useState } from 'react';
import { Mail, MapPin, Terminal, Send, Globe, MessageCircleCodeIcon } from 'lucide-react';
import PrimaryButton from '@/components/PrimaryButton';
import Link from 'next/link';
import { homeRoute, whatsappCommunityRoute } from '@/constants/routes';
import Whatsapp from '@/icons/Whatsapp';

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
      {/* <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-(--accent-primary) opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-(--accent-secondary) opacity-10 blur-[120px] rounded-full pointer-events-none"></div> */}

      <main className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 bg-(--background-secondary) border border-(--border-primary) px-4 py-2 rounded-full mb-4">
            <Terminal size={16} className="text-(--accent-tertiary)" />
            <span className="text-sm font-medium tracking-wider text-(--accent-neutral) uppercase">ACM Student Chapter</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-linear-to-r from-(--accent-primary) to-(--accent-secondary)">Connect</span>
          </h1>
          <p className="text-(--text-secondary) max-w-2xl mx-auto text-md">
            Have a question, want to collaborate on a project, or interested in joining the community? Drop us a line below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-(--background-secondary) border border-(--border-primary) rounded-2xl p-8 shadow-[0_4px_30px_var(--shadow-primary)">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className=" space-y-6 overflow-hidden">
                <div className="flex max-sm:flex-col items-start p-1 space-x-4">
                  <div className="p-3 bg-(--background-primary) rounded-lg border border-(--border-primary) text-(--accent-primary)">
                    <Mail size={24} />
                  </div>
                  <div className='max-w-full'>
                    <p className="text-sm text-(--text-secondary) font-medium max-sm:mb-1">Email Us</p>
                    <a href="mailto:officialucb.acmstudentchapter@gmail.com" className="truncate  max-w-full max-sm:text-sm hover:text-(--accent-primary) transition-colors">
                      officialucb.acmstudentchapter@gmail.com
                    </a>
                  </div>
                </div>

                <Link href={whatsappCommunityRoute} className="flex items-start space-x-4 p-1 rounded-md hover:bg-(--accent-primary-30)">
                  <div className="p-3 bg-(--background-primary) rounded-lg border border-(--border-primary) text-(--accent-secondary)">
                    <MessageCircleCodeIcon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-(--text-secondary) font-medium mb-1">Join Our Whatsapp Comminity</p>
                    <p className="text-md leading-relaxed">
                      Ask any question
                    </p>
                  </div>
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-(--border-primary)">
                <p className="text-sm text-(--text-secondary) font-medium mb-4">Follow our socials</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Globe, label: 'Website', href: homeRoute },
                    {icon: Whatsapp, label: 'Whatsapp', href: whatsappCommunityRoute}
                  ].map((social, idx) => (
                    <Link
                      key={idx}
                      href={social.href || "#"} 
                      className="p-3 bg-(--background-primary) border border-(--border-primary) rounded-lg text-(--text-secondary) hover:text-(--accent-primary) hover:border-(--accent-primary) hover:shadow-[0_0_15px_var(--shadow-primary) transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon/>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">

          </div>

        </div>
      </main>
    </div>
  );
}