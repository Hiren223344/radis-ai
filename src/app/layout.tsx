import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import { PageTransitionProvider } from "@/components/PageTransition";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Radison | The Unified Interface For LLMs",
  description: "Access all major AI models through a single, unified interface. Better prices, better uptime, no subscriptions.",
};

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  
    if (!publishableKey) {
      return (
        <html lang="en">
          <body className="antialiased overflow-x-hidden">
            <Script
              id="orchids-browser-logs"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
              strategy="afterInteractive"
              data-orchids-project-id="553712b9-2c96-4989-89c0-e47787bf27ac"
            />
            <Script
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
              strategy="afterInteractive"
              data-target-origin="*"
              data-message-type="ROUTE_CHANGE"
              data-include-search-params="true"
              data-only-in-iframe="true"
              data-debug="true"
              data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
            />
            <PageTransitionProvider>
              {children}
            </PageTransitionProvider>
            <VisualEditsMessenger />
          </body>
        </html>
      );
    }
  
  return (
    <ClerkProvider 
      publishableKey={publishableKey}
      appearance={{ baseTheme: dark }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className="antialiased overflow-x-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Script
              id="orchids-browser-logs"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
              strategy="afterInteractive"
              data-orchids-project-id="553712b9-2c96-4989-89c0-e47787bf27ac"
            />
            <Script
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
              strategy="afterInteractive"
              data-target-origin="*"
              data-message-type="ROUTE_CHANGE"
              data-include-search-params="true"
              data-only-in-iframe="true"
              data-debug="true"
              data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
            />
            <PageTransitionProvider>
              {children}
            </PageTransitionProvider>
            <VisualEditsMessenger />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
  }


