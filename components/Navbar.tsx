"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="
            sticky top-0 z-[999] 
            backdrop-blur-3xl 
            bg-white/10 
            border-b border-white/10
            shadow-[0_8px_30px_rgba(0,0,0,0.05)]
        ">
            <div className="relative">

                {/* Liquid Shine Effect */}
                <div className="
                    absolute inset-0 
                    bg-gradient-to-r from-white/20 via-transparent to-white/10 
                    opacity-40
                    pointer-events-none
                "></div>

                <div className="max-w-[1400px] mx-auto px-8 relative">
                    <div className="flex items-center justify-between h-[72px]">

                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2.5">
                            <div className="flex items-center gap-[3px]">
                                <div className="w-[7px] h-[7px] bg-gray-900/90 rounded-full"></div>
                                <div className="w-[7px] h-[7px] bg-gray-900/90 rounded-full"></div>
                                <div className="w-[7px] h-[7px] bg-gray-900/90 rounded-full"></div>
                                <div className="w-[7px] h-[7px] bg-gray-900/90 rounded-full"></div>
                            </div>
                            <span className="text-[22px] font-bold text-gray-900 tracking-tight">
                                NBRO
                            </span>
                        </Link>

                        {/* Middle Navigation: Glasspill */}
                        <div className="
                            hidden md:flex items-center 
                            backdrop-blur-2xl bg-white/15
                            border border-white/20 
                            rounded-full px-2 py-1.5 
                            shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                        ">
                            <Link
                                href="#home"
                                className="
                                    px-5 py-2 text-[13px] font-medium 
                                    text-white 
                                    bg-gray-900/80 
                                    rounded-full shadow-lg 
                                    transition-all
                                "
                            >
                                Home
                            </Link>

                            {["About", "Journey", "Collaborate"].map((item) => (
                                <Link
                                    key={item}
                                    href={"#" + item.toLowerCase()}
                                    className="
                                        px-5 py-2 text-[13px] font-medium
                                        text-gray-800 hover:text-gray-900
                                        transition-colors
                                    "
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="hidden md:flex items-center gap-4">

                            <Link
                                href="/signin"
                                className="text-gray-900/90 text-[14px] font-semibold hover:text-gray-900 transition-colors"
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/signup"
                                className="
                                    backdrop-blur-xl 
                                    bg-white/20 
                                    border border-white/30 
                                    text-gray-900
                                    px-5 py-2 rounded-full 
                                    text-[14px] 
                                    font-medium 
                                    shadow-[0_4px_20px_rgba(255,255,255,0.3)]
                                    hover:bg-white/40 transition-all
                                "
                            >
                                Sign up Free
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
