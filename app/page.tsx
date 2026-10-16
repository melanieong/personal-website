import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ProjectGarden } from "@/components/project-garden";
import { SiteNav } from "@/components/site-nav";

const projects = [
  {
    number: "01",
    name: "BU111 Live Case",
    category: "CASE COMPETITION",
    description:
      "A live business challenge, a team working through the unknown, and one clear recommendation worth standing behind.",
    detail: "Strategy · Teamwork · Presentation",
  },
  {
    number: "02",
    name: "Green-ovation",
    category: "SUSTAINABILITY × INNOVATION",
    description:
      "Exploring where environmental thinking and practical business ideas can meet, and what it takes to bring a good idea to life.",
    detail: "Innovation · Research · Impact",
  },
  {
    number: "03",
    name: "The fridge thing",
    category: "VBA · A SMALL FIX",
    description:
      "A practical little VBA build, made to bring a bit more order to the everyday chaos of a shared fridge.",
    detail: "Excel · VBA · Problem-solving",
  },
];

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <section className="hero" id="focus">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">ACCOUNTANT AND ARTIST</p>
            <h1>Melanie Ong</h1>
            <p className="hero-copy">
              I’m a builder first and foremost. I am detail oriented and love working with others
            </p>
            <div className="hero-actions">
              <Link className="hero-link" href="#education">
                A little about me <ArrowDown aria-hidden="true" size={15} />
              </Link>
              <Link className="hero-cta" href="#contact">
                Let&apos;s talk <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </div>
          <p className="hero-caption">A curious mind. A considered approach.</p>
          <span className="hero-index">01 / 05</span>
        </section>

        <section className="intro-section section-shell">
          <div className="section-marker">
            <span className="marker-dot" />
            <span>A NOTE ON MY APPROACH</span>
          </div>
          <div className="intro-grid">
            <h2>Business is people, before it&apos;s anything else.</h2>
            <div className="intro-text">
              <p>
                I like the work that starts with a question and ends with a plan
                people can believe in. That means looking closely, listening well,
                and making room for a few different perspectives before settling
                on an answer.
              </p>
              <Link className="text-link" href="/about">
                A little more about me <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section className="experience-section" id="education">
          <div className="section-shell experience-shell">
            <div className="section-marker light-marker">
              <span className="marker-dot" />
              <span>02 — EDUCATION</span>
            </div>
            <div className="experience-heading">
              <h2>Business meets computer science.</h2>
              <p>Two fields, plenty of questions, and a lot to learn.</p>
            </div>
            <div className="education-details">
              <p className="education-year">SECOND YEAR</p>
              <div>
                <h3>Wilfrid Laurier University</h3>
                <p>Honours Bachelor of Business Administration and Bachelor of Science (Computer Science)</p>
              </div>
            </div>
          </div>
        </section>

        <ProjectGarden projects={projects} />

        <section className="interests-section" id="interests">
          <div className="section-shell interests-shell">
            <div className="section-marker light-marker">
              <span className="marker-dot" />
              <span>04 — HOBBIES</span>
            </div>
            <div className="interests-layout">
              <h2>When I’m not studying, you’ll often find me…</h2>
              <div className="interest-notes">
                <ol className="hobby-list">
                  <li><h3>At the badminton courts</h3></li>
                  <li>
                    <h3>At the bouldering gym</h3>
                    <p>My skin is screaming for me to stop — I won’t stop.</p>
                  </li>
                  <li>
                    <h3>At the library!</h3>
                    <p>Who knew they have so many things to rent?</p>
                  </li>
                  <li>
                    <h3>At random club events</h3>
                    <p>Free food and so many people to meet!</p>
                  </li>
                  <li>
                    <h3>At the gym!</h3>
                    <p>I dream of calisthenics every day.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="section-marker">
            <span className="marker-dot" />
            <span>05 — CONTACT</span>
          </div>
          <div className="contact-layout">
            <div>
              <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
              <h2>Let&apos;s start with a conversation.</h2>
            </div>
            <a className="contact-link" href="mailto:hello@example.com">
              Say hello <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <Link className="footer-wordmark" href="/">MELANIE ONG</Link>
        <span>Thoughtfully in progress.</span>
        <a href="#focus">Back to top ↑</a>
      </footer>
    </>
  );
}