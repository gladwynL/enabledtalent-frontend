"use client";

export default function Footer() {
  return (
    <>
      {/* ========== START YOUR JOURNEY SECTION ========== */}
      <section className="py-50 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
            Start Your Journey With <br className="hidden md:block" /><span className="text-black">Enabled Academy</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-black mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to grow your skills or build your team, Enabled Academy is here to help.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Join as a Talent Button - Yellow Gradient: #FFD071 to #EFB745 */}
            <button 
              className="group w-auto bg-gradient-to-r from-[#FFD071] to-[#EFB745] text-gray-900 font-bold py-3 px-7 rounded-full hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '/apply/talent'} // ADD THIS
            >
              <span className="flex items-center justify-center gap-2.5">
                <span>Join as a Talent</span>
                {/* Arrow in filled circle - NO HOVER MOVEMENT */}
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-[#FFD071] to-[#EFB745] group-hover:from-[#FFD071]/90 group-hover:to-[#EFB745]/90 transition-colors shadow-sm">
                  <svg className="w-5.5 h-5.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </span>
            </button>

            {/* Partner as an Employer Button - Navy Gradient: #2B476D to #182434 */}
            <button 
              className="group w-auto bg-gradient-to-r from-[#2B476D] to-[#182434] text-white font-bold py-3 px-7 rounded-full hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '/partner/employer'} // ADD THIS
            >
              <span className="flex items-center justify-center gap-2.5">
                <span>Partner as an Employer</span>
                {/* Arrow in blended circle - NO HOVER MOVEMENT */}
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-[#2B476D]/50 to-[#182434]/60 group-hover:from-[#2B476D]/60 group-hover:to-[#182434]/70 transition-colors shadow-sm">
                  <svg className="w-5.5 h-5.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* ========== END START YOUR JOURNEY SECTION ========== */}

      {/* ========== MAIN FOOTER SECTION (ChatGPT version) ========== */}
      <footer className="relative px-6 py-10">
        {/* Background image */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/footer background.png')",
          }}
        />

        {/* Main container */}
        <div className="mx-auto max-w-7xl rounded-3xl bg-white/90 backdrop-blur-xl px-10 py-12 shadow-2xl">
          {/* Top section */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Left content */}
            <div className="max-w-xl">
              <h2 className="text-4xl font-semibold text-black leading-tight mb-6">
                Building Infrastructure <br /> for meaningful employment
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Stay informed with cutting-edge AI insights, wellness innovation,
                and inclusive tech-driven hiring-connecting diverse talent with
                forward-thinking employers!
              </p>
            </div>

            {/* Logo + social */}
            <div className="flex flex-col items-start lg:items-end gap-6">
              {/* Main Logo - footer logo 0 */}
              <div className="flex items-center gap-3">
                <img 
                  src="/images/footer logo 0.png" 
                  alt="EnabledTalent Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="font-semibold text-lg text-black">
                  EnabledTalent
                </span>
              </div>

              {/* Social Media Logos */}
              <div className="flex gap-4">
                {/* LinkedIn - footer logo 1 */}
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                  <img 
                    src="/images/footer logo 1.png" 
                    alt="LinkedIn" 
                    className="w-5 h-5 object-contain"
                  />
                </a>
                
                {/* Twitter - footer logo 2 */}
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                  <img 
                    src="/images/footer logo 2.png" 
                    alt="Twitter" 
                    className="w-5 h-5 object-contain"
                  />
                </a>
                
                {/* YouTube - footer logo 3 */}
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                  <img 
                    src="/images/footer logo 3.png" 
                    alt="YouTube" 
                    className="w-5 h-5 object-contain"
                  />
                </a>
                
                {/* X (Twitter) - footer logo 4 */}
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                  <img 
                    src="/images/footer logo 4.png" 
                    alt="X" 
                    className="w-5 h-5 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gray-200" />

          {/* Links grid */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
            {/* Product */}
            <div>
              <h4 className="mb-4 font-semibold text-black">Product</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">For Talent</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Career Coach</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Enabled Jobs</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Enabled AI Agent</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Enabled Academy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">For Educators</a></li>
                <li><a href="#" className="hover:text-black transition-colors">For NGOs</a></li>
                <li><a href="#" className="hover:text-black transition-colors">For Governments</a></li>
              </ul>
            </div>

            {/* Case Studies */}
            <div>
              <h4 className="mb-4 font-semibold text-black">Case Studies</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Durham</a></li>
              </ul>
            </div>

            {/* Countries */}
            <div>
              <h4 className="mb-4 font-semibold text-black">Countries</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">EnabledAfrica</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Spain</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="mb-4 font-semibold text-black">Resources</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 font-semibold text-black">Company</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 font-semibold text-black">Legal</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Privacy policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Terms of service</a></li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}