import { CheckCircle, FlaskConical } from "lucide-react";
import Link from "next/link";

export interface BaseTerminalCardProps {
  icon: any;
  fileName: string;
  isReady: boolean;
  title: string;
  description: string;
  link: string;
  tools: string[];
}

const BaseTerminalCard: React.FC<BaseTerminalCardProps> = ({
  description,
  icon,
  isReady,
  link,
  title,
  fileName,
  tools,
}) => {
  return (
    <div className="bg-[#171a21] scale-on-hover border border-(--border-primary) rounded-xl flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 rounded-t-xl border-b border-(--border-primary) bg-[#12141a]">
        <div className="flex items-center gap-2 text-xs text-(--text-secondary)">
          {icon}
          {fileName}
        </div>
        {isReady && (
          <div className="w-2 h-2 rounded-full bg-(--text-primary)"></div>
        )}
      </div>

      <div className="p-8 flex flex-col grow">
        <h2 className="text-(--text-primary) text-xl font-semibold mb-4 tracking-wide">
          {title}
        </h2>
        <p className="text-(--text-secondary) text-sm leading-relaxed mb-6">
          // {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {tools.map((tool) => {
            return (
              <span key={tool} className="px-3 py-1 rounded bg-(--accent-tertiary)/10 text-(--accent-tertiary)/60 text-[10px] uppercase tracking-widest font-semisemibold">
                {tool}
              </span>
            );
          })}
        </div>

        <div className="mt-auto pt-6 border-t border-(--border-primary) flex items-center justify-between">
          <Link
            href={link}
            className="text-(--accent-tertiary) text-xs tracking-wider font-semisemibold"
          >
            EXECUTABLE_LINK
          </Link>
          {isReady ? (
            <CheckCircle size={16} className="text-(--text-secondary)" />
          ) : (
            <FlaskConical size={16} className="text-(--background-secondary)" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BaseTerminalCard