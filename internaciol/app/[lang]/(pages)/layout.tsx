import type { Metadata, ResolvingMetadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { i18n, Locale } from "@/i18n-config";
import { getDictionary } from "../lib/get-dictionary";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  params: {
    lang: Locale,
  } 
}

export async function generateMetadata(
  { params }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const dictionary = await getDictionary(params.lang);
  const headerDictionary = dictionary.Header;
  
  // return metadata object
  return {
    title: headerDictionary["meta-titulo"],
    description: headerDictionary["meta-descricao"],
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

interface RootProps {
  children: React.ReactNode;
  params: { lang: Locale }
}


export default function RootLayout({children,params,}: Readonly<{children: React.ReactNode; params: { lang: Locale };}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
