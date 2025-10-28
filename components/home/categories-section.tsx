import Link from "next/link"
import { Package, Zap, Sparkles, Shield } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: Zap,
    count: 2500,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Fashion",
    icon: Sparkles,
    count: 3200,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Home & Living",
    icon: Package,
    count: 1800,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    name: "Premium Gear",
    icon: Shield,
    count: 1200,
    color: "from-orange-500 to-red-500",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Shop by Category</h2>
          <p className="text-slate-400 text-lg">Explore our diverse collection of premium products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.id} href={`/shop?category=${category.id}`}>
                <div className="group glass-dark p-6 rounded-xl hover:border-teal-500/50 transition-all cursor-pointer h-full">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{category.count} products</p>
                  <div className="text-teal-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Explore →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="flex justify-center">
          <Link href="/categories" className="mx-auto">
            <button className="mx-auto mt-8 gradient-button px-6 py-2 rounded-lg font-semibold text-white">
              View All →
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
