import Section from '../components/Section';

const Gallery = () => {
    const memes = [
        { src: '/meme-1.jpg', rotate: 'hover:-rotate-2', caption: 'Technical Analysis' },
        { src: '/meme-2.jpg', rotate: 'hover:rotate-2', caption: 'Watering the Bag' },
        { src: '/meme-3.jpg', rotate: 'hover:-rotate-1', caption: 'Growth Mindset' },
        { src: '/meme-4.jpg', rotate: 'hover:rotate-3', caption: 'Watching the Dip' }
    ];

    return (
        <Section>
            <h2 className="text-5xl font-black text-center text-[#ff758c] mb-12 rotate-2">The Gallery of Shame</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {memes.map((meme, i) => (
                    <div
                        key={i}
                        className={`
              relative group rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl 
              transition-all duration-300 hover:scale-[1.02] ${meme.rotate} bg-white
            `}
                    >
                        <div className="aspect-square w-full overflow-hidden">
                            <img
                                src={meme.src}
                                alt={meme.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm">
                            <p className="text-2xl font-black text-[#ff758c]">{meme.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Gallery;
