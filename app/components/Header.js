export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Image on left */}
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="EnabledTalent Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Centered Navigation - Removed blue from "Enabled Academy" */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="/talent" className="text-gray-700 hover:text-blue-600 font-medium">For Talents</a>
            <a href="/academy" className="text-gray-700 hover:text-blue-600 font-medium">Enabled Academy</a>
            <a href="/programs" className="text-gray-700 hover:text-blue-600 font-medium">Programs & Awards</a>
            <a href="/employers" className="text-gray-700 hover:text-blue-600 font-medium">For Employers</a>
            <a href="/events" className="text-gray-700 hover:text-blue-600 font-medium">Events</a>
          </nav>

          {/* Right side items - Added earth/global icon */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Global with earth icon and dropdown arrow - CLICK TO OPEN (CSS only) */}
            <div className="relative focus-within:dropdown-open">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none peer">
                {/* Earth/Global icon */}
                <img 
                  src="/images/global.png" 
                  alt="Global"
                  className="h-5 w-5"
                />
                <span>Global</span>
                <svg className="w-4 h-4 transition-transform peer-focus:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown menu - appears on focus/click */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible peer-focus:opacity-100 peer-focus:visible focus-within:opacity-100 focus-within:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100">
                    United States
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100">
                    Canada
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100">
                    United Kingdom
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100">
                    Spain
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100">
                    Germany
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100">
                    France
                  </a>
                </div>
              </div>
            </div>

            {/* Vertical separator */}
            <div className="h-6 w-px bg-gray-300"></div>

            {/* Sign In */}
            <a href="/signin" className="text-gray-700 hover:text-blue-600 font-medium">Sign In</a>

            {/* Sign Up button with yellow tint */}
            <button className="px-4 py-2 bg-[#1a2b44] text-white text-sm rounded-full hover:bg-blue-900 relative">
              Sign Up
              {/* Yellow tint overlay */}
              <div className="absolute inset-0 bg-yellow-400 opacity-10 rounded-full"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}