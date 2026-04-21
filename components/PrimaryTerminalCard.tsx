import AnimateWords, { TextTypingAnimation } from "@/functions/AnimateWords";
import Link from "next/link";

export interface PrimaryTerminalCardProps {
  fileName: string;
  fileSize: string;
  title: string;
  description: string;
  links: {
    icon: any;
    text: string;
    url: string;
  }[];
  tools: string[];
}

const PrimaryTerminalCard: React.FC<PrimaryTerminalCardProps> = ({
  description,
  fileName,
  fileSize,
  links,
  title,
  tools,
}) => {

  const TextAnimation = AnimateWords.StringProp;

  return (
    <div className="scale-on-hover-red lg:col-span-2 bg-(--background-secondary) border border-(--border-primary) rounded-xl overflow-hidden flex flex-col">
      {/* Mac-style Window Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-(--border-primary) bg-(--background-primary)">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-(--text-secondary)/60"></div>
          <div className="w-3 h-3 rounded-full bg-(--text-secondary)/60"></div>
          <div className="w-3 h-3 rounded-full bg-(--text-secondary)/60"></div>
        </div>
        <span className="text-xs text-(--text-secondary) tracking-wider">
          {fileName} — {fileSize}
        </span>
      </div>

      <div className="flex flex-col md:flex-row grow relative">
        {/* Simulated Blurred Code Area (Left) */}
        <div className="hidden md:block w-2/5 relative overflow-hidden bg-(background-primary) whitespace-pre">
          <div className="absolute inset-0 p-6 text-[10px] text-(--text-secondary) leading-relaxed blur-[1.5px] select-none">
            {`fn initialize_node() -> Result<(), NodeError> {
    let mut config = NodeConfig::default();
    config.set_timeout(Duration::from_secs(30));
    
    // Establishing secure handshake
    if let Err(e) = perform_handshake(&config) {
        log::error!("Handshake failed: {}", e);
        return Err(NodeError::Handshake(e));
    }

    let ledger = DistributedLedger::new();
    ledger.sync_state(SyncMode::Aggressive)?;
    
    let runtime = tokio::runtime::Builder::new_multi_thread()
        .enable_all()
        .build()
        .unwrap();

    runtime.block_on(async {
        loop {
            match receive_packet().await {
                Ok(packet) => process(packet),
                Err(_) => continue,
            }
        }
    });
}`}
          </div>
          {/* Gradient fade to blend into the right content area */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-black/60 to-(--background-secondary)"></div>
        </div>

        {/* Content Area (Right) */}
        <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-(--accent-primary) text-2xl font-semibold">
              01 //
            </span>
            <span className="text-(--text-primary) text-3xl font-semibold tracking-tight">
              <TextTypingAnimation text={title} speed={100} />
            </span>
          </div>

          <p className="text-(--text-secondary) text-sm leading-relaxed mb-8">
            /* {description} */
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {tools.map((tool) => {
              return (
                <span key={tool} className="px-4 py-1.5 rounded-full bg-(--accent-secondary)/20 border border-(--accent-secondary)/20 text-(--accent-secondary) text-xs tracking-wider">
                  {tool}
                </span>
              );
            })}
          </div>

          <div className="flex items-center gap-6 mt-auto">
            {links.map((link) => {
              return (
                <Link
                  href={link.url}
                  key={link.text}
                  className="flex items-center gap-2 text-(--text-primary) hover:text-(--text-primary) transition-colors text-sm group"
                >
                  {link.icon}
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryTerminalCard;