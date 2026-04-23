"use client";
import CodeEditor from "@/components/CodeEditor";
import PrimaryButton from "@/components/PrimaryButton";
import TertiaryButton from "@/components/TertiaryButton";
import AnimateWords from "@/functions/AnimateWords";
import MouseInteractions from "@/functions/MouseInteractions";
import Link from "next/link";
import {
  FlaskConical,
  TrendingUp,
  Users,
  TerminalSquare,
  Award,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import {
  aboutRoute,
  applicationRoute,
  whatsappCommunityRoute,
} from "@/constants/routes";
import { SCM_THEME } from "@/constants/theme";
import { motion, translateAxis } from "motion/react";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  href?: string;
  index: number;
}

const editorLines = [
  {
    content: (
      <>
        <span className="text-(--accent-tertiary)">Import-Module</span>{" "}
        <span className="text-(--text-secondary)">ACM.StudentChapter</span>
      </>
    ),
  },
  { content: "" },
  {
    content: (
      <>
        <span className="text-(--text-secondary)">
          # Define Chapter Ambitions & Mission
        </span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="text-(--accent-primary)">$Ambition</span> = @{"{"}
      </>
    ),
  },
  {
    content: (
      <>
        Purpose ={" "}
        <span className="text-(--text-secondary)">
          "Scientific and Educational"
        </span>
        ;
      </>
    ),
    indentClass: "pl-4",
  },
  {
    content: (
      <>
        Focus ={" "}
        <span className="text-(--text-secondary)">
          @("Science", "Design", "Development", "Management")
        </span>
        ;
      </>
    ),
    indentClass: "pl-4",
  },
  {
    content: (
      <>
        Outreach ={" "}
        <span className="text-(--text-secondary)">
          @("TechTalks", "Workshops", "CommunityService")
        </span>
        ;
      </>
    ),
    indentClass: "pl-4",
  },
  {
    content: (
      <>
        Status =
        <span className="text-(--text-secondary)">
          <AnimateWords.StringProp
            text={`"Promoting knowledge and communication between computing enthusiasts."`}
            speed={50}
          />
        </span>
      </>
    ),
    indentClass: "pl-4",
  },
  { content: <>{"}"}</> },
  { content: "" },
  {
    content: (
      <>
        <span className="text-(--accent-primary)">$Ambition</span> |{" "}
        <span className="text-(--accent-tertiary)">Invoke-ChapterGrowth</span>{" "}
        -FosterInnovation
      </>
    ),
  },
];

const PillarCard: React.FC<PillarCardProps> = ({
  icon: Icon,
  title,
  description,
  linkText,
  href,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.4,
      scale: {
        type: "spring",
        visualDuration: 0.4,
        bounce: 0.4,
        delay: index / 10,
      },
    }}
    viewport={{ once: true }}
    className="relative group backdrop-blur-lg bg-(--background-tertiary) rounded-2xl p-8 border border-(--border-primary) overflow-hidden flex flex-col h-full transition-colors"
  >
    {/* Subtle top glow effect */}
    <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-(--accent-secondary)/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-(--border-primary)">
      <Icon className="w-5 h-5 text-(--accent-secondary)" />
    </div>

    <h3 className="text-(--text-primary) text-xl font-bold mb-4 tracking-wide">
      {title}
    </h3>
    <p className="text-(--text-secondary) text-sm leading-relaxed mb-8 grow">
      {description}
    </p>

    <Link
      target="_blank"
      href={href || "#"}
      className="inline-flex items-center gap-2 text-(--accent-secondary) text-xs font-semibold tracking-widest uppercase group-hover:text-(--text-primary) transition-colors mt-auto w-fit"
    >
      {linkText}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </Link>
  </motion.div>
);

