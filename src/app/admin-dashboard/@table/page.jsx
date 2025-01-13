import DataTable from "@/components/ui/data-table";
import { columns } from "./columns";
import { db } from "@/db/db";
import { publicAnnouncements } from "@/db/schema";

export default async function TableSection () {
  const data = await db.select().from(publicAnnouncements)
  
  return (
    <>
      <div className="w-full h-full rounded-2xl border-[#BFBFBF] border-[3px] ">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}