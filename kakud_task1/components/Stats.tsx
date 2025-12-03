export default function Stats() {
    const stats = [
        {
            value: "150+",
            label: "Partner Research Labs",
        },
        {
            value: "500+",
            label: "Active Research Projects",
        },
        {
            value: "25,000+",
            label: "Students & Researchers",
        },
        {
            value: "1,200+",
            label: "Industry Collaborations",
        },
    ];

    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
