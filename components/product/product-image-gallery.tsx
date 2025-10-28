"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

const productImages = [
  "/wireless-headphones.jpg",
  "/wireless-headphones.jpg",
  "/wireless-headphones.jpg",
  "/wireless-headphones.jpg",
]

interface ProductImageGalleryProps {
  productId: string
}

export function ProductImageGallery({ productId }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative glass-dark rounded-2xl overflow-hidden h-96 lg:h-full flex items-center justify-center group">
        <img
          src={productImages[selectedImage] || "/placeholder.svg"}
          alt="Product"
          className="w-full h-full object-cover"
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
        >
          <Heart className={`w-6 h-6 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
          {selectedImage + 1} / {productImages.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-3">
        {productImages.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`relative rounded-lg overflow-hidden h-20 border-2 transition-all ${
              selectedImage === idx ? "border-teal-500" : "border-slate-700 hover:border-slate-600"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
