import type { Metadata } from "next";
import "./styles/master.scss";
import { Navigation } from "./components/Navigation";

export const metadata: Metadata = {
  title: "TheGrimSavage | Software Developer",
  description: "Portfolio of Thegrimsavage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
