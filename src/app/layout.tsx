import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Francisco Lorenzo | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white">
        <Navbar />
        <main className="px-6 md:px-20 pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}