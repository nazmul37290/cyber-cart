"use client"

import { User, Package, Heart, Settings, LogOut } from "lucide-react"

interface DashboardSidebarProps {
  activeTab: "overview" | "orders" | "settings" | "wishlist"
  setActiveTab: (tab: "overview" | "orders" | "settings" | "wishlist") => void
}

export function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: User },
    { id: "orders", label: "Order History", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="lg:col-span-1">
      <div className="glass-dark rounded-lg p-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? "bg-teal-500/20 border border-teal-500/50 text-teal-400"
                  : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-semibold">{item.label}</span>
            </button>
          )
        })}

        <div className="border-t border-slate-700/30 my-4"></div>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all">
          <LogOut className="w-5 h-5" />
          <span className="font-semibold">Sign Out</span>
        </button>
      </div>
    </div>
  )
}
