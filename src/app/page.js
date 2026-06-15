import Image from "next/image";
import {
  ComparisonSection,
  CountersSection,
  EngagementSection,
  FinalAdmissionCta,
  FloatingActions,
  GalleryAndAiShowcase,
  HighlightsCarousel,
  LearningTabs,
  PageLoader,
  ParentLoveSection,
  SkillsAndJourney,
  StudentStories,
  VisitBanner,
  WhatsAppGalleryMarquee,
} from "./PremiumEnhancements";

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Vision", "#vision"],
  ["Model", "#model"],
  ["Technology", "#technology"],
  ["Admissions", "#admissions"],
  ["Contact", "#contact"],
];

const badges = [
  "MP Board Affiliated",
  "Nursery to VIII",
  "AI-assisted learning",
  "Tablet-enabled classrooms",
  "Vega Master Class for NEET & JEE",
];

const modelFeatures = [
  "No heavy bags",
  "No daily notebooks to carry",
  "Writing material kept at school and home",
  "Digital assignments and projects",
  "Structured tablet-based learning",
  "Reduced stress",
  "Better conceptual understanding",
  "Environmentally responsible schooling",
];

const parentReasons = [
  "Bagless school environment",
  "Technology-enabled learning",
  "Individual attention",
  "AI-assisted revision support",
  "Minimum homework stress",
  "Future-ready skills",
  "Competitive exam preparation pathway",
];

const campusFeatures = [
  "Experiential learning",
  "Group projects",
  "Digital research",
  "Interactive classroom discussions",
  "Confident thinkers",
  "Responsible citizens",
];

