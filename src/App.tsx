import { useState, useEffect } from 'react';
import './App.css';

// Simple fun components
const Button = ({ children, href, variant = 'primary' }: { children: React.ReactNode, href: string, variant?: 'primary' | 'secondary' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-110 active:scale-95 shadow-lg border-b-4
        ${variant === 'primary'
          ? 'bg-[#ff9a9e] text-white border-[#e68a8e] hover:bg-[#ff8085]'
          : 'bg-white text-[#ff9a9e] border-[#ffd1d3] hover:bg-[#fff0f1]'}
      `}
    >
      {children}
    </a>
  );
};

const Section = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <section className={`py-20 px-6 w-full max-w-6xl mx-auto ${className || ''}`}>
    {children}
  </section>
);

function App() {
  const [wiggle, setWiggle] = useState(false);

  // Trigger random wiggles on the hero image
  useEffect(() => {
    const interval = setInterval(() => {
      setWiggle(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-slate-800 overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-white/30 backdrop-blur-md border-b border-white/20">
        <div className="text-3xl font-black tracking-tighter text-[#ff758c] drop-shadow-sm select-none hover:rotate-2 transition-transform cursor-help">
          BUTTBUFF
        </div>
        <div className="hidden md:flex gap-6 font-bold text-[#ff758c]">
          <a href="#butt" className="hover:text-[#ff4d6a] hover:underline decoration-wavy">The Butt</a>
          <a href="#what" className="hover:text-[#ff4d6a] hover:underline decoration-wavy">What?</a>
          <a href="#community" className="hover:text-[#ff4d6a] hover:underline decoration-wavy">Nonsense</a>
        </div>
        <button className="md:hidden text-2xl">🍔</button>
      </nav>

      {/* Hero Section */}
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
            <Button href="https://x.com/i/communities/2013263996930187750" variant="primary">
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

      {/* Marquee */}
      <div className="bg-[#ff9a9e] text-white py-4 overflow-hidden rotate-1 mt-[-50px] mb-20 shadow-lg border-y-4 border-white">
        <div className="whitespace-nowrap animate-marquee flex gap-12 text-3xl font-black uppercase tracking-widest">
          <span>★ BUFF THE BUTT ★ NO ROADMAP ★ JUST VIBES ★ VERY ROUND ★ SUCH FLUFFICITY ★ WOW ★</span>
          <span>★ BUFF THE BUTT ★ NO ROADMAP ★ JUST VIBES ★ VERY ROUND ★ SUCH FLUFFICITY ★ WOW ★</span>
          <span>★ BUFF THE BUTT ★ NO ROADMAP ★ JUST VIBES ★ VERY ROUND ★ SUCH FLUFFICITY ★ WOW ★</span>
        </div>
      </div>

      {/* What is this? */}
      <Section className="text-center" >
        <div id="what" className="bg-white/60 backdrop-blur-sm rounded-[3rem] p-12 md:p-20 shadow-xl border-4 border-white">
          <h2 className="text-5xl md:text-6xl font-black text-[#6a82fb] mb-8">What is BUTTBUFF?</h2>
          <p className="text-2xl md:text-3xl leading-relaxed font-semibold text-slate-600 mb-10">
            It’s a crypto token about a corgi’s butt. <br />
            <span className="text-[#a18cd1] italic">That's literally it.</span>
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#ffe2e2] rounded-3xl hover:-translate-y-2 transition-transform">
              <div className="text-6xl mb-4">📉</div>
              <h3 className="text-2xl font-bold mb-2">No Charts</h3>
              <p>We don't know how to read them anyway.</p>
            </div>
            <div className="p-6 bg-[#e2f0cb] rounded-3xl hover:-translate-y-2 transition-transform">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-2">Smooth Brain</h3>
              <p>Thoughts slide right off. Only vibes remain.</p>
            </div>
            <div className="p-6 bg-[#c7ceea] rounded-3xl hover:-translate-y-2 transition-transform">
              <div className="text-6xl mb-4">🦴</div>
              <h3 className="text-2xl font-bold mb-2">Pure Calcium</h3>
              <p>Strong bones for heavy bags.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Meme Gallery */}
      <Section>
        <h2 className="text-5xl font-black text-center text-[#ff758c] mb-12 rotate-2">The Gallery of Shame</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Using placeholders or the same image with css filters for "meme" effect since we only have one image */}
          <div className="row-span-2 col-span-2 rounded-[2rem] overflow-hidden bg-white shadow-md border-4 border-[#ff9a9e] relative group">
            <img src="/corgi-butt.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity text-white font-black text-3xl">WOW</div>
          </div>
          <div className="rounded-[2rem] bg-[#b5ead7] flex items-center justify-center text-4xl animate-pulse">🌭</div>
          <div className="rounded-[2rem] bg-[#ffdac1] flex items-center justify-center text-4xl hover:rotate-180 transition-transform cursor-pointer">🥖</div>
          <div className="col-span-2 rounded-[2rem] bg-[#ff9aa2] flex items-center justify-center text-white font-black text-4xl p-4 text-center">
            "Much financial. Very strategy."
          </div>
          <div className="rounded-[2rem] bg-[#e2f0cb] flex items-center justify-center text-4xl">🥔</div>
        </div>
      </Section>

      {/* Community */}
      <div id="community" className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ffffff] -z-10"></div>
        <h2 className="text-6xl md:text-8xl font-black text-[#564f6f] mb-8 animate-wiggle-hover inline-block cursor-default">
          Join the Nonsense
        </h2>
        <p className="text-2xl font-bold text-slate-500 mb-12 max-w-2xl mx-auto">
          We don't have Telegram. It was too loud.
        </p>
        <div className="flex justify-center gap-6">
          <Button href="#" variant="primary">X Community</Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-md py-12 text-center text-sm font-semibold text-slate-400">
        <p className="mb-4">© 2026 BUTTBUFF. Not a real company. Probably not real money.</p>
        <p className="max-w-md mx-auto opacity-70">
          Disclaimer: This is a meme coin. The roadmap is a straight line into the sun.
          The only utility is looking at this cute butt. Buy at your own risk.
        </p>
      </footer>

    </div>
  );
}

export default App;
