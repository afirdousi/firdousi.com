'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo, useState } from 'react';
import ItemList from './ItemList';
import SearchBox from './Search';

type Item = {
    // title: string;
    // date_created: string;
    // content: string;
    title: string;
    items: Array<{ link: string; title: string; tags: string[] }>;
    slug: string;
    tags: string[];
    maxItemsToShow: number;
    viewAllLink: string;
};

type ListingPageProps = {
    items: Item[];
    itemsPerPage: number;
};

const ListingClient: React.FC<ListingPageProps> = ({ items, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const searchParams = useSearchParams();
    const selectedTag = searchParams ? searchParams.get('tag') : null;


    // Function to handle search
    const handleSearch = (value: string) => {
        setSearchTerm(value);
    };

    const filteredItems = useMemo(() => {
        return items.filter((item) => {
            console.log("searchTerm:", searchTerm);

            const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
        <div className="listing-page">
            <div className="filters mb-4">
                <SearchBox onSearch={handleSearch} />
                <div className="tag-filters">
                    <span>Filter by Tags</span>
                    {Array.from(new Set(items.flatMap(item => item.tags))).map((tag) => (
                        <Link
                            key={tag}
                            href={`?tag=${tag}`}
                        >
                            <span className={`tag-chip ${tag.toLowerCase()} ${tag === selectedTag ? 'active' : ''}`}>
                                {tag}
                            </span>

                        </Link>
                    ))}
                </div>
            </div>

            <ItemList
                title="Articles"
                items={(paginatedItems || []).map((article: { title: string, slug: string, tags: string[] }) => ({
                    title: article.title,
                    link: `/articles/${article.slug}`,
                    tags: article.tags,
                    slug: article.slug // Add the slug here
                }))}
                maxItemsToShow={3}
                viewAllLink="/articles"
            />


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
    );
};

const ListingPageWrapper: React.FC<ListingPageProps> = ({ items, itemsPerPage }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ListingClient items={items} itemsPerPage={itemsPerPage} />
        </Suspense>
    );
};

export default ListingPageWrapper;