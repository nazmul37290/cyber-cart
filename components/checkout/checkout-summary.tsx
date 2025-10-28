export function CheckoutSummary() {
  const subtotal = 299 + 249 * 2
  const shipping = 15
  const tax = (subtotal + shipping) * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="glass-dark rounded-lg p-6 sticky top-24 space-y-6">
      <h2 className="text-xl font-bold text-white">Order Summary</h2>

      {/* Items */}
      <div className="space-y-3 pb-6 border-b border-slate-700/30">
        <div className="flex justify-between text-slate-300 text-sm">
          <span>Premium Wireless Headphones x1</span>
          <span>$299.00</span>
        </div>
        <div className="flex justify-between text-slate-300 text-sm">
          <span>Designer Sunglasses x2</span>
          <span>$498.00</span>
        </div>
      </div>

      {/* Breakdown */}
      <div className="space-y-3 pb-6 border-b border-slate-700/30">
        <div className="flex justify-between text-slate-300">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="text-white font-semibold">Total</span>
        <span className="text-3xl font-bold text-teal-400">${total.toFixed(2)}</span>
      </div>

      {/* Security Info */}
      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
        <p className="text-green-400 text-sm font-semibold">✓ Secure checkout powered by Stripe</p>
      </div>
    </div>
  )
}
