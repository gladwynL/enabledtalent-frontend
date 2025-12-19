"use client"; // Needed for interactivity (dropdown, mobile menu)

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const countries = [
    { name: 'United States', code: 'us' },
    { name: 'Canada', code: 'ca' },
    { name: 'United Kingdom', code: 'uk' },
    { name: 'Spain', code: 'es' },
    { name: 'Germany', code: 'de' },
    { name: 'France', code: 'fr' },
  ];

  const navItems = [
    { href: '/talent', label: 'For Talents' },
    { href: '/academy', label: 'Enabled Academy' },
    { href: '/programs', label: 'Programs & Awards' },
    { href: '/employers', label: 'For Employers' },
    { href: '/events', label: 'Events' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Image on left */}
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/images/logo.png" 
                alt="EnabledTalent Logo"
                width={120}  // Adjust based on your logo size
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Centered Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side items - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Global dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <Image
                  src="/images/global.png"
                  alt="Global"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <span>Global</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="py-2">
                    {countries.map((country) => (
                      <Link
                        key={country.code}
                        href={`/region/${country.code}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {country.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Vertical separator */}
            <div className="h-6 w-px bg-gray-300"></div>

            {/* Sign In */}
            <Link href="/signin" className="text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </Link>

            {/* Sign Up button */}
            <Link
              href="/signup"
              className="px-4 py-2 bg-[#1a2b44] text-white text-sm rounded-full hover:bg-blue-900 relative transition-colors"
            >
              Sign Up
              {/* Yellow tint overlay */}
              <div className="absolute inset-0 bg-yellow-400 opacity-10 rounded-full"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile global selector */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-gray-700 mb-4">
                  <Image
                    src="/images/global.png"
                    alt="Global"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span>Select Country:</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {countries.map((country) => (
                    <Link
                      key={country.code}
                      href={`/region/${country.code}`}
                      className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {country.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile auth buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link
                  href="/signin"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-[#1a2b44] text-white text-sm rounded-full hover:bg-blue-900 text-center relative"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                  <div className="absolute inset-0 bg-yellow-400 opacity-10 rounded-full"></div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}