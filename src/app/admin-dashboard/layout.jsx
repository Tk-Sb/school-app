import { Rubik } from "next/font/google";
import "../globals.css";
import AdminNavBar from "@/components/admin-nav-bar";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["arabic", "latin"]
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="en">
      <body className={`${rubik.variable} antialiased`} >
        {children}
        <AdminNavBar></AdminNavBar>

      </body>
    </html>
  );
}