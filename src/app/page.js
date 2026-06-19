"use client";

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
  ParentReviewVideos,
  SkillsAndJourney,
  StudentStories,
  VisitBanner,
  WhatsAppGalleryMarquee,
} from "./PremiumEnhancements";
import { MotionBlock, MotionItem } from "./MotionElements";
import SchoolName from "./SchoolName";

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Vision", "#vision"],
  ["Model", "#model"],
  ["Technology", "#technology"],
  ["Parents", "#parents"],
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
  "Bagless-Paperless school environment",
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
    <MotionBlock className="section-header reveal" kind="softRise">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </MotionBlock>
  );
}

function FeatureCard({ icon, title, children }) {
  return (
    <MotionItem as="article" className="feature-card reveal" kind="pop">
      <div className="icon-shell">
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </MotionItem>
  );
}

export default function Home() {
  const handleEnquirySubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const parentName = formData.get("parentName");
  const studentName = formData.get("studentName");
  const classApplyingFor = formData.get("classApplyingFor");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const message = formData.get("message");

  const whatsappMessage = `
*New Admission Enquiry*

Parent Name: ${parentName}
Student Name: ${studentName}
Class Applying For: ${classApplyingFor}
Phone: ${phone}
Email: ${email}

Message:
${message}
  `;

  const whatsappUrl = `https://wa.me/918817781608?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, "_blank");
};
  return (
    <>
      <link rel="preload" href="/api/drive-video" as="video" type="video/mp4" />
      <PageLoader />
      <FloatingActions />
      <div className="announcement-marquee" aria-label="School announcements">
        <div className="announcement-track">
          {[0, 1].map((group) => (
            <div className="announcement-group" aria-hidden={group === 1} key={group}>
              <span>Admissions open for 2026</span>
              <span>Nursery to Class VIII</span>
              <span>India&apos;s 1st Bagless-Paperless School</span>
              <span>AI-assisted learning</span>
              <span>Tablet-enabled classrooms</span>
              <span>Book a campus visit today</span>
            </div>
          ))}
        </div>
      </div>
      <MotionBlock as="header" className="site-header" kind="fade" delay={0.08}>
        <a className="brand" href="#home" aria-label="The <SchoolName /> School home">
          <LogoMark />
          <SchoolName />
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
      </MotionBlock>

      <main>
        <MotionBlock as="section" className="hero section-band -mt-20" id="home" kind="fade">
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
          <MotionBlock className="hero-content reveal" kind="left" delay={0.12}>
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
          </MotionBlock>

          <MotionBlock
            className="principal-hero-card reveal"
            kind="right"
            delay={0.22}
            aria-label="Principal portrait"
            whileHover={{ y: -8, scale: 1.01 }}
          >
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
                alt="Principal of The <SchoolName /> School"
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
          </MotionBlock>
        </MotionBlock>

        <HighlightsCarousel />
        <WhatsAppGalleryMarquee />
        <CountersSection />
        <ParentReviewVideos />

        

        <MotionBlock as="section" className="split-section" id="about" kind="rise" stagger={0.12}>
          <SectionHeader eyebrow="About" title="A New Vision of Schooling">
            <SchoolName /> is designed for the future learner.
          </SectionHeader>
          <MotionBlock className="text-panel reveal" kind="right">
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
          </MotionBlock>
        </MotionBlock>

        <MotionBlock as="section" className="vision section-band -mt-40" id="vision" kind="fade">
          <MotionBlock className="section-header reveal" kind="softRise">
            <p className="eyebrow">Mission &amp; Vision</p>
            <h2>Guided by purpose, powered by technology.</h2>
          </MotionBlock>
          <div className="vision-grid">
            <MotionItem as="article" className="vision-card reveal" kind="left">
              <p className="eyebrow">Vision</p>
              <h3>Agile, innovative, informed and compassionate learners.</h3>
              <p>
                To be an educational institution using advanced technology and
                pedagogy to cultivate agile, innovative, informed and
                compassionate learners who contribute to society.
              </p>
            </MotionItem>
            <MotionItem as="article" className="vision-card reveal" kind="right" delay={0.08}>
              <p className="eyebrow">Mission</p>
              <h3>A dynamic and inclusive learning environment.</h3>
              <p>
                We shall engage all resources to develop a dynamic and
                inclusive learning environment where technology is used to
                ignite curiosity, personalise education, inculcate thinking and
                develop values among students and teachers. We are committed to
                nurturing well-rounded individuals who are digitally fluent,
                ethically aware and prepared to make a positive impact on
                society.
              </p>
            </MotionItem>
          </div>
        </MotionBlock>

        <MotionBlock as="section" className="principal-info section-band -mt-20" kind="fade">
          <MotionBlock className="principal-info-image reveal" kind="left" whileHover={{ y: -8 }}>
            {/* <Image
              src="#"
              alt="Principal of The <SchoolName /> School"
              width={720}
              height={360}
              sizes="(max-width: 900px) 100vw, 26vw"
            /> */}
          </MotionBlock>
          <MotionBlock className="principal-info-copy reveal" kind="right" delay={0.08}>
            <p className="eyebrow">Principal&apos;s Message</p>
            <h2>Dear Parents and Learners.</h2>
            <p>
             
              Welcome to <SchoolName /> {" "}a place where the future of education is already a reality.
Guided by the vision of NEP 2020, we have created one of India&apos;s most innovative learning environment: bagless, paperless, technology-enabled and centered around every child&apos;s unique potential.
            </p>
            <p>
             We believe, that learning should be personalized, engaging and meaningful. Our students follow individual learning pathways that nurture their strengths, interests and pace of growth. Alongside teacher-led instruction, peer-to-peer learning encourages collaboration, communication, leadership and critical thinking skills essential for success in the modern world.
At <SchoolName />, education extends beyond textbooks. Through experiential learning, projects and real-world applications, students learn to think independently, solve problems creatively and become confident lifelong learners.
As pioneers of this transformative model, we are proud to be setting new standards in school education. While many institutions may adopt similar approaches in the future, our students have the privilege of experiencing tomorrow&apos;s classroom, today.
            </p>
            <p>
              I invite you to partner with us in shaping young minds that are curious, compassionate and future-ready. Together, let us empower every child to dream boldly, learn joyfully and lead confidently.
            
            </p>
            <p>
           
The future begins here.

            </p>
            <div className="principal-info-points flex flex-col items-end justify-end w-full text-center">
              <span>Warm Regards</span>
              <span>Principal : Mrs Maria</span>
            </div>
            <div className = "w-full mt-4 flex items-end justify-end">
              <SchoolName />
            </div>
          </MotionBlock>
        </MotionBlock>

        <VisitBanner compact />

        <LearningTabs />

        <MotionBlock as="section" className="content-section" id="model" kind="rise">
          <SectionHeader
            eyebrow="Unique Model"
            title="India's 1st Bagless-Paperless & Paperless Learning Environment"
          />
          <div className="feature-grid compact">
            {modelFeatures.map((feature, index) => (
              <MotionItem as="article" className="mini-card reveal" delay={index * 0.04} key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
              </MotionItem>
            ))}
          </div>
        </MotionBlock>

        <ComparisonSection />

        <MotionBlock as="section" className="content-section section-band" id="technology" kind="fade">
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
        </MotionBlock>

        <GalleryAndAiShowcase />

        <MotionBlock as="section" className="content-section" kind="rise">
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
        </MotionBlock>

        <VisitBanner compact />

        <MotionBlock as="section" className="split-section section-band" kind="fade">
          <SectionHeader title="Learning Should Not Become a Burden">
            We call homework &quot;Self Learning Mode.&quot;
          </SectionHeader>
          <MotionBlock className="check-panel reveal" kind="right">
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
          </MotionBlock>
        </MotionBlock>

        <MotionBlock as="section" className="master-class" kind="fade">
          <MotionBlock className="master-copy reveal" kind="left">
            <p className="eyebrow">Vega Master Class IX-XII</p>
            <h2>Professional academic preparation for competitive careers.</h2>
            <p>
              For senior students, <SchoolName /> offers Vega Master Class, a
              full-day professional academic program designed for students
              aiming for NEET and JEE.
            </p>
          </MotionBlock>
          <MotionBlock className="exam-card reveal" kind="right" whileHover={{ y: -8, scale: 1.01 }}>
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
          </MotionBlock>
        </MotionBlock>

        <SkillsAndJourney />

        <MotionBlock as="section" className="content-section -mt-20" kind="rise">
          <SectionHeader title={<>Why Parents Choose <SchoolName /></>} />
          <div className="reason-grid">
            {parentReasons.map((reason) => (
              <MotionItem className="reason-item reveal" delay={parentReasons.indexOf(reason) * 0.04} key={reason}>
                <Icon name="check" />
                <span>{reason}</span>
              </MotionItem>
            ))}
          </div>
        </MotionBlock>

        <ParentLoveSection />

        <MotionBlock as="section" className="content-section section-band" kind="fade">
          <SectionHeader title="A Campus Designed for Curiosity, Creativity and Collaboration" />
          <div className="campus-grid">
            {campusFeatures.map((feature) => (
              <MotionItem as="article" className="campus-item reveal" delay={campusFeatures.indexOf(feature) * 0.05} key={feature}>
                <Icon name="spark" />
                <h3>{feature}</h3>
              </MotionItem>
            ))}
          </div>
        </MotionBlock>

        <VisitBanner />
        <StudentStories />

        <MotionBlock as="section" className="admissions" id="admissions" kind="fade">
          <MotionBlock className="admissions-copy reveal" kind="left">
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
          </MotionBlock>

         <MotionBlock
  as="form"
  className="enquiry-form reveal"
  kind="right"
  onSubmit={handleEnquirySubmit}
>
  <h3>Online Enquiry Form</h3>

  <label>
    Parent Name
    <input
      name="parentName"
      type="text"
      placeholder="Enter parent name"
      required
    />
  </label>

  <label>
    Student Name
    <input
      name="studentName"
      type="text"
      placeholder="Enter student name"
      required
    />
  </label>

  <label>
    Class Applying For
    <input
      name="classApplyingFor"
      type="text"
      placeholder="Nursery to Class VIII"
      required
    />
  </label>

  <label>
    Phone Number
    <input
      name="phone"
      type="tel"
      placeholder="Enter phone number"
      required
    />
  </label>

  <label>
    Email
    <input
      name="email"
      type="email"
      placeholder="Enter email address"
    />
  </label>

  <label className="full">
    Message
    <textarea
      name="message"
      rows="4"
      placeholder="Tell us how we can help"
    />
  </label>

  <button type="submit">Submit Enquiry</button>
</MotionBlock>
        </MotionBlock>

        <EngagementSection />

        <MotionBlock as="section" className="contact section-band" id="contact" kind="fade">
          <MotionBlock className="contact-card reveal" kind="left">
            <p className="eyebrow">
              Contact <SchoolName />
            </p>
            <h2 >Book a campus visit to experience the future of schooling.</h2>
            <br/>
            <address>
              <SchoolName />,<br />
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
          </MotionBlock>
          <MotionBlock
  className="map-placeholder reveal"
  kind="right"
  aria-label="Google Map of Lake Pearl Spring Colony, Bhopal"
>
  <iframe
    src="https://www.google.com/maps?q=Lake+Pearl+Spring+Colony,+Abbas+Nagar+Road,+Near+Woodz+Inn+Airport,+Gandhi+Nagar,+Bhopal,+Madhya+Pradesh+462036&output=embed"
    title="Google Map of Lake Pearl Spring Colony, Bhopal"
    width="100%"
    height="800"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className = "rounded-lg"
  />
</MotionBlock>
        </MotionBlock>

        <FinalAdmissionCta />
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <LogoMark />
          <SchoolName />
        </div>
        <div className="footer-links">
          {navLinks.slice(1).map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
        <p>88177 81608 | 92252 34034 | farrukh.yusufzai@gmail.com</p>
        <p>
          Copyright 2026 <SchoolName />. All rights reserved.
        </p>
      </footer>
    </>
  );
}
