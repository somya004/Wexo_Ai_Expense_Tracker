import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wexo",
  description: "Manage Your Finances with Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 border-t border-blue-100">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center space-y-2">
                {/* Logo/Brand Name */}
                <div className="text-center">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Wexo
                  </h2>
                </div>
                
                {/* Slogan */}
                <div className="text-center max-w-2xl">
                  <p className="text-lg text-black-700 font-medium tracking-wide">
                    
                    Your Financial Intelligence
                  </p>
                </div>

                {/* Divider */}
                <div className="w-24 h-0.25 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

                {/* Copyright/Additional Info */}
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Wexo. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}