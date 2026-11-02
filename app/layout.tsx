import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://woodyallen.com"),
  title: {
    default: "Woody Allen",
    template: "%s — Woody Allen",
  },
  description:
    "The official website of Woody Allen — films, writing, theatre, music and the archive.",
  openGraph: {
    siteName: "Woody Allen",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-body">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-[60] focus:bg-background focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