function Icon({ name }) {
  const paths = {
    spark: (
      <>
        <path d="M12 2l1.9 5.2L19 9l-5.1 1.8L12 16l-1.9-5.2L5 9l5.1-1.8L12 2Z" />
        <path d="M5 15l.9 2.1L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9L5 15Z" />
      </>
    ),
    tablet: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2.5" />
        <path d="M11 17h2" />
      </>
    ),
    brain: (
      <>
        <path d="M8 6a3 3 0 0 1 5.5-1.7A3 3 0 0 1 18 7v8a3 3 0 0 1-4.5 2.6A3 3 0 0 1 8 16V6Z" />
        <path d="M8 9H6.8A2.8 2.8 0 0 0 4 11.8v.4A2.8 2.8 0 0 0 6.8 15H8" />
        <path d="M13 4.3V20" />
        <path d="M13 9h3" />
        <path d="M10 12h3" />
      </>
    ),
    leaf: (
      <>
        <path d="M5 19c8.5 0 14-5.5 14-14-8.5 0-14 5.5-14 14Z" />
        <path d="M5 19 19 5" />
      </>
    ),
    users: (
      <>
        <path d="M16 19v-1.5A3.5 3.5 0 0 0 12.5 14h-5A3.5 3.5 0 0 0 4 17.5V19" />
        <circle cx="10" cy="7" r="3" />
        <path d="M20 19v-1.2a3 3 0 0 0-2.4-2.9" />
        <path d="M15.5 4.4a3 3 0 0 1 0 5.2" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    map: (
      <>
        <path d="M12 21s7-4.8 7-11a7 7 0 0 0-14 0c0 6.2 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      {paths[name]}
    </svg>
  );
}

function LogoMark({ hero = false }) {
  return (
    <div className={hero ? "logo-mark logo-mark-hero" : "logo-mark"}>
      <Image src="/images/logo.png" alt="" width={hero ? 116 : 88} height={hero ? 116 : 88} />
    </div>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header reveal">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function FeatureCard({ icon, title, children }) {
  return (
    <article className="feature-card reveal">
      <div className="icon-shell">
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <link rel="preload" href="/api/drive-video" as="video" type="video/mp4" />
      <PageLoader />
      <FloatingActions />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="The VegaWorld School home">
          <LogoMark />
          <span>The VegaWorld School</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#admissions">
          Book a Campus Visit
        </a>
      </header>

      <main>
        <section className="hero section-band -mt-20" id="home">
          <video
            aria-hidden="true"
            autoPlay
            className="hero-video-bg"
            loop
            muted
            playsInline
            poster="/images/unsplash-smart-class.jpg"
            preload="auto"
          >
            <source src="/api/drive-video" type="video/mp4" />
          </video>
          <div className="hero-content reveal">
            <p className="eyebrow">Future-ready schooling in Bhopal</p>
            <h1>Learning Reimagined for the Future</h1>
            <p className="hero-copy">
              A next-generation Bagless-Paperless school powered by AI
              technology, thoughtful pedagogy and individual learning pathways.
            </p>
            <div className="badge-row" aria-label="School highlights">
              {badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#admissions">
                Book a Campus Visit
              </a>
              <a className="button secondary" href="#admissions">
                Admissions Open
              </a>
            </div>
          </div>

          <div className="principal-hero-card reveal" aria-label="Principal portrait">
            <div className="principal-tech-badge">
              <Icon name="brain" />
              <div>
                <strong>AI + Tablet enabled</strong>
                <span>Future learning with human mentorship</span>
              </div>
            </div>
            <div className="principal-avatar">
              <Image
                src="/images/principal.png"
                alt="Principal of The VegaWorld School"
                width={260}
                height={260}
                priority
                sizes="(max-width: 1120px) 100vw, 42vw"
              />
            </div>
            <div className="principal-caption">
              <p className="eyebrow">Leadership</p>
              <h2>Guided by experienced educational vision.</h2>
            </div>
          </div>
        </section>

        <HighlightsCarousel />
        <WhatsAppGalleryMarquee />
        <CountersSection />

        <section className="split-section" id="about">
          <SectionHeader eyebrow="About" title="A New Vision of Schooling">
            The VegaWorld School is designed for the future learner.
          </SectionHeader>
          <div className="text-panel reveal">
            <p>
              We combine strong academic foundations with modern technology and
              innovative pedagogy to create an environment where every child
              learns actively, creatively and confidently.
            </p>
            <p>
              Our approach removes the burden of heavy bags and excessive
              homework while enhancing understanding through digital tools,
              teacher mentorship and AI-assisted learning support.
            </p>
          </div>
        </section>

        <VisitBanner compact />

        <section className="vision section-band" id="vision">
          <div className="vision-card reveal">
            <p className="eyebrow">Our Vision</p>
            <h2>Agile, innovative, informed and compassionate learners.</h2>
            <p>
              To be an educational institution using advanced technology and
              progressive pedagogy to cultivate learners who contribute
              positively to society.
            </p>
          </div>
        </section>

        <LearningTabs />

        <section className="content-section" id="model">
          <SectionHeader
            eyebrow="Unique Model"
            title="India's 1st Bagless & Paperless Learning Environment"
          />
          <div className="feature-grid compact">
            {modelFeatures.map((feature, index) => (
              <article className="mini-card reveal" key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
              </article>
            ))}
          </div>
        </section>

        <ComparisonSection />

        <section className="content-section section-band" id="technology">
          <SectionHeader eyebrow="Technology" title="Technology Enabled Classrooms">
            Technology is used thoughtfully, ensuring low screen time but high
            learning impact.
          </SectionHeader>
          <div className="feature-grid two">
            <FeatureCard icon="tablet" title="Tablet-based Learning">
              Interactive lessons, digital assignments, online project
              submissions and immediate feedback help students learn with
              clarity.
            </FeatureCard>
            <FeatureCard icon="brain" title="AI Tutor Assistance">
              Lesson revision, practice questions, weak area improvement and
              self-paced support keep learning personal.
            </FeatureCard>
          </div>
        </section>

        <GalleryAndAiShowcase />

        <section className="content-section">
          <SectionHeader title="Every Child Learns Differently">
            Our pedagogy focuses on individual learning pathways rather than
            one-size-fits-all instruction. Peer-to-peer learning among students
            is encouraged.
          </SectionHeader>
          <div className="feature-grid">
            {[
              ["users", "Personalized academic support"],
              ["target", "Adaptive assignments"],
              ["spark", "Concept-based teaching"],
              ["check", "Teacher mentoring"],
              ["brain", "Exploration over memorization"],
            ].map(([icon, title]) => (
              <FeatureCard key={title} icon={icon} title={title}>
                A focused learning rhythm that builds understanding,
                confidence and curiosity.
              </FeatureCard>
            ))}
          </div>
        </section>

        <VisitBanner compact />

        <section className="split-section section-band">
          <SectionHeader title="Learning Should Not Become a Burden">
            We call homework &quot;Self Learning Mode.&quot;
          </SectionHeader>
          <div className="check-panel reveal">
            {[
              "Minimum homework policy",
              "Concept reinforcement",
              "Project-based learning",
              "Smart digital assignments",
              "More time for reading, hobbies, sports and family",
            ].map((item) => (
              <p key={item}>
                <Icon name="check" />
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="master-class">
          <div className="master-copy reveal">
            <p className="eyebrow">Vega Master Class IX-XII</p>
            <h2>Professional academic preparation for competitive careers.</h2>
            <p>
              For senior students, VegaWorld offers Vega Master Class, a
              full-day professional academic program designed for students
              aiming for NEET and JEE.
            </p>
          </div>
          <div className="exam-card reveal">
            <div className="exam-row">
              <span>NEET</span>
              <span>JEE</span>
            </div>
            {[
              "Deep concept teaching",
              "Full-day academic schedule",
              "Competitive exam strategy",
              "Continuous testing and evaluation",
              "Expert faculty mentorship",
            ].map((item) => (
              <p key={item}>
                <Icon name="check" />
                {item}
              </p>
            ))}
          </div>
        </section>

        <SkillsAndJourney />

        <section className="content-section">
          <SectionHeader title="Why Parents Choose VegaWorld" />
          <div className="reason-grid">
            {parentReasons.map((reason) => (
              <div className="reason-item reveal" key={reason}>
                <Icon name="check" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </section>

        <ParentLoveSection />

        <section className="content-section section-band">
          <SectionHeader title="A Campus Designed for Curiosity, Creativity and Collaboration" />
          <div className="campus-grid">
            {campusFeatures.map((feature) => (
              <article className="campus-item reveal" key={feature}>
                <Icon name="spark" />
                <h3>{feature}</h3>
              </article>
            ))}
          </div>
        </section>

        <VisitBanner />
        <StudentStories />

        <section className="admissions" id="admissions">
          <div className="admissions-copy reveal">
            <p className="eyebrow">Admissions Open</p>
            <h2>Admissions are open for the academic session.</h2>
            <p>
              Classes: Nursery to Class VIII. MP Board Affiliation. Limited
              seats available to maintain small class sizes and individual
              attention.
            </p>
            <div className="process-grid">
              {["Campus Visit", "Interaction with Student and Parents", "Admission Confirmation"].map(
                (step, index) => (
                  <article key={step}>
                    <span>{index + 1}</span>
                    <h3>{step}</h3>
                  </article>
                )
              )}
            </div>
          </div>

          <form className="enquiry-form reveal">
            <h3>Online Enquiry Form</h3>
            <label>
              Parent Name
              <input name="parentName" type="text" placeholder="Enter parent name" />
            </label>
            <label>
              Student Name
              <input name="studentName" type="text" placeholder="Enter student name" />
            </label>
            <label>
              Class Applying For
              <input name="classApplyingFor" type="text" placeholder="Nursery to Class VIII" />
            </label>
            <label>
              Phone Number
              <input name="phone" type="tel" placeholder="Enter phone number" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="Enter email address" />
            </label>
            <label className="full">
              Message
              <textarea name="message" rows="4" placeholder="Tell us how we can help" />
            </label>
            <button type="submit">Submit Enquiry</button>
          </form>
        </section>

        <EngagementSection />

        <section className="contact section-band" id="contact">
          <div className="contact-card reveal">
            <p className="eyebrow">Contact The VegaWorld School</p>
            <h2 >Book a campus visit to experience the future of schooling.</h2>
            <br/>
            <address>
              The VegaWorld School,<br />
              Whitehall Avenue,<br />
              Near Lake Pearl Spring Society,<br />
              Abbas Nagar Main Road, Off Airport Road,<br />
              Bhopal, 462036, Madhya Pradesh
            </address>
            <p>
              <strong>Phone:</strong> 88177 81608, 92252 34034
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:farrukh.yusufzai@gmail.com">
                farrukh.yusufzai@gmail.com
              </a>
            </p>
          </div>
          <div className="map-placeholder reveal" aria-label="Google Map placeholder">
            <Icon name="map" />
            <span>Google Map Placeholder</span>
            <p>Whitehall Avenue, Abbas Nagar Main Road, Bhopal</p>
          </div>
        </section>

        <FinalAdmissionCta />
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <LogoMark />
          <span>The VegaWorld School</span>
        </div>
        <div className="footer-links">
          {navLinks.slice(1).map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
        <p>88177 81608 | 92252 34034 | farrukh.yusufzai@gmail.com</p>
        <p>Copyright 2026 The VegaWorld School. All rights reserved.</p>
      </footer>
    </>
  );
}
