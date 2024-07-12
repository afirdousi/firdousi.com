import Link from 'next/link';

const mainNavItems = [
    { url: '/blog', label: 'Articles' },
    { url: '/notes', label: 'Learnings' },
    { url: '/projects', label: 'Projects' },
    { url: '/me', label: 'Me?' },
];

export const Navigation = ({ }) => {
    return (
        <section className="navigation">
            <div className="container">
                <Link href="/" className="item brand">
                    <span>Anas R Firdousi</span>
                </Link>
                <nav>
                    {mainNavItems.map((item) => (
                        <div className="nav-item-outer" key={item.url}>
                            <Link href={item.url} target='_blank' key={item.url} passHref>
                                <span>{item.label}</span>
                            </Link>
                        </div>
                    ))}
                    <div className="theme-toggle">
                        {/* <button onClick={onUpdateTheme}>
                            <Image src={moon} alt="Theme" />
                        </button> */}
                    </div>
                </nav>
            </div>
        </section>
    );
};