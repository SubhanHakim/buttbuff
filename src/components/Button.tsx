import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    href: string;
    variant?: 'primary' | 'secondary';
};

const Button = ({ children, href, variant = 'primary' }: ButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-110 active:scale-95 shadow-lg border-b-4 inline-block text-center cursor-pointer
        ${variant === 'primary'
                    ? 'bg-[#ff9a9e] text-white border-[#e68a8e] hover:bg-[#ff8085]'
                    : 'bg-white text-[#ff9a9e] border-[#ffd1d3] hover:bg-[#fff0f1]'}
      `}
        >
            {children}
        </a>
    );
};

export default Button;
