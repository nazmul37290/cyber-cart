"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DashboardSidebar } from "@/components/account/dashboard-sidebar"
import { AccountOverview } from "@/components/account/account-overview"
import { OrderHistory } from "@/components/account/order-history"
import { AccountSettings } from "@/components/account/account-settings"
import { Wishlist } from "@/components/account/wishlist"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "settings" | "wishlist">("overview")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-white mb-12">My Account</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="lg:col-span-3">
              {activeTab === "overview" && <AccountOverview />}
              {activeTab === "orders" && <OrderHistory />}
              {activeTab === "settings" && <AccountSettings />}
              {activeTab === "wishlist" && <Wishlist />}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
