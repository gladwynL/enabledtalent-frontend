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

      {/* ========== WHO WE ARE SECTION ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column - Content */}
            <div className="lg:w-1/2">
              {/* Section Title */}
              <div className="mb-8">
                <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold border border-gray-200">
                  WHO WE ARE
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                What Is<br />
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Enabled Academy?
                </span>
              </h2>

              {/* Description Text */}
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  Enabled Academy is a skill-building and readiness hub that improves access to meaningful jobs.
                </p>
                <p>
                  We train individuals across different career paths, help them gain confidence, and connect them with employers who need job-ready talent.
                </p>
                <p>
                  We work closely with employers to understand their staffing needs and train candidates with the exact skills required for the role — from customer care to office support to IT and engineering.
                </p>
              </div>
            </div>

            {/* Right Column - Image container */}
            <div className="lg:w-1/2 flex items-center mt-12">
              <div className="w-full max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ssp2.png" 
                  alt="Progress visualization showing 75% projects completed and Kevin Ross: 60th accounts in Thailand"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== END WHO WE ARE SECTION ========== */}

      {/* ========== FOR TALENT SECTION ========== */}
      <section className="py-20 px-6 bg-[#f5efe3]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column - Image */}
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ssp3.png" 
                  alt="Woman participating in Enabled Academy program"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-1/2">
              {/* Section Title */}
              <div className="mb-6">
                <span className="inline-block px-4 py-1 bg-white text-gray-700 rounded-full text-sm font-semibold border border-gray-200">
                  FOR TALENT
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  What Is Enabled Academy?
                </span><br />
                <span className="text-black">
                  Become Job-Ready.
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-700 mb-8">
                Enabled Academy helps you learn practical skills, prepare for interviews, and become confident in your career journey. Our programs are designed for all skill levels and support a wide range of career interests.
              </p>

              {/* What You'll Receive */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Receive</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">Role-based training for different industries</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">One-on-one coaching and interview preparation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">Resume and profile guidance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">Communication and workplace readiness training</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">Accessibility support and learning accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">Direct connections to employer partners</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">A supportive learning environment focused on your success</span>
                  </li>
                </ul>
              </div>

              {/* Button */}
              <button className="px-8 py-4 bg-[#1a2b44] text-white font-semibold rounded-full hover:bg-blue-900 transition-colors flex items-center justify-center w-full sm:w-auto">
                Join Enabled Academy
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ========== END FOR TALENT SECTION ========== */}

      {/* ========== WHO WE SUPPORT SECTION ========== */}
      <section className="py-20 px-6">
        <div className="flex justify-center items-center">
          <div className="bg-[#0f1a2e] rounded-[40px] p-8 md:p-12 lg:p-16 max-w-6xl w-full text-center text-white">
            {/* Tag */}
            <div className="mb-6">
              <span className="inline-block px-5 py-2 bg-white/10 text-white rounded-full text-sm font-semibold">
                WHO WE SUPPORT
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Who </span>
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">This Is For</span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Anyone looking to improve skills, start a career, restart a career, or grow into new opportunities — including students, newcomers, career-changers, and people facing barriers.
            </p>

            {/* Button */}
            <a 
              href="/join"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f3a641] text-black font-semibold rounded-full hover:bg-[#ffb65c] transition-colors mx-auto mb-12"
            >
              Join Enabled Academy
              <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm">→</span>
              </span>
            </a>

                        {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-[#132038] p-6 rounded-2xl">
                <div className="flex items-end gap-3 mb-3">
                  <div className="text-left">
                    <div className="text-gray-300 text-xs">2019</div>
                    <div className="text-gray-300 text-sm font-semibold">10%</div>
                  </div>
                  <div className="flex items-end gap-1 flex-1">
                    <div className="w-4 h-8 bg-[#9aa3b5] rounded-t"></div>
                    <div className="w-4 h-12 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-t"></div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#f3a641] text-xs">2025</div>
                    <div className="text-[#f3a641] text-sm font-semibold">18%</div>
                  </div>
                </div>
                <p className="text-white text-sm font-medium text-center">Information Systems<br />Audit Process</p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-[#132038] p-6 rounded-2xl">
                <div className="flex items-end gap-3 mb-3">
                  <div className="text-left">
                    <div className="text-gray-300 text-xs">2019</div>
                    <div className="text-gray-300 text-sm font-semibold">10%</div>
                  </div>
                  <div className="flex items-end gap-1 flex-1">
                    <div className="w-4 h-8 bg-[#9aa3b5] rounded-t"></div>
                    <div className="w-4 h-12 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-t"></div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#f3a641] text-xs">2025</div>
                    <div className="text-[#f3a641] text-sm font-semibold">18%</div>
                  </div>
                </div>
                <p className="text-white text-sm font-medium text-center">Information Systems<br />Audit Process</p>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-[#132038] p-6 rounded-2xl">
                <div className="flex items-end gap-3 mb-3">
                  <div className="text-left">
                    <div className="text-gray-300 text-xs">2019</div>
                    <div className="text-gray-300 text-sm font-semibold">10%</div>
                  </div>
                  <div className="flex items-end gap-1 flex-1">
                    <div className="w-4 h-8 bg-[#9aa3b5] rounded-t"></div>
                    <div className="w-4 h-12 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-t"></div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#f3a641] text-xs">2025</div>
                    <div className="text-[#f3a641] text-sm font-semibold">18%</div>
                  </div>
                </div>
                <p className="text-white text-sm font-medium text-center">Information Systems<br />Audit Process</p>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-[#132038] p-6 rounded-2xl">
                <div className="flex items-end gap-3 mb-3">
                  <div className="text-left">
                    <div className="text-gray-300 text-xs">2019</div>
                    <div className="text-gray-300 text-sm font-semibold">10%</div>
                  </div>
                  <div className="flex items-end gap-1 flex-1">
                    <div className="w-4 h-8 bg-[#9aa3b5] rounded-t"></div>
                    <div className="w-4 h-12 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-t"></div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#f3a641] text-xs">2025</div>
                    <div className="text-[#f3a641] text-sm font-semibold">18%</div>
                  </div>
                </div>
                <p className="text-white text-sm font-medium text-center">Information Systems<br />Audit Process</p>
              </div>

              {/* Stat Card 5 */}
              <div className="bg-[#132038] p-6 rounded-2xl">
                <div className="flex items-end gap-3 mb-3">
                  <div className="text-left">
                    <div className="text-gray-300 text-xs">2019</div>
                    <div className="text-gray-300 text-sm font-semibold">10%</div>
                  </div>
                  <div className="flex items-end gap-1 flex-1">
                    <div className="w-4 h-8 bg-[#9aa3b5] rounded-t"></div>
                    <div className="w-4 h-12 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-t"></div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#f3a641] text-xs">2025</div>
                    <div className="text-[#f3a641] text-sm font-semibold">18%</div>
                  </div>
                </div>
                <p className="text-white text-sm font-medium text-center">Information Systems<br />Audit Process</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== END WHO WE SUPPORT SECTION ========== */}

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