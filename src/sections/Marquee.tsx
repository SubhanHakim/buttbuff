const Marquee = () => {
    return (
        <div className="bg-[#ff9a9e] text-white py-4 overflow-hidden rotate-1 mt-[-50px] mb-20 shadow-lg border-y-4 border-white">
            <div className="whitespace-nowrap animate-marquee flex gap-12 text-3xl font-black uppercase tracking-widest">
                <span>★ BUFF THE BUTT ★ NO ROADMAP ★ JUST VIBES ★ VERY ROUND ★ SUCH FLUFFICITY ★ WOW ★</span>
                <span>★ BUFF THE BUTT ★ NO ROADMAP ★ JUST VIBES ★ VERY ROUND ★ SUCH FLUFFICITY ★ WOW ★</span>
                <span>★ BUFF THE BUTT ★ NO ROADMAP ★ JUST VIBES ★ VERY ROUND ★ SUCH FLUFFICITY ★ WOW ★</span>
            </div>
        </div>
    );
};

export default Marquee;
