import Link from "next/link"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-white">Premium</span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Sign in to your account to continue shopping</p>
        </div>

        {/* Form */}
        <LoginForm />

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700/30"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-slate-400">Or continue with</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="px-4 py-3 rounded-lg border border-slate-700 text-white hover:border-teal-500 hover:bg-teal-500/10 transition-all font-semibold">
            Google
          </button>
          <button className="px-4 py-3 rounded-lg border border-slate-700 text-white hover:border-teal-500 hover:bg-teal-500/10 transition-all font-semibold">
            Apple
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-slate-400">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-teal-400 hover:text-teal-300 font-semibold transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
