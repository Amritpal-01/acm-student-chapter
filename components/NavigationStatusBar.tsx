"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import saperateURLPath from "@/functions/saperateURLPath";
import Link from "next/link";
import { checkpointMap } from "@/types/type";
import menuItems from "@/constants/menuItems";

const NavigationStatusBar: React.FC = () => {
  const URLPath = usePathname();
    const searchParams = useSearchParams();
  
    const onlyView = searchParams.get("onlyView");
  
    if (onlyView === "1") return null;

  return (
    <div
      id="navigation-display"
      className={`flex flex-col gap-3 justify-between px-10 py-4 sm:py-2 text-sm font-thin backdrop-blur-md border-b border-(--border-primary)`}
    >
      <div className="flex">
        <div className="flex">
          <Link
            className={`pr-2 ${URLPath == "/" ? "text-(--text-primary)" : "text-(--text-secondary)"}`}
            href={"/"}
          >{`~/ROOT/UCB_ACM`}</Link>
          <span className="flex text-(--text-primary)">
            {(saperateURLPath(URLPath) as checkpointMap[]).map(
              (check: checkpointMap) => {
                return (
                  <Link href={check.url} key={check.checkpoint}>
                    {check.checkpoint}/&nbsp;
                  </Link>
                );
              },
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavigationStatusBar;
