import Button from '../components/Button';

const Community = () => {
    return (
        <div id="community" className="py-32 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ffffff] -z-10"></div>
            <h2 className="text-6xl md:text-8xl font-black text-[#564f6f] mb-8 animate-wiggle-hover inline-block cursor-default">
                Join the Nonsense
            </h2>
            <p className="text-2xl font-bold text-slate-500 mb-12 max-w-2xl mx-auto">
                We don't have Telegram. It was too loud.
            </p>
            <div className="flex justify-center gap-6">
                <Button href="https://x.com/i/communities/2013263996930187750" variant="primary">X Community</Button>
            </div>
        </div>
    );
};

export default Community;
