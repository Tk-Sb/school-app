import { Rubik } from "next/font/google";
import "../../globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["arabic", "latin"]
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const dynamic = 'force-dynamic'

export default function AdminDashboardHomeLayout({ table }) {
  return (
    <div className="w-full h-full flex py-24 px-6 gap-6 flex-wrap ">
      <div className="flex-grow ">
        {table}
      </div>
    </div>
  )
}
