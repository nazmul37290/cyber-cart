import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"

const relatedProducts = [
  {
    id: 5,
    name: "Smart Home Hub",
    price: 199,
    rating: 4.5,
    reviews: 234,
    image: "/smart-home-hub.jpg",
  },
  {
    id: 6,
    name: "Premium Leather Bag",
    price: 449,
    rating: 4.7,
    reviews: 178,
    image: "/leather-bag.jpg",
  },
  {
    id: 7,
    name: "Wireless Charging Pad",
    price: 79,
    rating: 4.4,
    reviews: 567,
    image: "/charging-pad.jpg",
  },
  {
    id: 8,
    name: "Designer Backpack",
    price: 329,
    rating: 4.6,
    reviews: 289,
    image: "/designer-backpack.jpg",
  },
]

export function RelatedProducts({ productId }: { productId: string }) {
  return (
    <section className="py-12 border-t border-slate-700/30">
      <h2 className="text-3xl font-bold text-white mb-8">Related Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="group glass-dark rounded-xl overflow-hidden hover:border-teal-500/50 transition-all h-full flex flex-col">
              <div className="relative overflow-hidden h-64 bg-slate-800">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-teal-400 transition-colors">
                  {product.name}
                </h3>

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
    </section>
  )
}
