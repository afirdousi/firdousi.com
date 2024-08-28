import Link from "next/link";
import { Heading } from "./components/Heading";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div id="layout" className="layout">
      <div className="container">
        <div className="hero-wrapper">
          <Hero title="Hey, I'm Anas" index>
            <p className="hero-description">
              I&apos;m a software engineer turned engineering leader. Wanabe entrepreneur. I&apos;m passionate about building great products and functional teams.
              I write about distributed systems, machine learning, leadership, and personal growth.
            </p>
            <p className="hero-description">
              On this site, you can check out all the{' '}
              <Link href="/blog">technical articles</Link> I&apos;ve written, read some
              of my <Link href="/notes">learnings</Link>, or learn more{' '}
              <Link href="/me">about me</Link>.
            </p>
          </Hero>
          {/* <div className="decoration">
            <img
              src="/ram.png"
              alt="RAM Ram"
              className="image hero-image"
              title="RAM Ram"
            />
          </div> */}
        </div>
      </div>

      <div className="container">
        <section className="segment first">
          <Heading title="Articles" slug="/articles" buttonText="All Articles" description={undefined} />
          {/* <Posts data={notes} newspaper /> */}
        </section>

        <section className="segment first">
          <Heading title="Learnings" slug="/learnings" buttonText="All Learnings" description={undefined} />
          {/* <Posts data={notes} newspaper /> */}
        </section>

      </div>
    </div>
  );
}