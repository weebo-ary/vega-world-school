"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

const highlights = [
  ["Bagless Learning", "Students learn without the stress of heavy bags."],
  ["Paperless Education", "Assignments, projects and classroom workflows move intelligently to digital mode."],
  ["AI Assisted Learning", "Revision, practice and weak area support become more personal."],
  ["Tablet Enabled Classrooms", "Interactive lessons help students see, do and understand."],
  ["Individual Learning Pathways", "Every child gets support shaped around pace and need."],
  ["Vega Master Class", "A senior pathway for NEET, JEE and competitive academic goals."],
];

const tabs = [
  ["Bagless Learning", "Books, notebooks and writing material are managed thoughtfully so students come to school lighter, calmer and ready to learn."],
  ["AI Learning Assistant", "AI support helps students revise lessons, practice questions and strengthen weak areas at their own pace."],
  ["Self Learning Mode", "Homework becomes purposeful concept reinforcement instead of daily academic pressure."],
  ["Tablet Learning", "Tablet-based lessons, projects and feedback make classrooms more interactive while keeping screen time thoughtful."],
  ["Competitive Exam Preparation", "Vega Master Class connects strong school academics with long-term NEET and JEE readiness."],
];

const gallery = [
  "Smart Classrooms",
  "Activities",
  "Group Learning",
  "Technology Integration",
  "Campus Environment",
];

const faqs = [
  ["Is The VegaWorld School bagless and paperless?", "Yes. The model is designed to reduce heavy bags and daily notebook carrying while keeping learning structured at school and home."],
  ["How is technology used in classrooms?", "Technology supports lessons, assignments, feedback and revision. It is used thoughtfully for high learning impact with controlled screen time."],
  ["Which classes are admissions open for?", "Admissions are open from Nursery to Class VIII with MP Board affiliation."],
  ["What is Self Learning Mode?", "Self Learning Mode is VegaWorld's lighter, smarter homework philosophy focused on reinforcement, projects and independent thinking."],
  ["Does the school support NEET and JEE preparation?", "Yes. Vega Master Class IX-XII is designed as a full-day academic pathway for senior students targeting NEET and JEE."],
];

const testimonials = [
  ["Parent of Class III Student", "The bagless approach feels practical and humane. My child talks more about concepts now, not just homework."],
  ["Parent of Class VI Student", "The technology-enabled learning model gives us confidence that school is preparing children for the future."],
  ["Parent of Nursery Student", "The environment feels warm, modern and child-friendly. The focus on individual attention matters to us."],
];

const successStories = [
  ["Aarav", "Concept Explorer", "Built stronger confidence through activity-based learning and guided revision."],
  ["Myra", "Creative Communicator", "Improved classroom participation through group projects and peer learning."],
  ["Kabir", "Digital Learner", "Uses smart assignments to practice independently and track improvement."],
];

const whatsappGalleryImages = [
  "WhatsApp Image 2026-06-15 at 3.17.09 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.17.10 PM (1).jpeg",
  "WhatsApp Image 2026-06-15 at 3.17.10 PM (2).jpeg",
  "WhatsApp Image 2026-06-15 at 3.17.10 PM (3).jpeg",
  "WhatsApp Image 2026-06-15 at 3.17.10 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.17.11 PM (1).jpeg",
  "WhatsApp Image 2026-06-15 at 3.17.11 PM (2).jpeg",
  "WhatsApp Image 2026-06-15 at 3.17.11 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.17.12 PM (1).jpeg",
  "WhatsApp Image 2026-06-15 at 3.17.12 PM.jpeg",
];

function useAutoIndex(length, delay = 3200) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, delay);
    return () => window.clearInterval(timer);
  }, [delay, length]);

  return [index, setIndex];
}

function ProgressDots({ items, active, onSelect }) {
  return (
    <div className="premium-dots" aria-label="Carousel controls">
      {items.map((item, index) => (
        <button
          aria-label={`Show ${Array.isArray(item) ? item[0] : item}`}
          className={index === active ? "active" : ""}
          key={Array.isArray(item) ? item[0] : item}
          onClick={() => onSelect(index)}
          type="button"
        />
      ))}
    </div>
  );
}

