"use client"

import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import { useState } from "react"

const allProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    rating: 4.8,
    reviews: 324,
    image: "/wireless-headphones.jpg",
    category: 1,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Luxury Watch Collection",
    price: 599,
    rating: 4.9,
    reviews: 156,
    image: "/luxury-watch.jpg",
    category: 2,
    badge: "New",
  },
  {
    id: 3,
    name: "Premium Camera Kit",
    price: 1299,
    rating: 4.7,
    reviews: 89,
    image: "/premium-camera.jpg",
    category: 1,
    badge: "Limited",
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 249,
    rating: 4.6,
    reviews: 412,
    image: "/designer-sunglasses.jpg",
    category: 2,
    badge: "Popular",
  },
  {
    id: 5,
    name: "Smart Home Hub",
    price: 199,
    rating: 4.5,
    reviews: 234,
    image: "/smart-home-hub.jpg",
    category: 1,
    badge: null,
  },
  {
    id: 6,
    name: "Premium Leather Bag",
    price: 449,
    rating: 4.7,
    reviews: 178,
    image: "/leather-bag.jpg",
    category: 2,
    badge: null,
  },
  {
    id: 7,
    name: "Wireless Charging Pad",
    price: 79,
    rating: 4.4,
    reviews: 567,
    image: "/charging-pad.jpg",
    category: 1,
    badge: null,
  },
  {
    id: 8,
    name: "Designer Backpack",
    price: 329,
    rating: 4.6,
    reviews: 289,
    image: "/designer-backpack.jpg",
    category: 2,
    badge: null,
  },
]

interface ProductGridProps {
  sortBy: string
  setSortBy: (sort: string) => void
  filters: {
    categories: number[]
    priceRange: [number, number]
    rating: number
    inStock: boolean
  }
}

export function ProductGrid({ sortBy, setSortBy, filters }: ProductGridProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false
    }
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false
    }
    if (filters.rating > 0 && product.rating < filters.rating) {
      return false
    }
    return true
  })

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating)
  } else if (sortBy === "newest") {
    filteredProducts.reverse()
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-700/30">
        <p className="text-slate-400">
          Showing <span className="text-white font-semibold">{filteredProducts.length}</span> products
        </p>

        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm hover:border-teal-500 transition-colors cursor-pointer"
          >
            <option value="trending">Trending</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex gap-2 bg-slate-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1 rounded transition-colors ${
                viewMode === "grid" ? "bg-teal-600 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1 rounded transition-colors ${
                viewMode === "list" ? "bg-teal-600 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div
                className={`group glass-dark rounded-xl overflow-hidden hover:border-teal-500/50 transition-all ${
                  viewMode === "list" ? "flex gap-4 p-4" : ""
                }`}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden bg-slate-800 ${viewMode === "list" ? "w-32 h-32 flex-shrink-0" : "h-64"}`}
                >
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
                <div
                  className={`${viewMode === "list" ? "flex-grow flex flex-col justify-between" : "p-4 flex flex-col flex-grow"}`}
                >
                  <div>
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
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
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
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">No products found matching your filters.</p>
        </div>
      )}
    </div>
  )
}
