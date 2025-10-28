"use client"

import { useState } from "react"
import Link from "next/link"
import { Trash2, Plus, Minus } from "lucide-react"

const cartItems = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    quantity: 1,
    image: "/wireless-headphones.jpg",
    color: "Black",
    size: "M",
  },
  {
    id: 2,
    name: "Designer Sunglasses",
    price: 249,
    quantity: 2,
    image: "/designer-sunglasses.jpg",
    color: "Gold",
    size: "One Size",
  },
]

export function CartItems() {
  const [items, setItems] = useState(cartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  if (items.length === 0) {
    return (
      <div className="glass-dark rounded-lg p-12 text-center">
        <p className="text-slate-400 text-lg mb-6">Your cart is empty</p>
        <Link href="/shop" className="gradient-button px-6 py-3 rounded-lg font-semibold text-white inline-block">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="glass-dark rounded-lg p-6 flex gap-6">
          {/* Image */}
          <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div className="flex-1">
            <Link
              href={`/product/${item.id}`}
              className="text-white font-semibold hover:text-teal-400 transition-colors"
            >
              {item.name}
            </Link>
            <p className="text-slate-400 text-sm mt-1">
              {item.color} • {item.size}
            </p>
            <p className="text-teal-400 font-semibold mt-2">${item.price}</p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-2 rounded-lg border border-slate-600 text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-2 rounded-lg border border-slate-600 text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Total */}
          <div className="text-right">
            <p className="text-white font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            <button
              onClick={() => removeItem(item.id)}
              className="mt-2 text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 text-sm"
            >
              <Trash2 className="w-4 h-4" />
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
