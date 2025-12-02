export default function ImageGrid() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Large Image Section */}
                <div className="relative rounded-3xl overflow-hidden h-[500px]">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/collaborate-bg.jpg')",
                            backgroundColor: '#5a8a6a'
                        }}
                    ></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

                    {/* Content */}
                    <div className="relative h-full flex items-center px-12">
                        <div className="max-w-xl text-white">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                Connect With Researchers,
                                <br />
                                Labs, And Industry Leaders
                                <br />
                                In One Unified Platform
                            </h2>
                        </div>
                    </div>

                    {/* Bottom Right Button */}
                    <div className="absolute bottom-12 right-12">
                        <button className="w-16 h-16 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
