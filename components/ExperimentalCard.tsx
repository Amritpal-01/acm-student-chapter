export interface ExperimentalCardProps {
  title: string;
  description: string;
  metadata: {
    version: string;
    lang: string;
    framework: string;
  };
  project: React.ComponentType<any>;
}


const ExperimentalCard: React.FC<ExperimentalCardProps> = ({
  project,
  description,
  metadata,
  title,
}) => {
  const Project = project;
  return (
    <div className="scale-on-hover-red render-animation lg:col-span-2 bg-(--background-secondary) border border-(--border-primary) rounded-xl overflow-hidden flex flex-col md:flex-row relative">
      {/* Subtle background tech pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none"></div>

      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center z-10">
        <div className="mb-4">
          <span className="text-(--accent-secondary) text-xs tracking-[0.2em] font-semibold uppercase">
            Experimental // 04
          </span>
        </div>

        <h2 className="text-(--text-primary) text-4xl font-semibold tracking-tight mb-4">
          {title}
        </h2>

        <p className="text-(--text-secondary) text-sm leading-relaxed mb-8 pr-4">
          {description}
        </p>

        <div className="mt-auto text-xs text-(--text-secondary) tracking-wider">
          {metadata.version} &nbsp;//&nbsp; {metadata.lang} &nbsp;{" "}
          {metadata.framework}
        </div>
      </div>

      <div className="w-full md:w-1/2 p-6 flex items-center justify-center z-10 bg-(--background-primary)/50">
        <Project/>
      </div>
    </div>
  );
};

export default ExperimentalCard;