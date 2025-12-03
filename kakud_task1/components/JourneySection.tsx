"use client";

import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, MouseEvent } from "react";

export default function JourneySection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="journey" className="py-20 px-6 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing pb-8 justify-center"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
                >

                    {/* Column 1 */}
                    <div className="flex flex-col min-w-[260px] md:min-w-[300px] pt-0 lg:pt-[120px] select-none relative group mx-4">
                        {/* Fixed Button behind the card */}
                        <div className="absolute top-8 left-0 right-0 flex justify-center z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors">
                                Get Started
                            </button>
                        </div>

                        {/* Sliding Card Container */}
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-4 cursor-pointer z-10 bg-white transition-transform duration-500 group-hover:translate-y-24">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/journey-1.png')" }}
                            ></div>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-8 transition-transform duration-500 group-hover:translate-y-24">Student Opportunities</h3>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col min-w-[260px] md:min-w-[300px] pt-0 lg:pt-[120px] select-none relative group mx-4">
                        {/* Fixed Button behind the card */}
                        <div className="absolute top-8 left-0 right-0 flex justify-center z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors">
                                Get Started
                            </button>
                        </div>

                        {/* Sliding Card Container */}
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-4 cursor-pointer z-10 bg-white transition-transform duration-500 group-hover:translate-y-24">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/researcher-collaboration.png')" }}
                            ></div>
                        </div>
                        <div className="flex justify-between items-center transition-transform duration-500 group-hover:translate-y-24">
                            <span className="text-sm font-medium text-gray-900">02</span>
                            <span className="text-sm font-medium text-gray-900">Researcher Collaboration</span>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col min-w-[260px] md:min-w-[300px] pt-0 lg:pt-[120px] select-none relative group mx-4">
                        {/* Fixed Button behind the card */}
                        <div className="absolute top-8 left-0 right-0 flex justify-center z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors">
                                Get Started
                            </button>
                        </div>

                        {/* Sliding Card Container */}
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-4 cursor-pointer z-10 bg-white transition-transform duration-500 group-hover:translate-y-24">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/technology-irrigation.png')" }}
                            ></div>
                        </div>
                        <div className="flex justify-between items-center transition-transform duration-500 group-hover:translate-y-24">
                            <span className="text-sm font-medium text-gray-900">03</span>
                            <span className="text-sm font-medium text-gray-900">Technology Irrigation</span>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col min-w-[260px] md:min-w-[300px] pt-0 lg:pt-[120px] select-none relative group mx-4">
                        {/* Fixed Button behind the card */}
                        <div className="absolute top-8 left-0 right-0 flex justify-center z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors">
                                Get Started
                            </button>
                        </div>

                        {/* Sliding Card Container */}
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-4 cursor-pointer z-10 bg-white transition-transform duration-500 group-hover:translate-y-24">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/industry-innovation.png')" }}
                            ></div>
                        </div>
                        <div className="flex justify-between items-center transition-transform duration-500 group-hover:translate-y-24">
                            <span className="text-sm font-medium text-gray-900">04</span>
                            <span className="text-sm font-medium text-gray-900">Industry Innovation</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
