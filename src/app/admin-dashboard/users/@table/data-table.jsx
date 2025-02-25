"use client"

import {
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { useState } from "react"
import Button from "../../../../components/ui/button"
import { EditPublicAnnouncementForm, NewPublicAnnouncementForm, NewStudentForm, PublicAnnouncementDeleteWarning } from "../../../../components/forms"
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi"
import DialogForm from "../../../../components/dialog-form"
import TableGrid from "@/components/ui/table-grid"

export default function DataTable ({ columns, data }) {
  const [rowSelection, setRowSelection] = useState({})
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    }
  })
  
  const result = Object.keys(rowSelection).map((row) => {
    return data[row]?.id
  }).filter(e => e !== undefined)
  
  return (
    <>
      <div className="w-full h-fit flex justify-between items-center p-2 border-[#BFBFBF] border-b-[3px] " >
        <div className="flex gap-2 ">
          <DialogForm form={<NewStudentForm></NewStudentForm>} header={"إعلان عام"}>
            <Button title={'إضافة'} icon={<FiPlus></FiPlus>} ></Button>
          </DialogForm>
          <DialogForm form={<EditPublicAnnouncementForm id={result[0]} value={data[Object.keys(rowSelection)]?.content} />} header={"تعديل الإعلان"}>
            <Button disabled={result.length !== 1} title={'تعديل'} icon={<FiEdit></FiEdit>} ></Button>
          </DialogForm>
          <DialogForm form={<PublicAnnouncementDeleteWarning ids={result} />} header={"حذف!"}>
            <Button disabled={!result.length} title={'حذف'} icon={<FiTrash2></FiTrash2>} ></Button>
          </DialogForm>
          <DialogForm form={<PublicAnnouncementDeleteWarning ids={result} />} header={"حذف!"}>
            <Button disabled={!result.length} title={'حذف'} icon={<FiTrash2></FiTrash2>} ></Button>
          </DialogForm>
        </div>
        <div className="text-base font-semibold ">
          الإعلانات العامة
        </div>
      </div>
      <TableGrid table={table} columns={columns} ></TableGrid>
    </>
  )
}
