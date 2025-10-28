"use client"

import { useState } from "react"
import { Star, ThumbsUp } from "lucide-react"

const reviews = [
  {
    id: 1,
    author: "John Smith",
    rating: 5,
    date: "2 weeks ago",
    title: "Exceptional Quality!",
    content:
      "These headphones exceeded my expectations. The sound quality is incredible and they're very comfortable for long listening sessions.",
    helpful: 234,
    verified: true,
  },
  {
    id: 2,
    author: "Sarah Johnson",
    rating: 4,
    date: "1 month ago",
    title: "Great Product, Minor Issues",
    content:
      "Overall very satisfied with the purchase. Battery life is amazing, though the app could use some improvements.",
    helpful: 156,
    verified: true,
  },
  {
    id: 3,
    author: "Michael Chen",
    rating: 5,
    date: "1 month ago",
    title: "Best Headphones I've Owned",
    content:
      "Premium build quality, excellent noise cancellation, and the customer service is top-notch. Highly recommended!",
    helpful: 412,
    verified: true,
  },
]

export function ProductReviews({ productId }: { productId: string }) {
  const [sortBy, setSortBy] = useState("helpful")

  return (
    <section className="py-12 border-t border-slate-700/30">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Customer Reviews</h2>

        {/* Rating Summary */}
        <div className="glass-dark rounded-lg p-6 mb-8">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center">
              <p className="text-5xl font-bold text-white">4.8</p>
              <div className="flex gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-400 text-sm">Based on 324 reviews</p>
            </div>

            {/* Rating Breakdown */}
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-3">
                  <span className="text-slate-400 text-sm w-12">{rating} star</span>
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-indigo-500"
                      style={{ width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : 2}%` }}
                    ></div>
                  </div>
                  <span className="text-slate-400 text-sm w-12 text-right">
                    {rating === 5 ? 227 : rating === 4 ? 65 : rating === 3 ? 23 : rating === 2 ? 7 : 2}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Write Review Button */}
        <button className="gradient-button px-6 py-3 rounded-lg font-semibold text-white mb-8">Write a Review</button>
      </div>

      {/* Sort and Filter */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-slate-400">Showing {reviews.length} reviews</p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm hover:border-teal-500 transition-colors cursor-pointer"
        >
          <option value="helpful">Most Helpful</option>
          <option value="recent">Most Recent</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="glass-dark rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-600"}`}
                      />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Verified Purchase</span>
                  )}
                </div>
                <h3 className="text-white font-semibold">{review.title}</h3>
                <p className="text-slate-400 text-sm">
                  {review.author} • {review.date}
                </p>
              </div>
            </div>

            <p className="text-slate-300 mb-4 leading-relaxed">{review.content}</p>

            <button className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm">Helpful ({review.helpful})</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
