import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, GraduationCap, Globe, Share2, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-slate-100 font-sans relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <h1 className="text-3xl font-black tracking-tighter uppercase italic text-slate-900">
                ADMISSION MASTER
              </h1>
            </Link>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed italic">
              Empowering students through data-driven college predictions, expert counselling, and comprehensive scholarship guidance.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, ExternalLink].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.3em] mb-10 italic">Resources</h4>
            <ul className="space-y-4">
              {["Exams Portal", "College Finder", "Scholarships", "Blog Feed"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-500 hover:text-[#00A3FF] font-bold text-sm transition-colors flex items-center gap-2 group uppercase tracking-widest text-[11px]">
                    <div className="w-1 h-1 bg-slate-200 rounded-full group-hover:bg-[#00A3FF] transition-colors"></div>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.3em] mb-10 italic">Support</h4>
            <ul className="space-y-4">
              {["Help Center", "Privacy Policy", "Terms of Service", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-500 hover:text-[#00A3FF] font-bold text-sm transition-colors flex items-center gap-2 group uppercase tracking-widest text-[11px]">
                    <div className="w-1 h-1 bg-slate-200 rounded-full group-hover:bg-[#00A3FF] transition-colors"></div>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.3em] mb-10 italic">Get in Touch</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-3xl border border-slate-100 hover:border-slate-200 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Email Us</div>
                  <div className="text-slate-900 font-bold text-sm">contact@admissionmaster.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-3xl border border-slate-100 hover:border-slate-200 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Call Support</div>
                  <div className="text-slate-900 font-bold text-sm">+91 99999 00000</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">
            © 2026 ADMISSION MASTER. ALL RIGHTS RESERVED.
          </p>
          <div className="bg-slate-50 px-8 py-3.5 rounded-full border border-slate-100 flex items-center gap-8">
             <Link href="#" className="text-[10px] font-bold text-slate-400 hover:text-[#00A3FF] uppercase tracking-[0.2em]">System Status</Link>
             <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
             <Link href="#" className="text-[10px] font-bold text-slate-400 hover:text-[#00A3FF] uppercase tracking-[0.2em]">Global Partners</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
