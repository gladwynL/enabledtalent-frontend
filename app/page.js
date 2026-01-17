export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5efe3]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh]">
        <div className="flex flex-col lg:flex-row">
          {/* Hero Left */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 to-white p-8 lg:p-20 flex items-center justify-center">
            <div className="w-full max-w-full">
              <img
                src="/images/hero-image.jpg"
                alt="Talent Academy Hero"
                className="rounded-xl shadow-lg w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>

          {/* Hero Right */}
          <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center relative z-10">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-white text-gray-700 rounded-full text-sm font-semibold border border-gray-200">
                Talent Academy
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Looking for <span className="text-blue-900">Talent</span> or <span className="text-blue-900">Opportunity?</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-10 max-w-3xl">
              We bridge the gap between exceptional talent and forward-thinking employers through our comprehensive academy program.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#1a2b44] text-white font-semibold rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-200">
                I am Talent
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <button className="px-8 py-4 bg-amber-50 border-2 border-[#1a2b44] text-[#1a2b44] font-semibold rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors duration-200 relative">
                <span className="relative z-10">I am Employer</span>
                <div className="absolute inset-0 bg-yellow-400 opacity-20 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="absolute bottom-0 right-0 w-full max-w-3xl">
          <img 
            src="/images/bottom-hero.jpg" 
            alt="Additional graphic" 
            className="w-full h-auto object-contain" 
          />
        </div>
      </section>

      {/* ===== WHO WE ARE SECTION ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <div className="mb-8">
                <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold border border-gray-200">
                  Who We Are
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Shaping the Future of <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Tech Talent</span>
              </h2>
              
              <div className="text-gray-700 text-lg space-y-6">
                <p>
                  Our academy is dedicated to identifying, nurturing, and connecting exceptional talent with innovative companies.
                  We believe in creating meaningful career paths and building strong, lasting relationships between talent and employers.
                </p>
                <p>
                  Through our comprehensive training programs and personalized mentorship, we equip individuals with the skills needed
                  to excel in today's competitive tech landscape.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center mt-12 lg:mt-0">
              <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/who-we-are.jpg" 
                  alt="Our Team" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TALENT SECTION ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 whitespace-nowrap">
                For <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Talent</span>
              </h2>
              
              <p className="text-gray-700 text-lg mb-8">
                Join our academy to accelerate your career growth and connect with top employers.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Personalized career coaching",
                    "Industry-relevant skills training",
                    "Direct connections to employers",
                    "Portfolio development support",
                    "Interview preparation",
                    "Negotiation guidance"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mr-4 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/talent-benefits.jpg" 
                  alt="Talent Benefits" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUPPORT SECTION ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0f1a2e] rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-center">
            <div className="mb-6">
              <span className="inline-block px-5 py-2 bg-white/10 text-white rounded-full text-sm font-semibold">
                Our Impact
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transforming <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Careers</span>
            </h2>
            
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              Join thousands of successful graduates who have transformed their careers through our academy program.
            </p>

            <a 
              href="/join" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-colors duration-200 mx-auto mb-12"
            >
              Join Now
              <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { year: "2022", percent: "85%", description: "Employment Rate" },
                { year: "2023", percent: "92%", description: "Employment Rate" },
                { year: "2024", percent: "95%", description: "Employment Rate" },
                { year: "Avg", percent: "40%", description: "Salary Increase" },
                { year: "Rating", percent: "4.9/5", description: "Satisfaction Score" },
              ].map((stat, index) => (
                <div key={index} className="bg-[#132038] p-6 rounded-xl">
                  <div className="flex items-end gap-3 mb-3">
                    <div className="flex flex-col">
                      <span className="text-gray-300 text-xs">{stat.year}</span>
                      <span className={`text-sm font-semibold ${index === 2 ? 'text-amber-500' : 'text-gray-300'}`}>
                        {stat.percent}
                      </span>
                    </div>
                    <div className="flex items-end gap-1 flex-1">
                      <div className="w-4 h-8 bg-gray-400 rounded-t"></div>
                      <div className="w-4 h-12 bg-gradient-to-b from-orange-500 to-amber-500 rounded-t"></div>
                    </div>
                  </div>
                  <p className="text-white text-sm font-medium text-center">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EMPLOYERS SECTION ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/employers.jpg" 
                  alt="For Employers" 
                  className="w-full h-auto" 
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                For <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Employers</span>
              </h2>
              
              <div className="text-gray-700 space-y-4 mb-8">
                <p>Find pre-vetted, trained talent ready to contribute from day one.</p>
                <p>Our graduates come with industry-specific skills and are prepared to tackle real-world challenges.</p>
              </div>

              <button className="px-8 py-3 bg-[#1a2b44] text-white font-semibold rounded-full hover:bg-blue-900 transition-colors duration-200 mb-10 w-full sm:w-auto">
                Book a Call
              </button>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How We Support You</h3>
                <ul className="space-y-3">
                  {[
                    "Pre-screened candidate profiles",
                    "Customized talent matching",
                    "90-day satisfaction guarantee",
                    "Ongoing support and check-ins",
                    "Market salary insights",
                    "Streamlined hiring process"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROLES SECTION ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              <span className="text-black">Roles We </span>
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Specialize In</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: "👨‍💻", text: "Frontend Developers", color: "bg-gradient-to-r from-yellow-400 to-amber-500" },
              { icon: "⚙️", text: "Backend Engineers", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
              { icon: "📱", text: "Mobile Developers", color: "bg-gradient-to-r from-yellow-400 to-amber-500" },
              { icon: "🎨", text: "UI/UX Designers", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
              { icon: "📊", text: "Data Scientists", color: "bg-gradient-to-r from-yellow-400 to-amber-500" },
              { icon: "🔒", text: "DevOps Engineers", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
              { icon: "🤖", text: "AI/ML Engineers", color: "bg-gradient-to-r from-yellow-400 to-amber-500" },
              { icon: "☁️", text: "Cloud Architects", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
            ].map((role, index) => (
              <div key={index} className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-3 border border-gray-100 shadow-sm">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${role.color}`}>
                  <span className="text-xs">{role.icon}</span>
                </div>
                <span className="text-gray-800 font-medium text-sm text-center">{role.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent text-lg lg:text-3xl font-medium">
              Looking for a specific role? We can help!
            </p>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
              How It Works
            </h2>
          </div>

          {/* Process Steps */}
          <div className="relative mt-24">
            {/* Center Logo (Desktop only) */}
            <div className="hidden lg:block absolute left-1/2 -top-16 -translate-x-1/2">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">🎯</span>
              </div>
            </div>

            {/* Timeline (Desktop only) */}
            <div className="hidden lg:block absolute left-1/2 top-12 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-amber-500 -translate-x-1/2"></div>

            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row gap-12 mb-24 pt-20">
              <div className="w-full lg:w-1/2 -ml-8 -mt-8 lg:-ml-14">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/step1.jpg" 
                    alt="Step 1" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 relative">
                <div className="pt-24 pl-4 lg:pl-8">
                  <div className="absolute left-0 lg:left-1/2 top-6 -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 -top-1.5"></div>
                      <div className="w-6 h-6 rounded-full border-4 border-orange-500 bg-white relative z-10"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Application & Screening</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>Submit your application and undergo our initial screening process.</p>
                    <p>We assess your skills, experience, and career goals to ensure the best fit.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row gap-12 mb-24">
              <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
                <div className="pt-24 pr-4 lg:pr-8 text-right">
                  <div className="absolute right-0 lg:left-1/2 top-6 -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 -top-1.5"></div>
                      <div className="w-6 h-6 rounded-full border-4 border-orange-500 bg-white relative z-10"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Skills Assessment</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>Complete technical assessments and portfolio reviews.</p>
                    <p>Our experts evaluate your current skill level and identify growth areas.</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 order-1 lg:order-2 lg:ml-12">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/step2.jpg" 
                    alt="Step 2" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/2 -ml-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/step3.jpg" 
                    alt="Step 3" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 relative">
                <div className="pt-24 pl-4 lg:pl-8">
                  <div className="absolute left-0 lg:left-1/2 top-6 -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 -top-1.5"></div>
                      <div className="w-6 h-6 rounded-full border-4 border-orange-500 bg-white relative z-10"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Training & Development</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>Participate in our tailored training program.</p>
                    <p>Gain industry-relevant skills through workshops, projects, and mentorship.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="text-center mt-16 lg:mt-24">
              <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                Start Your Journey Today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUCCESS SECTION ===== */}
      <section className="pt-40 pb-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
              <span className="text-gray-900">Success </span>
              <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Stories</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg h-full">
                <img 
                  src="/images/success-story.jpg" 
                  alt="Success Story" 
                  className="w-full h-full object-cover aspect-[3/2]" 
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
              <div className="absolute -top-16 right-14 z-10">
                <div className="w-24 h-24">
                  <span className="text-6xl">"</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col max-h-96 relative z-0">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Alex Morgan</h3>
                  <p className="text-gray-700 text-sm mt-2">Senior Developer at TechCorp</p>
                </div>
                
                <div className="flex-grow flex items-center mt-3">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    "The academy completely transformed my career. Within 3 months of joining, I went from a junior developer to landing my dream job with a 60% salary increase. The mentorship and training were invaluable."
                  </p>
                </div>
                
                <div className="flex items-center gap-1 justify-end mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-800 font-semibold text-base ml-2">5.0</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="p-3 rounded-full bg-blue-900 shadow-md hover:shadow-lg transition-shadow">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <button className="bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md text-sm">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
