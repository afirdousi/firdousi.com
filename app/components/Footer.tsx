
import Link from "next/link";

const links = [
    { url: 'https://someurl.substack.com', label: 'Newsletter' },
    { url: 'https://ko-fi.com/someurl', label: 'Donate a Coffee' },
    { url: 'https://www.someurl.com/rss.xml', label: 'RSS' },
];
const madeWithLinks = [
    { url: 'https://nextjs.org/', label: 'NextJS' },
    { url: 'https://github.com/afirdousi', label: 'GitHub' },
];

export const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <span>
                    {/* Placeholder for logo if needed later */}
                </span>
                <nav>
                    {links.map((link) => (
                        <Link
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={link.url}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <nav>
                    {madeWithLinks.map((link) => (
                        <a
                            href={link.url}
                            title={link.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={link.url}
                            className="button"
                        >
                            <span>{link.label}</span>
                        </a>
                    ))}
                </nav>
            </section>
        </footer>
    );
};