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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}

