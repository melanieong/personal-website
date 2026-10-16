import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main id="main" className="about-page">
        <section className="about-hero section-shell">
          <Link className="back-link" href="/">
            <ArrowLeft aria-hidden="true" size={15} /> Back to my focus
          </Link>
          <div className="section-marker">
            <span className="marker-dot" />
            <span>THE PERSON BEHIND THE PROJECTS</span>
          </div>
          <div className="about-grid">
            <h1>A little less about what I do. A little more about why.</h1>
            <div className="about-copy">
              <p>
                I&apos;m curious by default, and happiest when I&apos;m learning
                something new alongside other people. I tend to notice the
                details, ask one more question, and look for the thread that
                connects the big picture to what actually happens next.
              </p>
              <p>
                That instinct carries through everything I take on: stay open,
                make the complicated clearer, and leave room for better ideas to
                come from somewhere unexpected.
              </p>
              <Link className="text-link" href="/#interests">
                Where to find me outside class <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </div>
          <div className="about-image" role="img" aria-label="Light falling across sculptural modern architecture" />
          <p className="about-image-caption">A perspective is something you keep building.</p>
        </section>
      </main>
      <footer className="site-footer">
        <Link className="footer-wordmark" href="/">MELANIE ONG</Link>
        <span>Thoughtfully in progress.</span>
        <Link href="/#contact">Get in touch ↑</Link>
      </footer>
    </>
  );
}