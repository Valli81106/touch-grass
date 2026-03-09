import Header from "@/components/header";
import "./globals.css";
import {Inter} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"]});


export const metadata = {
  title: "touch grass",
  description: "tut 1",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={`${inter.className} antialiased`} >

      <div className="bg-[url('/greeenBG.jpg')] opacity-100 fixed -z-10 inset-0"/>

        <Header/>
        <main className="min-h-screen">{children}</main>


        <footer className="bg-green-100 py-12 bg-opacity-50 text-black">
          <div className="mx-auto px-4 text-center text-gray-900">
            <p>if not now then when</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  
  );
}
