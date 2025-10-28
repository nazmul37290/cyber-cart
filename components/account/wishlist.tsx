import Link from "next/link"
import { Star, ShoppingCart, Trash2 } from "lucide-react"

const wishlistItems = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    rating: 4.8,
    reviews: 324,
    image: "/wireless-headphones.jpg",
  },
  {
    id: 2,
    name: "Luxury Watch Collection",
    price: 599,
    rating: 4.9,
    reviews: 156,
    image: "/luxury-watch.jpg",
  },
  {
    id: 3,
    name: "Premium Camera Kit",
    price: 1299,
    rating: 4.7,
    reviews: 89,
    image: "/premium-camera.jpg",
  },
]

export function Wishlist() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">My Wishlist</h2>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`}>
              <div className="group glass-dark rounded-xl overflow-hidden hover:border-teal-500/50 transition-all h-full flex flex-col">
                <div className="relative overflow-hidden h-64 bg-slate-800">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-teal-400 transition-colors">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-600"}`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-400 text-sm">({item.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto gap-2">
                    <p className="text-2xl font-bold text-teal-400">${item.price}</p>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-lg border border-slate-600 text-red-400 hover:border-red-500 hover:bg-red-500/10 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="glass-dark rounded-lg p-12 text-center">
          <p className="text-slate-400 text-lg mb-6">Your wishlist is empty</p>
          <Link href="/shop" className="gradient-button px-6 py-3 rounded-lg font-semibold text-white inline-block">
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  )
}
