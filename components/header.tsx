"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Search, Menu, X, User, Store, Info } from "lucide-react"
import Image from "next/image"

const navigationMenus = [
  {
    label: 'Shop',
    href: '/shop',
    icon: Store,
  },
  {
    label: 'Categories',
    href: '/categories',
    icon: Info,
  },
  {
    label: 'About',
    href: '/about',
    icon: Info,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Info,
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass-dark border-b w-[90%] rounded-full mt-6 mx-auto border-slate-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">

            <Image src={'/cyber-cart.png'} alt="cyber-cart-logo" className="bg-blend-multiply" width={180} height={40}></Image>

          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {
              navigationMenus?.map((menu, i) => {
                return <Link key={i} href={menu.href} className="text-slate-300 hover:text-white transition-colors">
                  {menu.label}
                </Link>
              })
            }
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-slate-300" />
            </button>
            <Link href="/account" className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors">
              <User className="w-5 h-5 text-slate-300" />
            </Link>
            <Link href="/cart" className="relative p-3 hover:bg-slate-800/50 rounded-full bg-black transition-colors">
              <ShoppingCart className="w-5 h-5 text-slate-300" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-teal-500 rounded-full"></span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-slate-300" /> : <Menu className="w-5 h-5 text-slate-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {
              navigationMenus?.map((menu, i) => {
                return <Link key={i} href={menu.href} className="px-4 py-2 text-slate-300 hover:text-white transition-colors">
                  {menu.label}
                </Link>
              })
            }

          </nav>
        )}
      </div>
    </header>
  )
}
