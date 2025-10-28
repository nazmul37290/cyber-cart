import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Buyer",
    content: "Exceptional quality and fast shipping. The product exceeded my expectations!",
    rating: 5,
    avatar: "/avatar-woman.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Premium Member",
    content: "Outstanding customer service and premium products. Highly recommended!",
    rating: 5,
    avatar: "/avatar-man.png",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Verified Buyer",
    content: "Love the elegant design and attention to detail. Worth every penny.",
    rating: 5,
    avatar: "/avatar-woman-2.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-slate-400 text-lg">Join thousands of satisfied customers worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass-dark rounded-xl p-6">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 mb-6 leading-relaxed">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
