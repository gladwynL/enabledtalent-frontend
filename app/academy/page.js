"use client";

import Image from 'next/image';
import Button from '../../components/Button';
import styles from './academy.module.css';

export default function AcademyPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section - Matches Figma design */}
      <section className={`${styles.heroSection} ${styles.flexSection} ${styles.sectionPadding}`}>
        {/* Left side - Image */}
        <div className={styles.heroLeft}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/ssp1.png"
              alt="Enabled Academy students learning and collaborating"
              width={1280}
              height={1041}
              className={styles.heroImage}
              priority={true} // Important for above-the-fold image
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className={styles.heroRight}>
          {/* Tag */}
          <div className={styles.tagWrapper}>
            <span className={styles.academyTag}>
              ENABLED ACADEMY
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={styles.heroTitle}>
            Learn. Train. Grow.
            <br />
            <span className={styles.heroTitleHighlight}>Get Ready for Opportunity.</span>
          </h1>

          {/* Description */}
          <p className={styles.heroDescription}>
            Enabled Academy is a training and job-readiness program that helps people build real skills while supporting employers with qualified, prepared, and confident talent.
            <br /><br />
            Whether you're an individual looking to grow your career — or an employer looking for trained talent — Enabled Academy is here to support your journey.
          </p>

          {/* Buttons */}
          <div className={styles.buttonGroup}>
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

          {/* Bottom Right Image inside the content area */}
          <div className={styles.bottomImage}>
            <Image
              src="/images/ssp1p2.png"
              alt="Additional Enabled Academy visual"
              width={596}
              height={91}
              className={styles.bottomImageContent}
            />
          </div>
        </div>
      </section>

      {/* ========== WHO WE ARE SECTION ========== */}
      <section className={`${styles.whoWeAreSection} ${styles.sectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.sectionLayout}>
            {/* Left Column - Content */}
            <div className={styles.sectionLeft}>
              {/* Section Title */}
              <div className={styles.sectionTagWrapper}>
                <span className={styles.sectionTag}>
                  WHO WE ARE
                </span>
              </div>

              {/* Main Heading */}
              <h2 className={styles.sectionTitle}>
                What Is<br />
                <span className={styles.gradientText}>
                  Enabled Academy?
                </span>
              </h2>

              {/* Description Text */}
              <div className={styles.descriptionText}>
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
            <div className={styles.sectionImageContainer}>
              <div className={styles.sectionImageWrapper}>
                <Image
                  src="/images/ssp2.png"
                  alt="Progress visualization showing 75% projects completed and Kevin Ross: 60th accounts in Thailand"
                  width={742}
                  height={530}
                  className={styles.sectionImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== END WHO WE ARE SECTION ========== */}

      {/* ========== FOR TALENT SECTION ========== */}
      <section className={`${styles.whoWeAreSection} ${styles.sectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.sectionLayout}>
            {/* Left Column - Image */}
            <div className={styles.sectionImageContainer}>
              <div className={styles.sectionImageWrapper}>
                <Image
                  src="/images/ssp3.png"
                  alt="Woman participating in Enabled Academy program"
                  width={567}
                  height={587}
                  className={styles.sectionImage}
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={styles.sectionLeft}>
              {/* Section Title */}
              <div className={styles.sectionTagWrapper}>
                <span className={styles.sectionTag}>
                  FOR TALENT
                </span>
              </div>

              {/* Main Heading */}
              <h2 className={`${styles.sectionTitle} ${styles.talentTitle}`}>
                <span className={styles.gradientTextOrange}>
                  What Is Enabled Academy?
                </span>
                <br /> {/* Add this line break */}
                <span className={styles.talentTitleText}>
                  Become Job-Ready.
                </span>
              </h2>

              {/* Description */}
              <p className={styles.sectionDescription}>
                Enabled Academy helps you learn practical skills, prepare for interviews, and become confident in your career journey. Our programs are designed for all skill levels and support a wide range of career interests.
              </p>

              {/* What You'll Receive */}
              <div className={styles.benefitsContainer}>
                <h3 className={styles.benefitsTitle}>What You'll Receive</h3>
                <ul className={styles.benefitsList}>
                  {[
                    "Role-based training for different industries",
                    "One-on-one coaching and interview preparation",
                    "Resume and profile guidance",
                    "Communication and workplace readiness training",
                    "Accessibility support and learning accommodations",
                    "Direct connections to employer partners",
                    "A supportive learning environment focused on your success"
                  ].map((benefit, index) => (
                    <li key={index} className={styles.benefitItem}>
                      <div className={styles.benefitIcon}>
                        <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className={styles.benefitText}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== END FOR TALENT SECTION ========== */}

      {/* ========== WHO WE SUPPORT SECTION ========== */}
      <section className={`${styles.supportSectionWhite} ${styles.sectionPadding}`}>
        <div className={styles.supportContainer}>
          <div className={styles.supportContent}>
            {/* Tag */}
            <div className={styles.supportTagWrapper}>
              <span className={styles.supportTag}>
                WHO WE SUPPORT
              </span>
            </div>

            {/* Title */}
            <h2 className={styles.supportTitle}>
              <span className={styles.supportTitleWhite}>Who </span>
              <span className={styles.supportTitleGradient}>This Is For</span>
            </h2>

            {/* Description */}
            <p className={styles.supportDescription}>
              Anyone looking to improve skills, start a career, restart a career, or grow into new opportunities — including students, newcomers, career-changers, and people facing barriers.
            </p>
            
            {/* Join Enabled Academy Button */}
            <Button
              variant="accent"
              href="/join"
              withArrow
              className="mx-auto mb-12 px-6 py-3 text-base" // ← px-6 is narrower
            >
              Join Enabled Academy
            </Button>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
              {/* Generate 5 identical stat cards */}
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statBarContainer}>
                    <div className={styles.statLabels}>
                      <div className={styles.statYear}>2019</div>
                      <div className={styles.statPercent}>10%</div>
                    </div>
                    <div className={styles.statBars}>
                      <div className={styles.statBarGray}></div>
                      <div className={styles.statBarGradient}></div>
                    </div>
                    <div className={styles.statLabels}>
                      <div className={styles.statYearCurrent}>2025</div>
                      <div className={styles.statPercentCurrent}>18%</div>
                    </div>
                  </div>
                  <p className={styles.statDescription}>Information Systems<br />Audit Process</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ========== END WHO WE SUPPORT SECTION ========== */}

      {/* ========== FOR EMPLOYERS SECTION ========== */}
      <section className={`${styles.employersSection} ${styles.sectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.sectionLayout}>
            {/* Left Column - Image with stats */}
            <div className={styles.sectionImageContainer}>
              <div className={styles.employerImageWrapper}>
                <Image
                  src="/images/ssp4.png"
                  alt="Employer and employee discussing opportunities"
                  width={500}
                  height={479}
                  className={styles.sectionImage}
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={styles.sectionLeft}>
              {/* Section Title */}
              <div className={styles.sectionTagWrapper}>
                <span className={styles.sectionTag}>
                  FOR EMPLOYERS
                </span>
              </div>

              {/* Main Heading */}
              <h2 className={`${styles.sectionTitle} ${styles.employerTitle}`}>
                <span className={styles.employerTitleText}>Your Workforce</span><br />
                <span className={styles.employerTitleText}>Training &</span><br />
                <span className={styles.gradientText}>
                  Talent Partner
                </span>
              </h2>

              {/* Description */}
              <div className={styles.employerDescription}>
                <p>
                  Enabled Academy helps employers build a stronger and more prepared workforce by training candidates based on real job requirements.
                </p>
                <p>
                  We support you with a flexible, inclusive, and job-ready talent pipeline.
                </p>
              </div>

              {/* Book a Call Now Button */}
              <Button
                variant="primary"
                onClick={() => window.open('https://calendly.com/enabledacademy/consultation', '_blank')}
                withArrow
                className="mb-10 w-full sm:w-auto"
              >
                Book a Call Now
              </Button>

              {/* How We Support Employers */}
              <div className={styles.supportListContainer}>
                <h3 className={styles.supportListTitle}>How We Support Employers</h3>
                <ul className={styles.supportList}>
                  {[
                    "We train them specifically for your roles",
                    "We source and identify potential candidates",
                    "We provide one-on-one coaching and readiness support",
                    "We support inclusive hiring practices across all departments",
                    "We reduce onboarding challenges and help improve retention",
                    "We prepare candidates to fully understand your workflows, tools, and processes"
                  ].map((item, index) => (
                    <li key={index} className={styles.supportListItem}>
                      <div className={styles.supportListIcon}>
                        <svg className={styles.checkIconSmall} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className={styles.supportListText}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== END FOR EMPLOYERS SECTION ========== */}

      {/* ========== WE SUPPORT ALL TYPES OF ROLES SECTION ========== */}
      <section className={`${styles.rolesSection} ${styles.sectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.rolesHeader}>
            <h2 className={styles.rolesTitle}>
              <span className={styles.rolesTitleText}>We Support </span>
              <span className={styles.gradientText}>
                All Types of Roles
              </span>
            </h2>
          </div>

          {/* Role Items Grid */}
          <div className={styles.rolesGrid}>
            {/* Row 1 */}
            {[
              { text: "Customer Service & Call Centre", color: "yellow" },
              { text: "HR & Recruitment", color: "blue" },
              { text: "Administrative & Office Support", color: "yellow" },
              { text: "Operations & Logistics", color: "blue" }
            ].map((role, index) => (
              <div key={index} className={styles.roleItem}>
                <div className={`${styles.roleIcon} ${role.color === 'yellow' ? styles.roleIconYellow : styles.roleIconBlue}`}>
                  <svg className={styles.checkIconSmall} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className={styles.roleText}>{role.text}</span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className={styles.rolesGrid}>
            {[
              { text: "Data & Digital Roles", color: "blue" },
              { text: "Sales & Retail", color: "yellow" },
              { text: "Business Analyst & Project Coordinator", color: "blue" },
              { text: "Marketing & Social Media", color: "yellow" }
            ].map((role, index) => (
              <div key={index} className={styles.roleItem}>
                <div className={`${styles.roleIcon} ${role.color === 'yellow' ? styles.roleIconYellow : styles.roleIconBlue}`}>
                  <svg className={styles.checkIconSmall} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className={styles.roleText}>{role.text}</span>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className={`${styles.rolesGrid} ${styles.rolesGridCentered}`}>
            {[
              { text: "Software & Technical Roles", color: "yellow" },
              { text: "IT Support", color: "blue" }
            ].map((role, index) => (
              <div key={index} className={styles.roleItem}>
                <div className={`${styles.roleIcon} ${role.color === 'yellow' ? styles.roleIconYellow : styles.roleIconBlue}`}>
                  <svg className={styles.checkIconSmall} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className={styles.roleText}>{role.text}</span>
              </div>
            ))}
          </div>

          {/* Orange gradient note */}
          <div className={styles.customNote}>
            <p className={styles.customNoteText}>
              ... and more — we customize based on your staffing needs.
            </p>
          </div>
        </div>
      </section>
      {/* ========== END WE SUPPORT ALL TYPES OF ROLES SECTION ========== */}

      {/* ========== HOW ENABLED ACADEMY WORKS SECTION ========== */}
      <section className={`${styles.howItWorksSection} ${styles.sectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.howItWorksHeader}>
            {/* Section Title */}
            <div className={styles.sectionTagWrapper}>
              <span className={styles.sectionTag}>
                HOW ENABLED ACADEMY WORKS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className={styles.howItWorksTitle}>
              A Simple, Clear Process that Supports<br />
              <span className={styles.gradientText}>
                Both Talents and Employers.
              </span>
            </h2>
          </div>

          {/* Combined vertical line container */}
          <div className={styles.processContainerRef}>
            {/* Logo above the vertical line */}
            <div className={styles.processLogoRef}>
              <Image
                src="/images/ssp5p2.png"
                alt="Enabled Academy logo"
                width={65}
                height={69}
                className={styles.logoImageRef}
              />
            </div>

            {/* Main continuous vertical line container - with circles aligned to section titles */}
            <div className={styles.processTimelineRef}>
              {/* Circle 1: Aligns with "Understand the Need" */}
              <div className={styles.processCircleRef} style={{ top: '7%' }}>
                <div className={styles.circleInnerRef}>
                  <div className={styles.circleDotRef}></div>
                  <div className={styles.circleMainRef}></div>
                </div>
              </div>
              
              {/* Circle 2: Aligns with "Train, Coach & Prepare" */}
              <div className={styles.processCircleRef} style={{ top: '42.25%' }}>
                <div className={styles.circleInnerRef}>
                  <div className={styles.circleDotRef}></div>
                  <div className={styles.circleMainRef}></div>
                </div>
              </div>
              
              {/* Circle 3: Aligns with "Match & Hire" */}
              <div className={styles.processCircleRef} style={{ top: '77%' }}>
                <div className={styles.circleInnerRef}>
                  <div className={styles.circleDotRef}></div>
                  <div className={styles.circleMainRef}></div>
                </div>
              </div>
            </div>

            {/* Section 1: Understand the Need */}
            <div className={styles.processStepRef}>
              {/* Left Column - Image moved left AND HIGHER */}
              <div className={styles.stepImageLeftRef}>
                <div className={styles.stepImageWrapper}>
                  <Image
                    src="/images/ssp5p1.png"
                    alt="Enabled Academy process visualization"
                    width={904}
                    height={904}
                    className={styles.stepImage}
                  />
                </div>
              </div>

              {/* Right Column - Content shifted slightly left */}
              <div className={styles.stepContentRightRef}>
                {/* Step Content - aligned with circle 1 */}
                <div className={styles.stepContentRef}>
                  <h3 className={styles.stepTitle}>Understand the Need</h3>
                  
                  <div className={styles.stepDescriptionRef}>
                    <p className={styles.stepPara}>Employers share their role requirements and timelines</p>
                    <p className={styles.stepPara}>Talents share their career goals and interests</p>
                    <p className={styles.stepPara}>We align skills, expectations, accessibility needs, and growth paths</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Train, Coach & Prepare */}
            <div className={styles.processStepRef}>
              {/* Left Column - Content */}
              <div className={styles.stepContentLeftRef}>
                {/* Step Content - aligned with circle 2 - MINIMAL RIGHT PADDING */}
                <div className={styles.stepContentRightAligned}>
                  <h3 className={styles.stepTitle}>Train, Coach & Prepare</h3>
                  
                  <div className={styles.stepDescriptionRef}>
                    <p className={styles.stepPara}>We train talents based on employer needs</p>
                    <p className={styles.stepPara}>We provide role-specific coaching</p>
                    <p className={styles.stepPara}>We help talents build confidence through practice and support</p>
                    <p className={styles.stepPara}>We focus on soft skills and workplace readiness</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Image - SHIFTED RIGHT */}
              <div className={styles.stepImageRightRef}>
                <div className={styles.stepImageWrapper}>
                  <Image
                    src="/images/ssp5p1.png"
                    alt="Enabled Academy process visualization"
                    width={904}
                    height={904}
                    className={styles.stepImage}
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Match & Hire - BOTH SHIFTED LEFT */}
            <div className={styles.processStepRef}>
              {/* Left Column - Image - SHIFTED LEFT */}
              <div className={styles.stepImageLeftShifted}>
                <div className={styles.stepImageWrapper}>
                  <Image
                    src="/images/ssp5p1.png"
                    alt="Enabled Academy process visualization"
                    width={904}
                    height={904}
                    className={styles.stepImage}
                  />
                </div>
              </div>

              {/* Right Column - Content - SHIFTED LEFT */}
              <div className={styles.stepContentRightShifted}>
                {/* Step Content - aligned with circle 3 - REDUCED PADDING */}
                <div className={styles.stepContentReduced}>
                  <h3 className={styles.stepTitle}>Match & Hire</h3>
                  
                  <div className={styles.stepDescriptionRef}>
                    <p className={styles.stepPara}>Employers meet trained, pre-screened candidates</p>
                    <p className={styles.stepPara}>Talents interview with confidence</p>
                    <p className={styles.stepPara}>We support onboarding to ensure a smooth transition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Simple gradient text at bottom of section */}
          <div className={styles.resultText}>
            <p className={styles.resultTextContent}>
              The Result: Job-ready talent and employers who hire with confidence.
            </p>
          </div>
        </div>
      </section>
      {/* ========== END OF HOW ENABLED ACADEMY WORKS SECTION ========== */}

      {/* ========== SUCCESS STORIES SECTION ========== */}
      <section className={`${styles.successSection} ${styles.sectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.successHeader}>
            <h2 className={styles.successTitle}>
              <span className={styles.successTitleGradient}>
                Success
              </span>
              <span className={styles.successTitleText}> Stories</span>
            </h2>
          </div>

          {/* Success Story Content */}
          <div className={styles.successContent}>
            {/* Left Column - Image */}
            <div className={styles.successImageContainer}>
              <div className={styles.successImageWrapper}>
                <Image
                  src="/images/ssp5p1.png"
                  alt="Success story visual"
                  width={904}     // Adjust based on actual image size
                  height={904}    // Adjust based on actual image size
                  className={styles.successImage}
                />
              </div>
            </div>

            {/* Right Column - Testimonial Card */}
            <div className={styles.testimonialContainer}>
              {/* Quotation Mark Image */}
              <div className={styles.quoteImage}>
                <Image
                  src="/images/ssp6.png"
                  alt="Quotation mark decoration"
                  width={90}
                  height={64}
                  className={styles.quoteIcon}
                />
              </div>

              {/* Testimonial Card */}
              <div className={styles.testimonialCard}>
                {/* Name & Position */}
                <div className={styles.testimonialHeader}>
                  <h3 className={styles.testimonialName}>Leslie Alexander</h3>
                  <p className={styles.testimonialPosition}>People Operations Specialist at Clan</p>
                </div>

                {/* Testimonial */}
                <div className={styles.testimonialBody}>
                  <p className={styles.testimonialText}>
                    Enabled Academy helped me gain the confidence to return to work.
                  </p>
                </div>

                {/* Single Star Rating */}
                <div className={styles.testimonialRating}>
                  <svg 
                    className={styles.starIcon} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className={styles.ratingText}>4.5/5.0</span>
                </div>
              </div>

              {/* Navigation Row */}
              <div className={styles.testimonialNav}>
                {/* Arrow Buttons */}
                <div className={styles.navButtons}>
                  <Button
                    variant="secondary"
                    onClick={() => console.log('Previous testimonial')}
                    className="p-3 rounded-full bg-white shadow-md hover:shadow-lg"
                  >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </Button>
                  
                  <Button
                    variant="navy"
                    onClick={() => console.log('Next testimonial')}
                    className="p-3 rounded-full shadow-md hover:shadow-lg"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </div>

                {/* Read Case Study Button */}
                <Button
                  variant="accent"
                  onClick={() => window.location.href = '/case-studies/leslie-alexander'}
                  className="px-6 py-3 shadow-md text-base min-w-[180px]"
                >
                  Read the Case Study
                </Button>
              </div>


            </div>
          </div>
        </div>


      </section>
      {/* ========== END SUCCESS STORIES SECTION ========== */}
    </div>
  );
}