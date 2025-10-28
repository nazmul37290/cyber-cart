"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const categories = [
  { id: 1, name: "Electronics", count: 2500 },
  { id: 2, name: "Fashion", count: 3200 },
  { id: 3, name: "Home & Living", count: 1800 },
  { id: 4, name: "Premium Gear", count: 1200 },
]

const priceRanges = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $500", min: 100, max: 500 },
  { label: "$500 - $1000", min: 500, max: 1000 },
  { label: "$1000+", min: 1000, max: 2000 },
]

interface ShopFiltersProps {
  filters: {
    categories: number[]
    priceRange: [number, number]
    rating: number
    inStock: boolean
  }
  setFilters: (filters: any) => void
}

export function ShopFilters({ filters, setFilters }: ShopFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    rating: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleCategoryChange = (categoryId: number) => {
    setFilters({
      ...filters,
      categories: filters.categories.includes(categoryId)
        ? filters.categories.filter((id) => id !== categoryId)
        : [...filters.categories, categoryId],
    })
  }

  const handlePriceChange = (min: number, max: number) => {
    setFilters({
      ...filters,
      priceRange: [min, max],
    })
  }

  const handleRatingChange = (rating: number) => {
    setFilters({
      ...filters,
      rating: filters.rating === rating ? 0 : rating,
    })
  }

  return (
    <div className="space-y-6">
      {/* Categories Filter */}
      <div className="glass-dark rounded-lg p-4">
        <button
          onClick={() => toggleSection("categories")}
          className="w-full flex items-center justify-between text-white font-semibold mb-4"
        >
          Categories
          <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.categories ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.categories && (
          <div className="space-y-3">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                  className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-teal-500 cursor-pointer"
                />
                <span className="text-slate-300 group-hover:text-white transition-colors text-sm">{category.name}</span>
                <span className="text-slate-500 text-xs ml-auto">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="glass-dark rounded-lg p-4">
        <button
          onClick={() => toggleSection("price")}
          className="w-full flex items-center justify-between text-white font-semibold mb-4"
        >
          Price Range
          <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.price ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.price && (
          <div className="space-y-2">
            {priceRanges.map((range, idx) => (
              <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  checked={filters.priceRange[0] === range.min && filters.priceRange[1] === range.max}
                  onChange={() => handlePriceChange(range.min, range.max)}
                  className="w-4 h-4 border-slate-600 bg-slate-800 text-teal-500 cursor-pointer"
                />
                <span className="text-slate-300 group-hover:text-white transition-colors text-sm">{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="glass-dark rounded-lg p-4">
        <button
          onClick={() => toggleSection("rating")}
          className="w-full flex items-center justify-between text-white font-semibold mb-4"
        >
          Rating
          <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.rating ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.rating && (
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === rating}
                  onChange={() => handleRatingChange(rating)}
                  className="w-4 h-4 border-slate-600 bg-slate-800 text-teal-500 cursor-pointer"
                />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < rating ? "text-yellow-400" : "text-slate-600"}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-slate-400 text-xs ml-auto">& up</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Stock Filter */}
      <div className="glass-dark rounded-lg p-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => setFilters({ ...filters, inStock: e.target.checked })}
            className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-teal-500 cursor-pointer"
          />
          <span className="text-white font-semibold">In Stock Only</span>
        </label>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() =>
          setFilters({
            categories: [],
            priceRange: [0, 2000],
            rating: 0,
            inStock: true,
          })
        }
        className="w-full py-2 rounded-lg border border-slate-600 text-slate-300 hover:text-white hover:border-teal-500 transition-colors font-semibold"
      >
        Reset Filters
      </button>
    </div>
  )
}
