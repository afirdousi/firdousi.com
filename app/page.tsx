import Link from "next/link";
import { Hero } from "./components/Hero";
import ItemList from "./components/ItemList";

export default async function Home() {

  let articles = [];
  let learnings = [];
  let projects = [];

  if (process.env.NODE_ENV === 'production') {
    // Fetch the data directly during development
    console.log('Fetching data...');
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/data`);
    const data = await res.json();
    articles = data.articles;
    learnings = data.learnings;
    projects = data.projects;
  } else {
    // Provide mock data or skip the fetch during build
    console.log('Skipping data fetch during build.');
    articles = [
      { title: 'Example Article', slug: 'example-article', tags: ['example'] },
    ];
    learnings = [
      { title: 'Example Learning', slug: 'example-learning', tags: ['example'] },
    ];
    projects = [
      { title: 'Example Project', slug: 'example-project', tags: ['example'] },
    ];
  }

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
            items={(articles || []).map((article: { title: string, slug: string, tags: string[] }) => ({ title: article.title, link: `/articles/${article.slug}`, tags: article.tags }))}
            maxItemsToShow={3}
            viewAllLink="/articles"
          />
        </section>

        <section className="segment first">
          <ItemList
            title="Learnings"
            items={(learnings || []).map((learning: { title: string, slug: string, tags: string[] }) => ({ title: learning.title, link: `/learnings/${learning.slug}`, tags: learning.tags }))}
            maxItemsToShow={3}
            viewAllLink="/learnings"
          />
        </section>

        <section className="segment first">
          <ItemList
            title="Projects"
            items={(projects || []).map((project: { title: string, slug: string, tags: string[] }) => ({ title: project.title, link: `/projects/${project.slug}`, tags: project.tags }))}
            maxItemsToShow={3}
            viewAllLink="/projects"
          />
        </section>
      </div>
    </div>
  );
}