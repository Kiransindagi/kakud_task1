export default function TextSection() {
    const categories = [
        "Student Opportunities",
        "Researcher Collaboration",
        "Lab Infrastructure Access",
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Year Badge */}
                <div className="mb-8">
                    <span className="text-sm font-medium text-gray-500">2025</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-16 leading-[1.1] tracking-tight max-w-6xl">
                    Despite Growing Research Needs,
                    <br className="hidden md:block" />
                    Fragmented Access To Labs,
                    <br className="hidden md:block" />
                    Resources, And Collaboration
                    <br className="hidden md:block" />
                    Limits Innovation.
                </h2>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-3 mb-20">
                    {categories.map((category, index) => (
                        <span
                            key={index}
                            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                            {category}
                        </span>
                    ))}
                </div>

                {/* Two Column Text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 text-lg text-gray-600 leading-relaxed">
                    <div>
                        <p className="mb-4 font-bold text-gray-900 text-xl">The Challenge.</p>
                        <p>
                            Students struggle to find research opportunities. Researchers lack access to labs and collaborators.
                            Companies can't connect with emerging talent and innovation. Scientific knowledge remains scattered
                            across disconnected platforms.
                        </p>
                    </div>
                    <div>
                        <p className="mb-4 font-bold text-gray-900 text-xl">The Solution.</p>
                        <p>
                            NBRO creates a unified ecosystem where students discover opportunities, researchers collaborate
                            seamlessly, labs showcase their capabilities, and industry finds innovation pipelines—all in one place.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
