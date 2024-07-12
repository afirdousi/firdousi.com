import Link from 'next/link'; // Import Link from Next.js

interface HeadingProps {
    title: string;
    buttonText?: string; // Optional if the button text might not always be provided
    description?: string; // Optional if the description might not always be provided
    slug?: string; // Optional if the slug might not always be provided
}

export const Heading: React.FC<HeadingProps> = ({ title, buttonText, description, slug }) => {
    return (
        <h2 className="home-heading">
            <div className="title">{title}</div>
            {description && <div className="description">{description}</div>}
            {slug && (
                // Apply the class directly to Link and remove <a>
                <Link href={slug} className="button">
                    {buttonText}
                </Link>
            )}
        </h2>
    );
};