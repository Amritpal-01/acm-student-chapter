export interface CodeEditorProps {
  filePath?: string;
  lines?: Array<{ content: React.ReactNode; indentClass?: string }>;
  status?: string;
  encoding?: string;
  language?: string;
  languageColor?: string;
  fontSize?: string;
  lineSpacing?: string;
  className?: string;
}

const CodeEditor = ({
  filePath,
  lines = [],
  status = "stable",
  encoding = "UTF-8",
  language = "TypeScript",
  languageColor = "text-[#00e5ff]",
  fontSize = "text-[13px] md:text-sm",
  lineSpacing = "leading-loose",
  className = "",
}: CodeEditorProps) => {
  return (
    <div
      className={`relative bg-(--background-secondary)/40 sm:pb-0 rounded-lg border border-(--border-primary) shadow-2xl font-heading ${fontSize} ${className}`}
    >
      {/* Editor Header */}
      <div className="bg-(--background-primary)/20 border-b border-(--border-primary) px-4 py-3 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        {filePath && (
          <div className="text-gray-500 text-xs tracking-wider absolute left-1/2 -translate-x-1/2 hidden sm:block">
            {filePath}
          </div>
        )}
        <div className="w-12"></div> {/* Spacer for center alignment */}
      </div>

      {/* Editor Content */}
      <div className="p-4 md:p-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody className={lineSpacing}>
            {lines.map((line, index) => (
              <tr key={index}>
                <td className="w-8 text-center  pr-4 text-gray-600 select-none">
                  {(index + 1).toString().padStart(2, "0")}
                </td>
                <td className={`text-(--text-primary) whitespace-pre ${line.indentClass || ""}`}>
                  {line.content}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Editor Footer */}
      <div className="bg-(--background-secondary)/20 border-t border-(--border-primary) px-4 py-2 flex justify-between items-center text-[10px] md:text-xs text-gray-500 ">
        <div>{status}</div>
        <div className="flex gap-4">
          <span>{encoding}</span>
          <span className={languageColor}>{language}</span>
        </div>
      </div>

      {/* Floating 'Staged Modules' Panel */}
        <div className="absolute left-0 sm:-left-4 md:-left-12 -bottom-16 sm:-bottom-6 bg-(--background-secondary)/60 backdrop-blur-lg border border-(--border-primary) rounded-lg p-4 sm:p-5 shadow-2xl scale-90 sm:scale-100 origin-bottom-left">
          <h4 className="text-(--accent-primary) text-[10px] font-bold tracking-widest uppercase mb-4">
            Staged_Modules
          </h4>
          <ul className="space-y-3">
            {["REACT.TSX", "THREE_JS.GLB", "TAILWIND.CONFIG"].map(
              (module, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-(--accent-tertiary) shadow-[0_0_8px_#39ff14]"></div>
                  <span className="text-(--text-secondary) text-[11px] font-bold tracking-wider">
                    {module}
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>
    </div>
  );
};

export default CodeEditor;