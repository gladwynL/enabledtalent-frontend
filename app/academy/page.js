export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-[#f5efe3]">
      {/* Hero Section - Matches Figma design */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row">
        {/* Left side - Image */}
        <div className="lg:w-1/2 bg-gradient-to-br from-blue-50 to-white p-8 lg:p-20 flex items-center justify-center">
          <div className="max-w-full w-full">
            <img 
              src="/images/ssp1.png" 
              alt="Enabled Academy students learning and collaborating" 
              className="rounded-2xl shadow-lg w-full h-auto max-h-[80vh] object-contain"
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


      {/* ========== FOR EMPLOYERS SECTION ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column - Image with stats */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/ssp4.png" 
                    alt="Employer and employee discussing opportunities"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-1/2">
              {/* Section Title */}
              <div className="mb-6">
                <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold border border-gray-200">
                  FOR EMPLOYERS
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="text-black">Your Workforce</span><br />
                <span className="text-black">Training &</span><br />
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Talent Partner
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-4 mb-8">
                <p className="text-gray-700">
                  Enabled Academy helps employers build a stronger and more prepared workforce by training candidates based on real job requirements.
                </p>
                <p className="text-gray-700">
                  We support you with a flexible, inclusive, and job-ready talent pipeline.
                </p>
              </div>

              {/* Book a Call Now Button */}
              <button className="px-8 py-3 bg-[#1a2b44] text-white font-semibold rounded-full hover:bg-blue-900 transition-colors flex items-center justify-center mb-10 w-full sm:w-auto">
                Book a Call Now
                <span className="ml-2">→</span>
              </button>

              {/* How We Support Employers */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How We Support Employers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">We train them specifically for your roles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">We source and identify potential candidates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">We provide one-on-one coaching and readiness support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">We support inclusive hiring practices across all departments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">We reduce onboarding challenges and help improve retention</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">We prepare candidates to fully understand your workflows, tools, and processes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== END FOR EMPLOYERS SECTION ========== */}

      {/* ========== WE SUPPORT ALL TYPES OF ROLES SECTION ========== */}
      <section className="py-20 px-6 bg-[#f5efe3]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-black">We Support </span>
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                All Types of Roles
              </span>
            </h2>
          </div>

          {/* Row 1 - 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-3 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">Customer Service & Call Centre</span>
            </div>
            <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-3 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">HR & Recruitment</span>
            </div>
            <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-3 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">Administrative & Office Support</span>
            </div>
            <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-3 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">Operations & Logistics</span>
            </div>
          </div>

          {/* Row 2 - 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-3 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">Data & Digital Roles</span>
            </div>
            <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-3 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">Sales & Retail</span>
            </div>
            <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-3 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">Business Analyst & Project Coordinator</span>
            </div>
            <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-3 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">Marketing & Social Media</span>
            </div>
          </div>

          {/* Row 3 - 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-3 border border-gray-100 shadow-sm lg:col-start-2">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">Software & Technical Roles</span>
            </div>
            <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-3 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">IT Support</span>
            </div>
          </div>

          {/* Orange gradient note */}
          <div className="text-center">
            <p className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent text-xl font-medium">
              ... and more — we customize based on your staffing needs.
            </p>
          </div>
        </div>
      </section>
      {/* ========== END WE SUPPORT ALL TYPES OF ROLES SECTION ========== */}

      {/* ========== HOW ENABLED ACADEMY WORKS SECTION ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            {/* Section Title */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold border border-gray-200">
                HOW ENABLED ACADEMY WORKS
              </span>
            </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
            A Simple, Clear Process that Supports<br />
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Both Talents and Employers.
            </span>
          </h2>
        </div>

        {/* Combined vertical line container */}
        <div className="relative mt-24">
          {/* Logo above the vertical line */}
          <div className="absolute left-1/2 -top-16 transform -translate-x-1/2 hidden lg:block">
            <img 
              src="/images/ssp5p2.png" 
              alt="Enabled Academy logo"
              className="w-24 h-24"
            />
          </div>

          {/* Main continuous vertical line container - with circles aligned to section titles */}
          <div className="absolute left-1/2 top-12 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-yellow-500 transform -translate-x-1/2 hidden lg:block">
            {/* Circle 1: Aligns with "Understand the Need" */}
            <div className="absolute left-1/2 top-36 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 -top-1.5"></div>
                <div className="w-6 h-6 rounded-full border-4 border-orange-500 bg-white relative z-10"></div>
              </div>
            </div>
            
            {/* Circle 2: Aligns with "Train, Coach & Prepare" */}
            <div className="absolute left-1/2 top-[43%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 -top-1.5"></div>
                <div className="w-6 h-6 rounded-full border-4 border-orange-500 bg-white relative z-10"></div>
              </div>
            </div>
            
            {/* Circle 3: Aligns with "Match & Hire" */}
            <div className="absolute left-1/2 top-[76%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 -top-1.5"></div>
                <div className="w-6 h-6 rounded-full border-4 border-orange-500 bg-white relative z-10"></div>
              </div>
            </div>
          </div>

          {/* Section 1: Understand the Need */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-24 pt-20">
            {/* Left Column - Image moved left AND HIGHER */}
            <div className="lg:w-1/2 -ml-8 lg:-ml-14 -mt-8"> {/* Added -mt-8 to move image higher */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ssp5p1.png" 
                  alt="Enabled Academy process visualization"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Content shifted slightly left */}
            <div className="lg:w-1/2 relative">
              {/* Step Content - aligned with circle 1 */}
              <div className="lg:pl-8 pt-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Understand the Need</h3>
                
                <div className="space-y-0">
                  <p className="text-gray-700 mb-6">Employers share their role requirements and timelines</p>
                  <p className="text-gray-700 mb-2">Talents share their career goals and interests</p>
                  <p className="text-gray-700">We align skills, expectations, accessibility needs, and growth paths</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Train, Coach & Prepare */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
            {/* Left Column - Content */}
            <div className="lg:w-1/2 relative order-2 lg:order-1">
              {/* Step Content - aligned with circle 2 - MINIMAL RIGHT PADDING */}
              <div className="lg:pr-4 lg:text-right pt-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Train, Coach & Prepare</h3>
                
                <div className="space-y-4 text-gray-700">
                  <p>We train talents based on employer needs</p>
                  <p>We provide role-specific coaching</p>
                  <p>We help talents build confidence through practice and support</p>
                  <p>We focus on soft skills and workplace readiness</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image - SHIFTED RIGHT with lg:ml-12 */}
            <div className="lg:w-1/2 order-1 lg:order-2 lg:ml-12">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ssp5p1.png" 
                  alt="Enabled Academy training and coaching process"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Match & Hire - BOTH SHIFTED LEFT */}
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left Column - Image - SHIFTED LEFT */}
            <div className="lg:w-1/2 -ml-8 lg:-ml-12">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ssp5p1.png" 
                  alt="Enabled Academy matching and hiring process"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Content - SHIFTED LEFT */}
            <div className="lg:w-1/2 relative">
              {/* Step Content - aligned with circle 3 - REDUCED PADDING */}
              <div className="lg:pl-6 pt-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Match & Hire</h3>
                
                <div className="space-y-4 text-gray-700">
                  <p>Employers meet trained, pre-screened candidates</p>
                  <p>Talents interview with confidence</p>
                  <p>We support onboarding to ensure a smooth transition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ========== END OF HOW ENABLED ACADEMY WORKS SECTION ========== */}

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