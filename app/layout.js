import './globals.css'

import localFont from "next/font/local"
import Footer from '@/components/Footer';
import AlternativeMenu from '@/components/AlternativeMenu';

const WJ = localFont({
  src: [
    {
      path: "./Fonts/NeueMontreal-Bold.otf",
      weight: "600"
    },
    {
      path: "./Fonts/NeueMontreal-Medium.otf",
      weight: "500"
    },
    {
      path: "./Fonts/NeueMontreal-Book.otf",
      weight: "400"
    },
    {
      path: "./Fonts/NeueMontreal-Thin.otf",
      weight: "300"
    },
  ]
})

export const metadata = {
  title: "William.Jones",
  description: "Get the website your small business deserves. Helping professionals and business owners get a modern, responsive and creative website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={WJ.className}>
        <AlternativeMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
