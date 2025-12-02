export default function CollaborateSection() {
    const solutions = [
        {
            image: "/solution-1.jpg",
            title: "For Students",
            description: "Find research exposure, internships, and career opportunities. Build your skills and connect with leading researchers in your field of interest."
        },
        {
            image: "/solution-2.jpg",
            title: "For Researchers",
            description: "Collaborate, access labs, literature, and resources. Connect with industry partners and funding opportunities to advance your work."
        },
        {
            image: "/solution-3.jpg",
            title: "For Labs & Industry",
            description: "Showcase infrastructure, offer services, and connect with talent/innovations. Bridge the gap between academia and industry."
        }
    ];

    return (
        <section id="collaborate" className="py-16 px-6 bg-gray-50">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What NBRO Offers
                        <br />
                        To Each Community
                    </h2>
                    <p className="text-sm text-gray-600 max-w-2xl">
                        Whether you&apos;re a student seeking opportunities, a researcher looking for resources,
                        or an organization searching for talent—NBRO connects you to what you need.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${solution.image}')`,
                                        backgroundColor: '#5a8a6a'
                                    }}
                                ></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {solution.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
