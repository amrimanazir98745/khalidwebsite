import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BootstrapClient from "@/hooks/BootstrapClient";
import SmoothScroll from "@/hooks/SmoothScroll";
import "./globals.scss";

export const metadata: Metadata = {
    title: "Khalid Mohamed Zarook — Creative Designer & Digital Media Specialist",
    description:
        "Khalid Mohamed Zarook is a Creative Designer and Digital Media Specialist based in Doha, Qatar, specializing in brand identity, motion graphics, bilingual Arabic-English design, and social media content for GCC markets.",
    authors: [{ name: "Khalid Mohamed Zarook" }],
    icons: {
        icon: [
            { url: "/assets/images/logo/logo-kz.svg", type: "image/svg+xml" },
        ],
        shortcut: "/favicon.svg",
        apple: "/assets/images/logo/logo-kz.svg",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en-US" suppressHydrationWarning>
            <body>
                <BootstrapClient />
                <SmoothScroll>
                    <ThemeProvider>{children}</ThemeProvider>
                </SmoothScroll>
            </body>
        </html>
    );
}
