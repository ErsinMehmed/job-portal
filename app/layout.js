import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Provider from "./provider";
import { AuthProvider } from "./providerAuth";

export const metadata = {
  title: "Job portal",
  description: "Job portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
