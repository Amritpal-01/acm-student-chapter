"use client";
import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Terminal,
  Send,
  Globe,
  MessageCircleCodeIcon,
  ChevronDownCircle,
  PenTool,
  Code,
  FileText,
  Users,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";
import {
  ACMInstagram,
  applicationRoute,
  homeRoute,
  whatsappCommunityRoute,
} from "@/constants/routes";
import Whatsapp from "@/icons/Whatsapp";
import InstagramIcon from "@/icons/InstagramIcon";
import { label } from "motion/react-client";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Message sent successfully! (Mock)");
  };

  return (
    <div className="flex-1 ">
      <main className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 bg-(--background-secondary) border border-(--border-primary) px-4 py-2 rounded-full mb-4">
            <Terminal size={16} className="text-(--accent-tertiary)" />
            <span className="text-sm font-medium tracking-wider text-(--accent-neutral) uppercase">
              ACM Student Chapter
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--accent-primary) to-(--accent-secondary)">
              Connect
            </span>
          </h1>
          <p className="text-(--text-secondary) max-w-2xl mx-auto text-md">
            Have a question, want to collaborate on a project, or interested in
            joining the community? Drop us a line below.
          </p>
        </div>

        <div className="">
          {/* Right Column: Contact Form */}
          <div className="flex flex-col"></div>

          {/* Left Column: Contact Information */}
          <div className="flex flex-col gap-10">
            {/* contacts */}
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">
                Contact Information
              </h3>
              <h3 className="flex items-center gap-2 uppercase my-2 text-sm text-(--text-secondary)">
                Tap to Follow <ChevronDownCircle size={16} />
              </h3>

              <div className="overflow-hidden">
                <Link
                  href="mailto:officialucb.acmstudentchapter@gmail.com"
                  className="flex items-start p-2 space-x-4"
                >
                  <div className="p-3 bg-(--background-primary) rounded-lg border border-(--border-primary) text-(--accent-primary)">
                    <Mail size={24} />
                  </div>
                  <div className="max-w-full">
                    <p className="text-sm text-(--text-secondary) font-medium max-sm:mb-1">
                      Email Us
                    </p>
                    <h3 className="truncate max-w-full hover:text-(--accent-primary) transition-colors">
                      officialucb.acmstudentchapter@gmail.com
                    </h3>
                  </div>
                </Link>

                <div className="w-full flex flex-wrap gap-5 *:min-w-80">
                  <Link
                    href={whatsappCommunityRoute}
                    className="flex items-start space-x-4 p-2 rounded-md"
                  >
                    <div className="p-3 bg-(--background-primary) rounded-lg border border-(--border-primary) text-green-500">
                      <Whatsapp />
                    </div>
                    <div>
                      <p className="text-sm text-(--text-secondary) font-medium mb-1">
                        Join Our Whatsapp Comminity
                      </p>
                      <p className="text-md leading-relaxed">
                        Ask any question
                      </p>
                    </div>
                  </Link>

                  <Link
                    href={ACMInstagram}
                    className="flex items-start space-x-4 p-2 rounded-md"
                  >
                    <div className="p-3 bg-(--background-primary) rounded-lg border border-(--border-primary) text-pink-500">
                      <InstagramIcon />
                    </div>
                    <div>
                      <p className="text-sm text-(--text-secondary) font-medium mb-1">
                        Follow us on Instagram
                      </p>
                      <p className="text-md leading-relaxed">
                        Get quick updates
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* application */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Open Applications</h3>
              <h3 className="flex items-center gap-2 uppercase mb-4 text-sm text-(--text-secondary)">
                Tap to Join us <ChevronDownCircle size={16} />
              </h3>
              <h3 className="font-light tracking-wider flex items-center gap-2 mb-4 text-sm text-(--text-primary)">
                Apply on our website
              </h3>
              <Link
                href={applicationRoute}
                className="flex items-start space-x-4 p-2 mb-4 rounded-md"
              >
                <div className="p-3 bg-(--background-primary) rounded-lg border border-(--border-primary) text-(--accent-tertiary)">
                  <Globe />
                </div>
                <div>
                  <p className="text-sm text-(--text-secondary) font-medium mb-1">
                    Web Application Form
                  </p>
                  <p className="text-md leading-relaxed">
                    Apply for any role available
                  </p>
                </div>
              </Link>
              <h3 className="font-light tracking-wider flex items-center gap-2 mb-4 text-sm text-(--text-primary)">
                Google Forms
              </h3>
              <div className="w-full flex flex-wrap gap-2">
                {[
                  {
                    description: "Leadership Application",
                    title: "Design Team Lead",
                    shortLink: "https://forms.gle/TXG3goWi7J3w9G1C9",
                    link: "https://docs.google.com/forms/d/e/1FAIpQLSeWniVNu_y0W5WLRdIOA2L1CsbK8KZdMohMIlUK56a6BXydgQ/viewform?usp=dialog",
                    icon: PenTool, // design → creativity
                  },
                  {
                    description: "Leadership Application",
                    title: "Technical Team Lead",
                    shortLink: "https://forms.gle/8UWyQ7nkNwDetvgv5",
                    link: "https://docs.google.com/forms/d/e/1FAIpQLScD9UOTIMhoNS5yWR2pyS1FZ1i8K77zBDD_4seTENIiyfLYmA/viewform?usp=publish-editor",
                    icon: Code, // technical → coding
                  },
                  {
                    description: "Leadership Application",
                    title: "Content Team Lead",
                    shortLink: "https://forms.gle/Fxe3yfkErnMK8j9m7",
                    link: "https://docs.google.com/forms/d/e/1FAIpQLScsmqV7cobsujEAzfg_z_ZNy9UiOpema9BbKHldhW7G2GCSJw/viewform?usp=publish-editor",
                    icon: FileText, // content → writing
                  },
                  {
                    description: "Leadership Application",
                    title: "Management Team Lead",
                    shortLink: "https://forms.gle/cNFe4d7CQE5PycGMA",
                    link: "https://docs.google.com/forms/d/e/1FAIpQLSfyDK4pRml8PEXFfNYjTJ4hTr2iS9AhRyow4FmAPP30hFTp3Q/viewform?usp=publish-editor",
                    icon: Users, // management → people/team
                  },
                  {
                    description: "Leadership Application",
                    title: "Media Team Lead",
                    shortLink: "https://forms.gle/GZVYvBCP9QTuAqFw7",
                    link: "https://docs.google.com/forms/d/e/1FAIpQLSfwkrXZgTSgHFf5slnGvyCIpqdu8MCFh17say0s2qa14fgFAw/viewform?usp=dialog",
                    icon: VideoIcon, // management → people/team
                  },
                ].map((obj) => {
                  return (
                    <Link
                      key={obj.title}
                      href={obj.shortLink}
                      target="_blank"
                      className="flex items-start min-w-80 space-x-4 p-2 rounded-md"
                    >
                      <div className="p-3 bg-(--background-primary) rounded-lg border border-(--border-primary) text-(--text-secondary)">
                        <obj.icon />
                      </div>
                      <div>
                        <p className="text-sm text-(--text-secondary) font-medium mb-1">
                          {obj.description}
                        </p>
                        <p className="text-md leading-relaxed">{obj.title}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-(--border-primary)">
              <p className="text-sm text-(--text-secondary) font-medium mb-4">
                Follow our socials
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Globe, label: "Website", href: homeRoute },
                  {
                    icon: Whatsapp,
                    label: "Whatsapp",
                    href: whatsappCommunityRoute,
                  },
                  {
                    icon: InstagramIcon,
                    label: "Instagram",
                    href: ACMInstagram,
                  },
                ].map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href || "#"}
                    className="p-3 bg-(--background-primary) border border-(--border-primary) rounded-lg text-(--text-secondary) hover:text-(--accent-primary) hover:border-(--accent-primary) hover:shadow-[0_0_15px_var(--shadow-primary) transition-all duration-300"
                    aria-label={social.label}
                    target="_blank"
                  >
                    <social.icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
