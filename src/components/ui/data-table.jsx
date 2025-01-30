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

import { useEffect, useState } from "react"
import DrawerButton from "../dialog-form"
import Button from "./button"
import { EditPublicAnnouncementForm, NewPublicAnnouncementForm, PublicAnnouncementDeleteWarning } from "../forms"
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi"

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
  })
  
  return (
    <>
      <div className="w-full h-fit flex justify-between items-center p-2 border-[#BFBFBF] border-b-[3px] " >
        <div className="flex gap-2 ">
          <DrawerButton form={<NewPublicAnnouncementForm></NewPublicAnnouncementForm>} header={"إعلان عام"}>
            <Button title={'إضافة'} icon={<FiPlus></FiPlus>} ></Button>
          </DrawerButton>
          <DrawerButton form={<EditPublicAnnouncementForm id={data[Object.keys(rowSelection)]?.id} value={data[Object.keys(rowSelection)]?.content} />} header={"تعديل الإعلان"}>
            <Button disabled={Object.keys(rowSelection).length !== 1} title={'تعديل'} icon={<FiEdit></FiEdit>} ></Button>
          </DrawerButton>
          <DrawerButton form={<PublicAnnouncementDeleteWarning ids={result} />} header={"حذف!"}>
            <Button disabled={!Object.keys(rowSelection).length} title={'حذف'} icon={<FiTrash2></FiTrash2>} ></Button>
          </DrawerButton>
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
