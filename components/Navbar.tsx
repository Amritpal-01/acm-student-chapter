"use client";
import React from "react";
import menuItems from "@/constants/menuItems";
import Link from "next/link";
import { menuItemType } from "@/types/type";
import { applicationRoute, homeRoute } from "@/constants/routes";
import { ArrowRight } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

const genItem: any = (menuItem: menuItemType) => {
  const currentPath = usePathname();
  const searchParams = useSearchParams();

  const onlyView = searchParams.get("onlyView");

  if (onlyView === "1") return null;

  return (
    <Link
      href={menuItem.url}
      key={menuItem.name}
      id={menuItem.name}
      className={`h-6 flex items-center justify-around hover:[&>div]:w-full hover:[&>div]:bg-(--text-primary) hover:text-(--text-primary) ${currentPath == menuItem.url ? "[&>div]:w-full [&>div]:bg-(--accent-primary) text-(--accent-primary)" : "text-(--text-secondary)"} relative`}
    >
      <h1 className="text-sm font-semibold">{menuItem.name.toUpperCase()}</h1>
      <div className="absolute bottom-0 w-0 h-0.5  transition-all" />
    </Link>
  );
};

const resumeButton = {
  handler: () => {
    console.log("resumeButtonHandler: clicked");
  },
  text: "resume.exe",
};

const Navbar: React.FC = () => {
  return (
    <div className="h-16 hidden lg:flex text-(--text-primary) font-heading items-center justify-between px-20 py-3 shadow-white/1 shadow-xl backdrop-blur-lg border-b border-(--border-primary)">
      <Link
        href={homeRoute}
        className="min-w-60 flex flex-col items-start"
        id="logo"
      >
        <h1 className="text-lg font-bold text-white/80 -mb-1 tracking-tight">
          ACM <span className="text-white/40 font-light">Student Chapter</span>
        </h1>
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold">
          University College Birmingham
        </h2>
      </Link>
      <ul className="flex gap-8">
        {menuItems.map((menuItem) => genItem(menuItem))}
      </ul>
      <div className="min-w-60 flex justify-end items-center gap-5">
        <Link
          href={applicationRoute}
          className=" max-lg:hidden primary-accent-button text-sm font-bold flex items-center gap-2 py-2 px-5 rounded-full hover:bg-(--accent-primary) hover:text-white transition-all duration-300"
        >
          Join Chapter <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
