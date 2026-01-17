"use client";

import Image from 'next/image';
import Button from '../../components/Button';

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-[#f5efe3]">
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[90vh] px-6 lg:px-10">
        <div className="container mx-auto flex flex-col lg:flex-row">
          {/* Left */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-sky-50 to-white
                          px-8 py-16 lg:px-20 flex items-center justify-center">
            <div className="w-full">
              <Image
                src="/images/ssp1.png"
                alt="Enabled Academy students learning and collaborating"
                width={1280}
                height={1041}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 px-8 py-16 lg:px-20
                          flex flex-col justify-center relative">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 text-sm font-semibold
                               text-gray-700 bg-white border border-gray-200
                               rounded-full">
                ENABLED ACADEMY
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Learn. Train. Grow.
              <br />
              <span className="text-[var(--color-brand-blue)]">
                Get Ready for Opportunity.
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl">
              Enabled Academy is a training and job-readiness program that helps people build real skills while supporting employers with qualified, prepared, and confident talent.
              <br /><br />
              Whether you&apos;re an individual looking to grow your career — or an employer looking for trained talent — Enabled Academy is here to support your journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                onClick={() => window.location.href = '/apply/talent'}
                withArrow
              >
                For Talents
              </Button>
              <Button
                variant="yellow-border"
                onClick={() => window.location.href = '/apply/employer'}
                withArrow
              >
                For Employers
              </Button>
            </div>

            {/* bottom decoration */}
            <div className="absolute bottom-0 right-0 w-full max-w-4xl">
              <Image
                src="/images/ssp1p2.png"
                alt="Additional Enabled Academy visual"
                width={596}
                height={91}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHO WE ARE ---------- */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-4 py-1 text-sm font-semibold
                               text-gray-700 bg-gray-100 border border-gray-200
                               rounded-full mb-8">
                WHO WE ARE
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                What Is<br />
                <span className="bg-gradient-to-r from-orange-500 to-amber-500
                                 bg-clip-text text-transparent">
                  Enabled Academy?
                </span>
              </h2>

              <div className="text-lg text-gray-600 space-y-4">
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

            <div className="w-full lg:w-1/2 flex items-center">
              <div className="w-full max-w-[600px] mx-auto rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/ssp2.png"
                  alt="Progress visualization"
                  width={742}
                  height={530}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOR TALENT ---------- */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src="/images/ssp3.png"
              alt="Woman participating in Enabled Academy program"
              width={567}
              height={587}
              className="w-full h-auto"
            />
          </div>

          <div>
            <span className="inline-block px-4 py-1 text-sm font-semibold
                             text-gray-700 bg-gray-100 border border-gray-200
                             rounded-full mb-8">
              FOR TALENT
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-500 to-orange-500
                               bg-clip-text text-transparent">
                What Is Enabled Academy?
              </span>
              <br />
              <span className="text-black">Become Job-Ready.</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Enabled Academy helps you learn practical skills, prepare for interviews, and become confident in your career journey. Our programs are designed for all skill levels and support a wide range of career interests.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">What You&apos;ll Receive</h3>
            <ul className="space-y-3">
              {[
                "Role-based training for different industries",
                "One-on-one coaching and interview preparation",
                "Resume and profile guidance",
                "Communication and workplace readiness training",
                "Accessibility support and learning accommodations",
                "Direct connections to employer partners",
                "A supportive learning environment focused on your success"
              ].map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-full
                                   bg-gradient-to-r from-orange-500 to-amber-500
                                   grid place-items-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- WHO WE SUPPORT ---------- */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto flex justify-center">
          <div className="bg-[#0f1a2e] text-white rounded-[40px] px-8 py-16 max-w-5xl w-full text-center">
            <span className="inline-block px-4 py-1 text-sm font-semibold
                             bg-white/10 rounded-full mb-6">
              WHO WE SUPPORT
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Who </span>
              <span className="bg-gradient-to-r from-orange-500 to-amber-500
                               bg-clip-text text-transparent">
                This Is For
              </span>
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto mb-10">
              Anyone looking to improve skills, start a career, restart a career, or grow into new opportunities — including students, newcomers, career-changers, and people facing barriers.
            </p>

            <Button variant="accent" href="/join" withArrow className="mx-auto mb-12">
              Join Enabled Academy
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="bg-[#132038] rounded-xl p-6">
                  <div className="flex items-end justify-center gap-2 mb-2">
                    <div className="flex flex-col text-xs text-gray-400">
                      <span>2019</span>
                      <span className="font-semibold">10%</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-8 bg-gray-500 rounded-t"></div>
                      <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-amber-500 rounded-t"></div>
                    </div>
                    <div className="flex flex-col text-xs">
                      <span className="text-yellow-400">2025</span>
                      <span className="text-yellow-400 font-semibold">18%</span>
                    </div>
                  </div>
                  <p className="text-white font-medium text-sm">Information Systems<br />Audit Process</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOR EMPLOYERS ---------- */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src="/images/ssp4.png"
              alt="Employer and employee discussing opportunities"
              width={500}
              height={479}
              className="w-full h-auto"
            />
          </div>

          <div>
            <span className="inline-block px-4 py-1 text-sm font-semibold
                             text-gray-700 bg-gray-100 border border-gray-200
                             rounded-full mb-8">
              FOR EMPLOYERS
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Your Workforce<br />Training &<br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-500
                               bg-clip-text text-transparent">
                Talent Partner
              </span>
            </h2>

            <div className="text-gray-600 space-y-4 mb-8">
              <p>
                Enabled Academy helps employers build a stronger and more prepared workforce by training candidates based on real job requirements.
              </p>
              <p>
                We support you with a flexible, inclusive, and job-ready talent pipeline.
              </p>
            </div>

            <Button
              variant="primary"
              onClick={() => window.open('https://calendly.com/enabledacademy/consultation', '_blank')}
              withArrow
              className="mb-10 w-full sm:w-auto"
            >
              Book a Call Now
            </Button>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Support Employers</h3>
            <ul className="space-y-3">
              {[
                "We train them specifically for your roles",
                "We source and identify potential candidates",
                "We provide one-on-one coaching and readiness support",
                "We support inclusive hiring practices across all departments",
                "We reduce onboarding challenges and help improve retention",
                "We prepare candidates to fully understand your workflows, tools, and processes"
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full
                                   bg-gradient-to-r from-orange-500 to-amber-500
                                   grid place-items-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- ROLES ---------- */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            We Support
            <span className="bg-gradient-to-r from-orange-500 to-amber-500
                             bg-clip-text text-transparent">
              {" "}All Types of Roles
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            From junior to mid-level across engineering, data and design.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Customer Service & Call Centre",
              "HR & Recruitment",
              "Administrative & Office Support",
              "Operations & Logistics",
              "Data & Digital Roles",
              "Sales & Retail",
              "Business Analyst & Project Coordinator",
              "Marketing & Social Media",
              "Software & Technical Roles",
              "IT Support"
            ].map((role, i) => (
              <div key={i} className="flex items-center justify-center
                                      bg-white/60 backdrop-blur-sm
                                      border border-gray-100 rounded-full
                                      px-4 py-3 shadow-sm">
                <span className={`shrink-0 w-6 h-6 rounded-full mr-3
                                ${i % 2 === 0 ? 'bg-gradient-to-r from-yellow-400 to-amber-500'
                                              : 'bg-gradient-to-r from-blue-500 to-indigo-600'}`}></span>
                <span className="text-gray-900 font-medium text-sm">{role}</span>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg font-medium
                        bg-gradient-to-r from-orange-500 to-amber-500
                        bg-clip-text text-transparent">
            ... and more — we customize based on your staffing needs.
          </p>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="py-36 px-6 bg-white">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-1 text-sm font-semibold
                           text-gray-700 bg-gray-100 border border-gray-200
                           rounded-full mb-8">
            HOW ENABLED ACADEMY WORKS
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 leading-tight">
            A Simple, Clear Process that Supports<br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500
                             bg-clip-text text-transparent">
              Both Talents and Employers.
            </span>
          </h2>

          {/* timeline wrapper */}
          <div className="relative mt-24 hidden lg:block">
            {/* logo */}
            <div className="absolute left-1/2 -top-16 -translate-x-1/2">
              <Image src="/images/ssp5p2.png" alt="Enabled Academy logo" width={65} height={69} />
            </div>
            {/* vertical line */}
            <div className="absolute left-1/2 top-12 bottom-0 w-0.5
                             bg-gradient-to-b from-orange-500 to-amber-500 -translate-x-1/2"></div>
            {/* circles */}
            <div className="absolute left-1/2 top-[7%]    -translate-x-1/2 w-3 h-3 rounded-full border-4 border-orange-500 bg-white"></div>
            <div className="absolute left-1/2 top-[42.25%] -translate-x-1/2 w-3 h-3 rounded-full border-4 border-orange-500 bg-white"></div>
            <div className="absolute left-1/2 top-[77%]    -translate-x-1/2 w-3 h-3 rounded-full border-4 border-orange-500 bg-white"></div>
          </div>

          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
            <div className="w-full lg:w-1/2 -ml-0 lg:-ml-14 -mt-8">
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <Image src="/images/ssp5p1.png" alt="" width={904} height={904} className="w-full h-auto" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 pt-24 lg:pl-8 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Understand the Need</h3>
              <div className="text-gray-600 space-y-2">
                <p>Employers share their role requirements and timelines</p>
                <p>Talents share their career goals and interests</p>
                <p>We align skills, expectations, accessibility needs, and growth paths</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-start gap-12 mb-24">
            <div className="w-full lg:w-1/2 -ml-0 lg:-mr-14 -mt-8">
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <Image src="/images/ssp5p1.png" alt="" width={904} height={904} className="w-full h-auto" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 pt-24 lg:pr-8 text-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Train, Coach & Prepare</h3>
              <div className="text-gray-600 space-y-2">
                <p>We train talents based on employer needs</p>
                <p>We provide role-specific coaching</p>
                <p>We help talents build confidence through practice and support</p>
                <p>We focus on soft skills and workplace readiness</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="w-full lg:w-1/2 -ml-0 lg:-ml-14 -mt-8">
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <Image src="/images/ssp5p1.png" alt="" width={904} height={904} className="w-full h-auto" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 pt-24 lg:pl-8 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Match & Hire</h3>
              <div className="text-gray-600 space-y-2">
                <p>Employers meet trained, pre-screened candidates</p>
                <p>Talents interview with confidence</p>
                <p>We support onboarding to ensure a smooth transition</p>
              </div>
            </div>
          </div>

          <p className="mt-24 text-2xl font-bold
                        bg-gradient-to-r from-red-500 to-orange-400
                        bg-clip-text text-transparent">
            The Result: Job-ready talent and employers who hire with confidence.
          </p>
        </div>
      </section>

      {/* ---------- SUCCESS STORIES ---------- */}
      <section className="pt-40 pb-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-red-500 to-orange-400
                               bg-clip-text text-transparent">
                Success
              </span>
              <span className="text-gray-900"> Stories</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="w-full lg:w-1/2 rounded-xl shadow-2xl overflow-hidden">
              <Image
                src="/images/ssp5p1.png"
                alt="Success story visual"
                width={904}
                height={904}
                className="w-full h-full object-cover aspect-[3/2]"
              />
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-16 right-14 z-10">
                <Image src="/images/ssp6.png" alt="" width={90} height={64} className="w-24 h-24" />
              </div>

              <div className="bg-white rounded-xl shadow-2xl p-8 h-full flex flex-col">
                <div>
                  <p className="text-xl font-bold text-gray-900">Leslie Alexander</p>
                  <p className="text-sm text-gray-600 mt-1">People Operations Specialist at Clan</p>
                </div>

                <div className="grow flex items-center my-6">
                  <p className="text-lg text-gray-700 italic">
                    Enabled Academy helped me gain the confidence to return to work.
                  </p>
                </div>

                <div className="flex items-center justify-end gap-1">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-gray-900 ml-2">4.5/5.0</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex gap-2">
                  <Button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </Button>
                  <Button variant="navy" className="p-3 rounded-full shadow-md hover:shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </div>
                <Button
                  variant="accent"
                  onClick={() => window.location.href = '/case-studies/leslie-alexander'}
                  className="px-6 py-3 shadow-md"
                >
                  Read the Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}