interface SideFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SideFeatureCard: React.FC<SideFeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="bg-(--background-secondary) rounded-2xl p-8 border border-(--border-primary) flex flex-col justify-center transition-colors hover:bg-(--background-tertiary)">
    <div className="w-10 h-10 mb-6 flex items-center justify-center">
      <Icon className="w-6 h-6 text-(--accent-secondary)" />
    </div>
    <h3 className="text-(--text-primary) text-lg font-bold mb-3 tracking-wide">
      {title}
    </h3>
    <p className="text-(--text-secondary) text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full not-lg:flex-col justify-around items-center slow-scroll">
        {/* Left Column: Typography and Controls */}
        <div className="flex flex-col">
          {/* Version Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-0.5 w-12 bg-(--accent-primary)"></div>
            <span className="text-(--accent-primary) text-xs font-bold tracking-[0.2em] uppercase">
              <AnimateWords.StringProp
                text="Deployed_Version_0.4.0"
                speed={150}
              />
            </span>
          </div>

          <div className="transition-all text-2xl sm:text-3xl md:text-4xl font-bold mb-2 whitespace-pre bg-linear-to-b from-(--text-primary) to-(--accent-primary) bg-clip-text text-transparent">
            <AnimateWords.ArrayOfStringProps
              array={[
                "ASSOCIATION FOR",
                "COMPUTER MACHINARY",
                "- STUDENT CHAPTER",
              ]}
              speed={50}
            />
          </div>

          {/* Body Text */}
          <p className="text-(--text-secondary) text-md max-w-lg leading-relaxed mb-8">
            An ACM Student Chapter is a local, university-based branch of the
            Association for Computing Machinery (ACM). We offer networking,
            technical workshops, hackathons, and mentorship, bridging the gap
            between academic study and industry practice for members
          </p>

          {/* Current Focus Section */}
          <div className="mb-12">
            <h3 className="text-(--text-secondary) text-xs font-bold tracking-[0.15em] mb-3 uppercase">
              Current_Focus
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-(--button-accent-primary) text-(--text-primary) text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[0_0_15px_rgba(232,0,200,0.3)] cursor-default">
                Introduction
              </span>
              <span className="bg-(--button-accent-secondary) border border-(--border-primary) text-(--text-primary) text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase hover:bg-gray-800 transition-colors cursor-default">
                Tech Events
              </span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 mt-4 sm:mt-2">
            <Link href={applicationRoute}>
              <PrimaryButton text="Become a member" />
            </Link>
            <Link href={aboutRoute}>
              <TertiaryButton text="About Us  →" />
            </Link>
          </div>
        </div>

        {/* Right Column: Code Editor Component */}
        <div className="relative mt-16 lg:mt-0 lg:ml-12 w-full max-w-175 mx-auto lg:mx-0">
          <MouseInteractions>
            <CodeEditor
              filePath="~/acm-student-chepter/bin/greeting.ps1"
              lines={editorLines}
              status="stable"
              encoding="UTF-8"
              language="powershell"
              languageColor="text-(--accent-primary)"
              fontSize="text-[13px] md:text-sm"
              lineSpacing="leading-loose"
            />
          </MouseInteractions>

          {/* Subtle glow behind the editor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-tr from-(--accent-primary)/5 via-transparent to-[#e800c8]/5 blur-3xl -z-10 rounded-full pointer-events-none"></div>
        </div>
      </div>

      <div className="py-20 w-full">
        <svg
          className="w-full "
          viewBox="0 0 913 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 44L456.5 0L913 44L456.5 2.5L0 44Z"
            fill="url(#paint0_linear_573_303)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_573_303"
              x1="0"
              y1="24.5"
              x2="913"
              y2="24.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={SCM_THEME.accentPrimary} stopOpacity="0.1" />
              <stop offset="0.5" stopColor={SCM_THEME.accentPrimary} />
              <stop
                offset="1"
                stopColor={SCM_THEME.accentPrimary}
                stopOpacity="0.1"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <section className="">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", bounce: 0.4 },
              }}
              viewport={{ once: true }}
              className="text-(--accent-secondary) text-xs uppercase font-semibold mb-6"
            >
              Core Architecture
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                position: { type: "spring", bounce: 0.4 },
              }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-primary)"
            >
              Three Pillars of
              <br />
              Growth.
            </motion.h2>
          </div>
          <p className="text-(--text-secondary) max-w-sm text-sm leading-relaxed pb-2">
            Our foundation is built on the intersection of discovery, industry
            readiness, and collective intelligence.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PillarCard
            icon={FlaskConical}
            title="Research"
            description="Pushing the boundaries of what's computable. From AI ethics to distributed systems, we foster a culture of academic curiosity and technical rigor."
            linkText="View Projects"
            index={1}
          />
          <PillarCard
            icon={TrendingUp}
            title="Career Dev"
            description="Bridging the gap between the classroom and the terminal. Workshops, resume critiques, and direct industry pipelines for top-tier internships."
            linkText="Resource Hub"
            index={2}
          />
          <PillarCard
            icon={Users}
            title="Community"
            description="The human element of hardware. A network of hackers, thinkers, and builders working together to solve problems that matter."
            linkText="Join Our Whatsapp Community"
            href={whatsappCommunityRoute}
            index={3}
          />
        </div>
      </section>

      {/* SECTION 2: Infrastructure */}
      <section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-125">
          {/* Main Feature - Left (Spans 2 columns) */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-(--border-primary) group min-h-125 lg:min-h-0 flex flex-col justify-end p-8 md:p-12">
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0 bg-(--background-secondary)">
              {/* Using an Unsplash placeholder that looks like a dark tech setup */}
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                alt="Tech Infrastructure Workspace"
                className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Complex gradient overlay to recreate the image's lighting */}
              <div className="absolute inset-0 bg-linear-to-t from-(--background-secondary) via-(--background-secondary) to-transparent"></div>
              <div className="absolute inset-0 bg-linear-to-r from-(--background-secondary) via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-(--accent-secondary)"></div>
                <p className="text-(--accent-secondary) text-xs tracking-[0.2em] uppercase font-semibold">
                  Inside the Hub
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight mb-6">
                Access World-Class Tech
                <br className="hidden md:block" /> Infrastructure.
              </h2>

              <p className="text-(--text-secondary) text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                From server access for deep learning models to collaborative
                development spaces, we provide the tools needed to build the
                future.
              </p>

              {/* <button className="px-6 py-3.5 bg-white/5 hover:bg-[#20252e] border border-white/10 rounded-lg text-white text-xs tracking-wider uppercase transition-all flex items-center gap-2 group/btn">
                Request Portal Access
              </button> */}
            </div>
          </div>

          {/* Side Features - Right (Stacked) */}
          <div className="flex flex-col gap-6 h-full">
            <SideFeatureCard
              icon={TerminalSquare}
              title="Code Audits"
              description="Get peer reviews from senior developers and improve your technical footprint."
            />
            <SideFeatureCard
              icon={Award}
              title="Member Perks"
              description="Unlock exclusive access to ACM Digital Library and premium developer toolkits."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
