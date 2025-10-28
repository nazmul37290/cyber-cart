import Link from "next/link"
import { Clock } from "lucide-react"

export function DealsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900/30 via-slate-900 to-teal-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Flash Deal */}
          <div className="glass-dark rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-teal-400" />
                <span className="text-teal-400 font-semibold">Flash Deal</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Up to 50% Off</h3>
              <p className="text-slate-400 mb-6">Limited time offer on selected premium items</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-teal-400">02</p>
                <p className="text-xs text-slate-400">Hours</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-teal-400">45</p>
                <p className="text-xs text-slate-400">Minutes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-teal-400">23</p>
                <p className="text-xs text-slate-400">Seconds</p>
              </div>
              <Link href="/deals" className="ml-auto gradient-button px-6 py-2 rounded-lg font-semibold text-white">
                Shop Now
              </Link>
            </div>
          </div>

          {/* Seasonal Offer */}
          <div className="glass-dark rounded-2xl p-8 flex flex-col justify-between bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div>
              <span className="text-indigo-400 font-semibold text-sm">Seasonal Offer</span>
              <h3 className="text-3xl font-bold text-white mb-2 mt-2">New Year Collection</h3>
              <p className="text-slate-400 mb-6">Explore our latest arrivals with exclusive discounts</p>
            </div>
            <Link
              href="/shop?collection=new-year"
              className="inline-block gradient-button px-6 py-2 rounded-lg font-semibold text-white w-fit"
            >
              Discover Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
