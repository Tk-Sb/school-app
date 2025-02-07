"use client"

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useState } from "react"
import Button from "./button"
import { EditPublicAnnouncementForm, NewPublicAnnouncementForm, PublicAnnouncementDeleteWarning } from "../forms"
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi"
import DialogForm from "../dialog-form"

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
          <DialogForm form={<NewPublicAnnouncementForm></NewPublicAnnouncementForm>} header={"إعلان عام"}>
            <Button title={'إضافة'} icon={<FiPlus></FiPlus>} ></Button>
          </DialogForm>
          <DialogForm form={<EditPublicAnnouncementForm id={result[0]} value={data[Object.keys(rowSelection)]?.content} />} header={"تعديل الإعلان"}>
            <Button disabled={result.length !== 1} title={'تعديل'} icon={<FiEdit></FiEdit>} ></Button>
          </DialogForm>
          <DialogForm form={<PublicAnnouncementDeleteWarning ids={result} />} header={"حذف!"}>
            <Button disabled={!result.length} title={'حذف'} icon={<FiTrash2></FiTrash2>} ></Button>
          </DialogForm>
        </div>
        <div className="text-base font-semibold ">
          الإعلانات العامة
        </div>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    style={{
                      width: 
                        header.id === "select" ? "80px" : 
                        header.id === "id" ? "80px" : 
                        "auto",
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    style={{
                      width: 
                        cell.column.id === "select" ? "80px" : 
                        cell.column.id === "id" ? "80px" : 
                        "auto",
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                لا يوجد
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}
