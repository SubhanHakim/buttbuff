import Section from '../components/Section';

const WhatIs = () => {
    return (
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
    );
};

export default WhatIs;
