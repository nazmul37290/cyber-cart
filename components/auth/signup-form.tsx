"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, Check, X } from "lucide-react"

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  const [passwordStrength, setPasswordStrength] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    if (name === "password") {
      let strength = 0
      if (value.length >= 8) strength++
      if (/[A-Z]/.test(value)) strength++
      if (/[0-9]/.test(value)) strength++
      if (/[^A-Za-z0-9]/.test(value)) strength++
      setPasswordStrength(strength)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Signup attempt:", formData)
  }

  const passwordsMatch = formData.password === formData.confirmPassword && formData.password.length > 0

  return (
    <form onSubmit={handleSubmit} className="glass-dark rounded-lg p-8 space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-white font-semibold mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-white font-semibold mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-white font-semibold mb-2">Password</label>
        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        {/* Password Strength */}
        {formData.password && (
          <div className="space-y-2">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full ${i < passwordStrength ? "bg-teal-500" : "bg-slate-700"}`}
                ></div>
              ))}
            </div>
            <p className="text-xs text-slate-400">
              {passwordStrength === 0 && "Very weak"}
              {passwordStrength === 1 && "Weak"}
              {passwordStrength === 2 && "Fair"}
              {passwordStrength === 3 && "Good"}
              {passwordStrength === 4 && "Strong"}
            </p>
          </div>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-white font-semibold mb-2">Confirm Password</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
          {formData.confirmPassword && (
            <div className="absolute right-12 top-1/2 -translate-y-1/2">
              {passwordsMatch ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-red-400" />}
            </div>
          )}
        </div>
      </div>

      {/* Terms */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-teal-500 cursor-pointer mt-1"
          required
        />
        <span className="text-slate-300 text-sm">
          I agree to the{" "}
          <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
            Privacy Policy
          </a>
        </span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!passwordsMatch || !formData.agreeToTerms}
        className="w-full gradient-button px-6 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg hover:shadow-teal-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Create Account
      </button>
    </form>
  )
}
