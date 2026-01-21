import React from 'react';

type SectionProps = {
    className?: string;
    children: React.ReactNode;
};

const Section = ({ className, children }: SectionProps) => (
    <section className={`py-20 px-6 w-full max-w-6xl mx-auto ${className || ''}`}>
        {children}
    </section>
);

export default Section;
