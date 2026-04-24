"use client";
import menuItems from "@/constants/menuItems";
import { menuItemType } from "@/types/type";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";
import { homeRoute } from "@/constants/routes";

const genMenuItem = (item: menuItemType) => {
  const URLPath = usePathname();
  const Icon = item.icon;

  return (
    <Link
      href={item.url}
      key={item.name}
      className={`flex flex-row items-center justify-center w-full p-2 hover:cursor-pointer ${URLPath == item.url ? "[&>div]:h-full" : ""} hover:[&>span]:h-full relative`}
    >
      <Icon
        className={`text-md ${URLPath == item.url ? "text-(--accent-primary)" : "text-(--text-secondary)"}`}
      />
      <span className="w-full h-0 transition-all absolute left-0 bg-white/5">
        <section className="h-full w-1 bg-(--accent-secondary)"></section>
      </span>
      <div className="w-full h-0 transition-all absolute left-0 bg-white/5">
        <section className="h-full w-1 bg-(--accent-primary)"></section>
      </div>
    </Link>
  );
};

const NavbarLeft: React.FC = () => {
  const URLPath = usePathname();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const onlyView = searchParams.get("onlyView");

  if (onlyView === "1") return null;

  return (
    <div className="flex lg:hidden">
      <div
        className={`flex flex-col border-r border-(--border-primary) ${toggleMenu ? "w-0" : "w-14"} transition-all duration-150 overflow-hidden`}
      >
        <Link
          href={homeRoute}
          className={`font-heading ${URLPath == homeRoute ? "text-(--accent-primary) font-bold" : "text-(--text-secondary) font-light"} text-[12px] w-full my-10 flex justify-center`}
        >{`DIR`}</Link>
        <div className="flex flex-col gap-4">
          {menuItems.map((item) => genMenuItem(item))}
        </div>
      </div>
      <button
        onClick={() => {
          setToggleMenu((prev) => !prev);
        }}
        className=""
      >
        <ChevronDownIcon
          className={`${!toggleMenu ? "rotate-90" : "-rotate-90"} transition-all duration-150`}
        />
      </button>
    </div>
  );
};

export default NavbarLeft;
