"use client";

import { Search, ArrowUpRight, GraduationCap, Users, BookOpen, Zap, Target, MousePointer2, Smartphone, ShieldCheck, Microscope, Database, Palette, PieChart, MessageSquare, Ticket, Trophy, Calculator, Lock, Star, CheckCircle2, Sparkles, Filter, LayoutGrid, BrainCircuit, HeartHandshake, ShieldAlert, MapPin, Clock, Trophy as TrophyIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen relative overflow-hidden bg-white selection:bg-blue-100 font-inter">

      {/* 1. Background Grid Texture */}
      <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none"></div>
      
      {/* 2. Premium Lighting/Blobs */}
      <div className="absolute top-[10%] left-[-5%] w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* --- HERO SECTION (BANNER - UNTOUCHED AS REQUESTED) --- */}
      <section className="relative min-h-screen flex items-center pt-40 pb-20 px-6 lg:px-24 bg-[#80D0FF]">
        <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-md mb-12 shadow-sm">
                 <GraduationCap size={14} className="text-white/80" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Transforming Skills With Sparkles</span>
              </div>
              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-black leading-[0.95] mb-12 tracking-tight uppercase font-outfit">
                SHAPING MINDS, BUILDING FUTURES<br />
                THROUGH SMARTER LEARNING
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-medium mb-16 leading-relaxed max-w-xl">
                Join a new era of education where innovation meets knowledge. Discover expert-led courses, practical skills, and limitless opportunities to achieve your goals.
              </p>
              <div className="max-w-xl mb-16 relative group">
                <div className="bg-white/20 backdrop-blur-3xl border border-white/40 rounded-full p-2 flex items-center shadow-2xl transition-all group-focus-within:bg-white/30">
                   <input type="text" placeholder="Type your email here..." className="flex-1 bg-transparent border-none outline-none px-8 py-4 text-white placeholder:text-white/60 font-bold text-sm" />
                   <button className="bg-[#00A3FF] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs shadow-xl hover:bg-blue-600 transition-all">Search</button>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-xl">
                      <img src={`https://i.pravatar.cc/150?u=st${i}`} alt="User" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-white flex items-center justify-center text-blue-500 font-bold text-sm shadow-xl">+12</div>
                </div>
                <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                  2K+ PEOPLE ALREADY JOINED THE FUTURE OF LEARNING.<br />
                  KICKSTART YOUR JOURNEY TODAY!
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[600px] aspect-[4/5] flex items-end">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-[4rem] border border-white/20 shadow-3xl overflow-hidden">
                   <div className="absolute top-[15%] left-[10%] max-w-[280px] z-20">
                      <h2 className="text-slate-500 font-medium text-3xl uppercase tracking-widest mb-2 leading-none opacity-60">Welcome to</h2>
                      <h3 className="text-slate-600 font-bold text-5xl lg:text-6xl uppercase tracking-tighter mb-8 leading-[1.1]">The Future of Education</h3>
                      <p className="text-slate-600 font-medium text-base leading-relaxed opacity-80">Unlock your potential with our platform.</p>
                   </div>
                   <div className="absolute top-10 right-10 w-16 h-16 bg-[#00A3FF] rounded-3xl flex items-center justify-center shadow-2xl text-white"><GraduationCap size={32} /></div>
                   <button className="absolute top-[50%] right-[-10%] rotate-90 bg-white/20 backdrop-blur-xl border border-white/30 text-white px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest">Explore Programs</button>
                </div>
                <img src="/hero-student.png" className="relative z-10 h-[92%] w-auto object-contain drop-shadow-[0_45px_45px_rgba(0,0,0,0.3)] translate-y-10" alt="Student" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SCHOLARSHIP BANNER --- */}
      <section className="relative z-20 py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative h-[350px] md:h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl group"
          >
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2070&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Scholarship" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent flex items-center px-10 md:px-20">
              <div className="max-w-xl text-white">
                <div className="bg-[#00A3FF] inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Admission Master Counselling Institute</div>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 leading-tight">Scholarship <br /> Opportunities 2026</h2>
                <p className="text-white/70 text-sm mb-10 leading-relaxed font-medium">Unlock funding for your dream education. We help you find and apply for the most prestigious scholarships.</p>
                <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-2xl hover:scale-105 transition-transform">Explore Scholarships</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FREE BASIC COLLEGE PREDICTOR --- */}
      <section className="relative z-20 py-32 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white border border-slate-100 rounded-[3.5rem] p-12 md:p-16 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10">
                <div className="bg-green-50 text-green-600 px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">No registration required</div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-12">
                  <div className="w-16 h-16 bg-slate-900 rounded-[1.5rem] flex items-center justify-center text-white">
                    <Calculator size={32} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 text-3xl font-bold uppercase tracking-tight">Free Basic Predictor</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Instant Insights • Zero Friction</p>
                  </div>
                </div>

                <div className="space-y-8 mb-12">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4 block">Select Exam</label>
                      <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 text-sm font-bold outline-none focus:border-[#00A3FF] transition-all appearance-none cursor-pointer">
                        <option>NEET UG</option>
                        <option>JEE MAIN</option>
                        <option>CUET</option>
                        <option>NEET PG</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4 block">Expected Rank</label>
                      <input type="number" placeholder="Enter rank" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 text-sm font-bold outline-none focus:border-[#00A3FF] transition-all" />
                    </div>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-2xl hover:bg-black transition-all active:scale-[0.98]">
                    Check Colleges
                  </button>
                </div>

                <div className="flex items-center gap-4 text-slate-400 pt-4 border-t border-slate-100">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>)}
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest">Join 50k+ students finding their path today</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-12">
              <h2 className="text-slate-900 text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95]">Instant Insights,<br />Zero Friction.</h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">Get a glimpse of your eligible colleges instantly. Our basic predictor provides accurate cutoff data for government and private institutions.</p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50">
                   <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6"><CheckCircle2 size={24} /></div>
                   <h4 className="text-slate-900 font-bold text-lg uppercase tracking-tight mb-2">Eligibility</h4>
                   <p className="text-slate-400 text-xs font-medium leading-relaxed">Check your qualifying status for all rounds instantly.</p>
                </div>
                <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50">
                   <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6"><LayoutGrid size={24} /></div>
                   <h4 className="text-slate-900 font-bold text-lg uppercase tracking-tight mb-2">Govt vs Private</h4>
                   <p className="text-slate-400 text-xs font-medium leading-relaxed">Detailed classification and seat comparison at a glance.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- ADVANCED FEATURES SECTION (LOCKED) --- */}
      <section className="relative z-20 py-40 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 grid-texture opacity-10 pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full mb-8">
              <Lock size={14} className="text-blue-400" />
              <span className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Premium Features</span>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">Unlock Advanced<br />Prediction Power</h2>
            <p className="text-white/40 text-[12px] font-bold uppercase tracking-[0.4em]">Available exclusive for logged in members</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Admission Probability", desc: "Get exact percentage of success scores.", icon: <BrainCircuit /> },
              { title: "Smart Filters", desc: "Filter by rank, budget, & location.", icon: <Filter /> },
              { title: "College Comparison", desc: "Detailed 1-on-1 institutional data.", icon: <LayoutGrid /> },
              { title: "AI Recommendations", desc: "Personalized roadmaps for success.", icon: <Sparkles /> }
            ].map((feature, i) => (
              <div key={i} className="group p-12 rounded-[4rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 relative">
                <div className="absolute top-10 right-10 text-white/20 group-hover:text-blue-400 transition-colors"><Lock size={20} /></div>
                <div className="text-blue-400 mb-10 transform group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                <h4 className="text-white text-xl font-bold uppercase tracking-tight mb-4">{feature.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
             <Link href="/login" className="bg-[#00A3FF] text-white px-14 py-6 rounded-full font-bold uppercase tracking-widest text-xs shadow-2xl hover:bg-blue-600 transition-all flex items-center gap-3 mx-auto w-fit">
               Unlock after login <ArrowUpRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* --- POPULAR EXAMS SECTION --- */}
      <section className="relative z-20 py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
            <div>
              <h2 className="text-slate-900 text-5xl font-bold uppercase tracking-tighter mb-6">Popular Exams</h2>
              <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">India's most competitive examinations at your fingertips</p>
            </div>
            <Link href="/exams" className="text-slate-900 font-bold text-xs uppercase tracking-widest border-b-2 border-slate-900 pb-2 hover:text-[#00A3FF] hover:border-[#00A3FF] transition-all">View Exam Directory</Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "NEET UG", students: "20L+ Scholars", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" },
              { title: "JEE MAIN", students: "12L+ Scholars", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" },
              { title: "CUET", students: "15L+ Scholars", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop" },
              { title: "NEET PG", students: "2L+ Scholars", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" }
            ].map((exam, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative h-[380px] rounded-[3.5rem] overflow-hidden shadow-2xl group cursor-pointer"
              >
                <img src={exam.img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt={exam.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent p-10 flex flex-col justify-end">
                  <h4 className="text-white text-2xl font-bold uppercase tracking-tight mb-2">{exam.title}</h4>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-10">{exam.students}</p>
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-[#00A3FF] group-hover:border-[#00A3FF] transition-all duration-500">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VIP COUNSELLING BENEFITS --- */}
      <section className="relative z-20 py-32 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[5rem] overflow-hidden shadow-3xl aspect-[4/5] border-[12px] border-white">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover" alt="Mentorship" />
              </div>
              <div className="absolute -bottom-16 -right-16 bg-white p-12 rounded-[4rem] shadow-3xl border border-slate-100 max-w-sm z-20">
                <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-[#00A3FF] mb-8">
                  <HeartHandshake size={32} />
                </div>
                <h5 className="text-slate-900 font-bold text-2xl uppercase tracking-tighter mb-6">Personalized Care</h5>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">We don't just predict; we mentor you through the emotional journey of admission.</p>
              </div>
            </div>

            <div className="max-w-xl">
              <h2 className="text-slate-900 text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-12">VIP Mentorship<br />Experience</h2>
              <div className="space-y-12">
                {[
                  { title: "Personal Mentor", desc: "Direct access to industry experts who guide you at every step.", icon: <Users /> },
                  { title: "Admission Strategy", desc: "Data-backed roadmaps tailored to your unique profile.", icon: <Target /> },
                  { title: "Scholarship Support", desc: "Maximize your chances of securing full tuition waivers.", icon: <TrophyIcon /> }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 shrink-0 bg-white rounded-3xl flex items-center justify-center text-[#00A3FF] shadow-xl group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-xl uppercase tracking-tight mb-3">{benefit.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-16 bg-slate-900 text-white px-14 py-6 rounded-full font-bold uppercase tracking-widest text-xs shadow-2xl hover:bg-black transition-all">
                Become a VIP Member Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="relative z-20 py-32 bg-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-[1440px] mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-3xl"
        >
          <div className="absolute inset-0 grid-texture opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-white text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-12 leading-none">
              Start Your Free <br /> Prediction Now
            </h2>
            <p className="text-white/80 text-xl mb-16 max-w-2xl mx-auto font-medium">
              Join 500,000+ students who have found their perfect college with Admission Master. Experience the difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="bg-white text-blue-600 px-14 py-6 rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl hover:scale-105 transition-transform active:scale-95">
                Predict My College
              </button>
              <button className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-14 py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-all">
                Speak to Expert
              </button>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
