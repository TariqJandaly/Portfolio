import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tariq Jandaly",
  description: "This is my portfolio ,_,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{ width: '100%', height: '0.5rem', overflow: 'visible' }} className="scroll-smooth" lang="en">
      <head>
        <link rel="icon" href="https://fav.farm/🐱‍👤" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
