import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-white/30 backdrop-blur-md border-b border-white/20">
            <div className="text-3xl font-black tracking-tighter text-[#ff758c] drop-shadow-sm select-none hover:rotate-2 transition-transform cursor-help">
                BUTTBUFF
            </div>
            <div className="hidden md:flex gap-6 font-bold text-[#ff758c]">
                <a href="#butt" className="hover:text-[#ff4d6a] hover:underline decoration-wavy">The Butt</a>
                <a href="#what" className="hover:text-[#ff4d6a] hover:underline decoration-wavy">What?</a>
                <a href="#community" className="hover:text-[#ff4d6a] hover:underline decoration-wavy">Nonsense</a>
            </div>
            <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>🍔</button>

            {/* Mobile Menu (simplified) */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md p-4 flex flex-col gap-4 text-center md:hidden border-b border-white/20 shadow-xl">
                    <a href="#butt" onClick={() => setIsOpen(false)} className="text-[#ff758c] font-bold">The Butt</a>
                    <a href="#what" onClick={() => setIsOpen(false)} className="text-[#ff758c] font-bold">What?</a>
                    <a href="#community" onClick={() => setIsOpen(false)} className="text-[#ff758c] font-bold">Nonsense</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
