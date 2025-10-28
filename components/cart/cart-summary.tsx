"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CartSummary() {
  const subtotal = 299 + 249 * 2
  const shipping = 15
  const tax = (subtotal + shipping) * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="glass-dark rounded-lg p-6 sticky top-24 space-y-6">
      <h2 className="text-xl font-bold text-white">Order Summary</h2>

      {/* Breakdown */}
      <div className="space-y-3 pb-6 border-b border-slate-700/30">
        <div className="flex justify-between text-slate-300">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="text-white font-semibold">Total</span>
        <span className="text-3xl font-bold text-teal-400">${total.toFixed(2)}</span>
      </div>

      {/* Promo Code */}
      <div>
        <input
          type="text"
          placeholder="Enter promo code"
          className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
        />
      </div>

      {/* Checkout Button */}
      <Link
        href="/checkout"
        className="w-full gradient-button px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 group"
      >
        Proceed to Checkout
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>

      {/* Continue Shopping */}
      <Link
        href="/shop"
        className="w-full px-6 py-3 rounded-lg border border-slate-600 text-white hover:border-teal-500 hover:bg-teal-500/10 transition-all font-semibold text-center"
      >
        Continue Shopping
      </Link>

      {/* Trust Badges */}
      <div className="space-y-2 pt-6 border-t border-slate-700/30">
        <p className="text-xs text-slate-400">✓ Secure checkout</p>
        <p className="text-xs text-slate-400">✓ 30-day money back guarantee</p>
        <p className="text-xs text-slate-400">✓ Free returns</p>
      </div>
    </div>
  )
}
