import { useState, useEffect } from 'react';
import Button from '../components/Button';

const Hero = () => {
    const [wiggle, setWiggle] = useState(false);

    // Trigger random wiggles on the hero image
    useEffect(() => {
        const interval = setInterval(() => {
            setWiggle(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="butt" className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center text-center relative">
            <div className={`relative z-10 transition-transform duration-700 ease-in-out ${wiggle ? 'hover:rotate-3 scale-105' : 'hover:-rotate-3'} cursor-pointer active:scale-90`} onClick={() => setWiggle(!wiggle)}>
                <div className="absolute inset-0 bg-[#ffd1ff] rounded-full blur-[100px] opacity-50 animate-pulse"></div>
                <img
                    src="/corgi-butt.jpg"
                    alt="Glorious Corgi Butt"
                    className="w-[80vw] max-w-[500px] h-auto rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(255,154,158,0.5)] border-8 border-white transform animate-float mx-auto object-cover aspect-square"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-3xl shadow-xl rotate-12 animate-float-delayed hidden md:block">
                    <span className="text-4xl">🍑</span>
                </div>
                <div className="absolute top-10 -left-10 bg-white p-4 rounded-3xl shadow-xl -rotate-12 animate-bounce hidden md:block">
                    <span className="text-4xl">✨</span>
                </div>
            </div>

            <div className="mt-12 space-y-6 z-10 max-w-2xl px-4">
                <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff758c] to-[#ff7eb3] drop-shadow-sm leading-[0.9]">
                    Absolute Unit.
                </h1>
                <p className="text-xl md:text-2xl font-bold text-slate-600">
                    0% Utility. 100% Aerodynamics.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-8">
                    <Button href="#" variant="primary">
                        <span className="flex items-center gap-2">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                            Community
                        </span>
                    </Button>
                    <Button href="#" variant="secondary">💊 Pump.fun</Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
