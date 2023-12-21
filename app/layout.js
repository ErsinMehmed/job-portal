import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Provider from "../providers/MainProvider";
import { AuthProvider } from "../providers/AuthProvider";

export const metadata = {
  title: "Job portal",
  description: "Job portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="32x32" href="/images/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
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
