import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-slate-900 to-teal-900/20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/50">
                <span className="text-sm font-semibold text-indigo-300">New Collection 2025</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Discover Premium Quality
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed text-pretty">
                Experience the perfect blend of elegance and innovation. Shop our curated collection of premium products
                designed for the discerning customer.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="gradient-button px-8 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 group"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/deals"
                className="px-8 py-3 rounded-lg font-semibold text-white border border-slate-600 hover:border-teal-500 hover:bg-teal-500/10 transition-all"
              >
                View Deals
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-3xl font-bold text-teal-400">10K+</p>
                <p className="text-slate-400 text-sm">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal-400">50K+</p>
                <p className="text-slate-400 text-sm">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal-400">24/7</p>
                <p className="text-slate-400 text-sm">Support</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-teal-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative h-full rounded-2xl overflow-hidden glass-dark flex items-center justify-center">
              <img
                src="/premium-product-showcase.jpg"
                alt="Premium Product Showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
