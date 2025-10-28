import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Package, Truck, MessageSquare } from "lucide-react"

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Order Confirmed!</h1>
            <p className="text-xl text-slate-300 mb-2">Thank you for your purchase</p>
            <p className="text-slate-400">Order #ORD-2025-001234</p>
          </div>

          {/* Order Details */}
          <div className="glass-dark rounded-lg p-8 mb-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <Package className="w-6 h-6 text-teal-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-sm">Order Status</p>
                  <p className="text-white font-semibold">Processing</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Truck className="w-6 h-6 text-teal-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-sm">Estimated Delivery</p>
                  <p className="text-white font-semibold">3-5 Business Days</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageSquare className="w-6 h-6 text-teal-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-sm">Confirmation Email</p>
                  <p className="text-white font-semibold">Sent to your email</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="glass-dark rounded-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-white mb-6">Order Items</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-700/30">
                <div>
                  <p className="text-white font-semibold">Premium Wireless Headphones</p>
                  <p className="text-slate-400 text-sm">Black • Qty: 1</p>
                </div>
                <p className="text-teal-400 font-semibold">$299.00</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white font-semibold">Designer Sunglasses</p>
                  <p className="text-slate-400 text-sm">Gold • Qty: 2</p>
                </div>
                <p className="text-teal-400 font-semibold">$498.00</p>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="glass-dark rounded-lg p-8 mb-8">
            <div className="space-y-3">
              <div className="flex justify-between text-slate-300">
                <span>Subtotal</span>
                <span>$797.00</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Shipping</span>
                <span>$15.00</span>
              </div>
              <div className="flex justify-between text-slate-300 pb-3 border-b border-slate-700/30">
                <span>Tax</span>
                <span>$81.20</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold">Total</span>
                <span className="text-3xl font-bold text-teal-400">$893.20</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/account/orders"
              className="flex-1 gradient-button px-6 py-3 rounded-lg font-semibold text-white text-center"
            >
              View Order Details
            </Link>
            <Link
              href="/shop"
              className="flex-1 px-6 py-3 rounded-lg border border-slate-600 text-white hover:border-teal-500 hover:bg-teal-500/10 transition-all font-semibold text-center"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
