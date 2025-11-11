import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppNavigation from "./components/AppNavigation";

export const metadata = {
    title: "AI x Next 쇼핑몰",
    description: "이제는 한땀한땀 치는 시대가 지났다. 과연...",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body id="root">
                <AppNavigation />
                {children}
            </body>
        </html>
    );
}