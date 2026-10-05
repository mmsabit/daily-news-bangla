import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Navber from "@/component/navber/Navber";
import Footer from "@/component/Footer";


const noto_Sans_Bengali = Noto_Sans_Bengali({
  variable: "--font-noto_Sans_Bengali",
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: 'দৈনিক বাংলা সংবাদ',
}



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${noto_Sans_Bengali.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navber/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
