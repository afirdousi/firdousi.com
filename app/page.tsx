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
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/data?limit=3`, { cache: 'no-store' });
    const data = await res.json();
    articles = data.articles;
    learnings = data.learnings;
    projects = data.projects;

  } else {
    // Provide mock data or skip the fetch during build
    console.log('Skipping data fetch during build.');
    articles = [
      {
        "title": "Memory Management in Distributed Computing ",
        "slug": "introduction-to-distributed-computing",
        "tags": [
          "distributed-computing",
        ],
        "author": "Anas R Firdousi",
        "summary": "A comprehensive introduction to the principles and practices of distributed computing.",
        "date_updated": {
          "$date": "2024-08-29T10:00:00.000Z"
        },
        "reading_time": 7
      },
      {
        "title": "Large Language Models and Long-Term Memory",
        "slug": "introduction-to-distributed-computing",
        "tags": [
          "llm",
          "ml",
        ],
        "author": "Anas R Firdousi",
        "summary": "A comprehensive introduction to the principles and practices of distributed computing.",
        "date_updated": {
          "$date": "2024-08-29T10:00:00.000Z"
        },
        "reading_time": 7
      }
    ];
    learnings = [
      { title: 'Example Learning 1', slug: 'example-learning', tags: ['example'] },
      { title: 'Example Learning 2', slug: 'example-learning-2', tags: ['example'] },
      { title: 'Example Learning 3', slug: 'example-learning-3', tags: ['example'] }
    ];
    projects = [
      { title: 'Example Project 1', slug: 'example-project', tags: ['example'] },
      { title: 'Example Project 2', slug: 'example-project-2', tags: ['example'] },
      { title: 'Example Project 3', slug: 'example-project-2', tags: ['example'] },



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
              <Link href="/articles?page=1">technical articles</Link> I&apos;ve written, read some
              of my <Link href="/learnings?page=1">learnings</Link>, or learn more{' '}
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