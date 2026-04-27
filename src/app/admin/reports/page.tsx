"use client";

import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  CreditCard,
  Download
} from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Reports & Analytics</h1>
          <p className="text-slate-500">Comprehensive overview of platform performance</p>
        </div>
        <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm">
          <Download className="w-4 h-4" /> Export Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[300px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-teal-600" /> Revenue vs Packages
            </h3>
            <select className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg px-3 py-1.5 focus:outline-none">
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="flex-1 flex items-center justify-center bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-400 font-medium">
            [Chart Integration Here]
          </div>
        </div>

        {/* User Growth Placeholder */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[300px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" /> User Growth
            </h3>
            <select className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg px-3 py-1.5 focus:outline-none">
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="flex-1 flex items-center justify-center bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-400 font-medium">
            [Chart Integration Here]
          </div>
        </div>

        {/* Top Performing Colleges */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm md:col-span-2">
          <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-purple-600" /> Most Searched Colleges
          </h3>
          <div className="space-y-4">
            {[
              { name: "AIIMS Delhi", searches: "12.5k", barWidth: "w-[90%]", color: "bg-teal-500" },
              { name: "IIT Bombay", searches: "10.2k", barWidth: "w-[80%]", color: "bg-blue-500" },
              { name: "CMC Vellore", searches: "8.4k", barWidth: "w-[65%]", color: "bg-purple-500" },
              { name: "NIT Trichy", searches: "6.1k", barWidth: "w-[45%]", color: "bg-amber-500" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-32 text-sm font-semibold text-slate-700">{item.name}</span>
                <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.barWidth} ${item.color} rounded-full`}></div>
                </div>
                <span className="text-xs font-bold text-slate-500 w-12 text-right">{item.searches}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
