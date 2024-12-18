"use client"
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Carriastic</title>
        <link rel="icon" href="/images/app_icon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
