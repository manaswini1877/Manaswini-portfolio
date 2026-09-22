import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manaswini — Software Engineer & Full-Stack Developer | B.Tech CSE",
  description:
    "Portfolio of Manaswini, a B.Tech Computer Science student, Full-Stack Developer, and DSA Enthusiast with 3 live production apps, 9.68 CGPA, and 200+ LeetCode problems solved. Seeking Software Engineer / Full-Stack Intern roles.",
  keywords: [
    "Manaswini",
    "Software Engineer",
    "Full-Stack Developer",
    "DSA Enthusiast",
    "B.Tech CSE",
    "SVECW",
    "Fresher",
    "Software Engineer Intern",
    "Next.js",
    "React",
    "Java",
    "Portfolio",
    "India",
  ],
  authors: [{ name: "Manaswini", url: "https://manaswini1877.com" }],
  openGraph: {
    type: "website",
    url: "https://manaswini1877.com",
    title: "Manaswini — Software Engineer & Full-Stack Developer",
    description:
      "3 live full-stack web applications deployed with real databases, REST APIs, and real users — as a 3rd-year B.Tech student & aspiring Software Engineer.",
    siteName: "Manaswini Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manaswini Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manaswini — Software Engineer & Full-Stack Developer",
    description:
      "B.Tech Computer Science student, Full-Stack Developer, and DSA Enthusiast building production-grade web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://manaswini1877.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body className="font-body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
