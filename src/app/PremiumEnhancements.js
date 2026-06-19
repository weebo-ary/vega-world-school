"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MotionBlock, MotionItem } from "./MotionElements";
import SchoolName from "./SchoolName";

const highlights = [
  ["Bagless-Paperless Learning", "Students learn without the stress of heavy bags."],
  ["Paperless Education", "Assignments, projects and classroom workflows move intelligently to digital mode."],
  ["AI Assisted Learning", "Revision, practice and weak area support become more personal."],
  ["Tablet Enabled Classrooms", "Interactive lessons help students see, do and understand."],
  ["Individual Learning Pathways", "Every child gets support shaped around pace and need."],
  ["Vega Master Class", "A senior pathway for NEET, JEE and competitive academic goals."],
];

const tabs = [
  ["Bagless-Paperless Learning", "Books, notebooks and writing material are managed thoughtfully so students come to school lighter, calmer and ready to learn."],
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
  [`Is ${<div className = ""><SchoolName /></div>} Bagless-Paperless?", "Yes. The model is designed to reduce heavy bags and daily notebook carrying while keeping learning structured at school and home.`],
  ["How is technology used in classrooms?", "Technology supports lessons, assignments, feedback and revision. It is used thoughtfully for high learning impact with controlled screen time."],
  ["Which classes are admissions open for?", "Admissions are open from Nursery to Class VIII with MP Board affiliation."],
  ["What is Self Learning Mode?", "Self Learning Mode is <SchoolName />'s lighter, smarter homework philosophy focused on reinforcement, projects and independent thinking."],
  ["Does the school support NEET and JEE preparation?", "Yes. Vega Master Class IX-XII is designed as a full-day academic pathway for senior students targeting NEET and JEE."],
];

const testimonials = [
  ["Parent of Class III Student", "The Bagless-Paperless approach feels practical and humane. My child talks more about concepts now, not just homework."],
  ["Parent of Class VI Student", "The technology-enabled learning model gives us confidence that school is preparing children for the future."],
  ["Parent of Nursery Student", "The environment feels warm, modern and child-friendly. The focus on individual attention matters to us."],
];

