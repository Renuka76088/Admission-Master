"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, GraduationCap, Building2, Filter, Star, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, Trophy, Users, BarChart3, ChevronRight, Calculator, Activity } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CollegesPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Dynamic Search Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-24 bg-slate-50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 font-bold text-xs uppercase mb-8 border border-blue-100 shadow-sm"
            >
              <Trophy className="w-4 h-4" /> 50,000+ Colleges Indexed
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight"
            >
              Discover Your <span className="text-blue-600">Perfect Campus</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-600 font-medium mb-12"
            >
              Unbiased reviews, verified placement data, and AI-powered recommendations for top-tier institutions worldwide.
            </motion.p>
            
            {/* Mega Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="bg-white p-3 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col md:flex-row items-center gap-3"
            >
              <div className="flex-1 flex items-center px-4 w-full">
                <Search className="text-slate-400 mr-3 w-6 h-6" />
                <input className="w-full border-none focus:ring-0 text-black font-bold bg-transparent py-4 outline-none placeholder:text-slate-400" placeholder="Search by name, city, or stream..." type="text" />
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-200 mx-2"></div>
              <div className="flex-none flex items-center px-4 w-full md:w-auto">
                <MapPin className="text-slate-400 mr-3 w-6 h-6" />
                <select className="border-none focus:ring-0 text-slate-700 font-bold bg-transparent py-4 pr-10 outline-none appearance-none cursor-pointer">
                  <option>Across India</option>
                  <option>Delhi NCR</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                </select>
              </div>
              <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                Search Now <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {[
              { label: "Placement Data", icon: BarChart3 },
              { label: "Hostel Reviews", icon: Building2 },
              { label: "Fee Structure", icon: Calculator },
              { label: "Campus Life", icon: Activity }
            ].map((tag, i) => (
              <motion.div variants={fadeInUp} key={i} className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <tag.icon className="w-7 h-7" />
                </div>
                <span className="text-slate-600 font-bold text-sm uppercase tracking-wider">{tag.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Institutions */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          {...fadeInUp}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">India's Top Institutions</h2>
            <p className="text-slate-600 font-medium text-lg">Institutions ranked by NIRF and global standards with verified placement reports.</p>
          </div>
          <div className="flex gap-3">
            <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-blue-600 hover:border-blue-500 transition-all shadow-sm">
              <Filter className="w-6 h-6" />
            </button>
            <button className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:shadow-md transition-all">
              Sort by Rank
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { name: "IIT Bombay", loc: "Powai, Mumbai", rank: "NIRF #3", score: "4.9", tags: ["Engineering", "Research"], img: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" },
            { name: "AIIMS Delhi", loc: "Ansari Nagar, Delhi", rank: "NIRF #1 (Med)", score: "5.0", tags: ["Medical", "Government"], img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&q=80" },
            { name: "BITS Pilani", loc: "Pilani, Rajasthan", rank: "Top Private", score: "4.8", tags: ["Engineering", "Tech"], img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80" },
            { name: "SRM University", loc: "Kattankulathur, TN", rank: "Top Private", score: "4.7", tags: ["Multi-stream", "Placements"], img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=600&q=80" },
            { name: "VIT Vellore", loc: "Vellore, Tamil Nadu", rank: "Top Engineering", score: "4.8", tags: ["Engineering", "Placement"], img: "https://images.unsplash.com/photo-1592284346536-0567e7c98e1d?w=600&q=80" },
            { name: "Manipal Academy", loc: "Manipal, Karnataka", rank: "Top Global", score: "4.7", tags: ["Medical", "Research"], img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80" }
          ].map((college, i) => (
            <motion.div variants={fadeInUp} key={i} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500">
              <div className="h-56 w-full relative overflow-hidden bg-slate-100">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={college.img} alt={college.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
                <div className="absolute top-5 right-5 flex flex-col gap-2">
                   <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                     <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {college.score}
                   </div>
                </div>
                <div className="absolute bottom-5 left-6">
                  <div className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 shadow-lg w-max">{college.rank}</div>
                  <h3 className="text-2xl font-bold text-white">{college.name}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-slate-500 font-bold text-sm mb-6">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600" /> {college.loc}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {college.tags.map((tag, j) => (
                    <span key={j} className="bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest uppercase border border-slate-100">{tag}</span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-4 bg-white border border-slate-200 rounded-2xl text-black font-bold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                    Brochure <Building2 className="w-4 h-4" />
                  </button>
                  <button className="py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2">
                    Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <button className="bg-black text-white px-12 py-5 rounded-2xl font-bold shadow-2xl hover:scale-105 hover:bg-slate-900 transition-all flex items-center gap-3 mx-auto">
            Load More Colleges <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Comparison Tool Ad */}
      <section className="py-24 bg-black text-white relative overflow-hidden my-16">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-4 py-2 rounded-xl bg-blue-600/20 text-blue-400 font-bold text-xs uppercase mb-8 border border-blue-500/20">
                  <CheckCircle2 className="w-4 h-4 inline mr-2" /> Compare & Conquer
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Side-by-Side <span className="text-blue-500">College Comparison</span></h2>
                <p className="text-slate-400 text-lg font-medium mb-12 leading-relaxed">Don't just pick a college. Pick the right one for your career. Compare placements, ROI, faculty-student ratio, and campus culture instantly.</p>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 border border-white/10">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-slate-200 font-bold text-lg">Scholarship Availability</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 border border-white/10">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="text-slate-200 font-bold text-lg">Student Sentiment Analysis</span>
                  </div>
                </div>
                
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold shadow-xl transition-all flex items-center gap-3">
                  Open Comparison Tool <ExternalLink className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-bold">V</div>
                      <span className="font-bold">VIT Vellore</span>
                    </div>
                    <div className="text-blue-500 font-bold text-xl">#1 Rank</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-blue-500">VS</div>
                  </div>
                  <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center font-bold">S</div>
                      <span className="font-bold">SRM University</span>
                    </div>
                    <div className="text-blue-500 font-bold text-xl">#3 Rank</div>
                  </div>
                  <div className="pt-8">
                     <div className="flex justify-between text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">Placement Rate</div>
                     <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[98%] h-full bg-blue-600"></div>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verified Reviews */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Verified Student Reviews</h2>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg">No marketing fluff. Just real experiences from students currently studying at these campuses.</p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {[
            { name: "Rahul S.", college: "IIT Bombay", text: "The research facilities are world-class, but the competitive pressure is real. Networking here is the biggest asset.", avatar: "https://i.pravatar.cc/100?img=11" },
            { name: "Priya K.", college: "SRM University", text: "Amazing campus life and huge corporate exposure. The placement cell is extremely active.", avatar: "https://i.pravatar.cc/100?img=5" }
          ].map((review, i) => (
            <motion.div variants={fadeInUp} key={i} className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-8 items-start">
               <img className="w-20 h-20 rounded-full object-cover border-4 border-blue-50" src={review.avatar} alt={review.name} />
               <div>
                  <div className="flex text-yellow-400 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-xl font-medium italic text-slate-700 leading-relaxed mb-6">"{review.text}"</p>
                  <div>
                    <h4 className="font-bold text-black text-lg">{review.name}</h4>
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">{review.college}</p>
                  </div>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Counseling Experts Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Need Personalized Guidance?</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg">Our counselors provide one-on-one sessions to help you shortlist colleges based on your rank, budget, and goals.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
             {[
               { name: "Alok V.", role: "Engineering Expert", img: "https://i.pravatar.cc/200?img=12" },
               { name: "Simran J.", role: "Medical Specialist", img: "https://i.pravatar.cc/200?img=32" },
               { name: "Mark L.", role: "Global Admissions", img: "https://i.pravatar.cc/200?img=13" }
             ].map((expert, i) => (
               <motion.div variants={fadeInUp} key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 text-center hover:-translate-y-2 transition-transform shadow-md">
                  <img className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-blue-50" src={expert.img} alt={expert.name} />
                  <h4 className="font-bold text-black text-xl mb-1">{expert.name}</h4>
                  <p className="text-blue-600 font-bold text-sm mb-6 uppercase tracking-wider">{expert.role}</p>
                  <button className="w-full py-4 border border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-colors">Book Strategy Call</button>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
