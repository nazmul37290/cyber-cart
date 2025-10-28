"use client"

import { useState } from "react"
import { Star, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"

interface ProductInfoProps {
  productId: string
}

export function ProductInfo({ productId }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("m")

  const product = {
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 324,
    inStock: true,
    colors: ["black", "silver", "gold"],
    sizes: ["s", "m", "l", "xl"],
    description:
      "Experience premium audio quality with our flagship wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.",
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-600"}`}
              />
            ))}
          </div>
          <span className="text-slate-400">({product.reviews} reviews)</span>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>

        <div className="flex items-baseline gap-3 mb-4">
          <p className="text-4xl font-bold text-teal-400">${product.price}</p>
          <p className="text-xl text-slate-400 line-through">${product.originalPrice}</p>
          <p className="text-lg font-semibold text-green-400">Save 25%</p>
        </div>

        <p className="text-slate-300 leading-relaxed">{product.description}</p>
      </div>

      {/* Options */}
      <div className="space-y-6">
        {/* Color Selection */}
        <div>
          <label className="block text-white font-semibold mb-3">Color</label>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-full border-2 transition-all capitalize ${
                  selectedColor === color ? "border-teal-500 ring-2 ring-teal-500/50" : "border-slate-600"
                }`}
                style={{
                  backgroundColor:
                    color === "black" ? "#1a1a1a" : color === "silver" ? "#c0c0c0" : color === "gold" ? "#ffd700" : "",
                }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <label className="block text-white font-semibold mb-3">Size</label>
          <div className="flex gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-lg border-2 font-semibold uppercase transition-all ${
                  selectedSize === size
                    ? "border-teal-500 bg-teal-500/20 text-teal-400"
                    : "border-slate-600 text-slate-300 hover:border-slate-500"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-white font-semibold mb-3">Quantity</label>
          <div className="flex items-center gap-4 w-fit">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 rounded-lg border border-slate-600 text-white hover:border-teal-500 transition-colors"
            >
              −
            </button>
            <span className="text-white font-semibold text-lg w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 rounded-lg border border-slate-600 text-white hover:border-teal-500 transition-colors"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Stock Status */}
      <div
        className={`p-4 rounded-lg ${product.inStock ? "bg-green-500/20 border border-green-500/50" : "bg-red-500/20 border border-red-500/50"}`}
      >
        <p className={`font-semibold ${product.inStock ? "text-green-400" : "text-red-400"}`}>
          {product.inStock ? "In Stock - Ships within 2-3 business days" : "Out of Stock"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 gradient-button px-8 py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2 group">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
        <button className="px-8 py-4 rounded-lg border border-slate-600 text-white hover:border-teal-500 hover:bg-teal-500/10 transition-all font-semibold">
          Buy Now
        </button>
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-700/30">
        <div className="flex flex-col items-center gap-2">
          <Truck className="w-6 h-6 text-teal-400" />
          <p className="text-sm text-slate-400 text-center">Free Shipping</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Shield className="w-6 h-6 text-teal-400" />
          <p className="text-sm text-slate-400 text-center">2-Year Warranty</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <RotateCcw className="w-6 h-6 text-teal-400" />
          <p className="text-sm text-slate-400 text-center">30-Day Returns</p>
        </div>
      </div>
    </div>
  )
}
