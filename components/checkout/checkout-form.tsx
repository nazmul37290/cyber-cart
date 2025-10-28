"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

interface CheckoutFormProps {
  step: "shipping" | "payment" | "review"
  setStep: (step: "shipping" | "payment" | "review") => void
}

export function CheckoutForm({ step, setStep }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step === "shipping") setStep("payment")
    else if (step === "payment") setStep("review")
  }

  const handleBack = () => {
    if (step === "payment") setStep("shipping")
    else if (step === "review") setStep("payment")
  }

  return (
    <div className="glass-dark rounded-lg p-8">
      {step === "shipping" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Shipping Address</h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
          />

          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
            />
          </div>

          <input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
          />
        </div>
      )}

      {step === "payment" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Payment Method</h2>

          <div className="space-y-3 mb-6">
            {["credit-card", "paypal", "apple-pay"].map((method) => (
              <label
                key={method}
                className="flex items-center gap-3 p-4 rounded-lg border border-slate-700 cursor-pointer hover:border-teal-500 transition-colors"
              >
                <input
                  type="radio"
                  name="payment-method"
                  defaultChecked={method === "credit-card"}
                  className="w-4 h-4"
                />
                <span className="text-white font-semibold capitalize">{method.replace("-", " ")}</span>
              </label>
            ))}
          </div>

          <input
            type="text"
            name="cardName"
            placeholder="Cardholder Name"
            value={formData.cardName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
          />

          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
      )}

      {step === "review" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Review Order</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/30">
              <p className="text-slate-400 text-sm mb-2">Shipping To</p>
              <p className="text-white font-semibold">
                {formData.firstName} {formData.lastName}
              </p>
              <p className="text-slate-300">{formData.address}</p>
              <p className="text-slate-300">
                {formData.city}, {formData.state} {formData.zipCode}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/30">
              <p className="text-slate-400 text-sm mb-2">Payment Method</p>
              <p className="text-white font-semibold">Credit Card ending in {formData.cardNumber.slice(-4)}</p>
            </div>
          </div>

          <label className="flex items-start gap-3 p-4 rounded-lg border border-slate-700 cursor-pointer hover:border-teal-500 transition-colors">
            <input type="checkbox" defaultChecked className="w-4 h-4 mt-1" />
            <span className="text-slate-300 text-sm">I agree to the terms and conditions</span>
          </label>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8 pt-8 border-t border-slate-700/30">
        {step !== "shipping" && (
          <button
            onClick={handleBack}
            className="flex-1 px-6 py-3 rounded-lg border border-slate-600 text-white hover:border-teal-500 hover:bg-teal-500/10 transition-all font-semibold flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        )}

        {step === "review" ? (
          <Link
            href="/order-success"
            className="flex-1 gradient-button px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 group"
          >
            Place Order
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <button
            onClick={handleNext}
            className="flex-1 gradient-button px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 group"
          >
            Continue
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  )
}
