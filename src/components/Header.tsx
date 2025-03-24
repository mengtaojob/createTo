'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { name: '首页', path: '/' },
    { name: '关于我们', path: '/about' },
    { name: '服务项目', path: '/services' },
    { name: '案例展示', path: '/projects' },
    { name: '联系我们', path: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/logo.jpg" alt="CreateTo Logo" className="h-10 w-auto" />
          </Link>

          {/* 桌面导航 */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} className="text-gray-600 hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* 移动端菜单按钮 */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* 移动端下拉菜单 */}
        {isOpen && (
          <div className="md:hidden absolute w-full bg-white shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
