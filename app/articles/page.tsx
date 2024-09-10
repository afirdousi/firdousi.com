'use client'; // Add 'use client' at the top to indicate it's a Client Component
// Server Component: Handles server-side data fetching
import { Hero } from "../components/Hero";
import SearchBox from "../components/Search";

async function fetchData() {
    if (process.env.NODE_ENV === 'production') {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/data?limit=100`, { cache: 'no-store' });
        const data = await res.json();
        return data.articles;
    }

    // Development or fallback data for non-production environments
    return [
        {
            title: "Challenges in Training LLMs",
            slug: "challenges-in-training-llms",
            tags: ["ai", "ml", "llm", "distributed-computing"],
            date_created: "2024-08-29T10:00:00Z",
            content: "Training Large Language Models is computationally expensive and requires a vast amount of data...",
        },
        {
            title: "Scaling Microservices",
            slug: "scaling-microservices",
            tags: ["distributed-computing"],
            date_created: "2024-08-25T10:00:00Z",
            content: "Microservices architecture allows organizations to scale their applications effectively...",
        },
        // Add more articles as needed
    ];
}

export default async function ArticlesPage() {
    // Fetch server-side data
    const articles = await fetchData();

    return <ListingClient items={articles} itemsPerPage={5} />;
}


import { useMemo, useState } from 'react';

type Item = {
    title: string;
    slug: string;
    tags: string[];
};

type ListingPageProps = {
    items: Item[];
    itemsPerPage: number;
};

function ListingClient({ items, itemsPerPage }: ListingPageProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const handleSearch = (value: string) => {
        setSearchTerm(value);
    };

    const filteredItems = useMemo(() => {
        return items.filter((item) => {
            const matchesSearchTerm =
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.slug.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTag = selectedTag ? item.tags.includes(selectedTag) : true;
            return matchesSearchTerm && matchesTag;
        });
    }, [searchTerm, selectedTag, items]);

    const paginatedItems = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredItems.slice(startIndex, endIndex);
    }, [currentPage, itemsPerPage, filteredItems]);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return (
        <div id="layout" className="layout">
            <div className="container">
                <div className="hero-wrapper">
                    <Hero title="Articles" index>
                    </Hero>
                </div>
            </div>
            <div className="container">
                <div className="listing-page">
                    <div className="filters mb-4">
                        <SearchBox onSearch={handleSearch} />
                        <div className="tag-filters">
                            <span>Filter by Tags</span>
                            {Array.from(new Set(items.flatMap(item => item.tags))).map((tag) => (
                                <span
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`tag-chip ${tag.toLowerCase()} ${tag === selectedTag ? 'active' : ''}`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <ul className="item-list">
                        {paginatedItems.length > 0 ? (
                            paginatedItems.map((article) => (
                                <li key={article.slug} className="mb-4">
                                    <a href={`/articles/${article.slug}`} className="title">
                                        {article.title}
                                    </a>
                                    <div className="tags">
                                        {article.tags.map((tag) => (
                                            <span key={tag} className="tag-chip">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p>No match found</p>
                        )}
                    </ul>

                    {totalPages > 1 && (
                        <div className="pagination">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// SearchBox Component
// function SearchBox({ onSearch }: { onSearch: (value: string) => void }) {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (e: React.FormEvent) => {
//         e.preventDefault();
//         onSearch(searchTerm);
//     };

//     return (
//         <form className="search-box" onSubmit={handleSearch}>
//             <button type="submit">
//                 <span className="material-symbols-outlined" style={{ fontSize: '30px', color: '#9B9B9B' }}>
//                     search
//                 </span>
//             </button>
//             <input
//                 type="search"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 id="search-input"
//             />
//         </form>
//     );
// }