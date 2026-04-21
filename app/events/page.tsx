"use client"
import React, { useState } from 'react';
import { 
  Search, 
  LayoutGrid, 
  List, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Plus, 
  Filter,
  Code2,
  TrendingUp,
  Cpu
} from 'lucide-react';

const App = () => {
  const [activeTimeline, setActiveTimeline] = useState('upcoming');

  return (
    <div className=" text-(--text-primary) selection:bg-(--accent-primary) selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar */}
        <aside className=" w-full lg:w-72 flex flex-col gap-6">
          <div className="bg-(--background-secondary) border border-(--border-primary) rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-8 text-(--accent-primary)">
              <Filter size={18} />
              <h2 className="text-xs font-bold tracking-widest uppercase">Parameters</h2>
            </div>

            <section className="mb-8">
              <h3 className="text-(--text-secondary) text-[10px] font-bold uppercase tracking-widest mb-4">Categories</h3>
              <div className="space-y-4">
                {['Workshops', 'Hackathons', 'Seminars', 'Social Mixer'].map((cat, i) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      defaultChecked={i === 0}
                      className="w-4 h-4 rounded border-(--border-primary) bg-(--background-primary) checked:bg-(--accent-primary) accent-(--accent-primary)" 
                    />
                    <span className="text-sm group-hover:text-(--accent-primary) transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-(--text-secondary) text-[10px] font-bold uppercase tracking-widest mb-4">Timeline</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveTimeline('upcoming')}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${activeTimeline === 'upcoming' ? 'bg-white/5 text-(--accent-primary) border-l-2 border-(--accent-primary)' : 'text-(--text-secondary) hover:text-white'}`}
                >
                  Upcoming_
                </button>
                <button 
                  onClick={() => setActiveTimeline('past')}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${activeTimeline === 'past' ? 'bg-white/5 text-(--accent-primary) border-l-2 border-(--accent-primary)' : 'text-(--text-secondary) hover:text-white'}`}
                >
                  Past Archive
                </button>
              </div>
            </section>
          </div>

          {/* Sidebar Promo Card */}
          <div className="relative overflow-hidden bg-(--background-secondary) border border-(--border-primary) rounded-2xl p-6 group cursor-pointer">
             <div className="absolute top-0 right-0 p-4 opacity-20">
                <Cpu size={80} className="text-(--accent-primary)" />
             </div>
             <span className="text-(--accent-secondary) text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">Pro_Level</span>
             <h3 className="text-xl font-bold mb-4 leading-tight">Master Backend Architecture</h3>
             <div className="inline-flex items-center gap-2 text-(--accent-primary) text-xs font-bold border-b border-(--accent-primary) pb-1 group-hover:gap-4 transition-all">
                Explore Path <ChevronRight size={14} />
             </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col gap-6">
          
          {/* Header / Search */}
          <header className="sticky top-0 z-10 flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-secondary)" size={18} />
              <input 
                type="text" 
                placeholder="Execute search for event names, speakers, or tech stack..."
                className="w-full bg-(--background-secondary) border border-(--border-primary) rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-(--accent-primary) transition-colors placeholder:text-(--text-secondary)/50"
              />
            </div>
            <div className="flex gap-2 bg-(--background-secondary) p-1 rounded-xl border border-(--border-primary)">
              <button className="p-2 rounded-lg bg-(--accent-primary) text-white shadow-[0_0_15px_var(--shadow-accent-primary)/30">
                <LayoutGrid size={18} />
              </button>
              <button className="p-2 rounded-lg text-(--text-secondary) hover:text-white transition-colors">
                <List size={18} />
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            {/* Hero Section */}
            <div className="xl:col-span-2 relative overflow-hidden bg-(--background-secondary) border border-(--border-primary) rounded-3xl p-8 min-h-90 flex flex-col justify-center">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent-primary),transparent_70%) opacity-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png') opacity-10"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-(--accent-primary)/20 text-(--accent-primary) text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-(--accent-primary)/30">Live Registration</span>
                  <span className="text-(--text-secondary) text-[10px] font-mono tracking-widest">03:14:59 REMAINING</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic">
                  Bit_Rush Hackathon <span className="text-(--accent-primary)">2024</span>
                </h1>
                
                <p className="text-(--text-secondary) max-w-md text-sm leading-relaxed mb-8">
                  Join 500+ developers for 48 hours of pure creation. Build the future of decentralized computing.
                </p>
                
                <button className="bg-cyan-400 hover:bg-cyan-300 text-[#003737] font-bold px-8 py-3 rounded-xl transition-all shadow-[0_0_30px_rgba(34,211,238,0.3) hover:scale-105 active:scale-95 uppercase tracking-widest text-xs">
                  Initialize Participation
                </button>
              </div>
            </div>

            {/* Next Up Card */}
            <div className="bg-(--background-secondary) border border-(--border-primary) rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-(--accent-primary) text-[10px] font-bold uppercase tracking-[0.2em] block mb-4">Next_Up</span>
                <h3 className="text-2xl font-bold mb-8 leading-tight">Neural Net Workshop</h3>
                
                <div className="space-y-4 text-sm text-(--text-secondary)">
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-(--accent-primary)" />
                    <span>October 24, 2024</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-(--accent-primary)" />
                    <span>Engineering Hall B-12</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 border border-(--border-primary) hover:border-(--accent-primary) hover:bg-(--accent-primary)/5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
                View Syllabus
              </button>
            </div>

          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            
            {/* Event 1 */}
            <EventCard 
              tag="Workshop"
              tagColor="var(--accent-primary)"
              title="Python for Quant Finance"
              desc="Learn to process high-frequency market data using NumPy and Pandas frameworks."
              date="OCT_12"
              time="18:00 EST"
              icon={null}
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
            />

            {/* Event 2 */}
            <EventCard 
              tag="Seminar"
              tagColor="cyan"
              title="The Future of Rust"
              desc="Exploring memory safety and concurrency patterns in modern systems programming."
              date="OCT_15"
              time="14:00 EST"
              image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=400"
              icon={<Code2 size={40} className="text-white/20" />}
            />

            {/* Event 3 */}
            <EventCard 
              tag="Hackathon"
              tagColor="var(--accent-secondary)"
              title="Algorithmic Trading Duel"
              desc="Compete head-to-head to build the most profitable automated trading bot in 24h."
              date="OCT_28"
              time="09:00 EST"
              image="https://images.unsplash.com/photo-1611974709537-f4d1f39381b9?auto=format&fit=crop&q=80&w=400"
              icon={<TrendingUp size={40} className="text-white/20" />}
            />

          </div>
        </main>
      </div>
    </div>
  );
};

