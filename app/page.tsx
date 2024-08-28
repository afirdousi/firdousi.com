import Link from "next/link";
import { Hero } from "./components/Hero";
import ItemList from "./components/ItemList";

export default function Home() {
  const articles = [
    { title: 'Understanding JavaScript Closures', link: '/articles/js-closures' },
    // { title: 'Understanding JavaScript Closures so if there is more content it will expand? that sounds wrid to me!!', link: '/articles/js-closures' },
    { title: 'Getting Started with React', link: '/articles/react-intro' },
    { title: 'Advanced CSS Techniques', link: '/articles/css-advanced' },
    // Add more articles here...
  ];

  const learnings = [
    { title: 'Leadership in Engineering', link: '/learnings/leadership' },
    { title: 'Time Management Tips', link: '/learnings/time-management' },
    { title: 'Growth Mindset', link: '/learnings/growth-mindset' },
    // Add more learnings here...
  ];

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
        </div>
      </div>

      <div className="container">
        <section className="segment first">
          <ItemList
            title="Articles"
            items={articles}
            maxItemsToShow={3}
            viewAllLink="/articles"
          />
        </section>

        <section className="segment first">
          {/* <Heading title="Learnings" slug="/learnings" buttonText="All Learnings" description={undefined} /> */}
          <ItemList
            title="Learnings"
            items={learnings}
            maxItemsToShow={3}
            viewAllLink="/learnings"
          />
        </section>
      </div>
    </div>
  );
}