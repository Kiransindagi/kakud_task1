export default function ChangingSection() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Large CTA Section */}
                <div className="relative rounded-3xl overflow-hidden h-[400px]">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/cta-bg.jpg')",
                            backgroundColor: '#5a8a6a'
                        }}
                    ></div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight max-w-3xl">
                            Join NBRO's Research
                            <br />
                            Community Today!
                        </h2>

                        <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
