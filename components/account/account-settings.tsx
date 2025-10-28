"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export function AccountSettings() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Settings updated:", formData)
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>

        {/* Personal Information */}
        <form onSubmit={handleSubmit} className="glass-dark rounded-lg p-8 space-y-6 mb-8">
          <h3 className="text-lg font-semibold text-white">Personal Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-semibold mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:border-teal-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:border-teal-500 focus:outline-none transition-colors"
            />
          </div>

          <button type="submit" className="gradient-button px-6 py-3 rounded-lg font-semibold text-white">
            Save Changes
          </button>
        </form>

        {/* Change Password */}
        <form onSubmit={handleSubmit} className="glass-dark rounded-lg p-8 space-y-6">
          <h3 className="text-lg font-semibold text-white">Change Password</h3>

          <div>
            <label className="block text-white font-semibold mb-2">Current Password</label>
            <div className="relative">
              <input
                type={showPasswords.current ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:border-teal-500 focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPasswords((prev) => ({ ...prev, current: !prev.current }))}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                {showPasswords.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">New Password</label>
            <div className="relative">
              <input
                type={showPasswords.new ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:border-teal-500 focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPasswords((prev) => ({ ...prev, new: !prev.new }))}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                {showPasswords.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type={showPasswords.confirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:border-teal-500 focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPasswords((prev) => ({ ...prev, confirm: !prev.confirm }))}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                {showPasswords.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button type="submit" className="gradient-button px-6 py-3 rounded-lg font-semibold text-white">
            Update Password
          </button>
        </form>
      </div>
    </div>
  )
}
