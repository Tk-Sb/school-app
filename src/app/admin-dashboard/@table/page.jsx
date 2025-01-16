import DataTable from "@/components/ui/data-table";
import { columns } from "./columns";
import { db } from "@/db/db";
import { publicAnnouncements } from "@/db/schema";
import DrawerButton from "@/components/dialog-form";
import Button from "@/components/ui/button";
import { NewGradeForm, NewPublicAnnouncementForm } from "@/components/forms";
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";

export default async function TableSection () {
  const data = await db.select().from(publicAnnouncements)
  
  const handleSelectionChange = async (data) => {
    console.log('Received data from client')
  }

  return (
    <>
      <div className="w-full h-full rounded-2xl border-[#BFBFBF] border-[3px] ">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}