export function FloatingActions() {
  return (
    <>
      <a className="floating-admission" href="#admissions">
        Admissions Open
      </a>
      <a
        className="floating-whatsapp"
        href="https://wa.me/918817781608"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="WhatsApp enquiry"
      >
        <BsWhatsapp size={24} />
      </a>
    </>
  );
}

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
    }, 2700);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 3200);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={leaving ? "page-loader leaving" : "page-loader"} role="status" aria-label="Loading The VegaWorld School">
      <div className="loader-mark">
        <Image src="/images/logo.png" alt="" width={92} height={92} priority />
      </div>
      <div className="loader-copy">
        <p>The VegaWorld School</p>
        <span>Preparing your campus experience</span>
      </div>
      <div className="loader-progress" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}

export function HighlightsCarousel() {
  const [active, setActive] = useAutoIndex(highlights.length);
  const visible = useMemo(() => {
    return [0, 1, 2].map((offset) => highlights[(active + offset) % highlights.length]);
  }, [active]);

  return (
    <section className="premium-section highlights-section">
      <div className="section-header reveal">
        <p className="eyebrow">Learning Highlights</p>
        <h2>Future-ready learning, moving with every child.</h2>
      </div>
      <div className="highlight-carousel reveal">
        {visible.map(([title, copy], index) => (
          <article className={index === 0 ? "highlight-card active" : "highlight-card"} key={title}>
            <span>{String((active + index) % highlights.length + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <ProgressDots items={highlights} active={active} onSelect={setActive} />
    </section>
  );
}

export function CountersSection() {
  const counters = [
    ["25+", "Years of Educational Vision"],
    ["1st", "Future Ready Learning Model"],
    ["100%", "Personalized Learning Approach"],
    ["360", "Student-Centric Environment"],
  ];

  return (
    <section className="counter-band reveal" aria-label="School highlights counters">
      {counters.map(([value, label]) => (
        <article key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </article>
      ))}
    </section>
  );
}

export function WhatsAppGalleryMarquee() {
  const marqueeImages = [...whatsappGalleryImages, ...whatsappGalleryImages];

  return (
    <section className="whatsapp-gallery-section">
      <div className="section-header reveal">
        <p className="eyebrow">Campus Moments</p>
        <h2>Life at The VegaWorld School</h2>
      </div>
      <div className="whatsapp-marquee reveal" aria-label="Campus image gallery">
        <div className="whatsapp-marquee-track">
          {marqueeImages.map((image, index) => (
            <figure className="whatsapp-photo-card" key={`${image}-${index}`}>
              <Image
                src={`/images/${image}`}
                alt="The VegaWorld School campus moment"
                width={420}
                height={300}
                sizes="(max-width: 760px) 72vw, 320px"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LearningTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="premium-section tab-section">
      <div className="section-header reveal">
        <p className="eyebrow">Interactive Model</p>
        <h2>Explore how VegaWorld learning works.</h2>
      </div>
      <div className="tabs-shell reveal">
        <div className="tabs-list" role="tablist" aria-label="Learning model tabs">
          {tabs.map(([title], index) => (
            <button
              aria-selected={active === index}
              className={active === index ? "active" : ""}
              key={title}
              onClick={() => setActive(index)}
              role="tab"
              type="button"
            >
              {title}
            </button>
          ))}
        </div>
        <article className="tab-panel" role="tabpanel">
          <span>{String(active + 1).padStart(2, "0")}</span>
          <h3>{tabs[active][0]}</h3>
          <p>{tabs[active][1]}</p>
        </article>
      </div>
    </section>
  );
}

export function ParentLoveSection() {
  const cards = [
    ["Less Stress", "A calmer school routine with lighter bags and purposeful home learning."],
    ["More Clarity", "Concept-based teaching supported by teachers, tablets and AI revision."],
    ["Future Confidence", "Digital literacy, communication and problem solving built into daily learning."],
  ];

  return (
    <section className="premium-section">
      <div className="section-header reveal">
        <p className="eyebrow">Parent Trust</p>
        <h2>Why Modern Parents Love VegaWorld</h2>
      </div>
      <div className="premium-card-grid">
        {cards.map(([title, copy]) => (
          <article className="premium-card reveal" key={title}>
            <span />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SkillsAndJourney() {
  const skills = ["Critical Thinking", "Communication", "Creativity", "Problem Solving", "Digital Literacy", "Collaboration"];
  const journey = ["Nursery", "Primary Classes", "Middle School", "Class IX-XII", "Competitive Pathway"];

  return (
    <section className="premium-section skills-journey">
      <div>
        <div className="section-header reveal">
          <p className="eyebrow">Future Skills</p>
          <h2>Students develop skills for a changing world.</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <article className="skill-chip reveal" key={skill}>
              {skill}
            </article>
          ))}
        </div>
      </div>
      <div className="timeline reveal">
        <p className="eyebrow">Learning Journey</p>
        {journey.map((step, index) => (
          <article key={step}>
            <span>{index + 1}</span>
            <h3>{step}</h3>
            <p>{index < 3 ? "Foundations, curiosity and confident classroom habits." : "Advanced academics, mentoring and career-ready direction."}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function GalleryAndAiShowcase() {
  const [active, setActive] = useAutoIndex(gallery.length, 2800);

  return (
    <section className="premium-section gallery-ai">
      <div className="gallery-panel reveal">
        <p className="eyebrow">Campus Gallery</p>
        <h2>{gallery[active]}</h2>
        <div className="gallery-frame">
          <span>{gallery[active]}</span>
        </div>
        <ProgressDots items={gallery} active={active} onSelect={setActive} />
      </div>
      <article className="ai-showcase reveal">
        <span className="ai-pulse" />
        <p className="eyebrow">AI Tutor Support</p>
        <h2>Smart revision, gentle guidance.</h2>
        <p>
          AI helps students revisit lessons, practice questions, identify weak
          areas and learn at a comfortable pace with teacher mentorship.
        </p>
        <div className="ai-chat">
          <span>Student: I need help revising fractions.</span>
          <strong>AI Tutor: Let us practice with visual examples.</strong>
        </div>
      </article>
    </section>
  );
}

export function ComparisonSection() {
  const traditional = ["Heavy bags", "Notebook-heavy workflow", "One pace for all", "Homework pressure"];
  const vega = ["Bagless routine", "Digital assignments", "Personalized pathways", "Self Learning Mode"];

  return (
    <section className="premium-section comparison-section">
      <div className="section-header reveal">
        <p className="eyebrow">Modern Comparison</p>
        <h2>Traditional School vs VegaWorld School</h2>
      </div>
      <div className="comparison-grid reveal">
        <article>
          <h3>Traditional School</h3>
          {traditional.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </article>
        <article className="vega-column">
          <h3>VegaWorld School</h3>
          {vega.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </article>
      </div>
    </section>
  );
}

export function EngagementSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useAutoIndex(testimonials.length, 4200);

  return (
    <section className="premium-section engagement-section">
      <div className="faq-panel reveal">
        <p className="eyebrow">Questions</p>
        <h2>FAQ</h2>
        {faqs.map(([question, answer], index) => (
          <article className={openFaq === index ? "faq-item open" : "faq-item"} key={question}>
            <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} type="button">
              {question}
              <span>{openFaq === index ? "-" : "+"}</span>
            </button>
            <p>{answer}</p>
          </article>
        ))}
      </div>
      <div className="testimonial-panel reveal">
        <p className="eyebrow">Parent Voices</p>
        <h2>What families may experience</h2>
        <blockquote>
          &quot;{testimonials[activeTestimonial][1]}&quot;
          <cite>{testimonials[activeTestimonial][0]}</cite>
        </blockquote>
        <ProgressDots items={testimonials} active={activeTestimonial} onSelect={setActiveTestimonial} />
      </div>
    </section>
  );
}

export function StudentStories() {
  return (
    <section className="premium-section">
      <div className="section-header reveal">
        <p className="eyebrow">Student Success</p>
        <h2>Stories shaped by confidence and curiosity.</h2>
      </div>
      <div className="story-grid">
        {successStories.map(([name, title, copy]) => (
          <article className="story-card reveal" key={name}>
            <div>{name.slice(0, 1)}</div>
            <h3>{name}</h3>
            <strong>{title}</strong>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function VisitBanner({ compact = false }) {
  return (
    <section className={compact ? "visit-banner compact reveal" : "visit-banner reveal"}>
      <div>
        <p className="eyebrow">Campus Visit</p>
        <h2>Experience the VegaWorld model in person.</h2>
      </div>
      <a className="button primary" href="#admissions">
        Book a Campus Visit
      </a>
    </section>
  );
}

export function FinalAdmissionCta() {
  return (
    <section className="final-cta">
      <p className="eyebrow">Admissions Open</p>
      <h2>Give your child a lighter, smarter and future-ready school life.</h2>
      <p>Limited seats available for Nursery to Class VIII.</p>
      <a className="button primary" href="#admissions">
        Start Admission Enquiry
      </a>
    </section>
  );
}
