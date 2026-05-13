import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/shared/Navbar";
import Footer from "@/Components/shared/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ["latin"],
});


export const metadata = {
  title: "Wanderlust",
  description: "Best Travel website in The World",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