const parentReviewVideos = [
  {
    title: "A parent voice from our learning community",
    copy: "Families share how lighter routines, caring teachers and modern classrooms feel for their children.",
    src: "https://drive.google.com/file/d/1FFezBjqMnK7Rdwe6n-U6e0xNmpXmpZs-/preview",
  },
  {
    title: "Confidence families can see",
    copy: "Parent experiences from a school environment built around curiosity, comfort and future-ready learning.",
    src: "https://drive.google.com/file/d/1dV8j7ozMN8whvbcGqveJwDKCiks4_vXu/preview",
  },
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
  "WhatsApp Image 2026-06-17 at 12.16.59 PM (1).jpeg",
  "WhatsApp Image 2026-06-17 at 12.16.59 PM.jpeg",
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
    <div className={leaving ? "page-loader leaving" : "page-loader"} role="status" aria-label="Loading The <SchoolName /> School">
      <div className="loader-mark">
        <Image src="/images/logo.png" alt="" width={92} height={92} priority />
      </div>
      <div className="loader-copy">
        <p>
          <SchoolName />
        </p>
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
    <MotionBlock as="section" className="premium-section highlights-section" kind="rise">
      <MotionBlock className="section-header reveal" kind="softRise">
        <p className="eyebrow">Learning Highlights</p>
        <h2>Future-ready learning, moving with every child.</h2>
      </MotionBlock>
      <MotionBlock className="highlight-carousel reveal" kind="fade" stagger={0.08}>
        {visible.map(([title, copy], index) => (
          <MotionItem as="article" className={index === 0 ? "highlight-card active" : "highlight-card"} delay={index * 0.05} kind="pop" key={title}>
            <span>{String((active + index) % highlights.length + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </MotionItem>
        ))}
      </MotionBlock>
      <ProgressDots items={highlights} active={active} onSelect={setActive} />
    </MotionBlock>
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
    <MotionBlock as="section" className="counter-band reveal" kind="scale" aria-label="School highlights counters">
      {counters.map(([value, label], index) => (
        <MotionItem as="article" delay={index * 0.05} kind="pop" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </MotionItem>
      ))}
    </MotionBlock>
  );
}

export function WhatsAppGalleryMarquee() {
  const marqueeImages = [...whatsappGalleryImages, ...whatsappGalleryImages];

  return (
    <MotionBlock as="section" className="whatsapp-gallery-section -mt-30" kind="fade">
      <MotionBlock className="section-header reveal" kind="softRise">
        <p className="eyebrow">Campus Moments</p>
        <h2>
          Life at <SchoolName />
        </h2>
      </MotionBlock>
      <MotionBlock className="whatsapp-marquee reveal" kind="scale" aria-label="Campus image gallery">
        <div className="whatsapp-marquee-track">
          {marqueeImages.map((image, index) => (
            <figure className="whatsapp-photo-card" key={`${image}-${index}`}>
              <Image
                src={`/images/${image}`}
                alt="The <SchoolName /> School campus moment"
                width={420}
                height={747}
                sizes="(max-width: 760px) 72vw, 320px"
              />
            </figure>
          ))}
        </div>
      </MotionBlock>
    </MotionBlock>
  );
}

export function LearningTabs() {
  const [active, setActive] = useState(0);

  return (
    <MotionBlock as="section" className="premium-section -mt-20 tab-section" kind="rise">
      <MotionBlock className="section-header reveal" kind="softRise">
        <p className="eyebrow">Interactive Model</p>
        <h2>Explore how The <SchoolName /> learning works.</h2>
      </MotionBlock>
      <MotionBlock className="tabs-shell reveal" kind="scale">
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
      </MotionBlock>
    </MotionBlock>
  );
}

export function ParentLoveSection() {
  const cards = [
    ["Less Stress", "A calmer school routine with lighter bags and purposeful home learning."],
    ["More Clarity", "Concept-based teaching supported by teachers, tablets and AI revision."],
    ["Future Confidence", "Digital literacy, communication and problem solving built into daily learning."],
  ];

  return (
    <MotionBlock as="section" className="premium-section -mt-30" kind="rise">
      <MotionBlock className="section-header reveal" kind="softRise">
        <p className="eyebrow">Parent Trust</p>
        <h2>Why Modern Parents Love <SchoolName /></h2>
      </MotionBlock>
      <div className="premium-card-grid">
        {cards.map(([title, copy], index) => (
          <MotionItem as="article" className="premium-card reveal" delay={index * 0.06} kind="pop" key={title}>
            <span />
            <h3>{title}</h3>
            <p>{copy}</p>
          </MotionItem>
        ))}
      </div>
    </MotionBlock>
  );
}

export function ParentReviewVideos() {
  return (
    <MotionBlock as="section" className="parent-review-section section-band" id="parents" kind="fade">
      <MotionBlock className="section-header reveal" kind="softRise">
        <p className="eyebrow">Parent Reviews</p>
        <h2>Families speaking from the heart.</h2>
        <p>
          Warm stories from parents who see their children learning with
          confidence, curiosity and joy at <SchoolName />.
        </p>
      </MotionBlock>
      <div className="parent-video-grid">
        {parentReviewVideos.map((video, index) => (
          <MotionItem
            as="article"
            className="parent-video-card reveal"
            delay={index * 0.1}
            kind={index === 0 ? "left" : "right"}
            key={video.src}
            whileHover={{ y: -8, rotate: index === 0 ? -0.6 : 0.6 }}
          >
            <div className="parent-video-frame">
              <iframe
                allow="autoplay; fullscreen"
                allowFullScreen
                loading={index === 0 ? "eager" : "lazy"}
                src={video.src}
                title={video.title}
              />
            </div>
            <div className="parent-video-copy">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{video.title}</h3>
              <p>{video.copy}</p>
            </div>
          </MotionItem>
        ))}
      </div>
    </MotionBlock>
  );
}

export function SkillsAndJourney() {
  const skills = ["Critical Thinking", "Communication", "Creativity", "Problem Solving", "Digital Literacy", "Collaboration"];
  const journey = ["Nursery", "Primary Classes", "Middle School", "Class IX-XII", "Competitive Pathway"];

  return (
    <MotionBlock as="section" className="premium-section skills-journey" kind="fade">
      <div>
        <MotionBlock className="section-header reveal" kind="left">
          <p className="eyebrow">Future Skills</p>
          <h2>Students develop skills for a changing world.</h2>
        </MotionBlock>
        <div className="skill-grid">
          {skills.map((skill, index) => (
            <MotionItem as="article" className="skill-chip reveal" delay={index * 0.04} kind="pop" key={skill}>
              {skill}
            </MotionItem>
          ))}
        </div>
      </div>
      <MotionBlock className="timeline reveal" kind="right">
        <p className="eyebrow">Learning Journey</p>
        {journey.map((step, index) => (
          <article key={step}>
            <span>{index + 1}</span>
            <h3>{step}</h3>
            <p>{index < 3 ? "Foundations, curiosity and confident classroom habits." : "Advanced academics, mentoring and career-ready direction."}</p>
          </article>
        ))}
      </MotionBlock>
    </MotionBlock>
  );
}

export function GalleryAndAiShowcase() {
  const [active, setActive] = useAutoIndex(gallery.length, 2800);

  return (
    <MotionBlock as="section" className="premium-section gallery-ai" kind="fade">
      <MotionBlock className="gallery-panel reveal" kind="left">
        <p className="eyebrow">Campus Gallery</p>
        <h2>{gallery[active]}</h2>
        <div className="gallery-frame">
          <span>{gallery[active]}</span>
        </div>
        <ProgressDots items={gallery} active={active} onSelect={setActive} />
      </MotionBlock>
      <MotionBlock as="article" className="ai-showcase reveal" kind="right" whileHover={{ y: -8, scale: 1.01 }}>
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
      </MotionBlock>
    </MotionBlock>
  );
}

export function ComparisonSection() {
  const traditional = ["Heavy bags", "Notebook-heavy workflow", "One pace for all", "Homework pressure"];
  const vega = ["Bagless-Paperless routine", "Digital assignments", "Personalized pathways", "Self Learning Mode"];

  return (
    <MotionBlock as="section" className="premium-section -mt-20 comparison-section" kind="rise">
      <MotionBlock className="section-header reveal" kind="softRise">
        <p className="eyebrow">Modern Comparison</p>
        <h2>
          Traditional School vs <SchoolName />
        </h2>
      </MotionBlock>
      <MotionBlock className="comparison-grid reveal" kind="fade">
        <MotionItem as="article" kind="left">
          <h3>Traditional School</h3>
          {traditional.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </MotionItem>
        <MotionItem as="article" className="vega-column" delay={0.08} kind="right">
          <h3>
            <SchoolName />
          </h3>
          {vega.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </MotionItem>
      </MotionBlock>
    </MotionBlock>
  );
}

export function EngagementSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useAutoIndex(testimonials.length, 4200);

  return (
    <MotionBlock as="section" className="premium-section engagement-section" kind="fade">
      <MotionBlock className="faq-panel reveal" kind="left">
        <p className="eyebrow">Questions</p>
        <h2>FAQ</h2>
        {faqs.map(([question, answer], index) => (
          <article className={openFaq === index ? "faq-item open" : "faq-item"} key={question}>
            <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} type="button">
              {index === 0 ? (
                <>
                  Is <SchoolName /> Bagless-Paperless?
                </>
              ) : (
                question
              )}
              <span>{openFaq === index ? "-" : "+"}</span>
            </button>
            <p>{answer}</p>
          </article>
        ))}
      </MotionBlock>
      <MotionBlock className="testimonial-panel reveal" kind="right">
        <p className="eyebrow">Parent Voices</p>
        <h2>What families may experience</h2>
        <blockquote>
          &quot;{testimonials[activeTestimonial][1]}&quot;
          <cite>{testimonials[activeTestimonial][0]}</cite>
        </blockquote>
        <ProgressDots items={testimonials} active={activeTestimonial} onSelect={setActiveTestimonial} />
      </MotionBlock>
    </MotionBlock>
  );
}

export function StudentStories() {
  return (
    <MotionBlock as="section" className="premium-section" kind="rise">
      <MotionBlock className="section-header reveal" kind="softRise">
        <p className="eyebrow">Student Success</p>
        <h2>Stories shaped by confidence and curiosity.</h2>
      </MotionBlock>
      <div className="story-grid">
        {successStories.map(([name, title, copy], index) => (
          <MotionItem as="article" className="story-card reveal" delay={index * 0.06} kind="pop" key={name}>
            <div>{name.slice(0, 1)}</div>
            <h3>{name}</h3>
            <strong>{title}</strong>
            <p>{copy}</p>
          </MotionItem>
        ))}
      </div>
    </MotionBlock>
  );
}

export function VisitBanner({ compact = false }) {
  return (
    <MotionBlock as="section" className={compact ? "visit-banner compact reveal" : "visit-banner reveal"} kind="scale" whileHover={{ y: -6 }}>
      <div>
        <p className="eyebrow">Campus Visit</p>
        <h2>Experience <SchoolName /> model in person.</h2>
      </div>
      <a className="button primary" href="#admissions">
        Book a Campus Visit
      </a>
    </MotionBlock>
  );
}

export function FinalAdmissionCta() {
  return (
    <MotionBlock as="section" className="final-cta" kind="scale">
      <p className="eyebrow">Admissions Open</p>
      <h2>Give your child a lighter, smarter and future-ready school life.</h2>
      <p>Limited seats available for Nursery to Class VIII.</p>
      <a className="button primary" href="#admissions">
        Start Admission Enquiry
      </a>
    </MotionBlock>
  );
}
