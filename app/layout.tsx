import "../public/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import {getMessages} from 'next-intl/server';

import { Providers } from "../components/providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body
        
      >
        <NextIntlClientProvider messages={messages}>

        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div >
            <main >
              {children}
            </main>
          </div>
        </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
