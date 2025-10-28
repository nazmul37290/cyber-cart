"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { CheckoutSummary } from "@/components/checkout/checkout-summary"

export default function CheckoutPage() {
  const [step, setStep] = useState<"shipping" | "payment" | "review">("shipping")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-white mb-12">Checkout</h1>

          {/* Progress Steps */}
          <div className="flex gap-4 mb-12">
            {["shipping", "payment", "review"].map((s, idx) => (
              <div key={s} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step === s
                      ? "bg-teal-500 text-white"
                      : ["shipping", "payment", "review"].indexOf(step) > idx
                        ? "bg-green-500 text-white"
                        : "bg-slate-700 text-slate-400"
                  }`}
                >
                  {idx + 1}
                </div>
                <span className="text-white font-semibold capitalize hidden sm:inline">{s}</span>
                {idx < 2 && <div className="w-8 h-0.5 bg-slate-700 hidden sm:block"></div>}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CheckoutForm step={step} setStep={setStep} />
            </div>
            <div className="lg:col-span-1">
              <CheckoutSummary />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
