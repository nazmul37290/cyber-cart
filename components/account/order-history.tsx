import Link from "next/link"
import { ChevronRight, Package } from "lucide-react"

const orders = [
  {
    id: "ORD-2025-001234",
    date: "2025-01-15",
    status: "Delivered",
    total: 893.2,
    items: 3,
  },
  {
    id: "ORD-2025-001233",
    date: "2025-01-10",
    status: "Shipped",
    total: 549.99,
    items: 2,
  },
  {
    id: "ORD-2025-001232",
    date: "2025-01-05",
    status: "Processing",
    total: 299.0,
    items: 1,
  },
  {
    id: "ORD-2025-001231",
    date: "2024-12-28",
    status: "Delivered",
    total: 1249.5,
    items: 4,
  },
]

export function OrderHistory() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-6">Order History</h2>

      {orders.map((order) => (
        <Link key={order.id} href={`/account/orders/${order.id}`}>
          <div className="glass-dark rounded-lg p-6 hover:border-teal-500/50 transition-all cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <Package className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">{order.id}</p>
                  <p className="text-slate-400 text-sm">{order.date}</p>
                </div>
              </div>

              <div className="text-right mr-4">
                <p className="text-white font-semibold">${order.total.toFixed(2)}</p>
                <p className="text-slate-400 text-sm">{order.items} items</p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    order.status === "Delivered"
                      ? "bg-green-500/20 text-green-400"
                      : order.status === "Shipped"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {order.status}
                </span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
