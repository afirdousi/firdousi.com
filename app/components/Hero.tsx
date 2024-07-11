import React from 'react';

interface HeroProps {
    highlight?: string;
    subTitle?: string;
    title?: string;
    description?: string;
    index?: boolean;
    children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
    highlight,
    subTitle,
    title,
    description,
    children,
    index,
}) => {
    return (
        <header className={`hero ${index ? 'index' : ''}`}>
            {subTitle && (
                <div className="sub-title">
                    {highlight && <span className="highlight">{highlight}</span>}
                    {subTitle}
                </div>
            )}
            {title && <h1>{title}</h1>}
            {description && <p className="hero-description">{description}</p>}
            {children}
        </header>
    );
};