import "../../public/styles/globals.scss";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import type { Metadata } from "next";
import { Poppins, Potta_One } from "next/font/google";

const pottaOne = Potta_One({
  display: "swap",
  weight: "400",
  variable: "--potter-one",
  subsets: ["latin"],
});

const poppins = Poppins({
  display: "swap",
  weight: "400",
  variable: "--poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qr Gen",
  description: "Generate QR codes for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pottaOne.variable} ${poppins.variable}`}>
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}

