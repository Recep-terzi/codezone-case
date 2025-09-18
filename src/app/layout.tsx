import type { Metadata } from "next";
import "./globals.css";
import { Saira } from 'next/font/google'
import ClientProvider from "./ClientProvider";
import 'animate.css';
const saira = Saira({
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "Codezone Case - Recep Terzi",
  description: "Codezone Case - Recep Terzi",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="tr">
      <body
        className={`${saira.className} antialiased`}
      >
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
