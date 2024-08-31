import Link from 'next/link';
import { Heading } from './Heading';

type ItemListProps = {
    title: string;
    items: Array<{ link: string; title: string }>;
    maxItemsToShow: number;
    viewAllLink: string;
};

const ItemList = ({ title, items, maxItemsToShow, viewAllLink }: ItemListProps) => {
    const displayedItems = items.slice(0, maxItemsToShow);

    return (
        <div className="item-list mb-8">
            <Heading title={title} slug={viewAllLink} buttonText={`View All ${title}`} />
            {displayedItems.length > 0 ? (
                <ul className="list-disc list-inside">
                    {displayedItems.map((item, index) => (
                        <li key={index} className="mb-2">
                            <Link href={item.link}>
                                {item.title}
                            </Link>
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