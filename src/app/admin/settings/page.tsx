"use client";

import { 
  Settings as SettingsIcon, 
  Shield, 
  Database, 
  Mail,
  Save
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-6 pb-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-1">System Settings</h1>
        <p className="text-slate-500">Configure global platform preferences and security</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Navigation */}
        <div className="w-full md:w-64 space-y-1">
          {[
            { id: "general", label: "General Settings", icon: SettingsIcon },
            { id: "security", label: "Security & Roles", icon: Shield },
            { id: "database", label: "Database Backups", icon: Database },
            { id: "email", label: "Email Server", icon: Mail },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === tab.id 
                  ? "bg-teal-50 text-teal-700" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? "text-teal-600" : "text-slate-400"}`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          {activeTab === "general" && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8 space-y-8 animate-in fade-in duration-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Platform Name</label>
                  <input type="text" defaultValue="Admission Master" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Support Email</label>
                  <input type="email" defaultValue="support@admissionmaster.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700">Maintenance Mode</label>
                  <div className="flex items-center gap-3 mt-1">
                    <button className="w-12 h-6 bg-slate-200 rounded-full relative transition-colors duration-300">
                      <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1 shadow-sm"></div>
                    </button>
                    <span className="text-sm text-slate-600">Currently Disabled. Toggle to restrict access to the public site.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors">
                  <Save className="w-4 h-4" /> Save Configuration
                </button>
              </div>
            </div>
          )}

          {activeTab !== "general" && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8 animate-in fade-in duration-300 flex items-center justify-center h-64 text-slate-500 font-medium">
              Coming soon: {activeTab} configuration panel.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
