export default function AcademyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Enabled Academy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your tech career with hands-on training, mentorship, and industry-recognized certifications.
          </p>
          <div className="mt-10">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 mr-4">
              Browse Courses
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50">
              Meet Our Instructors
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">FE</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
              <p className="text-gray-600 mb-4">
                Master React, Next.js, and modern UI/UX principles. Build responsive web applications.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">8 Weeks</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold">BE</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Backend Development</h3>
              <p className="text-gray-600 mb-4">
                Learn Node.js, databases, APIs, and server architecture. Create scalable backend systems.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">10 Weeks</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold">FS</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Full-Stack Bootcamp</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive training covering both frontend and backend technologies for complete web development.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">16 Weeks</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2,500+</div>
              <div className="text-gray-400">Students Trained</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-gray-400">Employment Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-gray-400">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands who have accelerated their tech careers with Enabled Academy.
          </p>
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            />
            <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700">
              Get Started Free
            </button>
            <p className="text-gray-500 text-sm mt-4">
              No credit card required. Start with our free introductory course.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}