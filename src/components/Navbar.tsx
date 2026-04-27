"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 w-full z-[100] px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-8 py-3 flex items-center justify-between shadow-2xl">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-black tracking-tighter uppercase italic text-white drop-shadow-md">
              ADMISSION MASTER
            </h1>
          </Link>

          {/* Links (Floating Pill Style) */}
          <div className="hidden md:flex items-center gap-1">
            {["Home", "Exams", "Colleges", "Blogs"].map((item) => {
              const isActive = (pathname === "/" && item === "Home") || pathname.includes(item.toLowerCase());
              return (
                <Link 
                  key={item} 
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className={`px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                    isActive 
                    ? 'bg-[#00A3FF] text-white shadow-lg' 
                    : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* Action Button (Premium Pill) */}
          <div className="hidden md:flex items-center gap-4">
             <Link href="/login" className="bg-[#A3E0FF]/40 backdrop-blur-xl border border-white/50 text-white px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest shadow-xl hover:bg-[#00A3FF] transition-all flex items-center gap-4 group">
               Login Now 
               <div className="w-6 h-6 bg-[#00A3FF] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                 <ArrowUpRight size={14} className="text-white" />
               </div>
             </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-2xl p-10 flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-300">
          <button className="absolute top-8 right-8 text-white" onClick={() => setMobileMenuOpen(false)}>
             <X size={32} />
          </button>
          {["Home", "Exams", "Colleges", "Blogs"].map((item) => (
            <Link 
              key={item} 
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="text-4xl font-black text-white uppercase tracking-tighter italic"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link href="/login" className="w-full bg-[#00A3FF] text-white py-6 rounded-full text-center font-bold uppercase tracking-widest text-sm shadow-2xl">
             Login Now
          </Link>
        </div>
      )}
    </header>
  );
}
