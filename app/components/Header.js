export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg"></div>
            <span className="text-2xl font-bold text-gray-800">EnabledTalent</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="/talent" className="text-gray-700 hover:text-blue-600 font-medium">For Talent</a>
            <a href="/employers" className="text-gray-700 hover:text-blue-600 font-medium">For Employers</a>
            <a href="/academy" className="text-gray-700 hover:text-blue-600 font-medium">Academy</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-5 py-2 text-gray-700 font-medium hover:text-blue-600">
              Sign In
            </button>
            <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}