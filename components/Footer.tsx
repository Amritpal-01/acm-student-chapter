import { socials } from '@/constants/routes'
import { SCM_THEME } from '@/constants/theme'
import InstagramIcon from '@/icons/InstagramIcon'
import LinkedInIcon from '@/icons/LinkedInIcon'
import Whatsapp from '@/icons/Whatsapp'
import { Globe } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col'>
        {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-(--border-primary)">
              <p className="text-sm text-(--text-secondary) font-medium mb-4">
                Follow our socials
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Globe, label: "Website", href: socials.officialWebsite },
                  {
                    icon: Whatsapp,
                    label: "Whatsapp",
                    href: socials.whatsappCommunityLink,
                  },
                  {
                    icon: InstagramIcon,
                    label: "Instagram",
                    href: socials.instagramProfile,
                  },{
                    icon: LinkedInIcon,
                    label: "LinkedIn",
                    href: socials.linkedinProfile
                  }
                ].map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href || "#"}
                    className="p-3 bg-(--background-primary) border border-(--border-primary) rounded-lg text-(--text-secondary) hover:text-(--accent-primary) hover:border-(--accent-primary) hover:shadow-[0_0_15px_var(--shadow-primary) transition-all duration-300"
                    aria-label={social.label}
                    target="_blank"
                  >
                    <social.icon color={SCM_THEME.textSecondary} side={24}/>
                  </Link>
                ))}
              </div>
            </div>
            <h4 className='text-sm text-(--text-secondary) py-2'>
                ACM Student Chapter - University College Birmingham | All Right Reserved @ 2026
            </h4>
    </div>
  )
}

export default Footer