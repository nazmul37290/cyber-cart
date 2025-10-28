"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShopFilters } from "@/components/shop/shop-filters"
import { ProductGrid } from "@/components/shop/product-grid"
import { ShopHeader } from "@/components/shop/shop-header"

export default function ShopPage() {
  const [sortBy, setSortBy] = useState("trending")
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 2000],
    rating: 0,
    inStock: true,
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ShopHeader />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ShopFilters filters={filters} setFilters={setFilters} />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <ProductGrid sortBy={sortBy} setSortBy={setSortBy} filters={filters} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