interface EventCardProps {
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  date: string;
  time: string;
  image: string;
  icon?: React.ReactNode;
}


const EventCard = ({ tag, tagColor, title, desc, date, time, image, icon }: EventCardProps) => {
  return (
    <div className="group bg-(--background-secondary) border border-(--border-primary) rounded-2xl overflow-hidden hover:border-(--accent-primary)/50 transition-all flex flex-col h-full">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-(--background-secondary) to-transparent"></div>
        
        {icon && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            {icon}
          </div>
        )}

        <div className="absolute top-4 right-4">
          <span 
            className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-black/50 backdrop-blur-md border border-white/10"
            style={{ color: tagColor }}
          >
            #{tag}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h4 className="text-lg font-bold mb-3 group-hover:text-(--accent-primary) transition-colors">{title}</h4>
        <p className="text-(--text-secondary) text-xs leading-relaxed mb-6 flex-1">
          {desc}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-(--border-primary)">
          <div className="text-[10px] font-mono">
            <span className="block text-(--text-secondary)">{date}</span>
            <span className="text-(--text-primary)">{time}</span>
          </div>
          <button className="text-[10px] font-bold uppercase tracking-tighter bg-(--accent-primary)/10 hover:bg-(--accent-primary) text-(--accent-primary) hover:text-white px-4 py-2 rounded-lg transition-all">
            Register_Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;