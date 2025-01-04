import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DrawerButton ({children, form}) {
  
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="p-0 gap-0 sm:max-w-[425px]">
          <DialogHeader className={"border-[#BFBFBF] border-b-[3px] py-4 pt-10 "}>
            <DialogTitle className={"w-full h-fit text-right px-4 "} >
              إضافة صف جديد
            </DialogTitle>
          </DialogHeader>
          {form}
        </DialogContent>
      </Dialog>
    </>
  )
}
