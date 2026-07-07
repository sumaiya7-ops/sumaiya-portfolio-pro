import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers/theme-provider";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sumaiya-portfolio-pro.vercel.app"),

  title: {
    default: "Sumaiya Sarhand Marjiya | Full Stack Developer",
    template: "%s | Sumaiya Sarhand Marjiya",
  },

  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, Express, MongoDB and modern web applications. Explore my portfolio, projects and software engineering journey.",

  keywords: [
    "Sumaiya Sarhand Marjiya",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Software Engineer",
    "MERN Stack",
    "Bangladesh Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Sumaiya Sarhand Marjiya",
    },
  ],

  creator: "Sumaiya Sarhand Marjiya",

  publisher: "Sumaiya Sarhand Marjiya",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
  title: "Sumaiya Sarhand Marjiya | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, Express.js and MongoDB. Explore my portfolio, projects and engineering journey.",
  url: "https://sumaiya-portfolio-pro.vercel.app",
  siteName: "Sumaiya Portfolio",
  locale: "en_US",
  type: "website",
  images: [
    {
       url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "Sumaiya Sarhand Marjiya Portfolio",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Sumaiya Sarhand Marjiya | Full Stack Developer",
  description:
    "Explore my portfolio, projects, tech stack and software engineering journey.",
 images: ["/images/og-image.png"],
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}