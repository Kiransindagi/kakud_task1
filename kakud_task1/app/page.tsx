import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import JourneySection from "@/components/JourneySection";
import TextSection from "@/components/TextSection";
import ImageGrid from "@/components/ImageGrid";
import CollaborateSection from "@/components/CollaborateSection";
import Features from "@/components/Features";
import ChangingSection from "@/components/ChangingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Stats />
            <JourneySection />
            <TextSection />
            <ImageGrid />
            <CollaborateSection />
            <Features />
            <ChangingSection />
            <CTASection />
            <Footer />
        </main>
    );
}
