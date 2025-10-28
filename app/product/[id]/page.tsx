"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductImageGallery } from "@/components/product/product-image-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { ProductReviews } from "@/components/product/product-reviews"
import { RelatedProducts } from "@/components/product/related-products"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <ProductImageGallery productId={params.id} />
            <ProductInfo productId={params.id} />
          </div>
          <ProductReviews productId={params.id} />
          <RelatedProducts productId={params.id} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
