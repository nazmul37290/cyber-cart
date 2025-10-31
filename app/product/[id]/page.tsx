

import { ProductImageGallery } from "@/components/product/product-image-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { ProductReviews } from "@/components/product/product-reviews"
import { RelatedProducts } from "@/components/product/related-products"
import FrontendLayout from "@/components/layout/frontend-layout"


export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <FrontendLayout>
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <ProductImageGallery productId={id} />
            <ProductInfo productId={id} />
          </div>
          <ProductReviews productId={id} />
          <RelatedProducts productId={id} />
        </div>
      </main>
    </FrontendLayout>
  )
}
