import Link from "next/link"
import { Hero } from "./components/Hero"

export default function Home() {
  return (
    <div id="layout" className="layout">
      <div className="container">
        <div className="hero-wrapper">
          <Hero title="Hey, I'm Anas" index>
            <p className="hero-description">
              I'm a software engineering turned engineering leader. Wanabe enterpreneur. I'm passionate about building great products, teams, and communities.
              I write about distributed systems, machine learning , leadership, and personal growth.
            </p>
            <p className="hero-description">
              On this site, you can check out all the{' '}
              <Link href="/blog">technical articles</Link> I've written, read some
              of my <Link href="/notes">learnings</Link>, or learn more{' '}
              <Link href="/me">about me</Link>.
            </p>
          </Hero>
          <div className="decoration">
            {/* <img
              src="/ram.png"
              alt="RAM Ram"
              className="image hero-image"
              title="RAM Ram"
            /> */}
          </div>
        </div>
      </div>


    </div>
  )
}