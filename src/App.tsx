import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import WhatIs from './sections/WhatIs';
import Gallery from './sections/Gallery';
import Community from './sections/Community';

function App() {
  return (
    <div className="min-h-screen text-slate-800 overflow-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <WhatIs />
      <Gallery />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
