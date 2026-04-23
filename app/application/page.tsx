"use client";
import { contactRoute } from "@/constants/routes";
import { useNotify } from "@/context/NotifyContext";
import {
  BriefcaseIcon,
  ChevronDownCircleIcon,
  CpuIcon,
  LucideIcon,
  MegaphoneIcon,
  PaintbrushIcon,
} from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type roleType = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const roles: roleType[] = [
  {
    title: "Content Team Lead",
    description:
      "Drive the chapter’s storytelling strategy and manage social media channels to build brand authority and keep the community engaged.",
    Icon: MegaphoneIcon,
  },
  {
    title: "Design Team Lead",
    description:
      "Define the visual identity and UI/UX standards while leading a creative team to ensure assets are professional and accessible.",
    Icon: PaintbrushIcon,
  },
  {
    title: "Management Team Lead",
    description:
      "Orchestrate the operational engine of the chapter, focusing on logistics and ensuring every technical and social event runs seamlessly.",
    Icon: BriefcaseIcon,
  },
  {
    title: "Technical Team Lead",
    description:
      "Spearhead technical workshops and coding challenges to bridge the gap between classroom theory and real-world software engineering.",
    Icon: CpuIcon,
  },
];

type applicationPayloadType = {
  email: string;
  full_name: string;
  justification: string;
  skill: string[];
  course_name: string;
  study_year: string;
};

type formPayloadType = {
  email: string;
  full_name: string;
  justification: string;
  skill: string[];
  course_name: string;
  study_year: string;
  role: string;
};

type radioInputType = {
  title: string;
  description: string;
};

export default function ApplicationForm() {
  const [radioInputValue, setRadioInputValue] = useState<radioInputType | null>(
    null,
  );
  const [showYearSelection, setShowYearSelection] = useState<boolean>(false);
  const Notify = useNotify();


  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<applicationPayloadType>();

  const watchedYear = watch("study_year");

  const onSubmit: SubmitHandler<applicationPayloadType> = async (
    data: applicationPayloadType,
  ) => {
    if (radioInputValue == null) {
      const roleSection = document.getElementById("role");
      roleSection?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const payloads: formPayloadType = {
      ...data,
      role: radioInputValue.title,
    };


    try {
      const res = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloads),
      });

      if (res.ok) {
        Notify.addToQueue({
          message: "Application submitted successfully!"
        })
        reset();
        setRadioInputValue(null);
      } else {
        const errorData = await res.json();
        Notify.addToQueue( { message : `Error: ${errorData.error || 'Submission failed'}`});
      }
    } catch (error) {
      Notify.addToQueue({message: "Network error. Please try again."});
    }
  };

  return (
    <div className="relative text-(--text-primary)  flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-5xl w-full space-y-16"
      >
        {/* 01. CANDIDATE DETAILS */}
        <section>
          <h2 className="text-(--accent-primary) font-semibold text-sm tracking-wider uppercase mb-6">
            01. Candidate Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 py-2">
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
          <div className="flex flex-wrap max-sm:flex-col gap-x-8 gap-y-4 py-2">
            <div className="space-y-2 flex-1">
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
            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-wide uppercase text-(--text-primary)">
                Select Year of Study
              </label>
              <div
                onClick={() => {
                  setShowYearSelection((prev) => !prev);
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  placeholder="Year of Study"
                  readOnly
                  className=" w-full bg-(--background-secondary) backdrop-blur-lg border border-(--border-primary) rounded-md p-4 text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-(--accent-primary) focus:ring-1 focus:ring-(--accent-primary) transition-colors cursor-pointer"
                  {...register("study_year", { required: true })}
                />
                <div className="absolute right-2">
                  <ChevronDownCircleIcon
                    className={`${showYearSelection && "text-(--accent-primary) rotate-180"}  transition-all duration-150`}
                  />
                </div>
                <div
                  className={`absolute p-2 ${!showYearSelection && "h-0 opacity-0 overflow-hidden"} z-20 w-full rounded-lg border border-(--border-primary) bg-(--background-primary) top-[calc(100%+0.5rem)] left-0`}
                >
                  <div className="flex flex-col gap-1">
                    {[
                      "1st Year",
                      "2nd Year",
                      "3rd Year",
                      "4th Year",
                      "Postgraduate",
                    ].map((str) => {
                      return (
                        <div
                          onClick={() => {
                            if (str == watchedYear) {
                              setValue("study_year", "");
                              setShowYearSelection(false);
                            } else {
                              setValue("study_year", str);
                            }
                          }}
                          key={str}
                          className={`cursor-pointer p-2 rounded-lg w-full hover:bg-(--background-tertiary) ${str == watchedYear && "bg-(--background-tertiary)"} border border-(--border-primary)/20`}
                        >
                          {str}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. SELECT ROLE */}
        <section id="role">
          <h2 className="text-(--accent-primary) font-semibold text-sm tracking-wider uppercase mb-6">
            02. Select Role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map(({ title, description, Icon }: roleType) => {
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
                    <Icon className={`group-hover:text-(--accent-primary)`} />
                    <div
                      className={`appearance-none w-5 h-5 rounded-full border  ${checked ? " border-(--accent-primary) border-[6px] " : "border-(--text-secondary)"} transition-all bg-(--background-primary) outline-none`}
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
            03. Practical Attributes
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              "TECHNICAL LITERACY",
              "GRAPHIC DESIGN",
              "COMMUNITY MANAGEMENT",
              "PUBLIC SPEAKING",
              "UI/UX DESIGN",
              "COPYWRITING",
              "WEB DEVELOPMENT",
              "PROJECT MANAGEMENT",
              "SOCIAL MEDIA STRATEGY",
              "SYSTEM TROUBLESHOOTING",
              "DATA MANAGEMENT",
              "VIDEO PRODUCTION",
              "FINANCIAL PLANNING",
              "DIGITAL ASSET MANAGEMENT",
            ].map((skill) => (
              <label key={skill} className="cursor-pointer group">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  {...register("skill")}
                  value={skill}
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
              <span className="text-(--text-secondary)">{" - this field is completely optional, we want students not professional"}</span>
            </label>
            <textarea
              placeholder="Detail your experience, technical background, and vision for the chapter..."
              className="w-full h-40 resize-none bg-(--background-secondary) backdrop-blur-lg border border-(--border-primary) rounded-md p-5 text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-(--accent-primary) focus:ring-1 focus:ring-(--accent-primary) transition-colors"
              {...register("justification")}
            ></textarea>
          </div>
        </section>

        {/* SUBMIT BUTTON */}
        <div className="flex flex-col gap-2 items-end -mt-8">
          <button
            type="submit"
            className="primary-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}
