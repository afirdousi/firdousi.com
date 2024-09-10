import Link from 'next/link';

const mainNavItems = [
    { url: '/articles?page=1', label: 'Articles' },
    { url: '/learnings?page=1', label: 'Learnings' },
    { url: '/projects?page=1', label: 'Projects' },
    { url: '/me', label: 'Me?' },
];

export const Navigation = () => {
    return (
        <section className="navigation">
            <div className="container">
                <Link href="/" className="item brand">
                    <span>Anas R Firdousi</span>
                </Link>
                <nav>
                    {mainNavItems.map((item) => (
                        <div className="nav-item-outer" key={item.url}>
                            <Link href={item.url} key={item.url}>
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