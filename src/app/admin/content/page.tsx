"use client";

import { 
  FileEdit, 
  LayoutTemplate,
  MessageSquare,
  Globe,
  Settings,
  Image as ImageIcon
} from "lucide-react";

export default function ContentManagerPage() {
  const sections = [
    { title: "Landing Page", desc: "Hero section, features, testimonials", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "College Database", desc: "Manage college details, cutoffs, fees", icon: LayoutTemplate, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Counselling Packages", desc: "Pricing, features, VIP tiers", icon: Settings, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Notifications / Alerts", desc: "Global broadcast messages", icon: MessageSquare, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Media Gallery", desc: "Upload and manage platform images", icon: ImageIcon, color: "text-rose-600", bg: "bg-rose-50" },
  ];

  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Content Manager</h1>
          <p className="text-slate-500">Edit website copy, college data, and pricing structures</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-teal-300 transition-all cursor-pointer group">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${section.bg}`}>
              <section.icon className={`w-7 h-7 ${section.color}`} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">{section.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{section.desc}</p>
            <div className="mt-6 flex items-center text-sm font-semibold text-teal-600 group-hover:text-teal-700">
              Manage Content &rarr;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
