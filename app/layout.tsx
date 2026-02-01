import Header from "@/components/header";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Thanh Danh",
    template: "%s - Thanh Danh",
  },
  description: "Portfolio of Thanh Danh - Embedded Engineer",
};

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="[--header-height:calc(--spacing(16))]">
            <Header />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics
        gaId={process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID || ""}
      />
    </html>
  );
}
