import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { TrendingProducts } from "@/components/home/trending-products"
import { DealsSection } from "@/components/home/deals-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import Slider from '@/components/home/slider'
import { NewestProducts } from "@/components/home/newest"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* <HeroSection /> */}

        <Slider></Slider>
        <CategoriesSection />
        <TrendingProducts />
        <NewestProducts></NewestProducts>
        <DealsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
