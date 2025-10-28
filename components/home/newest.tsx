import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    rating: 4.8,
    reviews: 324,
    image: "/wireless-headphones.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Luxury Watch Collection",
    price: 599,
    rating: 4.9,
    reviews: 156,
    image: "/luxury-watch.jpg",
    badge: "New",
  },
  {
    id: 3,
    name: "Premium Camera Kit",
    price: 1299,
    rating: 4.7,
    reviews: 89,
    image: "/premium-camera.jpg",
    badge: "Limited",
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 249,
    rating: 4.6,
    reviews: 412,
    image: "/designer-sunglasses.jpg",
    badge: "Popular",
  },
]

export function NewestProducts() {
  return (
    <section className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">New Arrival</h2>
            <p className="text-slate-400">Discover what's are latest at this time</p>
          </div>
          <Link href="/shop" className="text-teal-400 hover:text-teal-300 font-semibold transition-colors">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="group glass-dark rounded-xl overflow-hidden hover:border-teal-500/50 transition-all h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden h-64 bg-slate-800">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-teal-500/90 text-white text-xs font-semibold">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-teal-400 transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-600"}`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-400 text-sm">({product.reviews})</span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-2xl font-bold text-teal-400">${product.price}</p>
                    <button className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
