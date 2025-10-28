import { User, Mail, Phone, MapPin, Edit2 } from "lucide-react"

export function AccountOverview() {
  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="glass-dark rounded-lg p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">John Doe</h2>
              <p className="text-slate-400">Premium Member</p>
            </div>
          </div>
          <button className="p-2 rounded-lg border border-slate-700 text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-colors">
            <Edit2 className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-teal-400" />
            <div>
              <p className="text-slate-400 text-sm">Email</p>
              <p className="text-white font-semibold">john@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-teal-400" />
            <div>
              <p className="text-slate-400 text-sm">Phone</p>
              <p className="text-white font-semibold">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-teal-400" />
            <div>
              <p className="text-slate-400 text-sm">Address</p>
              <p className="text-white font-semibold">San Francisco, CA</p>
            </div>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Member Since</p>
            <p className="text-white font-semibold">January 2024</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-dark rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-teal-400 mb-2">12</p>
          <p className="text-slate-400">Total Orders</p>
        </div>
        <div className="glass-dark rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-teal-400 mb-2">$2,847</p>
          <p className="text-slate-400">Total Spent</p>
        </div>
        <div className="glass-dark rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-teal-400 mb-2">8</p>
          <p className="text-slate-400">Wishlist Items</p>
        </div>
      </div>
    </div>
  )
}
