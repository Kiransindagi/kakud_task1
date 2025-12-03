import Link from "next/link";
import { Plus } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/hero-bg.png')",
                    }}
                ></div>

                {/* Gradient: solid at top for text, smooth fade, completely transparent at 90%+ for HD image */}
                <div className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, #F7F7F7 0%, #F7F7F7 28%, rgba(247, 247, 247, 0.9) 38%, rgba(247, 247, 247, 0.7) 48%, rgba(247, 247, 247, 0.4) 58%, rgba(247, 247, 247, 0.15) 70%, rgba(247, 247, 247, 0.05) 82%, transparent 92%)'
                    }}></div>
            </div>

            {/* Decorative Plus Icons */}
            <div className="absolute top-24 left-20 text-gray-400">
                <Plus className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <div className="absolute top-28 right-28 text-gray-400">
                <Plus className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div className="absolute left-1/4 top-[52%] text-gray-300">
                <Plus className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="absolute right-1/4 bottom-[28%] text-gray-400">
                <Plus className="w-6 h-6" strokeWidth={1.5} />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full min-h-[88vh] flex items-center justify-center px-4 pt-8">
                <div className="max-w-3xl mx-auto text-center space-y-5">
                    {/* Small Badge */}
                    <div className="inline-flex items-center space-x-1.5 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                        <span className="font-medium">National Bio Research Organisation</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-[#0A0A0A] tracking-tight leading-[1.05]">
                        Where Learning,
                        <br />
                        Research, Industry,
                        <br />
                        And Innovation Meet.
                    </h1>

                    {/* Subtitle - with background for better visibility */}
                    <div className="inline-block bg-white/40 backdrop-blur-sm px-6 py-2 rounded-lg">
                        <p className="text-sm text-[#0A0A0A] leading-relaxed font-bold">
                            A unified ecosystem for students, researchers, labs,
                            <br />
                            and companies to collaborate and innovate.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-3">
                        <Link
                            href="#get-started"
                            className="inline-flex items-center bg-gray-900 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
                        >
                            Get Started
                            <span className="ml-2">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
