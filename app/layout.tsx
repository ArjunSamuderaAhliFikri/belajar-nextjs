import "../app/styles/globals.css";
import { inter } from "@/app/fonts/primaryFont";
import { lusitana } from "@/app/fonts/secondaryFont";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
