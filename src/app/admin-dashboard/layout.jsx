import { Rubik } from "next/font/google";
import AdminNavBar from "@/components/admin-nav-bar";
import "../globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["arabic", "latin"]
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children, classes, table }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`} >
        <div dir="rtl" className="w-screen h-screen flex " >
          <div>
            <AdminNavBar></AdminNavBar>
          </div>
          <div className="w-full h-full flex py-24 px-6 gap-6  ">
            <div>
              {classes}
            </div>
            <div className="flex-grow ">
              {table}
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
