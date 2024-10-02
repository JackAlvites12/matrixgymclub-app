import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import "./globals.css";


const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700']
})

export const metadata: Metadata = {
  title: "MatrixGym",
  description: "Gimnasio comercial multinacional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="shortcut icon" href="/assets/icon-matrix.svg" type="image/x-icon" />
      </head>
      <body className={`min-h-screen min-w-[375px] bg-black select-none ${dmSans.className}`}>
        
        { children }

      </body>
    </html>
  );
}
