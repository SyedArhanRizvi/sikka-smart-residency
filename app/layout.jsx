import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { PopupProvider } from "./context/PopupContext";
import ContactPopupForm from "./components/ContactPopupForm";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Basic SEO Metadata
export const metadata = {
  title: "Samrat Residencies | Luxury Villas & Apartments in Sector 79 Noida",
  description: "Explore ultra-luxury 4 BHK apartments and private villas at Samrat Residencies, Sector 79, Noida – by Sikka Group.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <PopupProvider>
          <Navbar />
          <ContactPopupForm />
          {children}
          <Footer />
        </PopupProvider>
      </body>
    </html>
  );
}
