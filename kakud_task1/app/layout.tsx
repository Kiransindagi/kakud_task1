import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "NBRO - National Bio Research Organisation",
    description: "Connecting Students, Researchers, Labs & Industry Into One Research Ecosystem",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
