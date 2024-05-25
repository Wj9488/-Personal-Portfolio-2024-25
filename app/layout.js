import './globals.css'

import localFont from "next/font/local"
import Footer from '../components/Footer';
import AlternativeMenu from '../components/AlternativeMenu';
import ProgressTracker from "../components/ProgressTracker"; 

const Montreal = localFont({
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
  title: {
    template: 'William.%s',
    default: 'William.Jones',  
  },
  openGraph: {
    title: 'William.Jones',
    description: "Get the website your small business deserves. Helping professionals and business owners get a modern, responsive and creative website.",
  },
  description: "Get the website your small business deserves. Helping professionals and business owners get a modern, responsive and creative website.",
  icons: {
    icon: '/icon.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Montreal.className}>
        {/* <ProgressTracker /> */}
        <AlternativeMenu /> 
          {children}
        <Footer />
      </body>
    </html>
  );
}
