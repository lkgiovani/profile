import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raise Tips",
  description: "O seu site de análises",
};

export default function pageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen relative">
      {children}
      <Footer />
    </div>
  );
}
