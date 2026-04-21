"use client";
import PrimaryButton from "@/components/PrimaryButton";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type roleType = {
  title: string;
  description: string;
};

const roles: roleType[] = [
  {
    title: "Webmaster",
    description:
      "Architect and maintain the chapter's digital infrastructure and web presence.",
  },
  {
    title: "Membership Chair",
    description:
      "Drive recruitment, manage member data, and foster a thriving community environment.",
  },
  {
    title: "Publicity Chair",
    description:
      "Manage social media channels, design promotional materials, and build brand awareness.",
  },
  {
    title: "Event Coordinator",
    description:
      "Plan logistics, secure venues, and execute flawless technical and social events.",
  },
  {
    title: "echnical Lead",
    description:
      "Spearhead coding workshops, hackathons, and curate advanced technical content.",
  },
];

type applicationPayloadType = {
  email: string;
  full_name: string;
  justification: string;
  skill: string[];
};

export default function ApplicationForm() {
  const [radioInputValue, setRadioInputValue] = useState<roleType | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<any>();
  const onSubmit: SubmitHandler<applicationPayloadType> = (
    data: applicationPayloadType,
  ) => {
    if(radioInputValue == null){
      console.log('null')
      const roleSection = document.getElementById("role")
      roleSection?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const payloads = {
      ...data,
      role: radioInputValue,
    };

    console.log(payloads);
  };

  return (
    <div className=" text-(--text-primary)  flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-5xl w-full space-y-16"
      >
        {/* 01. CANDIDATE DETAILS */}
        <section>
          <h2 className="text-(--accent-primary) font-semibold text-sm tracking-wider uppercase mb-6">
            01. Candidate Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-wide uppercase text-(--text-primary)">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-(--background-secondary) backdrop-blur-lg border border-(--border-primary) rounded-md p-4 text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-(--accent-primary) focus:ring-1 focus:ring-(--accent-primary) transition-colors"
                {...register("full_name", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-wide uppercase text-(--text-primary)">
                Student Email
              </label>
              <input
                type="email"
                placeholder="student_id@student.ucb.ac.uk"
                className="w-full bg-(--background-secondary) backdrop-blur-lg border border-(--border-primary) rounded-md p-4 text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-(--accent-primary) focus:ring-1 focus:ring-(--accent-primary) transition-colors"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wide uppercase text-(--text-primary)">
              Course Name
            </label>
            <input
              type="text"
              placeholder="BSc Computer Science (may be)"
              className="w-full bg-(--background-secondary) backdrop-blur-lg border border-(--border-primary) rounded-md p-4 text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-(--accent-primary) focus:ring-1 focus:ring-(--accent-primary) transition-colors"
              {...register("course_name", { required: true })}
            />
          </div>
        </section>

        {/* 02. SELECT ROLE */}
        <section id="role">
          <h2 className="text-(--accent-primary) font-semibold text-sm tracking-wider uppercase mb-6">
            02. Select Role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map(({ title, description }: roleType) => {
              const currentInput = { title, description };
              const checked = currentInput.title == radioInputValue?.title;
              return (
                <label
                  key={title}
                  className={`relative cursor-pointer transition-all duration-300 ${checked ? "bg-(--background-tertiary) border-(--accent-primary)" : "bg-(--background-secondary) border-(--border-primary)"} backdrop-blur-lg border  rounded-xl p-6 hover:border-(--accent-primary) transition-all flex flex-col h-full group`}
                  onClick={(e) => {
                    if (checked) {
                      setRadioInputValue(null);
                      return;
                    }
                    setRadioInputValue(currentInput);
                  }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <svg
                      className="w-6 h-6 text-(--accent-primary)"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    <div
                      className={`appearance-none w-5 h-5 rounded-full border border-(--text-secondary) ${checked && " border-(--accent-primary) border-[6px] "} transition-all bg-(--background-primary) outline-none`}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-(--text-primary) group-hover:text-(--accent-primary) transition-colors">
                    {title}
                  </h3>
                  <p className="text-(--text-secondary) text-sm leading-relaxed">
                    {description}
                  </p>
                </label>
              );
            })}
          </div>
        </section>

        {/* 03. TECHNICAL ATTRIBUTES */}
        <section>
          <h2 className="text-(--accent-primary) font-semibold text-sm tracking-wider uppercase mb-6">
            03. Technical Attributes
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              "WEB DEVELOPMENT",
              "GRAPHIC DESIGN",
              "COMMUNITY MANAGEMENT",
              "PYTHON",
              "PUBLIC SPEAKING",
              "REACT / VUE",
              "CLOUD ARCHITECTURE",
            ].map((skill) => (
              <label key={skill} className="cursor-pointer group">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  {...register("skill", { required: false })}
                />
                <span className="inline-block px-5 py-2.5 rounded-full bg-(--background-secondary) backdrop-blur-lg border border-(--border-primary) text-(--text-secondary) text-xs font-semibold tracking-wide group-hover:border-(--accent-primary) peer-checked:bg-(--accent-primary) peer-checked:text-(--background-primary) peer-checked:border-(--accent-primary) transition-all">
                  {skill}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* 04. INTENT & LOGIC */}
        <section>
          <h2 className="text-(--accent-primary) font-semibold text-sm tracking-wider uppercase mb-6">
            04. Intent & Logic
          </h2>
          <div className="space-y-4">
            <label className="text-xs font-semibold tracking-wide uppercase text-(--text-primary) block">
              Why are you a good fit for this role?
            </label>
            <textarea
              placeholder="Detail your experience, technical background, and vision for the chapter..."
              className="w-full h-40 resize-none bg-(--background-secondary) backdrop-blur-lg border border-(--border-primary) rounded-md p-5 text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-(--accent-primary) focus:ring-1 focus:ring-(--accent-primary) transition-colors"
              {...register("justification", { required: true })}
            ></textarea>
          </div>
        </section>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end pt-8">
          <button>
            <PrimaryButton text="Submit Application" />
          </button>
        </div>
      </form>
    </div>
  );
}
