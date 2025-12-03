export default function Features() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <div className="relative rounded-3xl overflow-hidden h-[500px]">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/farming-tech.jpg')",
                                backgroundColor: '#6b9b7a'
                            }}
                        ></div>

                        {/* Decorative Circle */}
                        <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/40"></div>
                    </div>

                    {/* Right - Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Where Learning, Research,
                            <br />
                            Industry, And Innovation
                            <br />
                            Come Together To Advance
                            <br />
                            Scientific Discovery
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            NBRO is more than a platform—it&apos;s a movement to democratize research access.
                            We&apos;re breaking down barriers between students, researchers, labs, and industry to create
                            a thriving ecosystem where knowledge flows freely, collaboration happens naturally,
                            and innovation accelerates. Join thousands who are already shaping the future of science.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
