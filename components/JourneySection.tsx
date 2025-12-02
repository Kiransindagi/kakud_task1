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
                    className="flex gap-8 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing pb-8"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
                >

                    {/* Column 1 */}
                    <div className="flex flex-col min-w-[300px] md:min-w-[340px] select-none">
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-6 group pointer-events-none">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('/journey-1.png')" }}
                            ></div>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-8">Student Opportunities</h3>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col min-w-[300px] md:min-w-[340px] select-none">
                        <div className="flex justify-between items-start mb-8 h-[88px]">
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                Get
                                <br />
                                Started Now
                            </h2>
                            <button className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg pointer-events-auto">
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-4 group pointer-events-none">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('/researcher-collaboration.png')" }}
                            ></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-900">02</span>
                            <span className="text-sm font-medium text-gray-900">Researcher Collaboration</span>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col min-w-[300px] md:min-w-[340px] pt-0 lg:pt-[120px] select-none">
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-4 group pointer-events-none">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('/technology-irrigation.png')" }}
                            ></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-900">03</span>
                            <span className="text-sm font-medium text-gray-900">Technology Irrigation</span>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col min-w-[300px] md:min-w-[340px] pt-0 lg:pt-[120px] select-none">
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-4 group pointer-events-none">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('/industry-innovation.png')" }}
                            ></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-900">04</span>
                            <span className="text-sm font-medium text-gray-900">Industry Innovation</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
