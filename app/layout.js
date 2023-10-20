import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Provider from "./provider";
import { AuthProvider } from "./providerAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "University portal",
  description: "University portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <Provider>
            {children}
            <Analytics />
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
