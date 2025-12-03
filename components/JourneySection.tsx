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

    const CardContent = ({ image, number, title }: { image: string, number?: string, title: string }) => (
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-6 group cursor-pointer bg-white">
            {/* Hidden Header (Revealed on Hover) */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                    {title}
                </h2>
                <button className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg">
                    <Plus className="w-5 h-5" />
                </button>
            </div>

            {/* Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out z-10 group-hover:translate-y-[140px] group-hover:rounded-t-3xl"
                style={{ backgroundImage: `url('${image}')` }}
            >
                {/* Overlay and Button */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                    <button
                        className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 hover:bg-gray-100 active:scale-95"
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                            e.stopPropagation();
                            alert(`Clicked Get Started for ${title}`);
                        }}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            {/* Bottom Label (Visible initially, maybe hide on hover?) 
                The design shows the label below the card in the original code. 
                I will keep the label below the card as per original design for consistency, 
                unless the user wants it inside. 
                The user's prompt focused on the "Get Started" button coming to top.
                I'll keep the external label for now as it was outside the card div in the original code.
             */}
        </div>
    );

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
                        <CardContent image="/journey-1.png" title="Student Opportunities" />

                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col min-w-[300px] md:min-w-[340px] select-none">
                        {/* Previously this had the header outside. Now converting to the same card style. */}
                        <CardContent image="/researcher-collaboration.png" title="Researcher Collaboration" />
                        <div className="flex justify-between items-center">

                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col min-w-[300px] md:min-w-[340px] pt-0 lg:pt-[120px] select-none">
                        <CardContent image="/technology-irrigation.png" title="Technology Irrigation" />
                        <div className="flex justify-between items-center">

                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col min-w-[300px] md:min-w-[340px] pt-0 lg:pt-[120px] select-none">
                        <CardContent image="/industry-innovation.png" title="Industry Innovation" />
                        <div className="flex justify-between items-center">

                        </div>
                    </div>

                    {/* Column 5 */}
                    <div className="flex flex-col min-w-[300px] md:min-w-[340px] select-none">
                        {/* Previously this had the header outside. Now converting to the same card style. */}
                        <CardContent image="/business-opportunities.png" title="Business Opportunities" />
                        <div className="flex justify-between items-center">

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
