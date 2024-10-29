import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/NavbarComponent";
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
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
