import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "@/components/providers";
// import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bamboo",
  description: "AI Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const initBotpress = () => {
  //   window.botpressWebChat.init({
  //     composerPlaceholder: "Chat with bot",
  //     botId: "8d30a8ff-11d4-419d-a511-fc2833e6d310",
  //     hostUrl: "https://cdn.botpress.cloud/webchat/v1",
  //     messagingUrl: "https://messaging.botpress.cloud",
  //     clientId: "8d30a8ff-11d4-419d-a511-fc2833e6d310",
  //     webhookId: "946c82b7-a789-4ce9-a312-325f7163daeb",
  //     lazySocket: true,
  //     themeName: "blue",
  //     frontendVersion: "v1",
  //     theme: "blue",
  //     themeColor: "#2563eb",
  //   });
  // };

  return (
    <html lang="en">
      {/* <head>
        <Script
          src="https://cdn.botpress.cloud/webchat/v1/inject.js"
          onLoad={() => {
            initBotpress();
          }}
        />
      </head> */}
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
