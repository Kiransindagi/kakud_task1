import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white py-20">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between gap-12">

                    {/* Left Side: Brand & Description */}
                    <div className="max-w-sm">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2.5 mb-6">
                            <div className="flex items-center gap-[3px]">
                                <div className="w-[7px] h-[7px] bg-gray-900 rounded-full"></div>
                                <div className="w-[7px] h-[7px] bg-gray-900 rounded-full"></div>
                                <div className="w-[7px] h-[7px] bg-gray-900 rounded-full"></div>
                                <div className="w-[7px] h-[7px] bg-gray-900 rounded-full"></div>
                            </div>
                            <span className="text-[22px] font-bold text-gray-900 tracking-tight">NBRO</span>
                        </Link>

                        <p className="text-gray-500 text-sm leading-relaxed mb-8">
                            We are a unified research ecosystem located in Dallas, TX
                            servicing Students, Researchers & Industry Partners!
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                                >
                                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Links Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
                        {/* Company */}
                        <div>
                            <h3 className="text-gray-900 font-bold mb-6 uppercase text-xs tracking-wider">Company</h3>
                            <ul className="space-y-4">
                                {["Features", "Pricing", "About Us", "Contact", "Pricing"].map((item, i) => (
                                    <li key={i}>
                                        <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resource */}
                        <div>
                            <h3 className="text-gray-900 font-bold mb-6 uppercase text-xs tracking-wider">Resource</h3>
                            <ul className="space-y-4">
                                {["Blog", "Customer Stories", "Information", "Legal", "Payments"].map((item, i) => (
                                    <li key={i}>
                                        <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Career */}
                        <div>
                            <h3 className="text-gray-900 font-bold mb-6 uppercase text-xs tracking-wider">Career</h3>
                            <ul className="space-y-4">
                                {["Jobs", "Hiring", "News", "Tips & Tricks"].map((item, i) => (
                                    <li key={i}>
                                        <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Help */}
                        <div>
                            <h3 className="text-gray-900 font-bold mb-6 uppercase text-xs tracking-wider">Help</h3>
                            <ul className="space-y-4">
                                {["FAQ", "Help Center", "Support"].map((item, i) => (
                                    <li key={i}>
                                        <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
