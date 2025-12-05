export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-[#f5efe3]">
      {/* Hero Section - Matches Figma design */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row">
        {/* Left side - Image */}
        <div className="lg:w-1/2 bg-gradient-to-br from-blue-50 to-white p-8 lg:p-20 flex items-center justify-center">
          <div className="max-w-md">
            {/* Image from public/images folder */}
            <img 
              src="/images/hero.png" 
              alt="Enabled Academy students learning and collaborating" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center">
          {/* Tag */}
          <div className="mb-6">
            <span className="inline-block px-4 py-1 bg-white text-gray-700 rounded-full text-sm font-semibold border border-gray-200">
              ENABLED ACADEMY
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Learn. Train. Grow.
            <br />
            <span className="text-blue-900">Get Ready for Opportunity.</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-700 mb-10 max-w-2xl">
            Enabled Academy is a training and job-readiness program that helps people build real skills while supporting employers with qualified, prepared, and confident talent.
            <br /><br />
            Whether you're an individual looking to grow your career — or an employer looking for trained talent — Enabled Academy is here to support your journey.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#1a2b44] text-white font-semibold rounded-full hover:bg-blue-900 transition-colors flex items-center justify-center">
              For Talents
              <span className="ml-2">→</span>
            </button>
            <button className="px-8 py-4 bg-yellow-100 border-2 border-[#1a2b44] text-[#1a2b44] font-semibold rounded-full hover:bg-yellow-200 transition-colors flex items-center justify-center relative">
              For Employers
              <span className="ml-2">→</span>
              {/* Extra yellow tint */}
              <div className="absolute inset-0 bg-yellow-300 opacity-20 rounded-full"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Additional Content Sections (Add below as needed) */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            How Enabled Academy Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Skill Assessment</h3>
              <p className="text-gray-600">
                We evaluate your current skills and career goals to create a personalized learning path.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Hands-On Training</h3>
              <p className="text-gray-600">
                Learn through real-world projects, mentorship, and industry-relevant curriculum.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Job Placement</h3>
              <p className="text-gray-600">
                Connect with employer partners and start your career with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}