import Link from 'next/link';
import { Heading } from './Heading';

type ItemListProps = {
    title: string;
    items: Array<{ link: string; title: string; tags: string[], slug: string }>;
    maxItemsToShow: number;
    viewAllLink: string;
};

const ItemList = ({ title, items, maxItemsToShow, viewAllLink }: ItemListProps) => {
    const displayedItems = items.slice(0, maxItemsToShow);

    return (
        <div className="item-list-wrapper mb-8">
            <Heading title={title} slug={viewAllLink} buttonText={`View All ${title}`} />
            {displayedItems.length > 0 ? (
                <ul className="item-list">
                    {displayedItems.map((item) => (
                        <li key={item.slug} className="mb-4">
                            <Link href={`/articles/${item.slug}`} className="title">
                                {item.title}
                            </Link>
                            <div className="tags">
                                {item.tags.map((tag) => (
                                    <Link
                                        key={tag}
                                        href={`/articles?tags=${encodeURIComponent(tag)}`} // Navigate to /articles with the tag as a query param
                                        className={`tag-chip ${tag.toLowerCase()}`}
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Data not available</p>
            )}
        </div>
    );
};

export default ItemList;