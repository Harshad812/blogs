import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { CommentsProvider } from "@/context/CommentsContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read the latest insights, tutorials, and news on our blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>
        <CommentsProvider>{children}</CommentsProvider>
      </body>
    </html>
  );
}
