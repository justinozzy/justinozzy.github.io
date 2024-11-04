import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Oswald - Portfolio",
  description: "Justin Oswald's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className} style={{ margin: "4px", padding: "4px" }}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <NavbarComponent />
            {children}
          </main>
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
